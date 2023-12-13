import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { registerApi } from "../infrastructure/item/register.api";

export const store = configureStore({
  reducer: {
    [registerApi.reducerPath]: registerApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(registerApi.middleware),
});
setupListeners(store.dispatch);
