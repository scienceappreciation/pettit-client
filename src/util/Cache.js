export function filterPostsBySubreddit(posts, subreddit) {
    if (!posts || !posts.length) return [];

    return posts.filter((post => post.data.subreddit === subreddit));
}

export function filterCommentsByPost(comments, name) {
    return comments.filter(comment => comment.data.parent_id === name);
}

export function filterCommentsBySubreddit(comments, subreddit) {
    return comments.filter(comment => comment.data.subreddit === subreddit)
}

export function getPostById(posts, id) {
    if (!posts || !posts.length) return undefined;


    return posts.find(post => post.data.id === id);
}

