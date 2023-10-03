import React from 'react';
import SearchBar from './SearchBar.js';
import './Header.css';

function Header() {
    return (
        <header className='container header'>
            <span className='spacer'></span>
            <h1 className='h1'>Pettit</h1>
            <span className='spacer'></span>
            <SearchBar />
        </header>
    );
}

export default Header;