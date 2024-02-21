// 'use client'
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    count: 0
}

export const countSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state, action) => {

        }
    }
});

// this is for dispatch
export const { increment } = countSlice.actions;

// this is for configureStore
export default countSlice.reducer;