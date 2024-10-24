import { configureStore } from "@reduxjs/toolkit";
import postManagement from "./reducer";

export const store = configureStore({
  reducer: {
    postManagement,
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch