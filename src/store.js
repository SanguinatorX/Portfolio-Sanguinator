import { configureStore, createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "slice",
  initialState: "initialState",
  reducers: {
    change: (prevState, action) => {
      return action.payload;
    }
  }
});

export const { change } = slice.actions;

export const store = configureStore({
  reducer: {
    valeur: slice.reducer,
  },
});