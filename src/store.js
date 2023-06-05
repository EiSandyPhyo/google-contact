import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./api/authApi";
import { contactApi } from "./api/contactApi";

export const store=configureStore({
    reducer:{
        [authApi.reducerPath]:authApi.reducer,
        [contactApi.reducerPath]:contactApi.reducer,
    },
    middleware:(getDefaultMiddleware)=>
    getDefaultMiddleware().concat(authApi.middleware, contactApi.middleware),
})