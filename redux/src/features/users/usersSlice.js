import { createSlice } from "@reduxjs/toolkit";


const initialState = [
    { id: '0', name: 'Ali Imran' },
    { id: '1', name: 'Ali Reza' },
    { id: '2', name: 'Ali Imran Adil' },
]


const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {}
});


export const selectAllUsers = (state) => state.users;

export default userSlice.reducer;