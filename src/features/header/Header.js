import React from 'react';
import './Header.css';

function Header() {
    return (
        <header className='header'>
            <a class="aria-btn" href="#main-content" id="content-skip">Skip to Main Content</a>
            <span className='demo-mark'>Demo</span>
            <h1 className='title'>Pettit</h1>
        </header>
    );
}

export default Header;