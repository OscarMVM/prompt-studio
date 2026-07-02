import type { CharacterBible } from '@/types/character'

export function resolveFieldPath(
  character: CharacterBible,
  fieldPath: string
): string {
  if (fieldPath.startsWith('_static:')) {
    return fieldPath.slice(8)
  }

  const parts = fieldPath.split('.')
  let current: unknown = character

  for (const part of parts) {
    if (current == null || typeof current !== 'object') return ''
    current = (current as Record<string, unknown>)[part]
  }

  if (current == null) return ''
  if (Array.isArray(current)) return current.join(', ')
  if (typeof current === 'string') return current.trim()
  return String(current)
}
