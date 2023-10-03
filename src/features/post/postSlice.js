import { createSlice } from '@reduxjs/toolkit';

export const postSlice = createSlice({
    name: 'post',
    initialState: {
        postsBySub: {}
    },
    reducers: {
        addPost: (state, action) => {
            
        },
        selectPosts: (state) => {
            return state.postsBySub;
        }
    }
});