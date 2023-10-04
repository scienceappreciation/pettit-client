import { createSlice } from '@reduxjs/toolkit';

export const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        posts: [],
        comments: []
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
        },
        addComment: (state, action) => {
            const { comment } = action.payload;
            return {
                ...state,
                comments: [...state.comments, comment]
            };
        },
        removeComment: (state, action) => {
            const { id } = action.payload;
            return {
                ...state,
                comments: state.comments.filter(comment => comment.data.id !== id)
            };
        },
        clearComments: (state) => {
            return {
                ...state,
                comments: []
            };
        },
        selectComments: (state) => {
            return state.comments
        }
    }
});

export const { addPost, removePost, clearPosts, selectPosts } = postsSlice.actions;