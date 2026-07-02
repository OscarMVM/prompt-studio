import { useState } from 'react'
import { Download, FileJson, FileText, Copy, Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { useWorkflowStore } from '@/stores/workflowStore'
import { useCharacterStore } from '@/stores/characterStore'
import { engineTemplates } from '@/data/templates'

export function WorkflowExportDialog() {
  const [copied, setCopied] = useState(false)
  const { workflow, generateAllPrompts } = useWorkflowStore()
  const { characters } = useCharacterStore()

  if (!workflow) return null

  const character = characters.find((c) => c.id === workflow.characterId)
  const template = engineTemplates.find((t) => t.id === workflow.engineTemplate)
  const allPrompts = generateAllPrompts()

  const handleCopyAll = async () => {
    const text = allPrompts
      .map((p) => `=== ${p.label} ===\n${p.prompt}${p.negativePrompt ? `\nNegativo: ${p.negativePrompt}` : ''}`)
      .join('\n\n')
    await navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleExportJSON = () => {
    const data = {
      character: character
        ? {
            name: character.name,
            general: character.general,
            appearance: character.appearance,
            clothing: character.clothing,
            equipment: character.equipment,
            materials: character.materials,
            colors: character.colors,
            visualPersonality: character.visualPersonality,
          }
        : null,
      workflow: {
        engine: template?.name || workflow.engineTemplate,
        stages: allPrompts.map((p) => ({
          id: p.stageId,
          label: p.label,
          prompt: p.prompt,
          negativePrompt: p.negativePrompt,
        })),
      },
      exportedAt: new Date().toISOString(),
    }

    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `workflow-${character?.name || 'sin-titulo'}.json`
    a.click()
    URL.revokeObjectURL(url)
  }

  const handleExportMarkdown = () => {
    const lines: string[] = []
    lines.push(`# Exportación de Workflow`)
    lines.push('')
    if (character) {
      lines.push(`## Personaje: ${character.name}`)
      lines.push('')
    }
    lines.push(`**Motor:** ${template?.name || workflow.engineTemplate}`)
    lines.push(`**Exportado:** ${new Date().toLocaleString()}`)
    lines.push('')

    for (const p of allPrompts) {
      lines.push(`## ${p.label}`)
      lines.push('')
      lines.push(p.prompt)
      lines.push('')
      if (p.negativePrompt) {
        lines.push(`**Negativo:** ${p.negativePrompt}`)
        lines.push('')
      }
    }

    const blob = new Blob([lines.join('\n')], { type: 'text/markdown' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `workflow-${character?.name || 'sin-titulo'}.md`
    a.click()
    URL.revokeObjectURL(url)
  }

  const handleExportTXT = () => {
    const lines: string[] = []
    if (character) {
      lines.push(`Personaje: ${character.name}`)
      lines.push('')
    }

    for (const p of allPrompts) {
      lines.push(`--- ${p.label} ---`)
      lines.push(p.prompt)
      if (p.negativePrompt) {
        lines.push(`Negativo: ${p.negativePrompt}`)
      }
      lines.push('')
    }

    const blob = new Blob([lines.join('\n')], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `workflow-${character?.name || 'sin-titulo'}.txt`
    a.click()
    URL.revokeObjectURL(url)
  }

  return (
    <Dialog>
      <DialogTrigger render={<Button variant="outline" size="sm" />}>
        <Download className="mr-1 h-3 w-3" />
        Exportar todo
      </DialogTrigger>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>Exportar Todos los Prompts</DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          <div className="rounded-lg border bg-muted/30 p-3 max-h-[300px] overflow-y-auto">
            {allPrompts.map((p) => (
              <div key={p.stageId} className="mb-3 last:mb-0">
                <div className="text-xs font-medium text-muted-foreground mb-1">
                  {p.label}
                </div>
                <p className="text-sm whitespace-pre-wrap break-words">
                  {p.prompt || <span className="italic">Sin prompt</span>}
                </p>
              </div>
            ))}
          </div>

          <div className="grid gap-2">
            <Button variant="outline" onClick={handleCopyAll}>
              {copied ? (
                <Check className="mr-2 h-4 w-4" />
              ) : (
                <Copy className="mr-2 h-4 w-4" />
              )}
              {copied ? '¡Copiado!' : 'Copiar todos al portapapeles'}
            </Button>

            <Button variant="outline" onClick={handleExportJSON}>
              <FileJson className="mr-2 h-4 w-4" />
              Exportar como JSON
            </Button>

            <Button variant="outline" onClick={handleExportMarkdown}>
              <FileText className="mr-2 h-4 w-4" />
              Exportar como Markdown
            </Button>

            <Button variant="outline" onClick={handleExportTXT}>
              <FileText className="mr-2 h-4 w-4" />
              Exportar como TXT
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
