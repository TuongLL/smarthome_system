import { configureStore } from '@reduxjs/toolkit'
import authReducer from './slices/authSlice'
import modeReducer from './slices/modeSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    mode: modeReducer
  },
})