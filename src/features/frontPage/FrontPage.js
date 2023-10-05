import React, { useEffect, useState } from "react";
import PostsContainer from "../post/PostsContainer";
import RedditAPI from "../api/RedditAPI";
import { cachePageOrder, selectPages } from "../../app/pagesSlice";
import { selectPosts } from "../post/postsSlice";
import { useDispatch, useSelector } from "react-redux";
import Listing from "../../classes/Listing";
import { getPostById } from "../../util/Cache";
import PostData from "../../classes/PostData";

function FrontPage() {
    const [ currentPosts, setCurrentPosts ] = useState([]);
    const [ rateLimited, setRateLimited ] = false;

    const dispatch = useDispatch();
    const cache = useSelector(selectPosts);
    const pages = useSelector(selectPages);


    useEffect(() => {
        (async () => {
            let data = [];
            // Check if Rate Limited

            if (!rateLimited) {
                // Make a request
                const [url, options] = RedditAPI.buildListingDataRequest();
                await fetch(url, options).then(async res => {
                    // Cache Post IDs
                    const json = await res.json();
                    const listing = new Listing(JSON.stringify(json));

                    const post_ids = [];
                    for (const post of listing.posts) {
                        post_ids.push(post.data.id);
                    }

                    dispatch(cachePageOrder({ identifier: "/", ids: post_ids }))

                    // TEMP
                    setRateLimited(true);
                });
            }
            
            // Retrieve IDs from Cache
            data = pages;
            
        
            // Sort Post IDs into individual PostData objects
            const postData = [];
            for (const id of data) {
                const cachedPost = getPostById(cache, id);
                postData.push(new PostData(JSON.stringify(cachedPost)));
            }

            // Pass Posts to PostsContainer
            setCurrentPosts(() => postData);
        });

    }, [cache]);


    return(
    <>
        <PostsContainer posts={currentPosts} />
    </>);
}

export default FrontPage;