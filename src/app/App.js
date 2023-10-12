import React from 'react';

import { Outlet } from 'react-router-dom';

import './App.css';
import '../features/post/Post.css';

import Header from '../features/header/Header.js';
import CategoryList from '../features/categories/CategoryList.js';
import Footer from '../features/footer/Footer.js';



function App() {

  return (
    <>
      <Header />
      <CategoryList />
      <main id="main-content">
        <Outlet/>
      </main>
      <Footer />
    </> 
  );
}

export default App;
