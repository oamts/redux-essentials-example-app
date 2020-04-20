import { createSlice, createEntityAdapter } from '@reduxjs/toolkit'
import { client } from '../../api/client'

const usersAdapter = createEntityAdapter()

const usersSlice = createSlice({
  name: 'users',
  initialState: usersAdapter.getInitialState(),
  reducers: {
    usersLoaded(state, action) {
      usersAdapter.setAll(state, action.payload)
    },
  },
})

export const { usersLoaded } = usersSlice.actions

export default usersSlice.reducer

export const fetchUsers = () => async (dispatch) => {
  const response = await client.get('/fakeApi/users')
  dispatch(usersLoaded(response.users))
}