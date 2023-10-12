import React from 'react';

import './Share.css';
import '../../app/App.css';

function ShareMenu({ url, onHidden }) {
    function copyText(e) {
        var share_url = document.getElementById("share-url");

        share_url.select();
        share_url.setSelectionRange(0, 99999);

        navigator.clipboard.writeText(share_url.value);

        e.target.innerText = "Copied.";
    }

    function focusTop(e) {
        const close = document.getElementById("share-close");
        close.focus();
    }

    return (
        <div className='transparency-container' role="presentation">
            <div className='container share-container' role="menu" aria-label='Share'>
                <button onClick={onHidden} aria-label='close' className='close btn' tabIndex="1" autoFocus id="share-close">x</button>
                <h2>Share</h2>
                <input type="text" readOnly value={url} id="share-url"tabIndex="2"></input>
                <button onClick={copyText} className='btn' tabIndex="3">Copy</button>
                <div role='presentation' onFocus={focusTop} tabIndex="4"></div>
            </div>
        </div>
    )
}

export default ShareMenu;