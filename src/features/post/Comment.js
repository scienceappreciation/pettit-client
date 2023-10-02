import React from 'react';

function Comment({author, authorIcon, content, upvotes, timestamp}) {
    return (
        <div className='container'>
            <p>{content}</p>
            <ul className='meta-container'>
                <li>
                    <img src={authorIcon} alt={`${author}'s avatar`} role="presentation" />
                    {author}
                </li>
                <li>
                    {timestamp}
                </li>
                <li>
                    <img src="REPLACE-ME" alt="upvotes" />
                    {upvotes}
                </li>
                <li>
                    <a href="#">Share</a>
                </li>
            </ul>

        </div>
    );
}

export default Comment;