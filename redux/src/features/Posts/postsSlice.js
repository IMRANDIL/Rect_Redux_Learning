import { createSlice } from "@reduxjs/toolkit";


const initialState = [
    { id: '1', title: 'Learning Redux Toolkit', content: "I'have heard this a lot" },
    { id: '2', title: 'Slices.....', content: "The more I say slice, the more I am loving it." },
]


const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {

    }
});


export const selectAllPosts = (state) => state.posts;

export default postSlice.reducer;