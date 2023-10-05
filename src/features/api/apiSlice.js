import { createSlice } from '@reduxjs/toolkit';

export const apiSlice = createSlice({
    name: 'api',
    initialState: {
        requests: 0,
    },
    reducers: {
        increaseRequests: (state, action) => {
            return {
                ...state,
                requests: state.requests + action.payload.increase
            };
        },
        decreaseRequests: (state, action) => {
            return {
                ...state,
                requests: state.requests - action.payload.decrease
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
        }
    }
});

export const { increaseRequests, decreaseRequests, resetRequests } = apiSlice.actions;