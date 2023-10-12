import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <footer className='footer'>
            <p>
                2023 &copy; Cole Hale. All rights reserved.
                <a className="btn" role="button" aria-label='to-top' href="#root">Back to Top</a>
            </p>
        </footer>
    );
}

export default Footer;