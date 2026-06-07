import { configureStore, createSlice } from "@reduxjs/toolkit";

// Faire attention avec les tests de notre côté.
// Tu peux en faire, mais il faut éviter que du code mort se
// retrouve dans le code final du repository.
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