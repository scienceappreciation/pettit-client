import React from 'react';
import './App.css';
import Header from '../features/header/Header.js';
import CategoryList from '../features/categories/CategoryList.js';
import PostsContainer from '../features/post/PostsContainer.js';
import Footer from '../features/footer/Footer.js'

// TODO: Mock Data

// TODO: Set up routes

// TODO: Write CSS

function App() {
  return (
    <>
      <Header />
      <CategoryList />
      <PostsContainer posts="" />
      <Footer />
    </> 
  );
}

export default App;
