import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Plus, BookOpen } from 'lucide-react'
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { useCharacterStore } from '@/stores/characterStore'
import { CharacterCreationDialog } from '@/components/character/CharacterCreationDialog'

export function HomePage() {
  const navigate = useNavigate()
  const { characters } = useCharacterStore()
  const [dialogOpen, setDialogOpen] = useState(false)

  return (
    <div className="mx-auto max-w-4xl space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Prompt Design Studio</h1>
        <p className="text-muted-foreground">
          Diseña personajes y crea prompts optimizados para generadores de imágenes con IA.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card
          className="cursor-pointer transition-colors hover:bg-accent/50"
          onClick={() => setDialogOpen(true)}
        >
          <CardHeader>
            <Plus className="h-8 w-8 text-primary" />
            <CardTitle>Nuevo Personaje</CardTitle>
            <CardDescription>Comienza a diseñar un nuevo personaje desde cero</CardDescription>
          </CardHeader>
        </Card>

        <Card
          className="cursor-pointer transition-colors hover:bg-accent/50"
          onClick={() => navigate('/library')}
        >
          <CardHeader>
            <BookOpen className="h-8 w-8 text-primary" />
            <CardTitle>Biblioteca</CardTitle>
            <CardDescription>Explora estilos, cámaras y técnicas</CardDescription>
          </CardHeader>
        </Card>
      </div>

      {characters.length > 0 && (
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Personajes Recientes</h2>
          <div className="grid gap-3 md:grid-cols-2">
            {characters.slice(0, 6).map((char) => (
              <Card
                key={char.id}
                className="cursor-pointer transition-colors hover:bg-accent/50"
                onClick={() => navigate(`/characters/${char.id}/workflow`)}
              >
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">{char.name}</CardTitle>
                  <CardDescription>
                    {char.general.profession || 'Sin profesión definida'}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      )}

      <CharacterCreationDialog open={dialogOpen} onOpenChange={setDialogOpen} />
    </div>
  )
}
