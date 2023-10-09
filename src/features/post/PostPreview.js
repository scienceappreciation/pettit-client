import React from 'react';
import { Link } from 'react-router-dom';

import './PostPreview.css';
import ShareButton from '../share/ShareButton';

import upvote_icon from './upvote.png';

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
                        <img src={upvote_icon} className='upvote-icon' alt="upvotes" />
                        <text className='upvote-text'>{upvotes}</text>
                    </li>
                    <li>
                        <ShareButton url={postSource} />
                    </li>
                </ul>
            </article>
        </div>
    );
}

export default PostPreview;