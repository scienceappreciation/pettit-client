import React from 'react';
import SearchBar from './SearchBar.js';
import './Header.css';

function Header() {
    return (
        <header className='header'>
            <span className='spacer'></span>
            <h1 className='title'>Pettit</h1>
            <span className='spacer'></span>
            <SearchBar />
        </header>
    );
}

export default Header;