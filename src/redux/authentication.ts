// ** Redux Imports
import { createSlice } from '@reduxjs/toolkit'

// ** Config Imports
import authConfig from 'src/configs/auth'

export const authSlice = createSlice({
  name: 'authentication',
  initialState: {
    userData: null
  },
  reducers: {
    handleLogin: (state, action) => {
      state.userData = action.payload.userData
      window.localStorage.setItem('userData', JSON.stringify(action.payload.userData))
    },
    handleLogout: state => {
      state.userData = null

      window.localStorage.removeItem('userData')
      window.localStorage.removeItem(authConfig.storageTokenKeyName)
    }
  }
})

export const { handleLogin, handleLogout } = authSlice.actions

export default authSlice.reducer
