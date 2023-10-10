import { configureStore } from '@reduxjs/toolkit';
import { postsSlice } from '../features/post/postsSlice';
import { pagesSlice } from '../features/pages/pagesSlice';

export const store = configureStore({
  reducer: {
    "posts": postsSlice.reducer,
    "pages": pagesSlice.reducer
  }
});
