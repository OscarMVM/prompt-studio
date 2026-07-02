import Dexie, { type EntityTable } from 'dexie'
import type { CharacterBible } from '@/types/character'
import type { WorkflowProject } from '@/types/workflow'

const db = new Dexie('PromptDesignStudio') as Dexie & {
  characters: EntityTable<CharacterBible, 'id'>
  workflows: EntityTable<WorkflowProject, 'id'>
}

db.version(1).stores({
  characters: 'id, name, createdAt, updatedAt',
  promptProjects: 'id, characterId, createdAt, updatedAt',
})

db.version(2).stores({
  characters: 'id, name, createdAt, updatedAt',
  workflows: 'id, characterId, createdAt, updatedAt',
}).upgrade(async (tx) => {
  const { autoPopulateAllStages } = await import('@/lib/autoGenerateStage')

  const characters = await tx.table('characters').toArray()
  const oldProjects = await tx.table('promptProjects').toArray()

  for (const char of characters) {
    const stages = autoPopulateAllStages(char as CharacterBible)

    const matchingProjects = oldProjects.filter(
      (p: { characterId: string }) => p.characterId === char.id
    )

    if (matchingProjects.length > 0 && stages.length > 0) {
      const oldest = matchingProjects[0] as {
        blocks: unknown[]
        customText: string
        negativePrompt: string
      }
      stages[0] = {
        ...stages[0],
        blocks: (oldest.blocks as typeof stages[0]['blocks']) || stages[0].blocks,
        customText: oldest.customText || '',
        negativePrompt: oldest.negativePrompt || '',
      }
    }

    const workflow: WorkflowProject = {
      id: char.id,
      characterId: char.id,
      engineTemplate: 'midjourney',
      stages,
      createdAt: (char as CharacterBible).createdAt,
      updatedAt: Date.now(),
    }

    await tx.table('workflows').add(workflow)
  }
})

export default db
