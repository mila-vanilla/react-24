import { Modal } from '@/components/index.js'
import { useContext, useState } from 'react'
import { SETTINGS, ThemeContext } from '@/features/themes'

export const Header = () => {
  const [isModalVisible, setIsModalVisible] = useState(false)
  const { theme, setTheme } = useContext(ThemeContext)

  return (
    <header>
      <div>
        Select theme:
        { Object.entries(SETTINGS).map(([name]) => {
          return (
            <button
              disabled={ name === theme }
              onClick={ () => setTheme(name) }>
              { name }
            </button> )
        }) }
      </div>

      <button onClick={ () => setIsModalVisible(!isModalVisible) }>
        Sing in
      </button>

      { isModalVisible && <Modal onChange={ () => setIsModalVisible(false) }/> }
    </header>
  )
}

