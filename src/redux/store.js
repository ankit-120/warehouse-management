import { configureStore } from "@reduxjs/toolkit";
import itemReducer from './itemSlice'
import filterReducer from './filterSlice'

export const store = configureStore({
    reducer: {
        item: itemReducer,
        filter: filterReducer,
    },
})