import { create } from 'zustand'

type Theme = 'light' | 'dark' | 'system'

interface ThemeStore {
  theme: Theme
  resolvedTheme: 'light' | 'dark'
  setTheme: (theme: Theme) => void
}

function getSystemTheme(): 'light' | 'dark' {
  if (typeof window === 'undefined') return 'dark'
  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light'
}

function applyTheme(resolved: 'light' | 'dark') {
  const root = document.documentElement
  root.classList.remove('light', 'dark')
  root.classList.add(resolved)
}

export const useThemeStore = create<ThemeStore>((set) => {
  const stored = (localStorage.getItem('theme') as Theme) || 'system'
  const resolved = stored === 'system' ? getSystemTheme() : stored
  applyTheme(resolved)

  return {
    theme: stored,
    resolvedTheme: resolved,
    setTheme: (theme) => {
      const resolved = theme === 'system' ? getSystemTheme() : theme
      localStorage.setItem('theme', theme)
      applyTheme(resolved)
      set({ theme, resolvedTheme: resolved })
    },
  }
})
