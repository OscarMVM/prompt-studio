import { create } from 'zustand'
import { nanoid } from 'nanoid'
import type { CharacterBible } from '@/types/character'
import type {
  WorkflowProject,
  WorkflowStage,
  StageId,
} from '@/types/workflow'
import type { PromptBlock, BlockCategory } from '@/types/prompt'
import {
  autoPopulateAllStages,
  autoGenerateBlocksForStage,
  generateStagePrompt,
  buildCharacterContext,
} from '@/lib/autoGenerateStage'
import { STAGE_DEFINITIONS } from '@/data/stageTemplates'
import { conceptArtPromptValue } from '@/data/library'

interface WorkflowState {
  workflow: WorkflowProject | null
  activeStageId: StageId
  isLoading: boolean

  loadWorkflow: (characterId: string) => Promise<void>
  createWorkflow: (character: CharacterBible) => Promise<WorkflowProject>
  deleteWorkflow: (characterId: string) => Promise<void>
  setActiveStage: (stageId: StageId) => void

  resetStage: (stageId: StageId) => Promise<void>
  autoGenerateAllStages: () => Promise<void>

  addBlock: (category: BlockCategory, label: string, value: string) => void
  removeBlock: (blockId: string) => void
  toggleBlock: (blockId: string) => void
  editBlock: (blockId: string, value: string) => void

  setCustomText: (text: string) => void
  setNegativePrompt: (text: string) => void
  setEngineTemplate: (templateId: string) => void
  setCharacterContext: (context: string) => void

  generateStagePrompt: () => string
  generateAllPrompts: () => { stageId: StageId; label: string; prompt: string; negativePrompt: string }[]

  _updateStage: (stageId: StageId, patch: Partial<WorkflowStage>) => void
  _persist: () => Promise<void>
}

export const useWorkflowStore = create<WorkflowState>((set, get) => ({
  workflow: null,
  activeStageId: 'ideacion',
  isLoading: false,

  loadWorkflow: async (characterId) => {
    set({ isLoading: true })
    const { default: db } = await import('@/lib/db')
    const workflow = await db.workflows.get(characterId)
    if (workflow) {
      const stageIndexes = new Map(STAGE_DEFINITIONS.map(({ id, index }) => [id, index]))
      let removedLegacyConceptArt = false
      const stages = workflow.stages
        .filter((stage) => stageIndexes.has(stage.id))
        .map((stage) => {
          const normalizedStage = { ...stage, index: stageIndexes.get(stage.id)! }
          delete (normalizedStage as WorkflowStage & { isCompleted?: boolean }).isCompleted
          // El prompt de concept art ahora se integra como encabezado de la etapa
          // ideacion, así que el bloque autogenerado de flujos antiguos sobraría.
          if (normalizedStage.id === 'ideacion' && normalizedStage.blocks?.length) {
            const blocks = normalizedStage.blocks.filter(
              (block) => block.value !== conceptArtPromptValue
            )
            if (blocks.length !== normalizedStage.blocks.length) {
              normalizedStage.blocks = blocks
              removedLegacyConceptArt = true
            }
          }
          return normalizedStage
        })
      const stagesChanged =
        removedLegacyConceptArt ||
        stages.length !== workflow.stages.length ||
        stages.some((stage, index) =>
          stage.index !== workflow.stages[index].index ||
          Object.prototype.hasOwnProperty.call(workflow.stages[index], 'isCompleted')
        )

      if (stagesChanged) {
        workflow.stages = stages
        workflow.updatedAt = Date.now()
        await db.workflows.update(characterId, { stages, updatedAt: workflow.updatedAt })
      }
    }
    if (workflow) {
      const character = await db.characters.get(characterId)
      if (character) {
        const characterContext = buildCharacterContext(character as CharacterBible)
        if (workflow.characterContext !== characterContext) {
          workflow.characterContext = characterContext
          await db.workflows.update(characterId, { characterContext })
        }
      }
    }
    const activeStageId = workflow?.stages.some((stage) => stage.id === get().activeStageId)
      ? get().activeStageId
      : workflow?.stages[0]?.id ?? 'ideacion'
    set({ workflow: workflow ?? null, activeStageId, isLoading: false })
  },

  createWorkflow: async (character) => {
    const { default: db } = await import('@/lib/db')
    const stages = autoPopulateAllStages(character)
    const characterContext = buildCharacterContext(character)

    const workflow: WorkflowProject = {
      id: character.id,
      characterId: character.id,
      engineTemplate: 'midjourney',
      characterContext,
      stages,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    }

    await db.workflows.add(workflow)
    set({ workflow, activeStageId: 'ideacion' })
    return workflow
  },

  deleteWorkflow: async (characterId) => {
    const { default: db } = await import('@/lib/db')
    await db.workflows.delete(characterId)
    set({ workflow: null, activeStageId: 'ideacion' })
  },

  setActiveStage: (stageId) => set({ activeStageId: stageId }),

  resetStage: async (stageId) => {
    const { workflow } = get()
    if (!workflow) return

    const { default: db } = await import('@/lib/db')
    const character = await db.characters.get(workflow.characterId)
    if (!character) return

    const blocks = autoGenerateBlocksForStage(character as CharacterBible, stageId)
    const characterContext = buildCharacterContext(character as CharacterBible)
    get()._updateStage(stageId, {
      blocks,
      customText: '',
      negativePrompt: '',
      generatedPrompt: '',
      isAutoGenerated: true,
    })
    set((state) => {
      if (!state.workflow) return state
      return {
        workflow: { ...state.workflow, characterContext, updatedAt: Date.now() },
      }
    })
  },

  autoGenerateAllStages: async () => {
    const { workflow } = get()
    if (!workflow) return

    const { default: db } = await import('@/lib/db')
    const character = await db.characters.get(workflow.characterId)
    if (!character) return

    const stages = autoPopulateAllStages(character as CharacterBible)
    const characterContext = buildCharacterContext(character as CharacterBible)

    const merged = stages.map((autoStage) => {
      const existing = workflow.stages.find((s) => s.id === autoStage.id)
      if (existing && !existing.isAutoGenerated) {
        return existing
      }
      return autoStage
    })

    set((state) => {
      if (!state.workflow) return state
      return {
        workflow: {
          ...state.workflow,
          characterContext,
          stages: merged,
          updatedAt: Date.now(),
        },
      }
    })
    await get()._persist()
  },

  addBlock: (category, label, value) => {
    const { activeStageId, workflow } = get()
    if (!workflow) return

    const stage = workflow.stages.find((s) => s.id === activeStageId)
    if (!stage) return

    const maxOrder = stage.blocks.reduce((max, b) => Math.max(max, b.order), -1)
    const block: PromptBlock = {
      id: nanoid(),
      category,
      label,
      value,
      order: maxOrder + 1,
      enabled: true,
    }

    get()._updateStage(activeStageId, {
      blocks: [...stage.blocks, block],
      isAutoGenerated: false,
    })
  },

  removeBlock: (blockId) => {
    const { activeStageId, workflow } = get()
    if (!workflow) return
    const stage = workflow.stages.find((s) => s.id === activeStageId)
    if (!stage) return

    get()._updateStage(activeStageId, {
      blocks: stage.blocks.filter((b) => b.id !== blockId),
    })
  },

  toggleBlock: (blockId) => {
    const { activeStageId, workflow } = get()
    if (!workflow) return
    const stage = workflow.stages.find((s) => s.id === activeStageId)
    if (!stage) return

    get()._updateStage(activeStageId, {
      blocks: stage.blocks.map((b) =>
        b.id === blockId ? { ...b, enabled: !b.enabled } : b
      ),
    })
  },

  editBlock: (blockId, value) => {
    const { activeStageId, workflow } = get()
    if (!workflow) return
    const stage = workflow.stages.find((s) => s.id === activeStageId)
    if (!stage) return

    get()._updateStage(activeStageId, {
      blocks: stage.blocks.map((b) =>
        b.id === blockId ? { ...b, value } : b
      ),
    })
  },

  setCustomText: (text) => {
    get()._updateStage(get().activeStageId, { customText: text })
  },

  setNegativePrompt: (text) => {
    get()._updateStage(get().activeStageId, { negativePrompt: text })
  },

  setEngineTemplate: (templateId) => {
    set((state) => {
      if (!state.workflow) return state
      return {
        workflow: { ...state.workflow, engineTemplate: templateId, updatedAt: Date.now() },
      }
    })
    get()._persist()
  },

  setCharacterContext: (context) => {
    let changed = false
    set((state) => {
      if (!state.workflow || state.workflow.characterContext === context) return state
      changed = true
      return {
        workflow: { ...state.workflow, characterContext: context, updatedAt: Date.now() },
      }
    })
    if (changed) get()._persist()
  },

  generateStagePrompt: () => {
    const { workflow, activeStageId } = get()
    if (!workflow) return ''
    const stage = workflow.stages.find((s) => s.id === activeStageId)
    if (!stage) return ''
    return generateStagePrompt(
      stage.blocks,
      stage.customText,
      workflow.characterContext,
      stage.id,
      stage.negativePrompt
    )
  },

  generateAllPrompts: () => {
    const { workflow } = get()
    if (!workflow) return []

    return workflow.stages.map((stage) => {
      const meta = STAGE_DEFINITIONS.find((d) => d.id === stage.id)!
      return {
        stageId: stage.id,
        label: meta.label,
        prompt: generateStagePrompt(
          stage.blocks,
          stage.customText,
          workflow.characterContext,
          stage.id,
          stage.negativePrompt
        ),
        negativePrompt: stage.negativePrompt,
      }
    })
  },

  _updateStage: (stageId, patch) => {
    set((state) => {
      if (!state.workflow) return state
      return {
        workflow: {
          ...state.workflow,
          stages: state.workflow.stages.map((s) =>
            s.id === stageId
              ? { ...s, ...patch, updatedAt: Date.now() }
              : s
          ),
          updatedAt: Date.now(),
        },
      }
    })
    get()._persist()
  },

  _persist: async () => {
    const { workflow } = get()
    if (!workflow) return
    const { default: db } = await import('@/lib/db')
    await db.workflows.update(workflow.id, {
      stages: workflow.stages,
      engineTemplate: workflow.engineTemplate,
      characterContext: workflow.characterContext,
      updatedAt: Date.now(),
    })
  },
}))
