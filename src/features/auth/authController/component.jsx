import { Modal } from '@/components/index.js'
import { AuthContext, SignInForm } from '@/features/auth/index.js'
import { useCallback, useContext, useState } from 'react'

export const AuthController = () => {
  const [isModalVisible, setIsModalVisible] = useState(false)
  const { account, setAccount } = useContext(AuthContext)

  const closeModal = useCallback(() => {
    setIsModalVisible(false)
  }, [])
  return (
    <div>
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
    </div>
  )
}
