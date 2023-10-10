import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className='footer'>
            <p>
                2023 &copy; Cole Hale. All rights reserved.
                <a className="btn" href="#root">Back to Top</a>
            </p>
        </footer>
    );
}

export default Footer;