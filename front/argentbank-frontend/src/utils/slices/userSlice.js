import { createSlice } from '@reduxjs/toolkit';

export const initialState = { user: {
        email: "",
        firstName: "",
        lastName: "",
        userName: "",
        createdAt: "",
        updatedAt: "",
        id: ""
    }};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        },
    },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
