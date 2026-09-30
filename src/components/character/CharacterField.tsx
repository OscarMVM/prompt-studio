import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'
import { Info } from 'lucide-react'
import { fieldDescriptions } from './characterOptionDescriptions'

export function CharacterField({
  label,
  value,
  onChange,
  type = 'input',
}: {
  label: string
  value?: string
  onChange: (value: string) => void
  type?: 'input' | 'textarea'
}) {
  return (
    <div className="space-y-1.5">
      <Tooltip>
        <TooltipTrigger render={<span className="inline-flex w-fit cursor-help items-center gap-1" tabIndex={0} />}>
          <Label className="text-xs text-muted-foreground">{label}</Label>
          <Info className="h-3 w-3 shrink-0 text-muted-foreground" aria-hidden="true" />
        </TooltipTrigger>
        <TooltipContent>{fieldDescriptions[label] || `Describe ${label.toLowerCase()} del personaje.`}</TooltipContent>
      </Tooltip>
      {type === 'textarea' ? (
        <Textarea
          value={value || ''}
          onChange={(event) => onChange(event.target.value)}
          className="min-h-18 text-sm"
        />
      ) : (
        <Input
          value={value || ''}
          onChange={(event) => onChange(event.target.value)}
          className="text-sm"
        />
      )}
    </div>
  )
}