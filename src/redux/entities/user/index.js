import { createEntityAdapter, createSlice } from '@reduxjs/toolkit'
import { getUsers } from '@/redux/entities/user/thunks/getUsers.js'

const entityAdapter = createEntityAdapter()

export const UserSlice = createSlice({
  name: 'user',
  initialState: entityAdapter.getInitialState(),
  extraReducers: (builder) => builder
    .addCase(getUsers.fulfilled, (state, { payload }) => {
      entityAdapter.setAll(state, payload)
    })
})
