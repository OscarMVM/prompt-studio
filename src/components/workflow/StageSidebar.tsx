import {
  Lightbulb,
  Pencil,
  RotateCcw,
  Palette,
  Smile,
  Move,
  Image,
} from 'lucide-react'
import { ScrollArea } from '@/components/ui/scroll-area'
import { useWorkflowStore } from '@/stores/workflowStore'
import { STAGE_DEFINITIONS } from '@/data/stageTemplates'
import type { StageId } from '@/types/workflow'
import { cn } from '@/lib/utils'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Lightbulb,
  Pencil,
  RotateCcw,
  Palette,
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
          Módulos
        </h3>
      </div>
      <ScrollArea className="flex-1">
        <div className="p-2 space-y-1">
          {STAGE_DEFINITIONS.map((def) => {
            const Icon = iconMap[def.icon] || Lightbulb
            const isActive = activeStageId === def.id
            return (
              <button
                key={def.id}
                onClick={() => setActiveStage(def.id as StageId)}
                aria-current={isActive ? 'page' : undefined}
                className={cn(
                  'w-full flex items-center gap-2 rounded-md px-2.5 py-2 text-left text-sm transition-colors',
                  isActive
                    ? 'bg-primary text-primary-foreground'
                    : 'hover:bg-accent text-foreground/80'
                )}
              >
                <Icon className="h-3.5 w-3.5 shrink-0" />
                <div className="flex-1 min-w-0">
                  <div className="font-medium truncate">{def.label}</div>
                </div>
              </button>
            )
          })}
        </div>
      </ScrollArea>
    </div>
  )
}
