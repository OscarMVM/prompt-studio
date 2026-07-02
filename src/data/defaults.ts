import type { CharacterBible } from '@/types/character'
import { nanoid } from 'nanoid'

export function createDefaultCharacter(): CharacterBible {
  return {
    id: nanoid(),
    name: 'Nuevo Personaje',
    createdAt: Date.now(),
    updatedAt: Date.now(),
    general: {
      name: '',
      personality: '',
      history: '',
    },
    appearance: {
      hair: {},
      eyes: {},
    },
    clothing: {},
    equipment: {},
    materials: {},
    colors: {},
    visualPersonality: [],
    emotionalPalette: [],
    references: { hasReferences: false },
  }
}
