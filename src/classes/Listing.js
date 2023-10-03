/* This class serves as documentation for the Reddit JSON API and may not always be used within the app. */

class Listing {
    constructor(json=JSON.stringify({ "kind": "Listing", "data": {} })) {
        const listing = JSON.parse(json);
        this.kind = listing.kind;
        const data = listing.data;

        this.data.after = data || null;
        this.data.dist = data.dist || 0;
        this.data.modhash = data.modhash || "";
        this.data.geo_filter = data.geo_filter || null;
        this.data.children = data.children || [];
    }

    get posts() {
        return this.data.children;
    }
}

export default Listing;