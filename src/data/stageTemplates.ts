import type { StageMeta, StageId, StageExtractionRule } from '@/types/workflow'

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
  // Solo reglas estáticas: los datos del personaje viajan ya completos en el
  // párrafo "Información del personaje:", así que repetirlos aquí los duplicaría.
  { stageId: 'sketch', category: 'style', label: 'Boceto Conceptual', fieldPath: '_static:boceto de arte conceptual, trazos de lápiz, contorno preliminar' },

  { stageId: 'turnaround', category: 'camera', label: 'Vista Frontal', fieldPath: '_static:vista frontal, de frente a la cámara' },

  { stageId: 'turnaround', category: 'camera', label: 'Vista Lateral', fieldPath: '_static:vista lateral, perfil' },
  { stageId: 'turnaround', category: 'camera', label: 'Vista Trasera', fieldPath: '_static:vista posterior, vista desde atrás' },
  { stageId: 'turnaround', category: 'camera', label: 'Vista 3/4', fieldPath: '_static:vista en tres cuartos, ángulo de tres cuartos' },
  { stageId: 'turnaround', category: 'distance', label: 'Cuerpo Completo', fieldPath: '_static:personaje de cuerpo completo, hoja de vistas del personaje' },

  { stageId: 'color', category: 'style', label: 'Paleta de Colores', fieldPath: '_static:paleta de colores vibrante y armoniosa' },
]
