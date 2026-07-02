import { useState } from 'react'
import { Search } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ScrollArea } from '@/components/ui/scroll-area'
import {
  styleLibrary,
  cameraLibrary,
  lensLibrary,
  distanceLibrary,
  lightingLibrary,
  compositionLibrary,
  poseLibrary,
  expressionLibrary,
  moodLibrary,
} from '@/data/library'
import type { LibraryItem, LibraryCategory } from '@/types/library'

const categories: { value: LibraryCategory; label: string; items: LibraryItem[] }[] = [
  { value: 'style', label: 'Estilos', items: styleLibrary },
  { value: 'camera', label: 'Cámaras', items: cameraLibrary },
  { value: 'lens', label: 'Lentes', items: lensLibrary },
  { value: 'distance', label: 'Distancias', items: distanceLibrary },
  { value: 'lighting', label: 'Iluminación', items: lightingLibrary },
  { value: 'composition', label: 'Composición', items: compositionLibrary },
  { value: 'pose', label: 'Poses', items: poseLibrary },
  { value: 'expression', label: 'Expresiones', items: expressionLibrary },
  { value: 'mood', label: 'Ambientes', items: moodLibrary },
]

function LibraryGrid({ items }: { items: LibraryItem[] }) {
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <Card key={item.id} className="transition-colors hover:bg-accent/50">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm">{item.name}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <p className="text-xs text-muted-foreground">{item.promptValue}</p>
            <div className="flex flex-wrap gap-1">
              {item.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="text-[10px]">
                  {tag}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

export function LibraryPage() {
  const [search, setSearch] = useState('')

  const filterItems = (items: LibraryItem[]) =>
    search
      ? items.filter(
          (item) =>
            item.name.toLowerCase().includes(search.toLowerCase()) ||
            item.promptValue.toLowerCase().includes(search.toLowerCase()) ||
            item.tags.some((t) => t.toLowerCase().includes(search.toLowerCase()))
        )
      : items

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-2xl font-bold tracking-tight">Biblioteca</h1>
        <p className="text-muted-foreground">
          Explora estilos, técnicas y elementos visuales para tus prompts.
        </p>
      </div>

      <div className="relative max-w-sm">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Buscar en la biblioteca..."
          className="pl-9"
        />
      </div>

      <Tabs defaultValue="style">
        <TabsList className="flex-wrap h-auto gap-1">
          {categories.map((cat) => (
            <TabsTrigger key={cat.value} value={cat.value}>
              {cat.label}
            </TabsTrigger>
          ))}
        </TabsList>

        <ScrollArea className="mt-4 h-[calc(100vh-300px)]">
          {categories.map((cat) => (
            <TabsContent key={cat.value} value={cat.value}>
              <LibraryGrid items={filterItems(cat.items)} />
            </TabsContent>
          ))}
        </ScrollArea>
      </Tabs>
    </div>
  )
}
