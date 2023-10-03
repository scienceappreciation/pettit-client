import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store.js';
import App from './app/App';
import reportWebVitals from './reportWebVitals';
import './index.css';

import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from 'react-router-dom';
import Post from './features/post/Post.js';

const container = document.getElementById('root');
const root = createRoot(container);

const router = createBrowserRouter(createRoutesFromElements(
      <Route path="/" element={<App />}>
        <Route path=":subreddit" element={<App />}> 
          <Route path="post/:id" element={<Post />} />
        </Route>
      </Route>
  ));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
