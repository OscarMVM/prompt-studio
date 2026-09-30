import { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useCharacterStore } from '@/stores/characterStore'
import { useWorkflowStore } from '@/stores/workflowStore'
import { StageSidebar } from '@/components/workflow/StageSidebar'
import { StageCanvas } from '@/components/workflow/StageCanvas'
import { StagePreview } from '@/components/workflow/StagePreview'
import { WorkflowHeader } from '@/components/workflow/WorkflowHeader'
import { STAGE_DEFINITIONS } from '@/data/stageTemplates'
import type { StageId } from '@/types/workflow'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export function WorkflowPage() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const { characters, loadCharacters } = useCharacterStore()
  const {
    workflow,
    isLoading,
    loadWorkflow,
    createWorkflow,
    activeStageId,
    setActiveStage,
  } = useWorkflowStore()

  const character = characters.find((c) => c.id === id)

  useEffect(() => {
    loadCharacters()
  }, [loadCharacters])

  useEffect(() => {
    if (id) {
      loadWorkflow(id)
    }
  }, [id, loadWorkflow])

  useEffect(() => {
    if (!isLoading && characters.length > 0 && !character) {
      const timer = setTimeout(() => navigate('/'), 2000)
      return () => clearTimeout(timer)
    }
  }, [character, characters.length, isLoading, navigate])

  useEffect(() => {
    if (character && !workflow && !isLoading) {
      createWorkflow(character)
    }
  }, [character, workflow, isLoading, createWorkflow])

  if (!character) {
    return (
      <div className="flex flex-col items-center justify-center h-64 gap-4">
        <p className="text-muted-foreground">
          {characters.length === 0 ? 'Cargando personaje...' : 'Personaje no encontrado. Redirigiendo...'}
        </p>
      </div>
    )
  }

  if (!workflow) {
    return (
      <div className="flex flex-col items-center justify-center h-64 gap-4">
        <p className="text-muted-foreground">Cargando workflow...</p>
      </div>
    )
  }

  return (
    <div className="flex min-h-[calc(100vh-7rem)] flex-col gap-4">
      <section className="space-y-1">
        <h1 className="text-lg font-semibold">Generadores Especializados de Prompts</h1>
        <p className="max-w-4xl text-sm text-muted-foreground">
          Acceso directo a cualquier módulo creativo. No necesitas seguir un orden: selecciona el generador que necesitas, ajusta los parámetros y obtén un prompt optimizado para tu personaje.
        </p>
      </section>
      <WorkflowHeader />
      <div className="hidden min-h-[560px] flex-1 overflow-hidden rounded-md border bg-card xl:flex">
        <div className="w-56 shrink-0 border-r bg-card">
          <StageSidebar />
        </div>
        <div className="min-w-0 flex-1 overflow-hidden p-4">
          <StageCanvas />
        </div>
        <div className="w-80 shrink-0 overflow-hidden border-l bg-card p-4">
          <StagePreview />
        </div>
      </div>
      <div className="flex min-h-[560px] flex-1 flex-col gap-3 xl:hidden">
        <Select
          value={activeStageId}
          items={STAGE_DEFINITIONS.map((definition) => ({
            value: definition.id,
            label: definition.label,
          }))}
          onValueChange={(value) => {
            if (value) setActiveStage(value as StageId)
          }}
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Seleccionar módulo" />
          </SelectTrigger>
          <SelectContent>
            {STAGE_DEFINITIONS.map((definition) => (
              <SelectItem key={definition.id} value={definition.id}>
                {definition.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Tabs defaultValue="editor" className="flex min-h-0 flex-1 flex-col gap-3">
          <TabsList className="grid h-9 w-full grid-cols-2">
            <TabsTrigger value="editor">Editor</TabsTrigger>
            <TabsTrigger value="prompt">Prompt</TabsTrigger>
          </TabsList>
          <TabsContent value="editor" className="min-h-0 overflow-hidden">
            <StageCanvas />
          </TabsContent>
          <TabsContent value="prompt" className="min-h-0 overflow-hidden">
            <StagePreview />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
