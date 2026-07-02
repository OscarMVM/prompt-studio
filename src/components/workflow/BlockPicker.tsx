import { useState } from 'react'
import { Plus } from 'lucide-react'
import { ScrollArea } from '@/components/ui/scroll-area'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  styleLibrary,
  cameraLibrary,
  lensLibrary,
  distanceLibrary,
  lightingLibrary,
  compositionLibrary,
  poseLibrary,
  expressionLibrary,
  moodLibrary,
} from '@/data/library'
import type { BlockCategory } from '@/types/prompt'
import type { LibraryItem } from '@/types/library'
import type { StageId } from '@/types/workflow'
import { STAGE_MAP } from '@/data/stageTemplates'
import { useWorkflowStore } from '@/stores/workflowStore'

const libraryByCategory: Record<string, LibraryItem[]> = {
  style: styleLibrary,
  camera: cameraLibrary,
  lens: lensLibrary,
  lighting: lightingLibrary,
  pose: poseLibrary,
  expression: expressionLibrary,
  composition: compositionLibrary,
  distance: distanceLibrary,
  mood: moodLibrary,
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

export function BlockPicker() {
  const { activeStageId, addBlock } = useWorkflowStore()
  const stageDef = STAGE_MAP[activeStageId as StageId]
  const focusCategories = stageDef?.focusCategories ?? []

  const availableCategories = focusCategories.filter(
    (cat) => cat !== 'quality' && libraryByCategory[cat]?.length > 0
  )

  const [selectedCategory, setSelectedCategory] = useState<BlockCategory>(
    availableCategories[0] || 'style'
  )

  const items = libraryByCategory[selectedCategory] || []

  const categoryItems = availableCategories.map((cat) => ({
    value: cat,
    label: categoryLabels[cat] || cat,
  }))

  if (categoryItems.length === 0) return null

  return (
    <div className="space-y-2">
      <Select
        value={selectedCategory}
        onValueChange={(v) => {
          if (v) setSelectedCategory(v as BlockCategory)
        }}
        items={categoryItems}
      >
        <SelectTrigger className="h-8">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {categoryItems.map((item) => (
            <SelectItem key={item.value} value={item.value}>
              {item.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <ScrollArea className="h-[200px]">
        <div className="space-y-0.5">
          {items.map((item) => (
            <button
              key={item.id}
              onClick={() => addBlock(selectedCategory, item.name, item.promptValue)}
              className="flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-left text-sm hover:bg-accent transition-colors"
            >
              <Plus className="h-3 w-3 shrink-0 text-muted-foreground" />
              <div className="flex-1 min-w-0">
                <div className="font-medium text-xs truncate">{item.name}</div>
                <div className="text-[10px] text-muted-foreground truncate">
                  {item.promptValue}
                </div>
              </div>
            </button>
          ))}
        </div>
      </ScrollArea>
    </div>
  )
}
