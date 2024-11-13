import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./slice/todos";

export const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
});
