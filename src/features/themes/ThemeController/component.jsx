import { SETTINGS, ThemeContext } from '@/features/themes/index.js'
import { useContext } from 'react'

export const ThemeController = () => {
  const { theme, setTheme } = useContext(ThemeContext)
  return (
    <div>
      Select theme:
      { Object.entries(SETTINGS).map(([name]) => {
        return (
          <button
            key={ name }
            disabled={ name === theme }
            onClick={ () => setTheme(name) }>
            { name }
          </button> )
      }) }
    </div>
  )
}
