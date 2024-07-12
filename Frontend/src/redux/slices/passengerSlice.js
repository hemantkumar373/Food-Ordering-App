import { createSlice } from "@reduxjs/toolkit";


export const passengerSlice = createSlice({
    name: 'passenger',
    initialState: {
        selectedPassenger: 0,
        selectedMeal: []
    },
    reducers: {
        updateSelectedPassenger(state, action) {
            state.selectedPassenger = action.payload;
        },
        addSelectedMeal(state, action) {
            state.selectedMeal.push(action.payload);
        },
        removeSelectedMeal(state, action) {
            state.selectedMeal.splice(action.payload, 1);
        }
    }

})
export const { updateSelectedPassenger, addSelectedMeal, removeSelectedMeal } = passengerSlice.actions;
export default passengerSlice.reducer;