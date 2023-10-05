/* This class serves as documentation for the Reddit JSON API and may not always be used within the app. */

class PostData {
    constructor(json=JSON.stringify({ "kind": "t3", "data": {} })) {
        const post = JSON.parse(json);
        const data = post.data;

        this.kind = post.kind || "";
        this.data = {};
        this.data.approved_at_utc = data.approved_at_utc || null;
        this.data.subreddit = data.subreddit || "";
        this.data.selftext = data.selftext || "";
        this.data.user_reports = data.user_reports || [];
        this.data.saved = data.saved || false;
        this.data.mod_reason_title = data.mod_reason_title || null;
        this.data.gilded = data.gilded || 0;
        this.data.clicked = data.clicked || false;
        this.data.title = data.title || "";
        this.data.link_flair_richtext = data.link_flair_richtext || [];
        this.data.subreddit_name_prefixed = data.subreddit_name_prefixed || "";
        this.data.hidden = data.hidden || false;
        this.data.pwls = data.pwls || 0;
        this.data.link_flair_css_class = data.link_flair_css_class || null;
        this.data.downs = data.downs || 0;
        this.data.thumbnail_height = data.thumbnail_height || 0;
        this.data.top_awarded_type = data.top_awarded_type || null;
        this.data.hide_score = data.hide_score || false;
        this.data.name = data.name || "";
        this.data.quarantine = data.quarantine || false;
        this.data.link_flair_text_color = data.link_flair_text_color || "";
        this.data.upvote_ratio = data.upvote_ratio || 0;
        this.data.author_flair_background_color = data.author_flair_background_color || "";
        this.data.author_fullname = data.author_fullname || null;
        this.data.subreddit_type = data.subreddit_type || "";
        this.data.ups = data.ups || 0;
        this.data.total_awards_received = data.total_awards_received || 0;
        this.data.media_embed = data.media_embed || {};
        this.data.thumbnail_width = data.thumbnail_width || 0;
        this.data.author_flair_template_id = data.author_flair_template_id || null;
        this.data.is_original_content = data.is_original_content || false;
        this.data.secure_media = data.secure_media || null;
        this.data.is_reddit_media_domain = data.is_reddit_media_domain || false;
        this.data.is_meta = data.is_meta || false;
        this.data.category = data.category || null;
        this.data.secure_media_embed = data.secure_media_embed || {};
        this.data.link_flare_text = data.link_flare_text || null;
        this.data.can_mod_post = data.can_mod_post || false;
        this.data.score = data.score || 0;
        this.data.approved_by = data.approved_by || null;
        this.data.is_created_from_ads_ui = data.is_created_from_ads_ui
        this.data.thumbnail = data.thumbnail || "";
        this.data.edited = data.edited || false;
        this.data.author_flair_css_class = data.author_flair_css_class || null;
        this.data.gildings = data.gildings || {};
        this.data.post_hint = data.post_hint || "";
        this.data.content_categories = data.content_categories || null
        this.data.is_self = data.is_self || false;
        this.data.mod_note = data.mod_note || null;
        this.data.created = data.created || Date.now();
        this.data.link_flare_type = data.link_flare_type || "text";
        this.data.wls = data.wls || 0;
        this.data.removed_by_category = data.removed_by_category || null;
        this.data.banned_by = data.banned_by || null;
        this.data.domain = data.domain || "";
        this.data.allow_live_comments = data.allow_live_comments || false;
        this.data.selftext_html = data.selftext_html || null;
        this.data.likes = data.likes || null;
        this.data.suggested_sort = data.suggested_sort || "confidence";
        this.data.banned_at_utc = data.banned_at_utc || null;
        this.data.url_overridden_by_dest = data.url_overridden_by_dest || "";
        this.data.view_count = data.view_count || null;
        this.data.archived = data.archived || false;
        this.data.no_follow = data.no_follow || false;
        this.data.is_crosspostable = data.is_crosspostable || false;
        this.data.pinned = data.pinned || false;
        this.data.over_18 = data.over_18 || false;

        this.data.preview = data.preview || {
            images: [],
            enabled: false,
        }

        this.data.all_awardings = data.all_awardings || [];
        this.data.awarders = data.awarders || [];
        this.data.media_only = data.media_only || false;
        this.data.can_gild = data.can_gild || false;
        this.data.spoiler = data.spoiler || false;
        this.data.locked = data.locked || false;
        this.data.author_flair_text = data.author_flair_text || null;
        this.data.treatment_tags = data.treatment_tags || null;
        this.data.visited = data.visited || false;
        this.data.removed_by = data.removed_by || null;
        this.data.num_reports = data.num_reports || null;
        this.data.distinguished = data.distinguished || null;
        this.data.subreddit_id = data.subreddit_id || "";
        this.data.author_is_blocked = data.author_is_blocked || false;
        this.data.mod_reason_by = data.mod_reason_by || null;
        this.data.removal_reason = data.removal_reason || null;
        this.data.link_flair_background_color = data.link_flair_background_color || "";
        this.data.id = data.id || "";
        this.data.is_robot_indexable = data.is_robot_indexable || false;
        this.data.report_reasons = data.report_reasons || null;
        this.data.author = data.author || "[deleted]";
        this.data.discussion_type = data.discussion_type || null;
        this.data.num_comments = data.num_comments || 0;
        this.data.send_replies = data.send_replies || false;
        this.data.whitelist_status = data.whitelist_status || "";
        this.data.contest_mode = data.contest_mode || false;
        this.data.mod_reports = data.mod_reports || [];
        this.data.author_flair_text_color = data.author_flair_text_color || "";
        this.data.permalink = data.permalink || null;
        this.data.parent_whitelist_status = data.parent_whitelist_status || "";
        this.data.stickied = data.stickied || false;
        this.data.url = data.url || "";
        this.data.subreddit_subscribers = data.subreddit_subscribers || 0;
        this.data.created_utc = data.created_utc || Date.now();
        this.data.num_crosspoints = data.num_crosspoints || 0;
        this.data.media = data.media || null;
        this.data.is_video = data.is_video || false;
    }

    get subreddit_id() {
        return this.data.subreddit_id;
    }

    get subreddit_name_prefixed() {
        return this.data.subreddit_name_prefixed;
    }

    get subreddit() {
        return this.data.subreddit;
    }

    get created_utc() {
        return this.data.created_utc;
    }

    get author() {
        return this.data.author;
    }

    get upvotes() {
        return this.data.ups;
    }

    get flare_background_color() {
        return this.data.link_flair_background_color;
    }

    get flare_text_color() {
        return this.data.link_flair_text_color;
    }

    get title() {
        return this.data.title;
    }

    get content() {
        return {
          text: this.data.selftext_html || "",
          image_src: this.data.url || ""
        };
    }

    get id() {
        return this.data.id;
    }

    asObject() {
        return {"kind": this.kind, "data": this.data }
    }
}

export default PostData;