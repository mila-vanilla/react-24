import { createAsyncThunk } from '@reduxjs/toolkit'

export const getMenu = createAsyncThunk(
  'dish/getMenu',
  async () => {
    const response = await fetch('http://localhost:3001/api/dishes')
    return response.json()
  },
  { condition (arg, api) {} }
)
