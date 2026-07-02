import { create } from 'zustand'
import type { CharacterBible } from '@/types/character'
import { autoPopulateAllStages } from '@/lib/autoGenerateStage'

interface CharacterStore {
  characters: CharacterBible[]
  activeCharacterId: string | null
  isLoading: boolean

  loadCharacters: () => Promise<void>
  setActiveCharacter: (id: string | null) => void
  createCharacter: (character: CharacterBible) => Promise<void>
  updateCharacter: (id: string, updates: Partial<CharacterBible>) => Promise<void>
  deleteCharacter: (id: string) => Promise<void>
  duplicateCharacter: (id: string) => Promise<void>
  getActiveCharacter: () => CharacterBible | undefined
}

export const useCharacterStore = create<CharacterStore>((set, get) => ({
  characters: [],
  activeCharacterId: null,
  isLoading: false,

  loadCharacters: async () => {
    set({ isLoading: true })
    const { default: db } = await import('@/lib/db')
    const characters = await db.characters.toArray()
    set({ characters, isLoading: false })
  },

  setActiveCharacter: (id) => set({ activeCharacterId: id }),

  createCharacter: async (character) => {
    const { default: db } = await import('@/lib/db')
    await db.characters.add(character)

    const stages = autoPopulateAllStages(character)
    const workflow = {
      id: character.id,
      characterId: character.id,
      engineTemplate: 'midjourney',
      stages,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    }
    await db.workflows.add(workflow)

    set((state) => ({
      characters: [...state.characters, character],
      activeCharacterId: character.id,
    }))
  },

  updateCharacter: async (id, updates) => {
    const { default: db } = await import('@/lib/db')
    const updated = { ...updates, updatedAt: Date.now() }
    await db.characters.update(id, updated)
    set((state) => ({
      characters: state.characters.map((c) =>
        c.id === id ? { ...c, ...updated } : c
      ),
    }))
  },

  deleteCharacter: async (id) => {
    const { default: db } = await import('@/lib/db')
    await db.characters.delete(id)
    await db.workflows.delete(id)
    set((state) => ({
      characters: state.characters.filter((c) => c.id !== id),
      activeCharacterId:
        state.activeCharacterId === id ? null : state.activeCharacterId,
    }))
  },

  duplicateCharacter: async (id) => {
    const { default: db } = await import('@/lib/db')
    const original = await db.characters.get(id)
    if (!original) return
    const { nanoid } = await import('nanoid')
    const duplicate: CharacterBible = {
      ...structuredClone(original),
      id: nanoid(),
      name: `${original.name} (Copia)`,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    }
    await db.characters.add(duplicate)

    const originalWorkflow = await db.workflows.get(id)
    if (originalWorkflow) {
      const newWorkflow = {
        ...structuredClone(originalWorkflow),
        id: duplicate.id,
        characterId: duplicate.id,
        createdAt: Date.now(),
        updatedAt: Date.now(),
      }
      await db.workflows.add(newWorkflow)
    }

    set((state) => ({
      characters: [...state.characters, duplicate],
      activeCharacterId: duplicate.id,
    }))
  },

  getActiveCharacter: () => {
    const { characters, activeCharacterId } = get()
    return characters.find((c) => c.id === activeCharacterId)
  },
}))
