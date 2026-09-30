import type { StageMeta, StageId, StageExtractionRule } from '@/types/workflow'
import { conceptArtPromptValue } from '@/data/library'

export const STAGE_DEFINITIONS: StageMeta[] = [
  {
    id: 'ideacion',
    index: 0,
    label: 'Concepto y Dirección',
    description: 'Genera prompts para definir la identidad, personalidad y atmósfera del personaje.',
    icon: 'Lightbulb',
    focusCategories: ['mood', 'style'],
  },
  {
    id: 'sketch',
    index: 1,
    label: 'Boceto y entintado',
    description: 'Genera prompts para definir el estilo de trazo y la estructura inicial.',
    icon: 'Pencil',
    focusCategories: ['style', 'composition', 'quality'],
  },
  {
    id: 'turnaround',
    index: 2,
    label: 'Vistas del Personaje',
    description: 'Crea prompts para explorar el diseño desde distintos ángulos y vistas.',
    icon: 'RotateCcw',
    focusCategories: ['camera', 'distance', 'quality'],
  },
  {
    id: 'color',
    index: 3,
    label: 'Paleta y Color',
    description: 'Genera prompts para establecer una paleta y definir el tratamiento del color.',
    icon: 'Palette',
    focusCategories: ['style', 'mood', 'quality'],
  },
  {
    id: 'expresiones',
    index: 4,
    label: 'Rostro y Expresiones',
    description: 'Crea prompts para explorar rasgos faciales, expresiones y emociones.',
    icon: 'Smile',
    focusCategories: ['expression', 'quality', 'distance'],
  },
  {
    id: 'poses',
    index: 5,
    label: 'Acciones y Poses',
    description: 'Crea prompts dinámicos para posturas corporales y lenguaje no verbal.',
    icon: 'Move',
    focusCategories: ['pose', 'quality', 'distance'],
  },
  {
    id: 'render-final',
    index: 6,
    label: 'Ilustración final',
    description: 'Combina los detalles del personaje en un prompt para una ilustración pulida.',
    icon: 'Image',
    focusCategories: ['style', 'quality', 'camera', 'lens', 'lighting', 'pose', 'expression', 'composition', 'distance', 'mood'],
  },
]

export const STAGE_MAP = Object.fromEntries(
  STAGE_DEFINITIONS.map((s) => [s.id, s])
) as Record<StageId, StageMeta>

export const STAGE_IDS = STAGE_DEFINITIONS.map((s) => s.id)

export const STAGE_EXTRACTION_RULES: StageExtractionRule[] = [
  // Ideación
  { stageId: 'ideacion', category: 'mood', label: 'Personalidad', fieldPath: 'general.personality' },
  { stageId: 'ideacion', category: 'mood', label: 'Profesión', fieldPath: 'general.profession' },
  { stageId: 'ideacion', category: 'mood', label: 'Motivaciones', fieldPath: 'general.motivations' },
  { stageId: 'ideacion', category: 'mood', label: 'Alineación', fieldPath: 'general.alignment' },
  { stageId: 'ideacion', category: 'style', label: 'Universo', fieldPath: 'general.universe' },
  { stageId: 'ideacion', category: 'style', label: 'Época', fieldPath: 'general.era' },
  { stageId: 'ideacion', category: 'style', label: 'Nivel Tecnológico', fieldPath: 'general.techLevel' },
  { stageId: 'ideacion', category: 'style', label: 'Personalidad Visual', fieldPath: 'visualPersonality' },
  { stageId: 'ideacion', category: 'style', label: 'Arte conceptual', fieldPath: `_static:${conceptArtPromptValue}` },

  // Boceto
  { stageId: 'sketch', category: 'quality', label: 'Estilo de Cabello', fieldPath: 'appearance.hair.style' },
  { stageId: 'sketch', category: 'quality', label: 'Color de Cabello', fieldPath: 'appearance.hair.color' },
  { stageId: 'sketch', category: 'quality', label: 'Forma de Ojos', fieldPath: 'appearance.eyes.shape' },
  { stageId: 'sketch', category: 'quality', label: 'Cicatrices', fieldPath: 'appearance.scars' },
  { stageId: 'sketch', category: 'quality', label: 'Tatuajes', fieldPath: 'appearance.tattoos' },
  { stageId: 'sketch', category: 'quality', label: 'Marcas', fieldPath: 'appearance.marks' },
  { stageId: 'sketch', category: 'style', label: 'Boceto Conceptual', fieldPath: '_static:boceto de arte conceptual, trazos de lápiz, contorno preliminar' },

  // Turnaround
  { stageId: 'turnaround', category: 'camera', label: 'Vista Frontal', fieldPath: '_static:vista frontal, de frente a la cámara' },
  { stageId: 'turnaround', category: 'camera', label: 'Vista Lateral', fieldPath: '_static:vista lateral, perfil' },
  { stageId: 'turnaround', category: 'camera', label: 'Vista Trasera', fieldPath: '_static:vista posterior, vista desde atrás' },
  { stageId: 'turnaround', category: 'camera', label: 'Vista 3/4', fieldPath: '_static:vista en tres cuartos, ángulo de tres cuartos' },
  { stageId: 'turnaround', category: 'distance', label: 'Cuerpo Completo', fieldPath: '_static:personaje de cuerpo completo, hoja de vistas del personaje' },

  // Color
  { stageId: 'color', category: 'mood', label: 'Color Primario', fieldPath: 'colors.primary' },
  { stageId: 'color', category: 'mood', label: 'Color Secundario', fieldPath: 'colors.secondary' },
  { stageId: 'color', category: 'mood', label: 'Color de Acento', fieldPath: 'colors.accent' },
  { stageId: 'color', category: 'quality', label: 'Saturación', fieldPath: 'colors.saturation' },
  { stageId: 'color', category: 'style', label: 'Paleta de Colores', fieldPath: '_static:paleta de colores vibrante y armoniosa' },

  // Expresiones
  { stageId: 'expresiones', category: 'quality', label: 'Mandíbula', fieldPath: 'appearance.jaw' },
  { stageId: 'expresiones', category: 'quality', label: 'Labios', fieldPath: 'appearance.lips' },
  { stageId: 'expresiones', category: 'quality', label: 'Nariz', fieldPath: 'appearance.nose' },
  { stageId: 'expresiones', category: 'quality', label: 'Orejas', fieldPath: 'appearance.ears' },
  { stageId: 'expresiones', category: 'quality', label: 'Mentón', fieldPath: 'appearance.chin' },
  { stageId: 'expresiones', category: 'quality', label: 'Prótesis', fieldPath: 'appearance.prosthetics' },
  { stageId: 'expresiones', category: 'quality', label: 'Mutaciones', fieldPath: 'appearance.mutations' },

  // Poses
  { stageId: 'poses', category: 'quality', label: 'Brazos', fieldPath: 'appearance.arms' },
  { stageId: 'poses', category: 'quality', label: 'Piernas', fieldPath: 'appearance.legs' },
  { stageId: 'poses', category: 'quality', label: 'Manos', fieldPath: 'appearance.hands' },
  { stageId: 'poses', category: 'quality', label: 'Pies', fieldPath: 'appearance.feet' },
  { stageId: 'poses', category: 'quality', label: 'Hombros', fieldPath: 'appearance.shoulders' },
  { stageId: 'poses', category: 'quality', label: 'Cuello', fieldPath: 'appearance.neck' },
  { stageId: 'poses', category: 'quality', label: 'Herramientas', fieldPath: 'equipment.tools' },
  { stageId: 'poses', category: 'quality', label: 'Objetos Mágicos', fieldPath: 'equipment.magicItems' },
  { stageId: 'poses', category: 'quality', label: 'Tecnología', fieldPath: 'equipment.technology' },

  // Ilustración final
  { stageId: 'render-final', category: 'quality', label: 'Profesión', fieldPath: 'general.profession' },
  { stageId: 'render-final', category: 'quality', label: 'Especie', fieldPath: 'general.species' },
  { stageId: 'render-final', category: 'quality', label: 'Cabello', fieldPath: 'appearance.hair.style' },
  { stageId: 'render-final', category: 'quality', label: 'Color de Cabello', fieldPath: 'appearance.hair.color' },
  { stageId: 'render-final', category: 'quality', label: 'Color de Ojos', fieldPath: 'appearance.eyes.color' },
  { stageId: 'render-final', category: 'quality', label: 'Piel', fieldPath: 'appearance.skinColor' },
  { stageId: 'render-final', category: 'quality', label: 'Vestimenta', fieldPath: 'clothing.torso' },
  { stageId: 'render-final', category: 'quality', label: 'Armadura', fieldPath: 'clothing.armor' },
  { stageId: 'render-final', category: 'quality', label: 'Armas', fieldPath: 'equipment.weapons' },
  { stageId: 'render-final', category: 'mood', label: 'Color Primario', fieldPath: 'colors.primary' },
  { stageId: 'render-final', category: 'mood', label: 'Color Secundario', fieldPath: 'colors.secondary' },
  { stageId: 'render-final', category: 'mood', label: 'Color de Acento', fieldPath: 'colors.accent' },
  { stageId: 'render-final', category: 'style', label: 'Personalidad Visual', fieldPath: 'visualPersonality' },
]
