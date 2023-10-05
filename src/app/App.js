import React from 'react';

import { Outlet, useParams } from 'react-router-dom';

import './App.css';
import './Post.css';

import Header from '../features/header/Header.js';
import CategoryList from '../features/categories/CategoryList.js';
import Footer from '../features/footer/Footer.js';



/* TODO: API Wrapper */
/* TODO: Fix Store */
/* TODO: Advanced Styling for Links and Images */

function App() {
  const { subreddit } = useParams();

  return (
    <main>
      <Header />
      <CategoryList />
        <Outlet context={[subreddit]} />
      <Footer />
    </main> 
  );
}

export default App;
