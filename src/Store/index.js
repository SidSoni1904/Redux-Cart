// main store
import { configureStore } from "@reduxjs/toolkit";
import uiReducer from "./Ui-Slice"
import cartReducer from "./Cart-Slice"

const store = configureStore({
    reducer: {
        ui: uiReducer,
        cart: cartReducer
    }
})

export default store;
