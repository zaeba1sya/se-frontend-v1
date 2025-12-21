'use client'

import { Moon, Settings, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { ToggleGroup, ToggleGroupItem } from 'shared/ui/toggle-group'

const THEMES = [
  {
    label: 'light',
    icon: Sun
  },
  {
    label: 'dark',
    icon: Moon
  },
  {
    label: 'system',
    icon: Settings
  }
]

function HeaderThemeSwitcher() {
  const { theme, setTheme } = useTheme()

  return (
    <div className="w-full rounded-2xl border-2">
      <ToggleGroup
        type="single"
        value={theme}
        className="mx-auto w-full"
        onValueChange={setTheme}
      >
        {THEMES.map(({ label, icon: ICmp }, idx) => (
          <ToggleGroupItem
            key={idx}
            value={label}
            aria-label={`Toggle ${label} theme`}
            className="w-1/3 cursor-pointer"
          >
            <ICmp />
          </ToggleGroupItem>
        ))}
      </ToggleGroup>
    </div>
  )
}

export { HeaderThemeSwitcher }
