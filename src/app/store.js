import { configureStore } from '@reduxjs/toolkit';
import { postsSlice } from '../features/post/postsSlice';
import { apiSlice } from '../features/api/apiSlice';
import { pagesSlice } from './pagesSlice';

export const store = configureStore({
  reducer: {
    "posts": postsSlice.reducer,
    "api": apiSlice.reducer,
    "pages": pagesSlice.reducer
  }
});
