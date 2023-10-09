import React, { useState } from 'react';

import { Outlet, useParams } from 'react-router-dom';

import './App.css';
import '../features/post/Post.css';

import Header from '../features/header/Header.js';
import CategoryList from '../features/categories/CategoryList.js';
import Footer from '../features/footer/Footer.js';



function App() {
  const { error, setError } = useState(200);

  return (
    <main>
      <Header />
      <CategoryList />
        <Outlet context={[error, setError]} />
      <Footer />
    </main> 
  );
}

export default App;
