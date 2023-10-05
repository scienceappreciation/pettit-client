import { createSlice } from '@reduxjs/toolkit';

export const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        posts: [],
    },
    reducers: {
        addPost: (state, action) => {
            const { post } = action.payload;
            return {
                ...state,
                posts: [...state.posts, post]
            };
        },
        removePost: (state, action) => {    
            const { post } = action.payload;
            return {
                ...state,
                posts: state.posts.filter(p => p.data.id !== post.data.id)
            };
        },
        clearPosts: (state) => {
            return {
                ...state,
                posts: []
            };
        },
        selectPosts: (state) => {
            return state.posts;
        }
    }
});

export const { addPost, removePost, clearPosts, selectPosts } = postsSlice.actions;