import React from 'react';

function Post({title, body, flares, author, upvotes, comments, timestamp, sub}) {

    function renderComments(elements) {
        let result = [];
        for (const comment of elements) {
            result.push(comment);
        }
        return result;
    }

    return (
        <article className='border-container'>
            <h2>{title}</h2>
            <ul className='meta-container'>
                <li>
                    <div className='sub-meta'>
                        {sub}
                        {timestamp}
                        {`by ${author}`}
                    </div>
                </li>
                <li>
                    <img src='REPLACE-ME' alt="upvotes " />
                    {upvotes}
                </li>
                <li>
                    <a href="#">Share</a>
                </li>
            </ul>
            <div className='border-container'>
                <ul className='flare-container'>
                    {flares}
                </ul>
                {body}
            </div>
            {renderComments(comments)}
        </article>
    );
}

export default Post;