export interface GeneralInfo {
  name: string
  alias?: string
  age?: string
  sex?: string
  species?: string
  race?: string
  class?: string
  profession?: string
  role?: string
  height?: string
  weight?: string
  constitution?: string
  personality?: string
  history?: string
  motivations?: string
  fears?: string
  virtues?: string
  flaws?: string
  alignment?: string
  techLevel?: string
  universe?: string
  era?: string
}

export interface Appearance {
  skinColor?: string
  faceShape?: string
  hair?: {
    style?: string
    color?: string
  }
  eyes?: {
    shape?: string
    color?: string
  }
  eyelashes?: string
  eyebrows?: string
  nose?: string
  lips?: string
  jaw?: string
  chin?: string
  ears?: string
  beard?: string
  mustache?: string
  freckles?: string
  neck?: string
  shoulders?: string
  arms?: string
  legs?: string
  hands?: string
  feet?: string
  scars?: string
  tattoos?: string
  marks?: string
  burns?: string
  prosthetics?: string
  mutations?: string
}

export interface Clothing {
  head?: string
  torso?: string
  legs?: string
  footwear?: string
  gloves?: string
  cape?: string
  belt?: string
  armor?: string
  jewelry?: string
  accessories?: string
}

export interface Equipment {
  weapons?: string
  shields?: string
  tools?: string
  backpack?: string
  instruments?: string
  magicItems?: string
  technology?: string
  pets?: string
}

export interface Materials {
  fabric?: string
  metal?: string
  leather?: string
  wood?: string
  crystal?: string
  stone?: string
  bone?: string
  plastic?: string
  fiber?: string
}

export interface Colors {
  primary?: string
  secondary?: string
  accent?: string
  temperature?: string
  contrast?: string
  saturation?: string
}

export type VisualPersonalityTag =
  | 'elegant'
  | 'dark'
  | 'chaotic'
  | 'heroic'
  | 'villain'
  | 'mystical'
  | 'military'
  | 'technological'
  | 'natural'
  | 'minimalist'
  | 'ornate'

export type EmotionalPaletteTag =
  | 'serious'
  | 'smiling'
  | 'melancholic'
  | 'aggressive'
  | 'mysterious'
  | 'elegant'
  | 'innocent'
  | 'dark'
  | 'playful'
  | 'stoic'
  | 'passionate'
  | 'serene'

export interface CharacterReference {
  hasReferences: boolean
  notes?: string
}

export interface CharacterBible {
  id: string
  name: string
  alias?: string
  createdAt: number
  updatedAt: number
  general: GeneralInfo
  appearance: Appearance
  clothing: Clothing
  equipment: Equipment
  materials: Materials
  colors: Colors
  visualPersonality: VisualPersonalityTag[]
  emotionalPalette: EmotionalPaletteTag[]
  references?: CharacterReference
}
