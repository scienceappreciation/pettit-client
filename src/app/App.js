import React from 'react';
import './App.css';
import Header from '../features/header/Header.js';
import CategoryList from '../features/categories/CategoryList.js';
import PostsContainer from '../features/post/PostsContainer.js';
import Footer from '../features/footer/Footer.js';

import Listing from '../classes/Listing.js';
import frontPageResponse from '../mockData/frontpage_response.json';

const posts = new Listing(frontPageResponse).posts;

// TODO: Set up routes

// TODO: Write CSS

function App() {
  return (
    <>
      <Header />
      <CategoryList />
      <PostsContainer posts={posts} />
      <Footer />
    </> 
  );
}

export default App;
