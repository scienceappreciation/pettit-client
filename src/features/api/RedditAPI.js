const RedditAPI = {
    BASE_URL: "https://www.reddit.com",
    SUB_URL: "/r/",
    POST_BASE: "/comments/",

    // Format is as follows for posts <BASE_URL> <SUB_URL> <SUBREDDIT> <POST_BASE> <ID>
    buildPostDataRequest: async (subreddit, post_id) => {
        const url = `${this.BASE_URL}${this.SUB_URL}${subreddit}${this.POST_BASE}${post_id}.json`;
        const options = { 
            headers: {
                "Content-Type": "application/json"
            },
            method: "GET"
        };
        
        return [url, options];
    },
    // Format is as follows for subreddits <BASE_URL> <SUB_URL> <SUBREDDIT>
    buildListingDataRequest: async (subreddit="") => { 
        const url = `${this.BASE_URL}${subreddit.length ? this.SUB_URL + subreddit : ""}.json`;
        const options = {
            headers: {
                "Content-Type": "application/json"
            },
            method: "GET"
        };

       return [url, options]
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
}

export default RedditAPI;