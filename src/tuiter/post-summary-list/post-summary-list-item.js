import React from "react";

const PostSummaryItem = ({post}) => {
    return(
        <li className="list-group-item">
            <div className="row">
                <div className="col-10">
                    <div><span className="fw-bolder">{post.username}</span> &#183; {post.time}</div>
                    <div>{post.handle}</div>
                    <div>{post.title}</div>
                </div>
                <div className="col-2">
                    <img width={70} className="float-end rounded-3" src={`/images/${post.image}`}/>
                </div>
            </div>
        </li>
    );
};
export default PostSummaryItem;