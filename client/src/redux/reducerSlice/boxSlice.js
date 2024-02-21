import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    width: 30,
    height: 30,
    backgroundColor: 'red',
    borderRadius: '0'
}

export const boxSlice = createSlice({
    name: 'box',
    initialState,
    reducers: {
        increaseWidth: (state, action) => {
            state.width++
        },
        decreaseWidth: (state, action) => {
            state.width--
        },
        changeBoxColor: (state, action) => {
            state.backgroundColor = action.payload
        },

        changeBoxShape: (state, action) => {
           if (state.borderRadius === '50%'){
            state.borderRadius = '0'
           }else{
            state.borderRadius = '50%'
           }
        },
    }
});

// this is for dispatch
export const { increaseWidth, decreaseWidth, changeBoxColor, changeBoxShape } = boxSlice.actions;

// this is for configureStore
export default boxSlice.reducer;