/* This class serves as documentation for the Reddit JSON API and may not always be used within the app. */
import PostData from './PostData.js';

class Listing {
    constructor(json=JSON.stringify({ "kind": "Listing", "data": {} })) {
        const listing = JSON.parse(json);
        this.kind = listing.kind;
        const data = listing.data;
        this.data = {};
        this.data.after = data || null;
        this.data.dist = data.dist || 0;
        this.data.modhash = data.modhash || "";
        this.data.geo_filter = data.geo_filter || null;
        this.data.children = data.children || [];
    }

    get posts() {
        let posts = [];
        for (const post of this.data.children) {
            posts.push(new PostData(JSON.stringify(post)));
        }
        return posts;
    }

    asObject() {
        return { "kind": this.kind, "data": this.data };
    }
}

export default Listing;