import { createSlice } from '@reduxjs/toolkit';

export const pagesSlice = createSlice({
    name: 'pages',
    initialState: {
        "/": [] // Front Page
    },
    reducers: {
        cachePageOrder: (state, action) => {
            const { identifier, ids } = action.payload;
            return {
                ...state,
                [identifier]: ids
            };
        },
        selectPages: (state) => {
            return state;
        }
    }
});

export const { cachePageOrder, selectPages } = pagesSlice.actions;