import { createSlice } from '@reduxjs/toolkit';

export const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        postsBySub: {}
    },
    reducers: {
        addPost: (state, action) => {
            const { subreddit_id } = action.payload;
            const post = action.payload;

            return { ...state.postsBySub, [subreddit_id]: [...state.postsBySub[subreddit_id], post] };
        },
        removePost: (state, action) => {
            const { subreddit_id, id } = action.payload;

            return {
                ...state,
                postsBySub: {
                    ...state.postsBySub,
                    [subreddit_id]: state.postsBySub[subreddit_id].filter(p => p.id !== id)
                }
            }
        },
        clearPosts: (state, action) => {
            const { subreddit_id } = action.payload;

            return { ...state, postsBySub: {
                ...postsBySub,
                [subreddit_id]: []
            } };
        },
        addPosts: (state, action) => {
            const { posts } = action.payload;
            const new_state = { ...state }

            for (const post of posts) {
                new_state.postsBySub = {
                    ...new_state.postsBySub,
                    [post.subreddit_id]: [...new_state.postsBySub[subreddit_id], post]
                }
            }

            return new_state;
        },
        selectPosts: (state) => {
            return state.postsBySub;
        }
    }
});

export const { addPost, removePost, addPosts, clearPosts, selectPosts } = postsSlice.actions;