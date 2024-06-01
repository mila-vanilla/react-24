import { useState } from 'react'

export const useTheme = () => {
  const { theme, setTheme } = useState('default')

  return { theme, setTheme }
}
