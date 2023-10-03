import React from 'react';
import PostPreview from './PostPreview.js';

function PostsContainer({ posts }) {
    function renderPosts() {
        let result = [];
        for (const post of posts) {
            result.push(<PostPreview title={post.title} body={post.content} author={post.author} upvotes={post.upvotes}/>)
        }
        return result;
    }


    return (
        <div className='container'>
            { renderPosts()  }
        </div>
    );
}

export default PostsContainer;