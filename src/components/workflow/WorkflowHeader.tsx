import { Link } from 'react-router-dom'
import { Wand2, RefreshCw, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useWorkflowStore } from '@/stores/workflowStore'
import { useCharacterStore } from '@/stores/characterStore'
import { STAGE_MAP } from '@/data/stageTemplates'
import type { StageId } from '@/types/workflow'

export function WorkflowHeader() {
  const {
    workflow,
    activeStageId,
    autoGenerateAllStages,
    autoGenerateStage,
  } = useWorkflowStore()

  const { characters } = useCharacterStore()

  if (!workflow) return null

  const character = characters.find((c) => c.id === workflow.characterId)
  const stageDef = STAGE_MAP[activeStageId as StageId]

  const completedCount = workflow.stages.filter((s) => s.isCompleted).length
  const totalCount = workflow.stages.length
  const progressPercent = Math.round((completedCount / totalCount) * 100)

  return (
    <div className="flex items-center justify-between gap-4 px-4 py-3 border-b bg-card">
      <div className="flex items-center gap-2 text-sm">
        <Link
          to={`/characters/${workflow.characterId}`}
          className="font-medium hover:underline text-primary"
        >
          {character?.name || 'Personaje'}
        </Link>
        <ChevronRight className="h-3 w-3 text-muted-foreground" />
        <span className="font-medium">{stageDef?.label}</span>
        <span className="text-muted-foreground">
          — Etapa {(stageDef?.index ?? 0) + 1} de {totalCount}
        </span>
      </div>

      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2">
          <div className="text-xs text-muted-foreground">
            {completedCount}/{totalCount} completadas
          </div>
          <div className="w-24 h-1.5 bg-muted rounded-full overflow-hidden">
            <div
              className="h-full bg-primary rounded-full transition-all"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        <Button
          variant="outline"
          size="sm"
          onClick={() => autoGenerateStage(activeStageId)}
        >
          <RefreshCw className="mr-1 h-3 w-3" />
          Regenerar etapa
        </Button>

        <Button
          variant="outline"
          size="sm"
          onClick={autoGenerateAllStages}
        >
          <Wand2 className="mr-1 h-3 w-3" />
          Auto desde Biblia
        </Button>
      </div>
    </div>
  )
}
