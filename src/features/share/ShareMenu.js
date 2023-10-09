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

    return (
        <div className='transparency-container' role="presentation">
            <div className='container share-container'>
                <button onClick={onHidden} aria-label='close' className='close btn'>x</button>
                <h2>Share</h2>
                <input type="text" readOnly value={url} id="share-url"></input>
                <button onClick={copyText} className='btn'>Copy</button>
            </div>
        </div>
    )
}

export default ShareMenu;