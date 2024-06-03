import { createContext } from 'react'

export const AuthContext = createContext({
  account: {},
  setAccount: () => {}
})
