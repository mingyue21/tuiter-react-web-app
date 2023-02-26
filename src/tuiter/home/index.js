import React from "react";
import PostItem from "./post-item";
import postsArray from "./posts.json";


const HomeComponent = () => {
    return(
        <ul className="list-group">
            {
                postsArray.map(post =>
                    <PostItem key={post._id} post={post}/> )
            }
        </ul>
    );
}

export default HomeComponent;