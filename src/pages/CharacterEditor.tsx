import { useEffect, useCallback } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { ScrollArea } from '@/components/ui/scroll-area'
import { useCharacterStore } from '@/stores/characterStore'
import { useAutoSave } from '@/hooks/useAutoSave'
import type { CharacterBible, VisualPersonalityTag } from '@/types/character'
import {
  User,
  Eye,
  Shirt,
  Swords,
  Palette,
  Sparkles,
} from 'lucide-react'

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
          className="min-h-[80px] text-sm"
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
        label="Sexo"
        value={character.general.sex}
        onChange={(v) => onUpdate({ general: { ...character.general, sex: v } })}
      />
      <FieldGroup
        label="Especie"
        value={character.general.species}
        onChange={(v) => onUpdate({ general: { ...character.general, species: v } })}
      />
      <FieldGroup
        label="Raza"
        value={character.general.race}
        onChange={(v) => onUpdate({ general: { ...character.general, race: v } })}
      />
      <FieldGroup
        label="Clase"
        value={character.general.class}
        onChange={(v) => onUpdate({ general: { ...character.general, class: v } })}
      />
      <FieldGroup
        label="Profesión"
        value={character.general.profession}
        onChange={(v) => onUpdate({ general: { ...character.general, profession: v } })}
      />
      <FieldGroup
        label="Rol"
        value={character.general.role}
        onChange={(v) => onUpdate({ general: { ...character.general, role: v } })}
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
        label="Constitución"
        value={character.general.constitution}
        onChange={(v) => onUpdate({ general: { ...character.general, constitution: v } })}
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
      <FieldGroup
        label="Virtudes"
        value={character.general.virtues}
        onChange={(v) => onUpdate({ general: { ...character.general, virtues: v } })}
      />
      <FieldGroup
        label="Defectos"
        value={character.general.flaws}
        onChange={(v) => onUpdate({ general: { ...character.general, flaws: v } })}
      />
      <FieldGroup
        label="Alineación"
        value={character.general.alignment}
        onChange={(v) => onUpdate({ general: { ...character.general, alignment: v } })}
      />
      <FieldGroup
        label="Nivel Tecnológico"
        value={character.general.techLevel}
        onChange={(v) => onUpdate({ general: { ...character.general, techLevel: v } })}
      />
      <FieldGroup
        label="Universo"
        value={character.general.universe}
        onChange={(v) => onUpdate({ general: { ...character.general, universe: v } })}
      />
      <FieldGroup
        label="Época"
        value={character.general.era}
        onChange={(v) => onUpdate({ general: { ...character.general, era: v } })}
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
      <FieldGroup label="Nariz" value={app.nose} onChange={(v) => updateApp({ nose: v })} />
      <FieldGroup label="Labios" value={app.lips} onChange={(v) => updateApp({ lips: v })} />
      <FieldGroup label="Mandíbula" value={app.jaw} onChange={(v) => updateApp({ jaw: v })} />
      <FieldGroup label="Mentón" value={app.chin} onChange={(v) => updateApp({ chin: v })} />
      <FieldGroup label="Orejas" value={app.ears} onChange={(v) => updateApp({ ears: v })} />
      <FieldGroup label="Cuello" value={app.neck} onChange={(v) => updateApp({ neck: v })} />
      <FieldGroup
        label="Hombros"
        value={app.shoulders}
        onChange={(v) => updateApp({ shoulders: v })}
      />
      <FieldGroup label="Brazos" value={app.arms} onChange={(v) => updateApp({ arms: v })} />
      <FieldGroup label="Piernas" value={app.legs} onChange={(v) => updateApp({ legs: v })} />
      <FieldGroup label="Manos" value={app.hands} onChange={(v) => updateApp({ hands: v })} />
      <FieldGroup label="Pies" value={app.feet} onChange={(v) => updateApp({ feet: v })} />
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
        label="Marcas"
        value={app.marks}
        onChange={(v) => updateApp({ marks: v })}
      />
      <FieldGroup
        label="Quemaduras"
        value={app.burns}
        onChange={(v) => updateApp({ burns: v })}
      />
      <FieldGroup
        label="Prótesis"
        value={app.prosthetics}
        onChange={(v) => updateApp({ prosthetics: v })}
      />
      <FieldGroup
        label="Mutaciones"
        value={app.mutations}
        onChange={(v) => updateApp({ mutations: v })}
      />
    </div>
  )
}

function ClothingTab({
  character,
  onUpdate,
}: {
  character: CharacterBible
  onUpdate: (updates: Partial<CharacterBible>) => void
}) {
  const cloth = character.clothing
  const updateCloth = (updates: Partial<typeof cloth>) =>
    onUpdate({ clothing: { ...cloth, ...updates } })

  return (
    <div className="grid gap-4 md:grid-cols-2">
      <FieldGroup label="Cabeza" value={cloth.head} onChange={(v) => updateCloth({ head: v })} />
      <FieldGroup label="Torso" value={cloth.torso} onChange={(v) => updateCloth({ torso: v })} />
      <FieldGroup label="Piernas" value={cloth.legs} onChange={(v) => updateCloth({ legs: v })} />
      <FieldGroup
        label="Calzado"
        value={cloth.footwear}
        onChange={(v) => updateCloth({ footwear: v })}
      />
      <FieldGroup
        label="Guantes"
        value={cloth.gloves}
        onChange={(v) => updateCloth({ gloves: v })}
      />
      <FieldGroup label="Capa" value={cloth.cape} onChange={(v) => updateCloth({ cape: v })} />
      <FieldGroup label="Cinturón" value={cloth.belt} onChange={(v) => updateCloth({ belt: v })} />
      <FieldGroup
        label="Armadura"
        value={cloth.armor}
        onChange={(v) => updateCloth({ armor: v })}
      />
      <FieldGroup
        label="Joyería"
        value={cloth.jewelry}
        onChange={(v) => updateCloth({ jewelry: v })}
      />
      <FieldGroup
        label="Accesorios"
        value={cloth.accessories}
        onChange={(v) => updateCloth({ accessories: v })}
      />
    </div>
  )
}

function EquipmentTab({
  character,
  onUpdate,
}: {
  character: CharacterBible
  onUpdate: (updates: Partial<CharacterBible>) => void
}) {
  const equip = character.equipment
  const updateEquip = (updates: Partial<typeof equip>) =>
    onUpdate({ equipment: { ...equip, ...updates } })

  return (
    <div className="grid gap-4 md:grid-cols-2">
      <FieldGroup
        label="Armas"
        value={equip.weapons}
        onChange={(v) => updateEquip({ weapons: v })}
      />
      <FieldGroup
        label="Escudos"
        value={equip.shields}
        onChange={(v) => updateEquip({ shields: v })}
      />
      <FieldGroup
        label="Herramientas"
        value={equip.tools}
        onChange={(v) => updateEquip({ tools: v })}
      />
      <FieldGroup
        label="Mochila"
        value={equip.backpack}
        onChange={(v) => updateEquip({ backpack: v })}
      />
      <FieldGroup
        label="Instrumentos"
        value={equip.instruments}
        onChange={(v) => updateEquip({ instruments: v })}
      />
      <FieldGroup
        label="Objetos Mágicos"
        value={equip.magicItems}
        onChange={(v) => updateEquip({ magicItems: v })}
      />
      <FieldGroup
        label="Tecnología"
        value={equip.technology}
        onChange={(v) => updateEquip({ technology: v })}
      />
      <FieldGroup
        label="Mascotas"
        value={equip.pets}
        onChange={(v) => updateEquip({ pets: v })}
      />
    </div>
  )
}

function MaterialsColorsTab({
  character,
  onUpdate,
}: {
  character: CharacterBible
  onUpdate: (updates: Partial<CharacterBible>) => void
}) {
  const mat = character.materials
  const col = character.colors
  const updateMat = (updates: Partial<typeof mat>) =>
    onUpdate({ materials: { ...mat, ...updates } })
  const updateCol = (updates: Partial<typeof col>) =>
    onUpdate({ colors: { ...col, ...updates } })

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-sm font-medium mb-3">Materiales</h3>
        <div className="grid gap-4 md:grid-cols-3">
          <FieldGroup label="Tela" value={mat.fabric} onChange={(v) => updateMat({ fabric: v })} />
          <FieldGroup label="Metal" value={mat.metal} onChange={(v) => updateMat({ metal: v })} />
          <FieldGroup
            label="Cuero"
            value={mat.leather}
            onChange={(v) => updateMat({ leather: v })}
          />
          <FieldGroup label="Madera" value={mat.wood} onChange={(v) => updateMat({ wood: v })} />
          <FieldGroup
            label="Cristal"
            value={mat.crystal}
            onChange={(v) => updateMat({ crystal: v })}
          />
          <FieldGroup label="Piedra" value={mat.stone} onChange={(v) => updateMat({ stone: v })} />
          <FieldGroup label="Hueso" value={mat.bone} onChange={(v) => updateMat({ bone: v })} />
          <FieldGroup
            label="Plástico"
            value={mat.plastic}
            onChange={(v) => updateMat({ plastic: v })}
          />
          <FieldGroup label="Fibra" value={mat.fiber} onChange={(v) => updateMat({ fiber: v })} />
        </div>
      </div>
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
    </div>
  )
}

function VisualPersonalityTab({
  character,
  onUpdate,
}: {
  character: CharacterBible
  onUpdate: (updates: Partial<CharacterBible>) => void
}) {
  const tags: { value: VisualPersonalityTag; label: string }[] = [
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

  const toggleTag = (tag: VisualPersonalityTag) => {
    const current = character.visualPersonality || []
    const updated = current.includes(tag)
      ? current.filter((t) => t !== tag)
      : [...current, tag]
    onUpdate({ visualPersonality: updated })
  }

  return (
    <div className="space-y-4">
        <p className="text-sm text-muted-foreground">
          Selecciona las etiquetas de personalidad visual que mejor describan la estética de tu personaje.
        </p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <button
            key={tag.value}
            onClick={() => toggleTag(tag.value)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
              character.visualPersonality?.includes(tag.value)
                ? 'bg-primary text-primary-foreground'
                : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
            }`}
          >
            {tag.label}
          </button>
        ))}
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
            <User className="mr-1 h-3 w-3" /> General
          </TabsTrigger>
          <TabsTrigger value="appearance">
            <Eye className="mr-1 h-3 w-3" /> Apariencia
          </TabsTrigger>
          <TabsTrigger value="clothing">
            <Shirt className="mr-1 h-3 w-3" /> Ropa
          </TabsTrigger>
          <TabsTrigger value="equipment">
            <Swords className="mr-1 h-3 w-3" /> Equipo
          </TabsTrigger>
          <TabsTrigger value="materials-colors">
            <Palette className="mr-1 h-3 w-3" /> Materiales y Colores
          </TabsTrigger>
          <TabsTrigger value="visual-personality">
            <Sparkles className="mr-1 h-3 w-3" /> Personalidad Visual
          </TabsTrigger>
        </TabsList>

        <ScrollArea className="mt-4 h-[calc(100vh-280px)]">
          <TabsContent value="general">
            <GeneralTab character={character} onUpdate={handleUpdate} />
          </TabsContent>
          <TabsContent value="appearance">
            <AppearanceTab character={character} onUpdate={handleUpdate} />
          </TabsContent>
          <TabsContent value="clothing">
            <ClothingTab character={character} onUpdate={handleUpdate} />
          </TabsContent>
          <TabsContent value="equipment">
            <EquipmentTab character={character} onUpdate={handleUpdate} />
          </TabsContent>
          <TabsContent value="materials-colors">
            <MaterialsColorsTab character={character} onUpdate={handleUpdate} />
          </TabsContent>
          <TabsContent value="visual-personality">
            <VisualPersonalityTab character={character} onUpdate={handleUpdate} />
          </TabsContent>
        </ScrollArea>
      </Tabs>
    </div>
  )
}
