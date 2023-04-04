import { configureStore } from "@reduxjs/toolkit";
import { selectedItemSlice } from "./slices";

export * from "./query";

export const store = configureStore({
  reducer: {
    selectedItem: selectedItemSlice.reducer,
  },
  middleware: getDefaultMiddleware =>
  getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export type RootState = ReturnType<typeof store.getState>;
