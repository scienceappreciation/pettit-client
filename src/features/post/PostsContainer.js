import React from 'react';
import PostPreview from './PostPreview.js';

function PostsContainer({ posts }) {
    function renderPosts() {
        let result = [];
        posts.forEach((post, index) => {
            result.push(<PostPreview key={`post_${index}`} title={post.title} body={post.content} author={post.author} upvotes={post.upvotes}/>)
        });
        return result;
    }


    return (
        <div className='container'>
            { renderPosts()  }
        </div>
    );
}

export default PostsContainer;