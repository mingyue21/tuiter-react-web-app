import PostItem from "./PostItem.js";
import posts from "./posts.js";

const PostList = () => {
    return(`
    <div class="list-group">
        ${posts.map(post => PostItem(post)).join('')}
    </div>
    `);
}

export default PostList;