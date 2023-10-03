import { createSlice } from '@reduxjs/toolkit';

export const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        postsBySub: {}
    },
    reducers: {
        addPost: (state, action) => {
            const { subreddit } = action.payload;
            const post = action.payload;

            return {
                ...state,
                postsBySub: {
                    ...state.postsBySub,
                    [subreddit]: [...state.postsBySub[subreddit], post] 
                } 
            };
        },
        removePost: (state, action) => {
            const { subreddit, id } = action.payload;

            return {
                ...state,
                postsBySub: {
                    ...state.postsBySub,
                    [subreddit]: state.postsBySub[subreddit].filter(p => p.id !== id)
                }
            };
        },
        clearPosts: (state, action) => {
            const { subreddit } = action.payload;

            return { 
                ...state, 
                postsBySub: {
                    ...state.postsBySub,
                    [subreddit]: []
                } 
            };
        },
        selectPosts: (state) => {
            return state.postsBySub;
        }
    }
});

export const { addPost, removePost, clearPosts, selectPosts } = postsSlice.actions;