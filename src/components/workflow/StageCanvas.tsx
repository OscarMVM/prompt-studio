import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { useWorkflowStore } from '@/stores/workflowStore'
import { STAGE_MAP } from '@/data/stageTemplates'
import { BlockPicker } from './BlockPicker'
import { BlockItem } from './BlockItem'
import type { StageId } from '@/types/workflow'

export function StageCanvas() {
  const {
    workflow,
    activeStageId,
    setCustomText,
    removeBlock,
    toggleBlock,
    editBlock,
  } = useWorkflowStore()

  if (!workflow) return null

  const stage = workflow.stages.find((s) => s.id === activeStageId)
  const stageDef = STAGE_MAP[activeStageId as StageId]

  if (!stage || !stageDef) return null

  return (
    <Card className="flex flex-col h-full">
      <CardHeader className="pb-3">
        <CardTitle className="text-base">{stageDef.label}</CardTitle>
        <p className="text-xs text-muted-foreground">{stageDef.description}</p>
      </CardHeader>
      <CardContent className="flex-1 overflow-hidden flex flex-col gap-3">
        <BlockPicker />

        <Separator />

        <div className="space-y-1">
          <Label className="text-xs">Bloques del Estadio</Label>
          <ScrollArea className="flex-1">
            <div className="space-y-1">
              {stage.blocks.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-24 text-muted-foreground">
                  <p className="text-xs">No hay bloques. Añade desde el selector o genera automático.</p>
                </div>
              ) : (
                stage.blocks.map((block) => (
                  <BlockItem
                    key={block.id}
                    block={block}
                    onToggle={() => toggleBlock(block.id)}
                    onRemove={() => removeBlock(block.id)}
                    onEdit={(value) => editBlock(block.id, value)}
                  />
                ))
              )}
            </div>
          </ScrollArea>
        </div>

        <Separator />

        <div className="space-y-2">
          <Label className="text-xs">Texto Personalizado</Label>
          <Textarea
            value={stage.customText}
            onChange={(e) => setCustomText(e.target.value)}
            placeholder="Añade texto personalizado a tu prompt..."
            className="min-h-[60px] text-sm"
          />
        </div>
      </CardContent>
    </Card>
  )
}
