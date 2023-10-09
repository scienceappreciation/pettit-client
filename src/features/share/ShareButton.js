import React, { useState } from 'react';
import ShareMenu from './ShareMenu';

import './Share.css';

function ShareButton({ url }) {

    const [menuShown, setMenuShown] = useState(false);

    function onHide(e) {
        setMenuShown(() => false);
    }

    function onShare(e) {
        setMenuShown(() => true);
        
    }

    return (
    <>
         { menuShown && <ShareMenu url={url} onHidden={onHide} /> }
        <button className='btn' onClick={onShare}>
             Share
        </button>
    </>);
}

export default ShareButton;