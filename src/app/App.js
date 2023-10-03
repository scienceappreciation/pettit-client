import React from 'react';

import './App.css';
import Header from '../features/header/Header.js';
import CategoryList from '../features/categories/CategoryList.js';
import PostsContainer from '../features/post/PostsContainer.js';
import Footer from '../features/footer/Footer.js';

import Listing from '../classes/Listing.js';

/* MOCKS */
import frontPageResponse from '../mockData/frontpage_response.json';
import awwResponse from '../mockData/aww_response.json';
import catsResponse from '../mockData/cats_response.json';
import dogsResponse from '../mockData/dogs_response.json';
import fishResponse from '../mockData/fish_response.json';
import guineaPigResponse from '../mockData/guinea_pigs_response.json';

import { useParams } from 'react-router-dom';

const frontPagePosts = new Listing(JSON.stringify(frontPageResponse)).posts;
const awwPosts = new Listing(JSON.stringify(awwResponse)).posts;
const catsPosts = new Listing(JSON.stringify(catsResponse)).posts;
const dogsPosts = new Listing(JSON.stringify(dogsResponse)).posts;
const fishPosts = new Listing(JSON.stringify(fishResponse)).posts;
const guineaPosts = new Listing(JSON.stringify(guineaPigResponse)).posts;

const posts = {
  "Awww": awwPosts,
  "Cats": catsPosts,
  "Dogs": dogsPosts,
  "Fish": fishPosts,
  "Guineapigs": guineaPosts
}

// Mock Remaining Categories

// TODO: Write CSS

function App() {
  const { subreddit } = useParams();
  

  return (
    <main>
      <Header />
      <CategoryList />
      <PostsContainer posts={posts[subreddit] || frontPagePosts} />
      <Footer />
    </main> 
  );
}

export default App;
