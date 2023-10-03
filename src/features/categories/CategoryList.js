import React from 'react';
import CategoryItem from './CategoryItem.js';

function CategoryList() {
    return (
        <nav className='container'>
            <CategoryItem icon="https://www.redditinc.com/assets/images/site/reddit-logo.png" sub="/" label="Reddit" />
        </nav>
    );
}

export default CategoryList;