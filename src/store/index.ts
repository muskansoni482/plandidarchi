import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { clientApi } from "RTK/clientApi";
import { authApi } from "RTK/authApi";
import { userApi } from "RTK/userApi";
import authReducer from "pages/login/authSlice";
export const store = configureStore({
  reducer: {
    [clientApi.reducerPath]: clientApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    authSlice: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      clientApi.middleware,
      authApi.middleware,
      userApi.middleware,
    ]),
});
setupListeners(store.dispatch);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
