import { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { TooltipProvider } from '@/components/ui/tooltip'
import { AppLayout } from '@/components/shared/AppLayout'
import { HomePage } from '@/pages/HomePage'
import { CharacterEditor } from '@/pages/CharacterEditor'
import { WorkflowPage } from '@/pages/WorkflowPage'
import { LibraryPage } from '@/pages/LibraryPage'
import { SettingsPage } from '@/pages/SettingsPage'
import { useCharacterStore } from '@/stores/characterStore'

export default function App() {
  const loadCharacters = useCharacterStore((s) => s.loadCharacters)

  useEffect(() => {
    loadCharacters()
  }, [loadCharacters])

  return (
    <TooltipProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/characters/:id" element={<CharacterEditor />} />
            <Route path="/characters/:id/workflow" element={<WorkflowPage />} />
            <Route path="/library" element={<LibraryPage />} />
            <Route path="/settings" element={<SettingsPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  )
}
