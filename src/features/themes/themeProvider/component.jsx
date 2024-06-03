import { ThemeContext } from '@/features/themes'
import { useState } from 'react'
import { SETTINGS } from '@/features/themes/settings'

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('default')
  const settings = SETTINGS[theme]
  return (
    <ThemeContext.Provider value={ { theme, settings, setTheme } }>
      <div>
        { children }
      </div>

      <style jsx="true">{ `
      button {
        background: ${ settings.accentColor };
      }
    ` }</style>

    </ThemeContext.Provider>
  )
}

