export type LibraryCategory =
  | 'style'
  | 'camera'
  | 'lens'
  | 'distance'
  | 'lighting'
  | 'composition'
  | 'pose'
  | 'expression'
  | 'mood'

export interface LibraryItem {
  id: string
  category: LibraryCategory
  name: string
  tags: string[]
  promptValue: string
}
