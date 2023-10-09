import React, { useEffect, useState } from "react";
import PostsContainer from "../post/PostsContainer";
import RedditAPI from "../api/RedditAPI";
import { cachePageOrder, selectPages } from "./pagesSlice";
import { selectPosts, addPost, clearPosts } from "../post/postsSlice";
import { useDispatch, useSelector } from "react-redux";
import Listing from "../../classes/Listing";
import { getPostById } from "../../util/Cache";
import PostData from "../../classes/PostData";
import Error from "./Error/Error";

function FrontPage() {
    const [ currentPosts, setCurrentPosts ] = useState([]);
    const [ rateLimited, setRateLimited ] = useState(false);

    const [ hasError, setHasError ] = useState(false);

    const dispatch = useDispatch();
    const { posts } = useSelector(selectPosts).payload;
    const { pages }  = useSelector(selectPages).payload;

    // TODO: Simulate Network Conditions

    useEffect(() => {
        setHasError(() => false);

        const fetchData = async () => {
            if (!rateLimited) {
                // Clear cache to avoid filling it up
                dispatch(clearPosts());

                // Retrieve & Handle Mock API Response
                const { url, options } = RedditAPI.buildListingDataRequest();

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

                    dispatch(cachePageOrder({ identifier: "/", ids: post_ids }));

                    setCurrentPosts(() => posts);
                })
                .catch(e => {
                    console.log(e);
                    setHasError(() => true);
                });
            } else {
                // Retrieve IDs from Cache
                 if (!pages["/"].length) return;
        
                // Convert Post IDs into individual PostData objects
                const postData = [];
                for (const id of pages["/"]) {
                    const cachedPost = getPostById(posts, id);
                    postData.push(new PostData(cachedPost));
                }

                // Pass Posts to PostsContainer
                 setCurrentPosts(() => postData);
                }
        };

        fetchData();

    }, []);

    if (hasError) {
        return <Error error={"503 Unavailable?"}/>
    }

    return(
    <>
        <PostsContainer posts={currentPosts} />
    </>);
}

export default FrontPage;