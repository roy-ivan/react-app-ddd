import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { itemApi } from "../infrastructure/item.api";

export const store = configureStore({
  reducer: {
    [itemApi.reducerPath]: itemApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(itemApi.middleware),
});
setupListeners(store.dispatch);
