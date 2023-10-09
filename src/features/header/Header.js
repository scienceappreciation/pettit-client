import React from 'react';
import './Header.css';

function Header() {
    return (
        <header className='header'>
            <a class="aria-btn" href="#main-content">Skip to Main Content</a>
            <span className='demo-mark'>Static Demo</span>
            <span className='spacer'></span>
            <h1 className='title'>Pettit</h1>
            <span className='spacer'></span>
        </header>
    );
}

export default Header;