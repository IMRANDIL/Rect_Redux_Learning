import { createSlice } from "@reduxjs/toolkit";


const initialState = [
    { id: '1', title: 'Learning Redux Toolkit', content: "I'have heard this a lot" },
    { id: '2', title: 'Slices.....', content: "The more I say slice, the more I am loving it." },
]


const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        postAdded(state, action) {
            state.push(action.payload)
        }
    }
});


export const selectAllPosts = (state) => state.posts;
export const { postAdded } = postSlice.actions;

export default postSlice.reducer;