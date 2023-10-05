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
    const [ rateLimited, setRateLimited ] = useState(false);

    const dispatch = useDispatch();
    const { posts } = useSelector(selectPosts);
    const { pages } = useSelector(selectPages);


    useEffect(() => {
        const fetchData = async () => {
            if (!rateLimited) {
                // Retrieve & Handle Mock API Response
            }
            
            // Retrieve IDs from Cache
            if (!pages) return;
        
            // Sort Post IDs into individual PostData objects
            const postData = [];
            for (const id of pages) {
                const cachedPost = getPostById(posts, id);
                postData.push(new PostData(cachedPost));
            }

            // Pass Posts to PostsContainer
            setCurrentPosts(() => postData);
        };

        fetchData();

    }, [posts, pages, dispatch, rateLimited]);


    return(
    <>
        <PostsContainer posts={currentPosts} />
    </>);
}

export default FrontPage;