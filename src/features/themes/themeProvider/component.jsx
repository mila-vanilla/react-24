import { ThemeContext } from '@/features/themes'
import { useMemo, useState } from 'react'
import { SETTINGS } from '@/features/themes/settings'

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('default')
  const settings = SETTINGS[theme]
  const contextValue = useMemo(() => {
    return { theme, settings, setTheme }
  }, [theme])

  return (
    <ThemeContext.Provider value={ contextValue }>
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

