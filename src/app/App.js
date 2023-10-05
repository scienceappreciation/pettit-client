import React, { useEffect } from 'react';

import { Outlet, useParams } from 'react-router-dom';

import './App.css';
import './Post.css';

import Header from '../features/header/Header.js';
import CategoryList from '../features/categories/CategoryList.js';
import Footer from '../features/footer/Footer.js';

import Listing from '../classes/Listing.js';

import RedditAPI from '../features/api/RedditAPI';

import { useDispatch, useSelector } from 'react-redux';
import { addPost, selectPosts } from '../features/post/postsSlice';

/* MOCKS */
import frontPageData from '../mockData/frontpage_response.json';
import awwData from '../mockData/aww_response.json';
import catsData from '../mockData/cats_response.json';
import dogsData from '../mockData/dogs_response.json';
import fishData from '../mockData/fish_response.json';
import guineaPigsData from '../mockData/guinea_pigs_response.json';
import PostData from '../classes/PostData';




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
