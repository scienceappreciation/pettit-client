import React from 'react';
import { Link } from 'react-router-dom';

import './PostPreview.css';

function PostPreview({ title, body, author, upvotes,  postSource}) {
    return (
        <div role="presentation" className='post-preview'>
            <article className='border-container'>
                <h2>
                    <Link to={postSource} target='_blank'>
                        {title}
                    </Link>
                </h2>
                <div>
                    {body.text}
                    {body.image_src.length > 0 ? <img className='post-image' alt={title} src={body.image_src} /> : ""}
                </div>
                <ul className='meta-container'>
                    <li>
                        {author}
                    </li>
                    <li>
                        <img src='REPLACE-ME' alt="upvotes" />
                        {upvotes}
                    </li>
                    <li>
                        <a href="#" className='share-button'>Share</a>
                    </li>
                </ul>
            </article>
        </div>
    );
}

export default PostPreview;