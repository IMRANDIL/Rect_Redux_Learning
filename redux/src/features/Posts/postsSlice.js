import { createSlice, nanoid } from "@reduxjs/toolkit";


const initialState = [
    { id: '1', title: 'Learning Redux Toolkit', content: "I'have heard this a lot" },
    { id: '2', title: 'Slices.....', content: "The more I say slice, the more I am loving it." },
]


const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        postAdded: {
            reducer(state, action) {
                state.push(action.payload)
            },
            prepare(title, content, userId) {
                return {
                    payload: {
                        id: nanoid(),
                        title,
                        content,
                        userId,
                    }
                }
            }
        }
    }
});


export const selectAllPosts = (state) => state.posts;
export const { postAdded } = postSlice.actions;

export default postSlice.reducer;