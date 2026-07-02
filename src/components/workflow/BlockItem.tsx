import { useState } from 'react'
import { Trash2, Eye, EyeOff } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import type { PromptBlock } from '@/types/prompt'
import { cn } from '@/lib/utils'

const categoryColors: Record<string, string> = {
  quality: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
  style: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
  camera: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
  lens: 'bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200',
  lighting: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
  pose: 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200',
  expression: 'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200',
  composition: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200',
  distance: 'bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-200',
  mood: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200',
}

const categoryLabels: Record<string, string> = {
  quality: 'Calidad',
  style: 'Estilo',
  camera: 'Cámara',
  lens: 'Lente',
  lighting: 'Iluminación',
  pose: 'Pose',
  expression: 'Expresión',
  composition: 'Composición',
  distance: 'Distancia',
  mood: 'Ambiente',
}

interface BlockItemProps {
  block: PromptBlock
  onToggle: () => void
  onRemove: () => void
  onEdit: (value: string) => void
}

export function BlockItem({ block, onToggle, onRemove, onEdit }: BlockItemProps) {
  const [editing, setEditing] = useState(false)

  return (
    <div
      className={cn(
        'group flex items-center gap-2 rounded-lg border p-2 transition-colors',
        block.enabled
          ? 'bg-card'
          : 'bg-muted/50 opacity-60'
      )}
    >
      <span
        className={cn(
          'shrink-0 rounded-full px-2 py-0.5 text-xs font-medium',
          categoryColors[block.category]
        )}
      >
        {categoryLabels[block.category]}
      </span>

      {editing ? (
        <Input
          value={block.value}
          onChange={(e) => onEdit(e.target.value)}
          onBlur={() => setEditing(false)}
          onKeyDown={(e) => e.key === 'Enter' && setEditing(false)}
          className="h-7 text-sm flex-1"
        />
      ) : (
        <span
          className="flex-1 text-sm cursor-text truncate"
          onDoubleClick={() => setEditing(true)}
        >
          {block.value}
        </span>
      )}

      <span className="text-xs text-muted-foreground shrink-0">{block.label}</span>

      <Button
        variant="ghost"
        size="icon"
        className="h-6 w-6 shrink-0"
        onClick={onToggle}
      >
        {block.enabled ? (
          <Eye className="h-3 w-3" />
        ) : (
          <EyeOff className="h-3 w-3" />
        )}
      </Button>

      <Button
        variant="ghost"
        size="icon"
        className="h-6 w-6 shrink-0 opacity-0 group-hover:opacity-100"
        onClick={onRemove}
      >
        <Trash2 className="h-3 w-3" />
      </Button>
    </div>
  )
}
