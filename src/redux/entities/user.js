import { createSlice } from '@reduxjs/toolkit'
import { normalizedUsers } from '@/constants/normalized-mock.js'

export const UserSlice = createSlice({
  name: 'user',
  initialState: {
    entities: normalizedUsers.reduce((acc, user) => {
      acc[user.id] = user
      return acc
    }, {}),
    ids: normalizedUsers.map(({ id }) => id)
  }
})
