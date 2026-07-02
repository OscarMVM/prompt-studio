export type BlockCategory =
  | 'quality'
  | 'style'
  | 'camera'
  | 'lens'
  | 'lighting'
  | 'pose'
  | 'expression'
  | 'composition'
  | 'distance'
  | 'mood'

export interface PromptBlock {
  id: string
  category: BlockCategory
  label: string
  value: string
  order: number
  enabled: boolean
}

export interface EngineTemplate {
  id: string
  name: string
  prefix: string
  suffix: string
  separator: string
  negativePrefix: string
}

export interface PromptProject {
  id: string
  characterId: string
  engineTemplate: string
  blocks: PromptBlock[]
  customText: string
  negativePrompt: string
  generatedPrompt: string
  createdAt: number
  updatedAt: number
}
