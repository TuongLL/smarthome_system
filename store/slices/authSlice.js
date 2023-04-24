import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  auth: false,
  accessToken: null,
  userId: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth: (state, { payload }) => {
      state.auth = payload;
    }
  },
});

// Action creators are generated for each case reducer function
export const { setAuth } = authSlice.actions;

export default authSlice.reducer;
