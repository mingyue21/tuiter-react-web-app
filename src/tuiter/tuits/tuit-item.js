import React from "react";
import "../home/index.css";
import { useDispatch } from "react-redux";
import { deleteTuit,likedToggle } from "./tuits-reducer";

const TuitItem = ({post}) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuit(id));
    }
    const likedToggleHandler = (id) => {
        dispatch(likedToggle(id));
    }

    return (
        <div className="list-group-item bg-transparent">
            <div className="row pt-0">
                <div className="col-1">
                    <img className="wd-bookmark-post-avatar" src={`/images/${post.image}`}/>
                </div>

                <div className="col-11 ps-5 pt-2">
                    <div className="row mt-1">
                        <div className="col">
                            <span className="fw-bold">{post.userName} </span>
                            <i className="bi bi-check-circle-fill wd-font-color-blue"></i>
                            <span className="wd-color-lightgray"> {post.handle} &#183; {post.time}</span>
                            <i className="bi bi-x-lg float-end"
                                onClick={() => deleteTuitHandler(post._id)}></i>
                        </div>
                    </div>

                    <div className="row">
                            <div className="card-text">{post.tuit}</div>
                      
                    </div>

                    <div className="row mt-3">
                        <div className="wd-bookmark-post-icon-item">
                            <a href="#" className="wd-bookmark-post-icon-pair wd-color-lightgray">
                                <i className="bi bi-chat"></i>
                                <div className="wd-bookmark-post-icon-number">{post.replies}</div>
                            </a>
                        </div>

                        <div className="wd-bookmark-post-icon-item">
                            <a href="#" className="wd-bookmark-post-icon-pair wd-color-lightgray">
                                <i className="bi bi-repeat"></i>
                                <div className="wd-bookmark-post-icon-number">{post.retuits}</div>
                            </a>
                        </div>

                        <div className="wd-bookmark-post-icon-item">
                            <a href="#" className="wd-bookmark-post-icon-pair wd-color-lightgray" onClick={() => likedToggleHandler(post._id)}>
                                {post.liked ? <i className="bi bi-heart-fill wd-color-red"></i> : <i className="bi bi-heart"></i>}
                                <div className="wd-bookmark-post-icon-number">{post.likes}</div>
                            </a>
                        </div>

                        <div className="wd-bookmark-post-icon-item">
                            <a href="#" className="wd-bookmark-post-icon-pair wd-color-lightgray">
                                <i className="bi bi-upload"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TuitItem;