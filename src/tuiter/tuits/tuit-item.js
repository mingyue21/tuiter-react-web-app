import React from "react";
import "../home/index.css";
import { useDispatch } from "react-redux";
import TuitStats from "./tuits-stats";
import { deleteTuitThunk } from "../../services/tuits-thunks";

const TuitItem = ({post}) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuitThunk(id));
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
                            <span className="fw-bold">{post.username} </span>
                            <i className="bi bi-check-circle-fill wd-font-color-blue"></i>
                            <span className="wd-color-lightgray"> {post.handle} &#183; {post.time}</span>
                            <i className="bi bi-x-lg float-end"
                                onClick={() => deleteTuitHandler(post._id)}></i>
                        </div>
                    </div>

                    <div className="row">
                            <div className="card-text">{post.tuit}</div>
                      
                    </div>

                    <TuitStats post={post}/>
                </div>
            </div>
        </div>
    );
}

export default TuitItem;