import React from 'react';

function PostPreview({ title, body, author, upvotes }) {
    return (
        <article className='border-container'>
            <h2>{title}</h2>
            <div className='border-container'>
                {body.text}
                {body.image_src.length > 0 ? <img alt={title} src={body.image_src} /> : ""}
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
                    <a href="#">Share</a>
                </li>
            </ul>
        </article>
    );
}

export default PostPreview;