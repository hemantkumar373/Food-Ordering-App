import { configureStore } from "@reduxjs/toolkit";
import loginAuthReducer from "../slices/loginAuth";
import passengerReducer from "../slices/passengerSlice";

export const store = configureStore({
    reducer: {
        passenger: passengerReducer,
        loginAuth: loginAuthReducer
    }
})