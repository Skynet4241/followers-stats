import { createSlice } from "@reduxjs/toolkit";

export const userInfoSlice = createSlice({
  name: "currentUser",
  initialState: {},

  reducers: {
    setUserInfo(state, action) {
      return (state = action.payload);
    },
  },
});

export const { setUserInfo } = userInfoSlice.actions;
export const getUserInfo = (state) => state.currentUser;
