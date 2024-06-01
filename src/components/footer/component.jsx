import { useContext } from 'react'
import { ThemeContext } from '@/features/themes/index.js'

export const Footer = () => {
  const { settings } = useContext(ThemeContext)
  return (
    <footer style={ { background: settings.accentColor }}>
      Footer
    </footer>
  )
}
