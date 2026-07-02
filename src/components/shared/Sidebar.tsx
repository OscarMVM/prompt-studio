import { NavLink, useNavigate } from 'react-router-dom'
import {
  Home,
  BookOpen,
  Settings,
  ChevronLeft,
  ChevronRight,
  Plus,
  Trash2,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { ScrollArea } from '@/components/ui/scroll-area'
import { useCharacterStore } from '@/stores/characterStore'
import { createDefaultCharacter } from '@/data/defaults'
import { useState } from 'react'
import { cn } from '@/lib/utils'

const navItems = [
  { to: '/', icon: Home, label: 'Inicio' },
  { to: '/library', icon: BookOpen, label: 'Biblioteca' },
]

export function Sidebar() {
  const [collapsed, setCollapsed] = useState(false)
  const navigate = useNavigate()
  const { characters, activeCharacterId, setActiveCharacter, createCharacter, deleteCharacter } =
    useCharacterStore()

  const handleNewCharacter = async () => {
    const character = createDefaultCharacter()
    await createCharacter(character)
    setActiveCharacter(character.id)
    navigate(`/characters/${character.id}/workflow`)
  }

  return (
    <aside
      className={cn(
        'flex h-screen flex-col border-r bg-sidebar text-sidebar-foreground transition-all duration-300',
        collapsed ? 'w-16' : 'w-64'
      )}
    >
      <div className="flex h-14 items-center justify-between px-4">
        {!collapsed && (
          <span className="text-lg font-semibold tracking-tight">Prompt Studio</span>
        )}
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8 shrink-0"
          onClick={() => setCollapsed(!collapsed)}
        >
          {collapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
        </Button>
      </div>

      <Separator />

      <nav className="flex-1 space-y-1 p-2">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              cn(
                'flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors',
                isActive
                  ? 'bg-sidebar-accent text-sidebar-accent-foreground'
                  : 'text-sidebar-foreground/70 hover:bg-sidebar-accent/50 hover:text-sidebar-foreground'
              )
            }
          >
            <item.icon className="h-4 w-4 shrink-0" />
            {!collapsed && <span>{item.label}</span>}
          </NavLink>
        ))}
      </nav>

      <Separator />

      {!collapsed && (
        <div className="p-2">
          <div className="flex items-center justify-between px-3 py-1">
            <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
              Personajes
            </span>
            <Button
              variant="ghost"
              size="icon"
              className="h-6 w-6"
              onClick={handleNewCharacter}
            >
              <Plus className="h-3 w-3" />
            </Button>
          </div>
          <ScrollArea className="max-h-48">
            {characters.map((char) => (
              <div
                key={char.id}
                className={cn(
                  'group flex items-center justify-between rounded-md px-3 py-1.5 text-sm cursor-pointer transition-colors',
                  activeCharacterId === char.id
                    ? 'bg-sidebar-accent text-sidebar-accent-foreground'
                    : 'text-sidebar-foreground/70 hover:bg-sidebar-accent/50'
                )}
                onClick={() => {
                  setActiveCharacter(char.id)
                  navigate(`/characters/${char.id}/workflow`)
                }}
              >
                <span className="truncate">{char.name}</span>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-5 w-5 opacity-0 group-hover:opacity-100 transition-opacity"
                  onClick={(e) => {
                    e.stopPropagation()
                    deleteCharacter(char.id)
                  }}
                >
                  <Trash2 className="h-3 w-3" />
                </Button>
              </div>
            ))}
          </ScrollArea>
        </div>
      )}

      <Separator />

      <div className="p-2">
        <NavLink
          to="/settings"
          className={({ isActive }) =>
            cn(
              'flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors',
              isActive
                ? 'bg-sidebar-accent text-sidebar-accent-foreground'
                : 'text-sidebar-foreground/70 hover:bg-sidebar-accent/50 hover:text-sidebar-foreground'
            )
          }
        >
          <Settings className="h-4 w-4 shrink-0" />
          {!collapsed && <span>Configuración</span>}
        </NavLink>
      </div>
    </aside>
  )
}
