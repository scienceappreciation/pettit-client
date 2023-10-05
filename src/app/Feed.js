import React from 'react';
import { useOutletContext } from 'react-router-dom';

import PostsContainer from '../features/post/PostsContainer.js';

function Feed() {
    const [ posts, subreddit ] = useOutletContext();

    return (<>
    <PostsContainer posts={posts[subreddit]} />
    </>);
}

export default Feed;