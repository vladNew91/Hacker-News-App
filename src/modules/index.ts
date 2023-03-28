import { configureStore } from "@reduxjs/toolkit";
import { selectedNewsSlice } from "./slices";

export const store = configureStore({
  reducer: {
    selectedNews: selectedNewsSlice.reducer,
  },
  middleware: getDefaultMiddleware =>
  getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export type RootState = ReturnType<typeof store.getState>;
