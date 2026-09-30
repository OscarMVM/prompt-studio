import { useEffect, useCallback } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Input } from '@/components/ui/input'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'
import { CharacterField as FieldGroup } from '@/components/character/CharacterField'
import { CharacterOption } from '@/components/character/CharacterOption'
import { emotionalOptionDescriptions, visualOptionDescriptions } from '@/components/character/characterOptionDescriptions'
import { useCharacterStore } from '@/stores/characterStore'
import { useAutoSave } from '@/hooks/useAutoSave'
import type { CharacterBible, VisualPersonalityTag, EmotionalPaletteTag, CharacterReference } from '@/types/character'
import {
  User,
  Eye,
  Shirt,
  Palette,
  Heart,
  Info,
} from 'lucide-react'

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

function GeneralTab({
  character,
  onUpdate,
}: {
  character: CharacterBible
  onUpdate: (updates: Partial<CharacterBible>) => void
}) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <FieldGroup
        label="Nombre"
        value={character.name}
        onChange={(v) => onUpdate({ name: v })}
      />
      <FieldGroup
        label="Alias"
        value={character.alias}
        onChange={(v) => onUpdate({ alias: v })}
      />
      <FieldGroup
        label="Edad"
        value={character.general.age}
        onChange={(v) => onUpdate({ general: { ...character.general, age: v } })}
      />
      <FieldGroup
        label="Especie"
        value={character.general.species}
        onChange={(v) => onUpdate({ general: { ...character.general, species: v } })}
      />
      <FieldGroup
        label="Profesión"
        value={character.general.profession}
        onChange={(v) => onUpdate({ general: { ...character.general, profession: v } })}
      />
      <FieldGroup
        label="Altura"
        value={character.general.height}
        onChange={(v) => onUpdate({ general: { ...character.general, height: v } })}
      />
      <FieldGroup
        label="Peso"
        value={character.general.weight}
        onChange={(v) => onUpdate({ general: { ...character.general, weight: v } })}
      />
      <FieldGroup
        label="Alineación"
        value={character.general.alignment}
        onChange={(v) => onUpdate({ general: { ...character.general, alignment: v } })}
      />
      <div className="md:col-span-2">
        <FieldGroup
          label="Personalidad"
          value={character.general.personality}
          onChange={(v) => onUpdate({ general: { ...character.general, personality: v } })}
          type="textarea"
        />
      </div>
      <div className="md:col-span-2">
        <FieldGroup
          label="Historia"
          value={character.general.history}
          onChange={(v) => onUpdate({ general: { ...character.general, history: v } })}
          type="textarea"
        />
      </div>
      <FieldGroup
        label="Motivaciones"
        value={character.general.motivations}
        onChange={(v) => onUpdate({ general: { ...character.general, motivations: v } })}
        type="textarea"
      />
      <FieldGroup
        label="Miedos"
        value={character.general.fears}
        onChange={(v) => onUpdate({ general: { ...character.general, fears: v } })}
        type="textarea"
      />
    </div>
  )
}

function AppearanceTab({
  character,
  onUpdate,
}: {
  character: CharacterBible
  onUpdate: (updates: Partial<CharacterBible>) => void
}) {
  const app = character.appearance
  const updateApp = (updates: Partial<typeof app>) =>
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
      <FieldGroup label="Nariz" value={app.nose} onChange={(v) => updateApp({ nose: v })} />
      <FieldGroup label="Labios" value={app.lips} onChange={(v) => updateApp({ lips: v })} />
      <FieldGroup label="Mandíbula" value={app.jaw} onChange={(v) => updateApp({ jaw: v })} />
      <FieldGroup label="Mentón" value={app.chin} onChange={(v) => updateApp({ chin: v })} />
      <FieldGroup label="Orejas" value={app.ears} onChange={(v) => updateApp({ ears: v })} />
      <FieldGroup label="Barba" value={app.beard} onChange={(v) => updateApp({ beard: v })} />
      <FieldGroup label="Bigote" value={app.mustache} onChange={(v) => updateApp({ mustache: v })} />
      <FieldGroup label="Pecas" value={app.freckles} onChange={(v) => updateApp({ freckles: v })} />
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

function ClothingEquipmentTab({
  character,
  onUpdate,
}: {
  character: CharacterBible
  onUpdate: (updates: Partial<CharacterBible>) => void
}) {
  const cloth = character.clothing
  const equip = character.equipment
  const updateCloth = (updates: Partial<typeof cloth>) =>
    onUpdate({ clothing: { ...cloth, ...updates } })
  const updateEquip = (updates: Partial<typeof equip>) =>
    onUpdate({ equipment: { ...equip, ...updates } })

  return (
    <div className="space-y-6">
      <section>
        <h3 className="text-sm font-medium mb-3">Ropa</h3>
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
      </section>
      <section>
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
      </section>
    </div>
  )
}

function ColorsTab({
  character,
  onUpdate,
}: {
  character: CharacterBible
  onUpdate: (updates: Partial<CharacterBible>) => void
}) {
  const col = character.colors
  const updateCol = (updates: Partial<typeof col>) =>
    onUpdate({ colors: { ...col, ...updates } })
  const refs = character.references || { hasReferences: false }
  const updateRefs = (updates: Partial<CharacterReference>) =>
    onUpdate({ references: { ...refs, ...updates } as CharacterReference })

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-sm font-medium mb-3">Colores</h3>
        <div className="grid gap-4 md:grid-cols-3">
          <FieldGroup
            label="Color Primario"
            value={col.primary}
            onChange={(v) => updateCol({ primary: v })}
          />
          <FieldGroup
            label="Color Secundario"
            value={col.secondary}
            onChange={(v) => updateCol({ secondary: v })}
          />
          <FieldGroup
            label="Color de Acento"
            value={col.accent}
            onChange={(v) => updateCol({ accent: v })}
          />
          <FieldGroup
            label="Temperatura"
            value={col.temperature}
            onChange={(v) => updateCol({ temperature: v })}
          />
          <FieldGroup
            label="Contraste"
            value={col.contrast}
            onChange={(v) => updateCol({ contrast: v })}
          />
          <FieldGroup
            label="Saturación"
            value={col.saturation}
            onChange={(v) => updateCol({ saturation: v })}
          />
        </div>
      </div>
      <div>
        <h3 className="text-sm font-medium mb-1">Referencias</h3>
        <p className="text-xs text-muted-foreground mb-3">
          Indica si vas a proporcionar referencias visuales para tu personaje (imágenes de Pinterest, Artstation, capturas, etc.).
        </p>
        <div className="space-y-3">
          <Tooltip>
            <TooltipTrigger render={<label className="flex items-center gap-2 cursor-help" />}>
              <input
                type="checkbox"
                checked={refs.hasReferences || false}
                onChange={(e) => updateRefs({ hasReferences: e.target.checked })}
                className="rounded border-input"
              />
              <span className="text-sm">Voy a proporcionar referencias visuales</span>
              <Info className="h-3.5 w-3.5 shrink-0 text-muted-foreground" aria-hidden="true" />
            </TooltipTrigger>
            <TooltipContent>Activa esta opción si adjuntarás imágenes para orientar el diseño del personaje.</TooltipContent>
          </Tooltip>
          {refs.hasReferences && (
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

function EmotionsTab({
  character,
  onUpdate,
}: {
  character: CharacterBible
  onUpdate: (updates: Partial<CharacterBible>) => void
}) {
  const toggleEmotion = (tag: EmotionalPaletteTag) => {
    const current = character.emotionalPalette || []
    const updated = current.includes(tag)
      ? current.filter((t) => t !== tag)
      : [...current, tag]
    onUpdate({ emotionalPalette: updated })
  }

  const toggleVisual = (tag: VisualPersonalityTag) => {
    const current = character.visualPersonality || []
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
            <CharacterOption
              key={tag.value}
              label={tag.label}
              description={emotionalOptionDescriptions[tag.value]}
              selected={character.emotionalPalette?.includes(tag.value) ?? false}
              onToggle={() => toggleEmotion(tag.value)}
            />
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
            <CharacterOption
              key={tag.value}
              label={tag.label}
              description={visualOptionDescriptions[tag.value]}
              selected={character.visualPersonality?.includes(tag.value) ?? false}
              onToggle={() => toggleVisual(tag.value)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export function CharacterEditor() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const { characters, updateCharacter } = useCharacterStore()

  const character = characters.find((c) => c.id === id)

  useEffect(() => {
    if (id && characters.length > 0 && !character) {
      const timer = setTimeout(() => navigate('/'), 2000)
      return () => clearTimeout(timer)
    }
  }, [id, character, characters.length, navigate])

  const handleUpdate = useCallback(
    (updates: Partial<CharacterBible>) => {
      if (id) updateCharacter(id, updates)
    },
    [id, updateCharacter]
  )

  const handleSave = useCallback(
    async (char: CharacterBible | undefined) => {
      if (char?.id) await updateCharacter(char.id, char)
    },
    [updateCharacter]
  )

  useAutoSave(character, handleSave)

  if (!character) {
    return (
      <div className="flex flex-col items-center justify-center h-64 gap-4">
        <p className="text-muted-foreground">
          {characters.length === 0 ? 'Cargando personaje...' : 'Personaje no encontrado. Redirigiendo...'}
        </p>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Input
          value={character.name}
          onChange={(e) => handleUpdate({ name: e.target.value })}
          className="max-w-sm text-lg font-semibold"
          placeholder="Nombre del personaje"
        />
      </div>

      <Tabs defaultValue="general">
        <TabsList className="flex-wrap h-auto gap-1">
          <TabsTrigger value="general">
            <User className="mr-1 h-3 w-3" /> Datos generales
          </TabsTrigger>
          <TabsTrigger value="appearance">
            <Eye className="mr-1 h-3 w-3" /> Apariencia
          </TabsTrigger>
          <TabsTrigger value="emotions">
            <Heart className="mr-1 h-3 w-3" /> Emociones
          </TabsTrigger>
          <TabsTrigger value="clothing-equipment">
            <Shirt className="mr-1 h-3 w-3" /> Ropa y Equipo
          </TabsTrigger>
          <TabsTrigger value="colors">
            <Palette className="mr-1 h-3 w-3" /> Colores
          </TabsTrigger>
        </TabsList>

        <ScrollArea className="mt-4 h-[calc(100vh-280px)]">
          <TabsContent value="general">
            <GeneralTab character={character} onUpdate={handleUpdate} />
          </TabsContent>
          <TabsContent value="appearance">
            <AppearanceTab character={character} onUpdate={handleUpdate} />
          </TabsContent>
          <TabsContent value="emotions">
            <EmotionsTab character={character} onUpdate={handleUpdate} />
          </TabsContent>
          <TabsContent value="clothing-equipment">
            <ClothingEquipmentTab character={character} onUpdate={handleUpdate} />
          </TabsContent>
          <TabsContent value="colors">
            <ColorsTab character={character} onUpdate={handleUpdate} />
          </TabsContent>
        </ScrollArea>
      </Tabs>
    </div>
  )
}
