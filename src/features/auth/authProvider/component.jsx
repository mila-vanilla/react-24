import { AuthContext } from '@/features/auth/authContext'
import { useState } from 'react'

export const AuthProvider = ({ children }) => {
  const [account, setAccount] = useState({})

  return (
    <AuthContext.Provider value={ { account, setAccount } }>
      { children }
    </AuthContext.Provider>
  )
}
