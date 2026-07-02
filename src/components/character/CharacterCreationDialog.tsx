import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { ScrollArea } from '@/components/ui/scroll-area'
import { useCharacterStore } from '@/stores/characterStore'
import type {
  CharacterBible,
  GeneralInfo,
  Appearance,
  Clothing,
  Equipment,
  Materials,
  Colors,
  VisualPersonalityTag,
  EmotionalPaletteTag,
  CharacterReference,
} from '@/types/character'
import {
  ChevronLeft,
  ChevronRight,
  User,
  Eye,
  Heart,
  Shirt,
  Swords,
  Palette,
  Check,
} from 'lucide-react'

interface CharacterCreationDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

interface WizardData {
  name: string
  alias: string
  general: GeneralInfo
  appearance: Appearance
  clothing: Clothing
  equipment: Equipment
  materials: Materials
  colors: Colors
  visualPersonality: VisualPersonalityTag[]
  emotionalPalette: EmotionalPaletteTag[]
  references: CharacterReference
}

const STEPS = [
  { label: 'General', icon: User },
  { label: 'Apariencia', icon: Eye },
  { label: 'Emociones', icon: Heart },
  { label: 'Ropa', icon: Shirt },
  { label: 'Equipo', icon: Swords },
  { label: 'Colores', icon: Palette },
  { label: 'Resumen', icon: Check },
]

const EMOTIONAL_TAGS: { value: EmotionalPaletteTag; label: string }[] = [
  { value: 'serious', label: 'Serio' },
  { value: 'smiling', label: 'Sonriente' },
  { value: 'melancholic', label: 'Melancólico' },
  { value: 'aggressive', label: 'Agresivo' },
  { value: 'mysterious', label: 'Misterioso' },
  { value: 'elegant', label: 'Elegante' },
  { value: 'innocent', label: 'Inocente' },
  { value: 'dark', label: 'Oscuro' },
  { value: 'playful', label: 'Juguetón' },
  { value: 'stoic', label: 'Estoico' },
  { value: 'passionate', label: 'Apasionado' },
  { value: 'serene', label: 'Sereno' },
]

const VISUAL_TAGS: { value: VisualPersonalityTag; label: string }[] = [
  { value: 'elegant', label: 'Elegante' },
  { value: 'dark', label: 'Oscuro' },
  { value: 'chaotic', label: 'Caótico' },
  { value: 'heroic', label: 'Heroico' },
  { value: 'villain', label: 'Villano' },
  { value: 'mystical', label: 'Místico' },
  { value: 'military', label: 'Militar' },
  { value: 'technological', label: 'Tecnológico' },
  { value: 'natural', label: 'Natural' },
  { value: 'minimalist', label: 'Minimalista' },
  { value: 'ornate', label: 'Ornamentado' },
]

function FieldGroup({
  label,
  value,
  onChange,
  type = 'input',
}: {
  label: string
  value?: string
  onChange: (val: string) => void
  type?: 'input' | 'textarea'
}) {
  return (
    <div className="space-y-1.5">
      <Label className="text-xs text-muted-foreground">{label}</Label>
      {type === 'textarea' ? (
        <Textarea
          value={value || ''}
          onChange={(e) => onChange(e.target.value)}
          className="min-h-[72px] text-sm"
        />
      ) : (
        <Input
          value={value || ''}
          onChange={(e) => onChange(e.target.value)}
          className="text-sm"
        />
      )}
    </div>
  )
}

function StepGeneral({
  data,
  onUpdate,
}: {
  data: WizardData
  onUpdate: (updates: Partial<WizardData>) => void
}) {
  const g = data.general
  const updateGeneral = (updates: Partial<GeneralInfo>) =>
    onUpdate({ general: { ...g, ...updates } })

  return (
    <div className="grid gap-4 md:grid-cols-2">
      <FieldGroup
        label="Nombre"
        value={data.name}
        onChange={(v) => onUpdate({ name: v })}
      />
      <FieldGroup
        label="Alias"
        value={data.alias}
        onChange={(v) => onUpdate({ alias: v })}
      />
      <FieldGroup
        label="Edad"
        value={g.age}
        onChange={(v) => updateGeneral({ age: v })}
      />
      <FieldGroup
        label="Sexo"
        value={g.sex}
        onChange={(v) => updateGeneral({ sex: v })}
      />
      <FieldGroup
        label="Especie"
        value={g.species}
        onChange={(v) => updateGeneral({ species: v })}
      />
      <FieldGroup
        label="Raza"
        value={g.race}
        onChange={(v) => updateGeneral({ race: v })}
      />
      <FieldGroup
        label="Clase"
        value={g.class}
        onChange={(v) => updateGeneral({ class: v })}
      />
      <FieldGroup
        label="Profesión"
        value={g.profession}
        onChange={(v) => updateGeneral({ profession: v })}
      />
      <FieldGroup
        label="Rol"
        value={g.role}
        onChange={(v) => updateGeneral({ role: v })}
      />
      <FieldGroup
        label="Altura"
        value={g.height}
        onChange={(v) => updateGeneral({ height: v })}
      />
      <FieldGroup
        label="Peso"
        value={g.weight}
        onChange={(v) => updateGeneral({ weight: v })}
      />
      <FieldGroup
        label="Alineación"
        value={g.alignment}
        onChange={(v) => updateGeneral({ alignment: v })}
      />
      <div className="md:col-span-2">
        <FieldGroup
          label="Personalidad"
          value={g.personality}
          onChange={(v) => updateGeneral({ personality: v })}
          type="textarea"
        />
      </div>
      <div className="md:col-span-2">
        <FieldGroup
          label="Historia"
          value={g.history}
          onChange={(v) => updateGeneral({ history: v })}
          type="textarea"
        />
      </div>
      <FieldGroup
        label="Motivaciones"
        value={g.motivations}
        onChange={(v) => updateGeneral({ motivations: v })}
        type="textarea"
      />
      <FieldGroup
        label="Miedos"
        value={g.fears}
        onChange={(v) => updateGeneral({ fears: v })}
        type="textarea"
      />
    </div>
  )
}

function StepAppearance({
  data,
  onUpdate,
}: {
  data: WizardData
  onUpdate: (updates: Partial<WizardData>) => void
}) {
  const app = data.appearance
  const updateApp = (updates: Partial<Appearance>) =>
    onUpdate({ appearance: { ...app, ...updates } })

  return (
    <div className="grid gap-4 md:grid-cols-2">
      <FieldGroup
        label="Color de Piel"
        value={app.skinColor}
        onChange={(v) => updateApp({ skinColor: v })}
      />
      <FieldGroup
        label="Forma del Rostro"
        value={app.faceShape}
        onChange={(v) => updateApp({ faceShape: v })}
      />
      <FieldGroup
        label="Estilo de Cabello"
        value={app.hair?.style}
        onChange={(v) => updateApp({ hair: { ...app.hair, style: v } })}
      />
      <FieldGroup
        label="Color de Cabello"
        value={app.hair?.color}
        onChange={(v) => updateApp({ hair: { ...app.hair, color: v } })}
      />
      <FieldGroup
        label="Forma de Ojos"
        value={app.eyes?.shape}
        onChange={(v) => updateApp({ eyes: { ...app.eyes, shape: v } })}
      />
      <FieldGroup
        label="Color de Ojos"
        value={app.eyes?.color}
        onChange={(v) => updateApp({ eyes: { ...app.eyes, color: v } })}
      />
      <FieldGroup
        label="Pestañas"
        value={app.eyelashes}
        onChange={(v) => updateApp({ eyelashes: v })}
      />
      <FieldGroup
        label="Cejas"
        value={app.eyebrows}
        onChange={(v) => updateApp({ eyebrows: v })}
      />
      <FieldGroup
        label="Nariz"
        value={app.nose}
        onChange={(v) => updateApp({ nose: v })}
      />
      <FieldGroup
        label="Labios"
        value={app.lips}
        onChange={(v) => updateApp({ lips: v })}
      />
      <FieldGroup
        label="Mandíbula"
        value={app.jaw}
        onChange={(v) => updateApp({ jaw: v })}
      />
      <FieldGroup
        label="Mentón"
        value={app.chin}
        onChange={(v) => updateApp({ chin: v })}
      />
      <FieldGroup
        label="Orejas"
        value={app.ears}
        onChange={(v) => updateApp({ ears: v })}
      />
      <FieldGroup
        label="Barba"
        value={app.beard}
        onChange={(v) => updateApp({ beard: v })}
      />
      <FieldGroup
        label="Bigote"
        value={app.mustache}
        onChange={(v) => updateApp({ mustache: v })}
      />
      <FieldGroup
        label="Pecas"
        value={app.freckles}
        onChange={(v) => updateApp({ freckles: v })}
      />
      <div className="md:col-span-2">
        <FieldGroup
          label="Cicatrices"
          value={app.scars}
          onChange={(v) => updateApp({ scars: v })}
          type="textarea"
        />
      </div>
      <div className="md:col-span-2">
        <FieldGroup
          label="Tatuajes"
          value={app.tattoos}
          onChange={(v) => updateApp({ tattoos: v })}
          type="textarea"
        />
      </div>
      <FieldGroup
        label="Prótesis"
        value={app.prosthetics}
        onChange={(v) => updateApp({ prosthetics: v })}
      />
    </div>
  )
}

function StepEmotions({
  data,
  onUpdate,
}: {
  data: WizardData
  onUpdate: (updates: Partial<WizardData>) => void
}) {
  const toggleEmotion = (tag: EmotionalPaletteTag) => {
    const current = data.emotionalPalette || []
    const updated = current.includes(tag)
      ? current.filter((t) => t !== tag)
      : [...current, tag]
    onUpdate({ emotionalPalette: updated })
  }

  const toggleVisual = (tag: VisualPersonalityTag) => {
    const current = data.visualPersonality || []
    const updated = current.includes(tag)
      ? current.filter((t) => t !== tag)
      : [...current, tag]
    onUpdate({ visualPersonality: updated })
  }

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-sm font-medium mb-1">Paleta Emocional</h3>
        <p className="text-xs text-muted-foreground mb-3">
          Selecciona las emociones que definen la personalidad de tu personaje.
        </p>
        <div className="flex flex-wrap gap-2">
          {EMOTIONAL_TAGS.map((tag) => (
            <button
              key={tag.value}
              onClick={() => toggleEmotion(tag.value)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                data.emotionalPalette?.includes(tag.value)
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
              }`}
            >
              {tag.label}
            </button>
          ))}
        </div>
      </div>
      <div>
        <h3 className="text-sm font-medium mb-1">Personalidad Visual</h3>
        <p className="text-xs text-muted-foreground mb-3">
          Selecciona las etiquetas de estética visual que mejor describan a tu personaje.
        </p>
        <div className="flex flex-wrap gap-2">
          {VISUAL_TAGS.map((tag) => (
            <button
              key={tag.value}
              onClick={() => toggleVisual(tag.value)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                data.visualPersonality?.includes(tag.value)
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
              }`}
            >
              {tag.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

function StepClothing({
  data,
  onUpdate,
}: {
  data: WizardData
  onUpdate: (updates: Partial<WizardData>) => void
}) {
  const cloth = data.clothing
  const updateCloth = (updates: Partial<Clothing>) =>
    onUpdate({ clothing: { ...cloth, ...updates } })

  return (
    <div className="grid gap-4 md:grid-cols-2">
      <FieldGroup label="Cabeza" value={cloth.head} onChange={(v) => updateCloth({ head: v })} />
      <FieldGroup label="Torso" value={cloth.torso} onChange={(v) => updateCloth({ torso: v })} />
      <FieldGroup label="Piernas" value={cloth.legs} onChange={(v) => updateCloth({ legs: v })} />
      <FieldGroup label="Calzado" value={cloth.footwear} onChange={(v) => updateCloth({ footwear: v })} />
      <FieldGroup label="Guantes" value={cloth.gloves} onChange={(v) => updateCloth({ gloves: v })} />
      <FieldGroup label="Capa" value={cloth.cape} onChange={(v) => updateCloth({ cape: v })} />
      <FieldGroup label="Cinturón" value={cloth.belt} onChange={(v) => updateCloth({ belt: v })} />
      <FieldGroup label="Armadura" value={cloth.armor} onChange={(v) => updateCloth({ armor: v })} />
      <FieldGroup label="Joyería" value={cloth.jewelry} onChange={(v) => updateCloth({ jewelry: v })} />
      <FieldGroup label="Accesorios" value={cloth.accessories} onChange={(v) => updateCloth({ accessories: v })} />
    </div>
  )
}

function StepEquipment({
  data,
  onUpdate,
}: {
  data: WizardData
  onUpdate: (updates: Partial<WizardData>) => void
}) {
  const equip = data.equipment
  const mat = data.materials
  const updateEquip = (updates: Partial<Equipment>) =>
    onUpdate({ equipment: { ...equip, ...updates } })
  const updateMat = (updates: Partial<Materials>) =>
    onUpdate({ materials: { ...mat, ...updates } })

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-sm font-medium mb-3">Equipo</h3>
        <div className="grid gap-4 md:grid-cols-2">
          <FieldGroup label="Armas" value={equip.weapons} onChange={(v) => updateEquip({ weapons: v })} />
          <FieldGroup label="Escudos" value={equip.shields} onChange={(v) => updateEquip({ shields: v })} />
          <FieldGroup label="Herramientas" value={equip.tools} onChange={(v) => updateEquip({ tools: v })} />
          <FieldGroup label="Mochila" value={equip.backpack} onChange={(v) => updateEquip({ backpack: v })} />
          <FieldGroup label="Instrumentos" value={equip.instruments} onChange={(v) => updateEquip({ instruments: v })} />
          <FieldGroup label="Objetos Mágicos" value={equip.magicItems} onChange={(v) => updateEquip({ magicItems: v })} />
          <FieldGroup label="Tecnología" value={equip.technology} onChange={(v) => updateEquip({ technology: v })} />
          <FieldGroup label="Mascotas" value={equip.pets} onChange={(v) => updateEquip({ pets: v })} />
        </div>
      </div>
      <div>
        <h3 className="text-sm font-medium mb-3">Materiales</h3>
        <div className="grid gap-4 md:grid-cols-3">
          <FieldGroup label="Tela" value={mat.fabric} onChange={(v) => updateMat({ fabric: v })} />
          <FieldGroup label="Metal" value={mat.metal} onChange={(v) => updateMat({ metal: v })} />
          <FieldGroup label="Cuero" value={mat.leather} onChange={(v) => updateMat({ leather: v })} />
          <FieldGroup label="Madera" value={mat.wood} onChange={(v) => updateMat({ wood: v })} />
          <FieldGroup label="Cristal" value={mat.crystal} onChange={(v) => updateMat({ crystal: v })} />
          <FieldGroup label="Piedra" value={mat.stone} onChange={(v) => updateMat({ stone: v })} />
          <FieldGroup label="Hueso" value={mat.bone} onChange={(v) => updateMat({ bone: v })} />
          <FieldGroup label="Plástico" value={mat.plastic} onChange={(v) => updateMat({ plastic: v })} />
          <FieldGroup label="Fibra" value={mat.fiber} onChange={(v) => updateMat({ fiber: v })} />
        </div>
      </div>
    </div>
  )
}

function StepColors({
  data,
  onUpdate,
}: {
  data: WizardData
  onUpdate: (updates: Partial<WizardData>) => void
}) {
  const col = data.colors
  const updateCol = (updates: Partial<Colors>) =>
    onUpdate({ colors: { ...col, ...updates } })
  const refs = data.references
  const updateRefs = (updates: Partial<CharacterReference>) =>
    onUpdate({ references: { ...refs, ...updates } as CharacterReference })

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-sm font-medium mb-3">Colores</h3>
        <div className="grid gap-4 md:grid-cols-3">
          <FieldGroup label="Color Primario" value={col.primary} onChange={(v) => updateCol({ primary: v })} />
          <FieldGroup label="Color Secundario" value={col.secondary} onChange={(v) => updateCol({ secondary: v })} />
          <FieldGroup label="Color de Acento" value={col.accent} onChange={(v) => updateCol({ accent: v })} />
          <FieldGroup label="Temperatura" value={col.temperature} onChange={(v) => updateCol({ temperature: v })} />
          <FieldGroup label="Contraste" value={col.contrast} onChange={(v) => updateCol({ contrast: v })} />
          <FieldGroup label="Saturación" value={col.saturation} onChange={(v) => updateCol({ saturation: v })} />
        </div>
      </div>
      <div>
        <h3 className="text-sm font-medium mb-1">Referencias</h3>
        <p className="text-xs text-muted-foreground mb-3">
          Indica si vas a proporcionar referencias visuales para tu personaje (imágenes de Pinterest, Artstation, capturas, etc.).
        </p>
        <div className="space-y-3">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={refs?.hasReferences || false}
              onChange={(e) => updateRefs({ hasReferences: e.target.checked })}
              className="rounded border-input"
            />
            <span className="text-sm">Voy a proporcionar referencias visuales</span>
          </label>
          {refs?.hasReferences && (
            <FieldGroup
              label="Notas sobre las referencias"
              value={refs.notes}
              onChange={(v) => updateRefs({ notes: v })}
              type="textarea"
            />
          )}
        </div>
      </div>
    </div>
  )
}

function StepSummary({ data }: { data: WizardData }) {
  const sections = [
    {
      title: 'Información General',
      items: [
        { label: 'Nombre', value: data.name || data.general.name },
        { label: 'Alias', value: data.alias },
        { label: 'Edad', value: data.general.age },
        { label: 'Sexo', value: data.general.sex },
        { label: 'Especie', value: data.general.species },
        { label: 'Raza', value: data.general.race },
        { label: 'Clase', value: data.general.class },
        { label: 'Profesión', value: data.general.profession },
        { label: 'Rol', value: data.general.role },
        { label: 'Personalidad', value: data.general.personality },
      ],
    },
    {
      title: 'Apariencia',
      items: [
        { label: 'Piel', value: data.appearance.skinColor },
        { label: 'Rostro', value: data.appearance.faceShape },
        { label: 'Cabello', value: data.appearance.hair?.style ? `${data.appearance.hair.style} (${data.appearance.hair.color || ''})` : undefined },
        { label: 'Ojos', value: data.appearance.eyes?.shape ? `${data.appearance.eyes.shape} (${data.appearance.eyes.color || ''})` : undefined },
        { label: 'Barba', value: data.appearance.beard },
        { label: 'Cicatrices', value: data.appearance.scars },
        { label: 'Tatuajes', value: data.appearance.tattoos },
      ],
    },
    {
      title: 'Emociones y Estilo',
      items: [
        { label: 'Paleta Emocional', value: data.emotionalPalette?.join(', ') },
        { label: 'Personalidad Visual', value: data.visualPersonality?.join(', ') },
      ],
    },
    {
      title: 'Ropa',
      items: [
        { label: 'Torso', value: data.clothing.torso },
        { label: 'Piernas', value: data.clothing.legs },
        { label: 'Calzado', value: data.clothing.footwear },
        { label: 'Armadura', value: data.clothing.armor },
      ],
    },
    {
      title: 'Equipo',
      items: [
        { label: 'Armas', value: data.equipment.weapons },
        { label: 'Escudos', value: data.equipment.shields },
        { label: 'Mascotas', value: data.equipment.pets },
      ],
    },
    {
      title: 'Colores y Referencias',
      items: [
        { label: 'Primario', value: data.colors.primary },
        { label: 'Secundario', value: data.colors.secondary },
        { label: 'Referencias', value: data.references?.hasReferences ? `Sí${data.references.notes ? ` — ${data.references.notes}` : ''}` : 'No' },
      ],
    },
  ]

  return (
    <div className="space-y-4">
      {sections.map((section) => {
        const filledItems = section.items.filter((item) => item.value)
        if (filledItems.length === 0) return null
        return (
          <div key={section.title}>
            <h3 className="text-sm font-medium mb-2">{section.title}</h3>
            <div className="grid gap-1 md:grid-cols-2">
              {filledItems.map((item) => (
                <div key={item.label} className="text-sm">
                  <span className="text-muted-foreground">{item.label}:</span>{' '}
                  <span className="truncate">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export function CharacterCreationDialog({
  open,
  onOpenChange,
}: CharacterCreationDialogProps) {
  const navigate = useNavigate()
  const { createCharacter } = useCharacterStore()
  const [step, setStep] = useState(0)
  const [data, setData] = useState<WizardData>({
    name: '',
    alias: '',
    general: { name: '', personality: '', history: '' },
    appearance: { hair: {}, eyes: {} },
    clothing: {},
    equipment: {},
    materials: {},
    colors: {},
    visualPersonality: [],
    emotionalPalette: [],
    references: { hasReferences: false },
  })

  const handleUpdate = (updates: Partial<WizardData>) => {
    setData((prev) => ({ ...prev, ...updates }))
  }

  const handleNext = () => {
    if (step < STEPS.length - 1) setStep(step + 1)
  }

  const handleBack = () => {
    if (step > 0) setStep(step - 1)
  }

  const handleSubmit = async () => {
    const now = Date.now()
    const character: CharacterBible = {
      id: crypto.randomUUID(),
      name: data.name || data.general.name || 'Nuevo Personaje',
      alias: data.alias || undefined,
      createdAt: now,
      updatedAt: now,
      general: {
        ...data.general,
        name: data.name || data.general.name || 'Nuevo Personaje',
      },
      appearance: data.appearance,
      clothing: data.clothing,
      equipment: data.equipment,
      materials: data.materials,
      colors: data.colors,
      visualPersonality: data.visualPersonality,
      emotionalPalette: data.emotionalPalette,
      references: data.references,
    }

    await createCharacter(character)
    onOpenChange(false)
    setStep(0)
    setData({
      name: '',
      alias: '',
      general: { name: '', personality: '', history: '' },
      appearance: { hair: {}, eyes: {} },
      clothing: {},
      equipment: {},
      materials: {},
      colors: {},
      visualPersonality: [],
      emotionalPalette: [],
      references: { hasReferences: false },
    })
    navigate(`/characters/${character.id}/workflow`)
  }

  const handleClose = () => {
    onOpenChange(false)
    setStep(0)
  }

  const renderStep = () => {
    switch (step) {
      case 0:
        return <StepGeneral data={data} onUpdate={handleUpdate} />
      case 1:
        return <StepAppearance data={data} onUpdate={handleUpdate} />
      case 2:
        return <StepEmotions data={data} onUpdate={handleUpdate} />
      case 3:
        return <StepClothing data={data} onUpdate={handleUpdate} />
      case 4:
        return <StepEquipment data={data} onUpdate={handleUpdate} />
      case 5:
        return <StepColors data={data} onUpdate={handleUpdate} />
      case 6:
        return <StepSummary data={data} />
      default:
        return null
    }
  }

  const StepIcon = STEPS[step].icon

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-2xl" showCloseButton={true}>
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <StepIcon className="h-4 w-4" />
            Nuevo Personaje — {STEPS[step].label}
          </DialogTitle>
          <DialogDescription>
            Paso {step + 1} de {STEPS.length}
          </DialogDescription>
        </DialogHeader>

        <div className="flex gap-1 mb-2">
          {STEPS.map((s, i) => (
            <div
              key={s.label}
              className={`h-1 flex-1 rounded-full transition-colors ${
                i <= step ? 'bg-primary' : 'bg-muted'
              }`}
            />
          ))}
        </div>

        <ScrollArea className="max-h-[50vh]">
          <div className="py-2">{renderStep()}</div>
        </ScrollArea>

        <DialogFooter>
          <div className="flex w-full justify-between">
            <Button
              variant="outline"
              onClick={handleBack}
              disabled={step === 0}
            >
              <ChevronLeft className="h-4 w-4 mr-1" />
              Anterior
            </Button>
            {step === STEPS.length - 1 ? (
              <Button onClick={handleSubmit}>
                <Check className="h-4 w-4 mr-1" />
                Crear Personaje
              </Button>
            ) : (
              <Button onClick={handleNext}>
                Siguiente
                <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
            )}
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
