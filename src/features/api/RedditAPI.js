import PostData from "../../classes/PostData";
import Listing from "../../classes/Listing";

const BASE_URL = "https://api.reddit.com";
const SUB_URL = "/r/";
const POST_BASE = "/comments/";

const RedditAPI = {
    // Format is as follows for posts <BASE_URL> <SUB_URL> <SUBREDDIT> <POST_BASE> <ID>
    buildPostDataRequest: (subreddit, post_id) => {
        const url = `${BASE_URL}${SUB_URL}${subreddit}${POST_BASE}${post_id}`;
        const options = { 
            headers: {
                "Content-Type": "application/json"
            },
            method: "GET"
        };
        
        return {url, options};
    },
    // Format is as follows for subreddits <BASE_URL> <SUB_URL> <SUBREDDIT>
    buildListingDataRequest: (subreddit="") => { 
        const url = `${BASE_URL}${subreddit ? SUB_URL + subreddit : ""}`;
        const options = {
            headers: {
                "Content-Type": "application/json"
            },
            method: "GET"
        };

       return { url, options };
    },
    parsePost: async (res) => {
        const json = await res.json();
        const data = new PostData(JSON.stringify(json));
        return data;
    },
    parseListing: async (res) => {
        const json = await res.json();
        const data = new Listing(JSON.stringify(json));
        return data;
    }
};

export default RedditAPI;