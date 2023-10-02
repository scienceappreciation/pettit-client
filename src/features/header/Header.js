import React from 'react';
import SearchBar from './SearchBar.js';

function Header() {
    return (
        <header className='container'>
            <h1>Pettit</h1>
            <SearchBar />
        </header>
    );
}

export default Header;