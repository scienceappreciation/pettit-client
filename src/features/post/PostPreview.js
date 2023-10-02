import React from 'react';

function PostPreview() {
    return (
        <article className='border-container'>
            <h2>{title}</h2>
            <div className='border-container'>
                {body}
            </div>
            <ul className='meta-container'>
                <li>
                    <img src={authorIcon} alt={`${author}'s avatar`} role="presentation" />
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