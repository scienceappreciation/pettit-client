import React from 'react';
import PostPreview from './PostPreview.js';

function PostsContainer({ posts }) {
    function renderPosts() {
        if (!posts.length) return false;

        let result = [];
        posts.forEach((post, index) => {
            result.push(<PostPreview key={`post_${index}`} postId={post.id} title={post.title} body={post.content} author={post.author} upvotes={post.upvotes} subreddit={post.subreddit}/>)
        });
        return result;
    }


    return (
        <div className='container'>
            { renderPosts() || 'Sorry! Nothing here to show.'  }
        </div>
    );
}

export default PostsContainer;