import React, { useEffect, useState } from "react";
import PostsContainer from "../post/PostsContainer";
import RedditAPI from "../api/RedditAPI";
import { cachePageOrder, selectPages } from "./pagesSlice";
import { selectPosts, addPost, clearPosts } from "../post/postsSlice";
import { useDispatch, useSelector } from "react-redux";
import Listing from "../../classes/Listing";
import { getPostById } from "../../util/Cache";
import PostData from "../../classes/PostData";
import { useParams, Navigate, useOutletContext } from "react-router-dom";

function Feed() {
    const [ currentPosts, setCurrentPosts ] = useState([]);
    const [ notFound, setNotFound ] = useState(false);
    const [ error, setError ] = useOutletContext();
    const [ rateLimited, setRateLimited ] = useState(false);

    const dispatch = useDispatch();
    const { subreddit } = useParams();
    const { posts } = useSelector(selectPosts).payload;
    const { pages }  = useSelector(selectPages).payload;

    // TODO: Simulate Network Conditions

    useEffect(() => {
        setNotFound(() => false);
        const fetchData = async () => {
            if (!rateLimited) {
                // Clear cache to avoid filling it up
                dispatch(clearPosts());

                // Retrieve & Handle Mock API Response
                const { url, options } = RedditAPI.buildListingDataRequest(subreddit);

                await RedditAPI.fetchListing(url, options)
                .then(async res => {
                    const json = await res.json();
                    const listing = new Listing(json);
                    const posts = listing.posts;

                    const post_ids = [];

                    for (const post of posts) {
                        post_ids.push(post.id);
                        dispatch(addPost({ "post": post.asObject() }));
                    }

                    dispatch(cachePageOrder({ identifier: subreddit, ids: post_ids }));

                    setCurrentPosts(() => posts);
                })
                .catch(reason => {
                    if (reason.status === 404) {
                        setNotFound(() => true);
                    }
                });
            } else {
                // Retrieve IDs from Cache
                 if (!pages[subreddit] || !pages[subreddit].length) return;
        
                // Convert Post IDs into individual PostData objects
                const postData = [];
                for (const id of pages[subreddit]) {
                    const cachedPost = getPostById(posts, id);
                    postData.push(new PostData(cachedPost));
                }

                // Pass Posts to PostsContainer
                 setCurrentPosts(() => postData);
                }
        };

        fetchData();

    }, [subreddit]);

    if (notFound) {
        setError(() => "404 Not Found")
        return <Navigate to="/error" replace/>
    }
    return(
    <>  
        <PostsContainer posts={currentPosts} />
    </>);
}

export default Feed;