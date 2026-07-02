import type { StageMeta, StageId, StageExtractionRule } from '@/types/workflow'

export const STAGE_DEFINITIONS: StageMeta[] = [
  {
    id: 'ideacion',
    index: 0,
    label: 'Ideación',
    description: 'Concepto, personalidad y mood del personaje',
    icon: 'Lightbulb',
    focusCategories: ['mood', 'style'],
  },
  {
    id: 'concepto-base',
    index: 1,
    label: 'Concepto Base',
    description: 'Apariencia básica, silueta y proporciones',
    icon: 'User',
    focusCategories: ['style', 'quality', 'distance'],
  },
  {
    id: 'sketch',
    index: 2,
    label: 'Sketch',
    description: 'Líneas, composición y formas básicas',
    icon: 'Pencil',
    focusCategories: ['style', 'composition', 'quality'],
  },
  {
    id: 'turnaround',
    index: 3,
    label: 'Turnaround',
    description: 'Múltiples ángulos y vistas del personaje',
    icon: 'RotateCcw',
    focusCategories: ['camera', 'distance', 'quality'],
  },
  {
    id: 'refinamiento',
    index: 4,
    label: 'Refinamiento',
    description: 'Limpieza y detalles de vestimenta y equipo',
    icon: 'Sparkles',
    focusCategories: ['quality', 'style'],
  },
  {
    id: 'grisalla',
    index: 5,
    label: 'Grisalla',
    description: 'Escala de grises, valores e iluminación',
    icon: 'Contrast',
    focusCategories: ['lighting', 'quality', 'composition'],
  },
  {
    id: 'color',
    index: 6,
    label: 'Color',
    description: 'Paleta de colores y tonos',
    icon: 'Palette',
    focusCategories: ['style', 'mood', 'quality'],
  },
  {
    id: 'materiales',
    index: 7,
    label: 'Materiales',
    description: 'Texturas, superficies y materiales',
    icon: 'Layers',
    focusCategories: ['quality', 'style'],
  },
  {
    id: 'expresiones',
    index: 8,
    label: 'Expresiones',
    description: 'Expresiones faciales y emociones',
    icon: 'Smile',
    focusCategories: ['expression', 'quality', 'distance'],
  },
  {
    id: 'poses',
    index: 9,
    label: 'Poses',
    description: 'Poses de acción y posturas dinámicas',
    icon: 'Move',
    focusCategories: ['pose', 'quality', 'distance'],
  },
  {
    id: 'render-final',
    index: 10,
    label: 'Render Final',
    description: 'Render pulido con todos los detalles',
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
  { stageId: 'ideacion', category: 'mood', label: 'Rol', fieldPath: 'general.role' },
  { stageId: 'ideacion', category: 'mood', label: 'Profesión', fieldPath: 'general.profession' },
  { stageId: 'ideacion', category: 'mood', label: 'Motivaciones', fieldPath: 'general.motivations' },
  { stageId: 'ideacion', category: 'mood', label: 'Alineación', fieldPath: 'general.alignment' },
  { stageId: 'ideacion', category: 'style', label: 'Universo', fieldPath: 'general.universe' },
  { stageId: 'ideacion', category: 'style', label: 'Época', fieldPath: 'general.era' },
  { stageId: 'ideacion', category: 'style', label: 'Nivel Tecnológico', fieldPath: 'general.techLevel' },
  { stageId: 'ideacion', category: 'style', label: 'Personalidad Visual', fieldPath: 'visualPersonality' },

  // Concepto Base
  { stageId: 'concepto-base', category: 'quality', label: 'Especie', fieldPath: 'general.species' },
  { stageId: 'concepto-base', category: 'quality', label: 'Raza', fieldPath: 'general.race' },
  { stageId: 'concepto-base', category: 'quality', label: 'Altura', fieldPath: 'general.height' },
  { stageId: 'concepto-base', category: 'quality', label: 'Peso', fieldPath: 'general.weight' },
  { stageId: 'concepto-base', category: 'quality', label: 'Constitución', fieldPath: 'general.constitution' },
  { stageId: 'concepto-base', category: 'quality', label: 'Sexo', fieldPath: 'general.sex' },
  { stageId: 'concepto-base', category: 'quality', label: 'Edad', fieldPath: 'general.age' },
  { stageId: 'concepto-base', category: 'distance', label: 'Silueta Cuerpo Completo', fieldPath: '_static:full body silhouette, character proportions' },

  // Sketch
  { stageId: 'sketch', category: 'quality', label: 'Estilo de Cabello', fieldPath: 'appearance.hair.style' },
  { stageId: 'sketch', category: 'quality', label: 'Color de Cabello', fieldPath: 'appearance.hair.color' },
  { stageId: 'sketch', category: 'quality', label: 'Forma de Ojos', fieldPath: 'appearance.eyes.shape' },
  { stageId: 'sketch', category: 'quality', label: 'Cicatrices', fieldPath: 'appearance.scars' },
  { stageId: 'sketch', category: 'quality', label: 'Tatuajes', fieldPath: 'appearance.tattoos' },
  { stageId: 'sketch', category: 'quality', label: 'Marcas', fieldPath: 'appearance.marks' },
  { stageId: 'sketch', category: 'style', label: 'Boceto Conceptual', fieldPath: '_static:concept art sketch, pencil linework, rough outline' },

  // Turnaround
  { stageId: 'turnaround', category: 'camera', label: 'Vista Frontal', fieldPath: '_static:front view, facing camera' },
  { stageId: 'turnaround', category: 'camera', label: 'Vista Lateral', fieldPath: '_static:side view, profile view' },
  { stageId: 'turnaround', category: 'camera', label: 'Vista Trasera', fieldPath: '_static:back view, rear view' },
  { stageId: 'turnaround', category: 'camera', label: 'Vista 3/4', fieldPath: '_static:three quarter view, 3/4 angle' },
  { stageId: 'turnaround', category: 'distance', label: 'Cuerpo Completo', fieldPath: '_static:full body shot, character turnaround sheet' },

  // Refinamiento
  { stageId: 'refinamiento', category: 'quality', label: 'Vestimenta', fieldPath: 'clothing.torso' },
  { stageId: 'refinamiento', category: 'quality', label: 'Armadura', fieldPath: 'clothing.armor' },
  { stageId: 'refinamiento', category: 'quality', label: 'Calzado', fieldPath: 'clothing.footwear' },
  { stageId: 'refinamiento', category: 'quality', label: 'Cabeza', fieldPath: 'clothing.head' },
  { stageId: 'refinamiento', category: 'quality', label: 'Guantes', fieldPath: 'clothing.gloves' },
  { stageId: 'refinamiento', category: 'quality', label: 'Capa', fieldPath: 'clothing.cape' },
  { stageId: 'refinamiento', category: 'quality', label: 'Cinturón', fieldPath: 'clothing.belt' },
  { stageId: 'refinamiento', category: 'quality', label: 'Joyería', fieldPath: 'clothing.jewelry' },
  { stageId: 'refinamiento', category: 'quality', label: 'Accesorios', fieldPath: 'clothing.accessories' },

  // Grisalla
  { stageId: 'grisalla', category: 'quality', label: 'Color de Piel', fieldPath: 'appearance.skinColor' },
  { stageId: 'grisalla', category: 'quality', label: 'Color de Ojos', fieldPath: 'appearance.eyes.color' },
  { stageId: 'grisalla', category: 'lighting', label: 'Temperatura de Color', fieldPath: 'colors.temperature' },
  { stageId: 'grisalla', category: 'lighting', label: 'Contraste', fieldPath: 'colors.contrast' },
  { stageId: 'grisalla', category: 'quality', label: 'Valores en Gris', fieldPath: '_static:grayscale values, tonal rendering, light and shadow' },

  // Color
  { stageId: 'color', category: 'mood', label: 'Color Primario', fieldPath: 'colors.primary' },
  { stageId: 'color', category: 'mood', label: 'Color Secundario', fieldPath: 'colors.secondary' },
  { stageId: 'color', category: 'mood', label: 'Color de Acento', fieldPath: 'colors.accent' },
  { stageId: 'color', category: 'quality', label: 'Saturación', fieldPath: 'colors.saturation' },
  { stageId: 'color', category: 'style', label: 'Paleta de Colores', fieldPath: '_static:vibrant color palette, harmonious colors' },

  // Materiales
  { stageId: 'materiales', category: 'quality', label: 'Tela', fieldPath: 'materials.fabric' },
  { stageId: 'materiales', category: 'quality', label: 'Metal', fieldPath: 'materials.metal' },
  { stageId: 'materiales', category: 'quality', label: 'Cuero', fieldPath: 'materials.leather' },
  { stageId: 'materiales', category: 'quality', label: 'Madera', fieldPath: 'materials.wood' },
  { stageId: 'materiales', category: 'quality', label: 'Cristal', fieldPath: 'materials.crystal' },
  { stageId: 'materiales', category: 'quality', label: 'Piedra', fieldPath: 'materials.stone' },
  { stageId: 'materiales', category: 'quality', label: 'Hueso', fieldPath: 'materials.bone' },
  { stageId: 'materiales', category: 'quality', label: 'Plástico', fieldPath: 'materials.plastic' },
  { stageId: 'materiales', category: 'quality', label: 'Fibra', fieldPath: 'materials.fiber' },
  { stageId: 'materiales', category: 'quality', label: 'Armas', fieldPath: 'equipment.weapons' },
  { stageId: 'materiales', category: 'quality', label: 'Escudos', fieldPath: 'equipment.shields' },

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

  // Render Final
  { stageId: 'render-final', category: 'quality', label: 'Profesión', fieldPath: 'general.profession' },
  { stageId: 'render-final', category: 'quality', label: 'Rol', fieldPath: 'general.role' },
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
