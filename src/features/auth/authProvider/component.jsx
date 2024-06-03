import { AuthContext } from '@/features/auth/authContext'
import { useMemo, useState } from 'react'

export const AuthProvider = ({ children }) => {
  const [account, setAccount] = useState({})

  const contextValue = useMemo(() => {
    return { account, setAccount }
  }, [account])

  return (
    <AuthContext.Provider value={ contextValue }>
      { children }
    </AuthContext.Provider>
  )
}
