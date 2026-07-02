import { useState } from 'react'
import { Copy, Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { useWorkflowStore } from '@/stores/workflowStore'
import { engineTemplates } from '@/data/templates'
import { WorkflowExportDialog } from './WorkflowExportDialog'

export function StagePreview() {
  const {
    workflow,
    activeStageId,
    generateStagePrompt,
    setNegativePrompt,
    setEngineTemplate,
    markStageComplete,
  } = useWorkflowStore()

  const [copied, setCopied] = useState(false)

  if (!workflow) return null

  const stage = workflow.stages.find((s) => s.id === activeStageId)
  if (!stage) return null

  const prompt = generateStagePrompt()

  const handleCopy = async () => {
    await navigator.clipboard.writeText(prompt)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <Card className="flex flex-col h-full">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-base">Vista Previa</CardTitle>
          <Select
            value={workflow.engineTemplate}
            onValueChange={(v) => {
              if (v) setEngineTemplate(v)
            }}
            items={engineTemplates.map((t) => ({ value: t.id, label: t.name }))}
          >
            <SelectTrigger className="w-[140px] h-8">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {engineTemplates.map((t) => (
                <SelectItem key={t.id} value={t.id}>
                  {t.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </CardHeader>
      <CardContent className="flex-1 overflow-hidden flex flex-col gap-3">
        <div className="flex-1 rounded-lg border bg-muted/30 p-4">
          <p className="text-sm whitespace-pre-wrap break-words">
            {prompt || (
              <span className="text-muted-foreground">
                Tu prompt aparecerá aquí...
              </span>
            )}
          </p>
        </div>

        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            className="flex-1"
            onClick={handleCopy}
            disabled={!prompt}
          >
            {copied ? (
              <Check className="mr-1 h-3 w-3" />
            ) : (
              <Copy className="mr-1 h-3 w-3" />
            )}
            {copied ? '¡Copiado!' : 'Copiar'}
          </Button>
          <WorkflowExportDialog />
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant={stage.isCompleted ? 'default' : 'outline'}
            size="sm"
            onClick={() => markStageComplete(activeStageId, !stage.isCompleted)}
          >
            {stage.isCompleted ? 'Completado ✓' : 'Marcar como completado'}
          </Button>
        </div>

        <div className="space-y-2">
          <Label className="text-xs">Prompt Negativo</Label>
          <Textarea
            value={stage.negativePrompt}
            onChange={(e) => setNegativePrompt(e.target.value)}
            placeholder="Elementos a evitar..."
            className="min-h-[60px] text-sm"
          />
        </div>
      </CardContent>
    </Card>
  )
}
