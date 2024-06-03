import { useCallback, useContext, useState } from 'react'
import { AuthContext } from '@/features/auth/index.js'
import styles from './signInForm.module.css'

export const SignInForm = ({ onClose }) => {
  const [name, setName] = useState('')
  const { setAccount } = useContext(AuthContext)

  const handleLogin = useCallback(() => {
    setAccount({ name })
    onClose()
  }, [name])

  return (
    <div className={ styles.form }>
      <input
        type='text'
        placeholder='Your name'
        value={ name }
        onInput={ event => setName(event.target.value) }
      />

      <button
        disabled={ !name }
        onClick={ () => handleLogin()}>
        Sign in
      </button>
      <button onClick={ () => onClose() }>Cancel</button>
    </div>
  )
}

