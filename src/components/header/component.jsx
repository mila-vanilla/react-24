import { Modal } from '@/components/index.js'
import { useCallback, useContext, useState } from 'react'
import { SETTINGS, ThemeContext } from '@/features/themes'
import { AuthContext, SignInForm } from '@/features/auth/'

export const Header = () => {
  const [isModalVisible, setIsModalVisible] = useState(false)
  const { theme, setTheme } = useContext(ThemeContext)
  const { account, setAccount } = useContext(AuthContext)

  const closeModal = useCallback(() => {
    setIsModalVisible(false)
  }, [])

  return (
    <header>
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

      {
        account.name
          ?
          <div>
            <div>Hi { account.name }</div>
            <button onClick={ () => setAccount({}) }>
              Sing out
            </button>
          </div>
          :
          <button onClick={ () => setIsModalVisible(!isModalVisible) }>
            Sing in
          </button>
      }

      { isModalVisible &&
        <Modal onClose={ closeModal }>
          <SignInForm onClose={ closeModal }></SignInForm>
        </Modal>
      }
    </header>
  )
}

