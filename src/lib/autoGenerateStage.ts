import { nanoid } from 'nanoid'
import type { CharacterBible, EmotionalPaletteTag, VisualPersonalityTag } from '@/types/character'
import type { PromptBlock } from '@/types/prompt'
import type { WorkflowStage, StageId } from '@/types/workflow'
import { STAGE_EXTRACTION_RULES, STAGE_DEFINITIONS } from '@/data/stageTemplates'
import { conceptArtPromptValue } from '@/data/library'
import { resolveFieldPath } from '@/lib/resolveFieldPath'

const emotionalPaletteLabels: Record<EmotionalPaletteTag, string> = {
  serious: 'serio',
  smiling: 'sonriente',
  melancholic: 'melancólico',
  aggressive: 'agresivo',
  mysterious: 'misterioso',
  elegant: 'elegante',
  innocent: 'inocente',
  dark: 'sombrío',
  playful: 'juguetón',
  stoic: 'estoico',
  passionate: 'apasionado',
  serene: 'sereno',
}

const visualPersonalityLabels: Record<VisualPersonalityTag, string> = {
  elegant: 'elegante',
  dark: 'oscuro',
  chaotic: 'caótico',
  heroic: 'heroico',
  villain: 'villanesco',
  mystical: 'místico',
  military: 'militar',
  technological: 'tecnológico',
  natural: 'natural',
  minimalist: 'minimalista',
  ornate: 'ornamentado',
}

type ContextField = readonly [label: string, value: string | undefined | null]

function clean(value: string | undefined | null): string {
  return typeof value === 'string' ? value.trim() : ''
}

function joinValues(...values: (string | undefined | null)[]): string {
  return values.map(clean).filter(Boolean).join(', ')
}

function collect(fields: readonly ContextField[]): string {
  return fields
    .map(([label, value]) => [label, clean(value)] as const)
    .filter(([, value]) => value.length > 0)
    .map(([label, value]) => `${label}: ${value}`)
    .join('; ')
}

export function buildCharacterContext(character: CharacterBible): string {
  const g = character.general
  const a = character.appearance

  const general = collect([
    ['Nombre', character.name],
    ['Edad', g.age],
    ['Sexo', g.sex],
    ['Especie', g.species],
    ['Raza', g.race],
    ['Clase', g.class],
    ['Profesión', g.profession],
    ['Altura', g.height],
    ['Peso', g.weight],
    ['Constitución', g.constitution],
    ['Nivel tecnológico', g.techLevel],
    ['Universo', g.universe],
    ['Época', g.era],
  ])

  const appearance = collect([
    ['Piel', a.skinColor],
    ['Rostro', a.faceShape],
    ['Cabello', joinValues(a.hair?.style, a.hair?.color)],
    ['Ojos', joinValues(a.eyes?.shape, a.eyes?.color)],
    ['Pestañas', a.eyelashes],
    ['Cejas', a.eyebrows],
    ['Nariz', a.nose],
    ['Labios', a.lips],
    ['Mandíbula', a.jaw],
    ['Mentón', a.chin],
    ['Orejas', a.ears],
    ['Barba', a.beard],
    ['Bigote', a.mustache],
    ['Pecas', a.freckles],
    ['Cuello', a.neck],
    ['Hombros', a.shoulders],
    ['Brazos', a.arms],
    ['Piernas', a.legs],
    ['Manos', a.hands],
    ['Pies', a.feet],
    ['Cicatrices', a.scars],
    ['Tatuajes', a.tattoos],
    ['Marcas', a.marks],
    ['Quemaduras', a.burns],
    ['Prótesis', a.prosthetics],
    ['Mutaciones', a.mutations],
  ])

  const clothing = collect([
    ['Cabeza', character.clothing?.head],
    ['Torso', character.clothing?.torso],
    ['Piernas de ropa', character.clothing?.legs],
    ['Calzado', character.clothing?.footwear],
    ['Guantes', character.clothing?.gloves],
    ['Capa', character.clothing?.cape],
    ['Cinturón', character.clothing?.belt],
    ['Armadura', character.clothing?.armor],
    ['Joyería', character.clothing?.jewelry],
    ['Accesorios', character.clothing?.accessories],
  ])

  const equipment = collect([
    ['Armas', character.equipment?.weapons],
    ['Escudos', character.equipment?.shields],
    ['Herramientas', character.equipment?.tools],
    ['Mochila', character.equipment?.backpack],
    ['Instrumentos', character.equipment?.instruments],
    ['Objetos mágicos', character.equipment?.magicItems],
    ['Tecnología', character.equipment?.technology],
    ['Mascotas', character.equipment?.pets],
  ])

  const colors = collect([
    ['Color primario', character.colors?.primary],
    ['Color secundario', character.colors?.secondary],
    ['Color de acento', character.colors?.accent],
    ['Temperatura', character.colors?.temperature],
    ['Contraste', character.colors?.contrast],
    ['Saturación', character.colors?.saturation],
  ])

  const traits = collect([
    [
      'Personalidad visual',
      character.visualPersonality
        ?.map((tag) => visualPersonalityLabels[tag])
        .join(', '),
    ],
    [
      'Paleta emocional',
      character.emotionalPalette
        ?.map((tag) => emotionalPaletteLabels[tag])
        .join(', '),
    ],
    [
      'Referencias',
      character.references?.hasReferences
        ? joinValues('imagen de referencia disponible', character.references.notes)
        : '',
    ],
  ])

  return [general, appearance, clothing, equipment, colors, traits]
    .filter(Boolean)
    .join('. ')
}

export function autoGenerateBlocksForStage(
  character: CharacterBible,
  stageId: StageId
): PromptBlock[] {
  const rules = STAGE_EXTRACTION_RULES.filter((r) => r.stageId === stageId)
  const blocks: PromptBlock[] = []
  let order = 0

  for (const rule of rules) {
    const value = resolveFieldPath(character, rule.fieldPath)
    if (value && value.trim()) {
      blocks.push({
        id: nanoid(),
        category: rule.category,
        label: rule.label,
        value: value.trim(),
        order: order++,
        enabled: true,
      })
    }
  }

  return blocks
}

export function createEmptyStages(): WorkflowStage[] {
  return STAGE_DEFINITIONS.map((def) => ({
    id: def.id,
    index: def.index,
    blocks: [],
    customText: '',
    negativePrompt: '',
    generatedPrompt: '',
    isAutoGenerated: false,
    updatedAt: Date.now(),
  }))
}

export function autoPopulateAllStages(
  character: CharacterBible
): WorkflowStage[] {
  return STAGE_DEFINITIONS.map((def) => {
    const blocks = autoGenerateBlocksForStage(character, def.id)
    return {
      id: def.id,
      index: def.index,
      blocks,
      customText: '',
      negativePrompt: '',
      generatedPrompt: '',
      isAutoGenerated: true,
      updatedAt: Date.now(),
    }
  })
}

const NEGATIVE_LABEL = 'Debes evitar:'
const CHARACTER_LABEL = 'Información del personaje:'
const NO_TEXT_LIMIT = 'Entrega una ilustración final libre de texto y anotaciones.'

// Etapas cuya salida es una hoja de referencia y por convención lleva etiquetas.
// En el resto, la instrucción contradeciría explícitamente el encabezado de concept art.
const ANNOTATION_EXEMPT_STAGES = new Set<StageId>(['ideacion', 'turnaround', 'expresiones'])

export function generateStagePrompt(
  blocks: PromptBlock[],
  customText: string,
  characterContext: string,
  stageId: StageId,
  negativePrompt: string
): string {
  const enabled = blocks
    .filter((b) => b.enabled)
    .sort((a, b) => a.order - b.order)

  const blockText = enabled.map((b) => b.value).join(', ')
  const character = [characterContext, blockText, customText]
    .map(clean)
    .filter(Boolean)
    .join(', ')
  const instructions: Record<StageId, { lead?: string; objective: string; format: string; limits: string }> = {
    ideacion: {
      lead: conceptArtPromptValue,
      objective: 'Genera una imagen conceptual del personaje que defina su identidad visual, personalidad y atmósfera.',
      format: 'Muestra su identidad, personalidad y atmósfera en una propuesta visual clara.',
      limits: 'Conserva los rasgos establecidos del personaje y evita añadir detalles contradictorios.',
    },
    sketch: {
      objective: 'Genera una imagen de boceto y entintado que establezca la estructura visual inicial del personaje.',
      format: 'Prioriza silueta, proporciones, rasgos distintivos y líneas legibles.',
      limits: 'Mantén el acabado de boceto; no lo conviertas en una ilustración final renderizada.',
    },
    turnaround: {
      objective: 'Genera una imagen tipo hoja de referencia que muestre el mismo diseño del personaje desde varios ángulos.',
      format: 'Organiza vistas frontal, lateral, trasera y tres cuartos como una hoja de referencia.',
      limits: 'Mantén constantes proporciones, vestuario, colores y accesorios entre las vistas.',
    },
    color: {
      objective: 'Genera una imagen del personaje con una paleta de color coherente y claramente aplicada.',
      format: 'Distingue colores principales, secundarios y de acento, mostrando su relación.',
      limits: 'Respeta los colores indicados y conserva la legibilidad del diseño.',
    },
    expresiones: {
      objective: 'Genera una imagen tipo hoja de expresiones que explore el rostro y las emociones del personaje.',
      format: 'Haz visibles los rasgos faciales y comunica con claridad la emoción solicitada.',
      limits: 'Conserva la identidad facial y evita cambiar edad, especie o rasgos distintivos.',
    },
    poses: {
      objective: 'Genera una imagen de cuerpo completo del personaje en una acción y pose que expresen su lenguaje corporal.',
      format: 'Muestra el cuerpo completo con una postura legible y una silueta clara.',
      limits: 'Respeta la anatomía, el equipo y las características ya definidas.',
    },
    'render-final': {
      objective: 'Genera una ilustración final del personaje, pulida y lista para presentación.',
      format: 'Integra apariencia, vestuario, equipo, pose, iluminación y composición en una imagen coherente.',
      limits: 'Conserva los detalles establecidos y evita añadir elementos que compitan con el personaje.',
    },
  }
  const instruction = instructions[stageId]
  const negative = negativePrompt.trim().replace(/\s*\n+\s*/g, ', ')

  return [
    instruction.objective,
    instruction.lead || '',
    character ? `${CHARACTER_LABEL} ${character}` : '',
    [
      instruction.format,
      instruction.limits,
      ANNOTATION_EXEMPT_STAGES.has(stageId) ? '' : NO_TEXT_LIMIT,
      negative ? `${NEGATIVE_LABEL} ${negative}.` : '',
    ]
      .filter(Boolean)
      .join(' '),
  ]
    .filter(Boolean)
    .join('\n\n')
}
