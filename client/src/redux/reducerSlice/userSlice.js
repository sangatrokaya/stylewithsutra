import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    userDetails: {},
    token: '',
    isLoggedIn: false
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addUserDetails: (state, action) => {
            const {userDetails, token} = action.payload
            return {
                ...state,
                userDetails,
                token,
                isLoggedIn: true
            }
        },
        logoutUser: (state, action) => {
            return {
                ...initialState
            }
        },
    }
});

// this is for dispatch
export const { addUserDetails, logoutUser } = userSlice.actions;

// this is for configureStore
export default userSlice.reducer;