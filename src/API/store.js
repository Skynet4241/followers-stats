import { configureStore } from "@reduxjs/toolkit";

import { usersInfoApi } from "./getUsersInfo";

export const store = configureStore({
  reducer: {
    [usersInfoApi.reducerPath]: usersInfoApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(usersInfoApi.middleware),
});
