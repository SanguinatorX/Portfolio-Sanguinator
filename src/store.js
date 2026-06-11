import { configureStore, createSlice } from "@reduxjs/toolkit";

const textSizeSlice = createSlice({
  name: "textSize",
  initialState: "16",
  reducers: {
    changeSize: (prevState, action) => {
      return action.payload;
    }
  }
});

const colorTextSlice = createSlice({
  name: "colorText",
  initialState: "white",
  reducers: {
    changeColor: (prevState, action) => {
      return action.payload;
    }
  }
});

const themeSlice = createSlice({
  name: "theme",
  initialState: "standardTheme",
  reducers: {
    changeTheme: (prevState, action) => {
      return action.payload;
    }
  }
});

export const { changeColor } = colorTextSlice.actions;
export const { changeTheme } = themeSlice.actions;
export const { changeSize } = textSizeSlice.actions;

export const store = configureStore({
  reducer: {
    textColor: colorTextSlice.reducer,
    theme: themeSlice.reducer,
    textSize: textSizeSlice.reducer,
  },
});