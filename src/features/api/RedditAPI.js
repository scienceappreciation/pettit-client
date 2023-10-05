// Mock Data for API
import frontPageData from './pages/frontpage_response.json';
import awwData from './pages/aww_response.json';
import catsData from './pages/cats_response.json';
import dogsData from './pages/dogs_response.json';
import fishData from './pages/fish_response.json';
import guineaPigsData from './pages/guinea_pigs_response.json';

const BASE_URL = "https://reddit.com/";
const SUB_URL = "/r/";

const RedditAPI = {
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
    fetchListing: (url, options) => {
        const BASE_URL_REGEX = /^https:\/\/reddit\.com/g;
        const SUB_URL_REGEX = /\/r\/\w*|\/(?!.)/g;
        const DATA_FORMAT_REGEX = /(?=.+)(\.json)$/g;

        return new Promise((resolve, reject) => {
            const valid_base = BASE_URL_REGEX.test(url);
            const valid_sub = SUB_URL_REGEX.test(url);
            const valid_format = DATA_FORMAT_REGEX.test(url);

            if (!valid_base | !valid_sub | !valid_format) {
                reject(new Response(null, 
                    {
                        status: "400", 
                        statusText: "Malformed URL", 
                    }));
            }

            if (!(options["headers"] && options["headers"]["Content-Type"] === "application/json")) {
                reject(new Response(null, {
                    status: "406",
                    statusText: "Not Acceptable Content Type"
                }));
            }

            if (!(options["method"] && options["method"].toLowerCase() === "get")) {
                reject(new Response(null, {
                    status: "403",
                    statusText: "Forbidden"
                }));
            }

            const sub = url.match(SUB_URL_REGEX)[0].toLowerCase();
            const successful_options = {
                status: 200,
                statusText: "OK",
                headers: new Headers({
                    "Content-Type": "application/json"
                })
            };

            switch(sub) {
                case "/": {
                    resolve(new Response(JSON.stringify(frontPageData), successful_options));
                    break;
                }
                case "/r/awww": {
                    resolve(new Response(JSON.stringify(awwData), successful_options));
                    break;
                }
                case "/r/cats": {
                    resolve(new Response(JSON.stringify(catsData), successful_options));
                    break;
                }
                case "/r/dogs": {
                    resolve(new Response(JSON.stringify(dogsData), successful_options));
                    break;
                }
                case "/r/fish": {
                    resolve(new Response(JSON.stringify(fishData), successful_options));
                    break;
                }
                case "/r/guineapigs": {
                    resolve(new Response(JSON.stringify(guineaPigsData), successful_options));
                    break;
                }
                default: {
                    reject(new Response(null, { status: 404, statusText: "Page not found." }));
                    break;
                }
            }
        });
    }
};

export default RedditAPI;