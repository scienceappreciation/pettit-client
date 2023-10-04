import React from 'react';
import { useOutletContext, useParams } from 'react-router-dom';

import PostsContainer from '../features/post/PostsContainer.js';

function Feed() {
    const { subreddit } = useParams();
    const [ posts, defaultPosts ] = useOutletContext();

    return (<>
    <PostsContainer posts={posts[subreddit] || defaultPosts} />
    </>);
}

export default Feed;