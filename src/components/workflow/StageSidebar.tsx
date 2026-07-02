import {
  Lightbulb,
  User,
  Pencil,
  RotateCcw,
  Sparkles,
  Contrast,
  Palette,
  Layers,
  Smile,
  Move,
  Image,
  Check,
} from 'lucide-react'
import { ScrollArea } from '@/components/ui/scroll-area'
import { useWorkflowStore } from '@/stores/workflowStore'
import { STAGE_DEFINITIONS } from '@/data/stageTemplates'
import type { StageId } from '@/types/workflow'
import { cn } from '@/lib/utils'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Lightbulb,
  User,
  Pencil,
  RotateCcw,
  Sparkles,
  Contrast,
  Palette,
  Layers,
  Smile,
  Move,
  Image,
}

export function StageSidebar() {
  const { workflow, activeStageId, setActiveStage } = useWorkflowStore()

  if (!workflow) return null

  return (
    <div className="flex flex-col h-full">
      <div className="px-3 py-2 border-b">
        <h3 className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
          Etapas del Workflow
        </h3>
      </div>
      <ScrollArea className="flex-1">
        <div className="p-2 space-y-1">
          {STAGE_DEFINITIONS.map((def) => {
            const stage = workflow.stages.find((s) => s.id === def.id)
            const Icon = iconMap[def.icon] || Lightbulb
            const isActive = activeStageId === def.id
            const hasBlocks = stage && stage.blocks.length > 0
            const isCompleted = stage?.isCompleted ?? false

            return (
              <button
                key={def.id}
                onClick={() => setActiveStage(def.id as StageId)}
                className={cn(
                  'w-full flex items-center gap-2 rounded-md px-2.5 py-2 text-left text-sm transition-colors',
                  isActive
                    ? 'bg-primary text-primary-foreground'
                    : 'hover:bg-accent text-foreground/80'
                )}
              >
                <div className="flex items-center justify-center w-6 h-6 shrink-0">
                  {isCompleted ? (
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                      <Check className="h-3 w-3" />
                    </div>
                  ) : (
                    <span className="text-xs font-medium text-muted-foreground">
                      {def.index + 1}
                    </span>
                  )}
                </div>
                <Icon className="h-3.5 w-3.5 shrink-0" />
                <div className="flex-1 min-w-0">
                  <div className="font-medium truncate">{def.label}</div>
                  {hasBlocks && (
                    <div className="text-[10px] text-muted-foreground">
                      {stage!.blocks.length} bloque{stage!.blocks.length !== 1 ? 's' : ''}
                    </div>
                  )}
                </div>
                {isCompleted && (
                  <Check className="h-3 w-3 text-primary shrink-0" />
                )}
              </button>
            )
          })}
        </div>
      </ScrollArea>
    </div>
  )
}
