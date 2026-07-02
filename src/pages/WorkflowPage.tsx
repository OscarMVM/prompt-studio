import { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useCharacterStore } from '@/stores/characterStore'
import { useWorkflowStore } from '@/stores/workflowStore'
import { StageSidebar } from '@/components/workflow/StageSidebar'
import { StageCanvas } from '@/components/workflow/StageCanvas'
import { StagePreview } from '@/components/workflow/StagePreview'
import { WorkflowHeader } from '@/components/workflow/WorkflowHeader'

export function WorkflowPage() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const { characters, loadCharacters } = useCharacterStore()
  const { workflow, isLoading, loadWorkflow, createWorkflow } = useWorkflowStore()

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
    <div className="flex flex-col h-[calc(100vh-60px)]">
      <WorkflowHeader />
      <div className="flex flex-1 overflow-hidden">
        <div className="w-56 border-r bg-card shrink-0">
          <StageSidebar />
        </div>
        <div className="flex-1 overflow-hidden p-4">
          <StageCanvas />
        </div>
        <div className="w-80 border-l bg-card shrink-0 overflow-hidden p-4">
          <StagePreview />
        </div>
      </div>
    </div>
  )
}
