import { configureStore } from "@reduxjs/toolkit";
import productReducer from './index'

export const store=configureStore({
    reducer:{
        retail: productReducer.reducer,
    },
})