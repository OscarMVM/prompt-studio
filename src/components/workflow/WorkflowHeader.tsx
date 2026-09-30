import { Link } from 'react-router-dom'
import { RefreshCw, ChevronRight, Pencil } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useWorkflowStore } from '@/stores/workflowStore'
import { useCharacterStore } from '@/stores/characterStore'
import { STAGE_MAP } from '@/data/stageTemplates'
import type { StageId } from '@/types/workflow'

export function WorkflowHeader() {
  const {
    workflow,
    activeStageId,
    resetStage,
  } = useWorkflowStore()

  const { characters } = useCharacterStore()

  if (!workflow) return null

  const character = characters.find((c) => c.id === workflow.characterId)
  const stageDef = STAGE_MAP[activeStageId as StageId]

  return (
    <div className="flex flex-col gap-3 border-b bg-card px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex min-w-0 items-center gap-2 text-sm">
        <Link
          to={`/characters/${workflow.characterId}`}
          className="font-medium hover:underline text-primary"
        >
          {character?.name || 'Personaje'}
        </Link>
        <ChevronRight className="h-3 w-3 text-muted-foreground" />
        <span className="truncate font-medium">{stageDef?.label}</span>
        <Button
          variant="outline"
          size="sm"
          className="ml-2 shrink-0"
          render={<Link to={`/characters/${workflow.characterId}`} />}
        >
          <Pencil className="mr-1 h-3 w-3" />
          Editar personaje
        </Button>
      </div>

      <div className="flex flex-wrap gap-2 sm:shrink-0">
        <Button
          variant="outline"
          size="sm"
          className="flex-1 whitespace-nowrap sm:flex-none"
          onClick={() => resetStage(activeStageId)}
        >
          <RefreshCw className="mr-1 h-3 w-3" />
          Resetear módulo
        </Button>

      </div>
    </div>
  )
}
