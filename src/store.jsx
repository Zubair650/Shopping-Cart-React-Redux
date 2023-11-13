import { configureStore } from "@reduxjs/toolkit";
import pSlice from "./ProductSlice";

const store = configureStore({
    reducer: {
        pSlice: pSlice
    }
})

export default store;