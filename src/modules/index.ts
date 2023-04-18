import { configureStore } from "@reduxjs/toolkit";
import { list } from "./slices";

export * from "./query";

export const store = configureStore({
  reducer: {
    list: list.reducer,
  },
  middleware: getDefaultMiddleware =>
  getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export type RootState = ReturnType<typeof store.getState>;
