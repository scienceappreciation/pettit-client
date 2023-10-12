import React from 'react';
import './Header.css';

function Header() {
    return (
        <header className='header'>
            <a className="aria-btn" role="button" href="#main-content" aria-label="skip-to-content" id="content-skip">Skip to Main Content</a>
            <span className='demo-mark' role='note' aria-label='demo-mark'>Demo</span>
            <h1 className='title' aria-label='title'>Pettit</h1>
        </header>
    );
}

export default Header;