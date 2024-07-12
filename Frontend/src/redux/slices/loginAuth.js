import { createSlice } from "@reduxjs/toolkit";

const initialState = {}

export const loginAuthSlice = createSlice({
    name: 'loginAuth',
    initialState: {
        auth: false
    },
    reducers: {
        updateAuth(state, action) {
            state.auth = action.payload;
        }
    }

})

export const { updateAuth } = loginAuthSlice.actions;
export default loginAuthSlice.reducer;