import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'

export function CharacterOption({
  label,
  description,
  selected,
  onToggle,
}: {
  label: string
  description: string
  selected: boolean
  onToggle: () => void
}) {
  return (
    <Tooltip>
      <TooltipTrigger
        render={
          <button
            type="button"
            aria-pressed={selected}
            onClick={onToggle}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
              selected
                ? 'bg-primary text-primary-foreground'
                : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
            }`}
          />
        }
      >
        {label}
      </TooltipTrigger>
      <TooltipContent>{description}</TooltipContent>
    </Tooltip>
  )
}