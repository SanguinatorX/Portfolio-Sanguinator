import { configureStore, createSlice } from "@reduxjs/toolkit";

const colorTextSlice = createSlice({
  name: "colorText",
  initialState: "white",
  reducers: {
    changeColor: (prevState, action) => {
      return action.payload;
    }
  }
});

export const { changeColor } = colorTextSlice.actions;

export const store = configureStore({
  reducer: {
    textColor: colorTextSlice.reducer,
  },
});