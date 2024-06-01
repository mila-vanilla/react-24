import { createContext } from 'react'
import { SETTINGS } from './settings'

export const ThemeContext = createContext({
    theme: 'default',
    settings: SETTINGS.default,
    setTheme: () => {}
  }
)
