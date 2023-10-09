import React, { useState } from 'react';

import { Outlet, useParams } from 'react-router-dom';

import './App.css';
import '../features/post/Post.css';

import Header from '../features/header/Header.js';
import CategoryList from '../features/categories/CategoryList.js';
import Footer from '../features/footer/Footer.js';



function App() {

  return (
    <main>
      <Header />
      <CategoryList />
      <Outlet />
      <Footer />
    </main> 
  );
}

export default App;
