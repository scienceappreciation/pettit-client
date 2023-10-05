import { createSlice } from '@reduxjs/toolkit';

export const pagesSlice = createSlice({
    name: 'pages',
    initialState: {
        "/": [] // Front Page
    },
    reducers: {
        increaseRequests: (state, action) => {
            return {
                ...state,
                requests: state.requests + action.payload.increase
            };
        },
        resetRequests: (state, action) => {
            return {
                ...state,
                requests: 0
            }
        },
        selectRequests: (state) => {
            return state.requests
        },
        cachePageOrder: (state, action) => {
            const { identifier, ids } = action.payload;
            return {
                ...state,
                [identifier]: ids
            };
        }
    }
});

export const { increaseRequests, resetRequests, selectRequests, cachePageOrder } = pagesSlice.actions;