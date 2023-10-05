import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store.js';
import App from './app/App';
import reportWebVitals from './reportWebVitals';
import './index.css';

import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from 'react-router-dom';
import Feed from './app/Feed.js';
import FrontPage from './features/frontPage/FrontPage.js';

const container = document.getElementById('root');
const root = createRoot(container);

const router = createBrowserRouter(createRoutesFromElements(
      <Route path="/" element={<App />}>
        <Route path="/" element={<FrontPage />} index/>
        <Route path="/:subreddit" element={<Feed />} index/> 
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
