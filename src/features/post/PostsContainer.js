import React from 'react';

function PostsContainer({posts}) {
    function renderPosts(elements) {
        let result = [];
        for (const post of elements) {
            result.push(post);
        }
        return result;
    }

    return (
        <div className='container'>
            { renderPosts(posts) }
        </div>
    );
}

export default PostsContainer;