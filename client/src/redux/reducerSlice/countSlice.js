import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    count: 0
}

export const countSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state, action) => {
            state.count++
        },
        decrement: (state, action) => {
            state.count--
        }
    }
});

// this is for dispatch
export const { increment, decrement } = countSlice.actions;

// this is for configureStore
export default countSlice.reducer;