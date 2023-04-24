import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isUserMode: false // Auto mode
}

export const modeSlice = createSlice({
  name: 'mode',
  initialState,
  reducers: {
    setUserMode: (state, {payload}) => {
      state.isUserMode = payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setUserMode} = modeSlice.actions

export default modeSlice.reducer