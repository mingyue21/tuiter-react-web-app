import React from 'react';
import { useDispatch } from 'react-redux';
import { likedToggle } from './tuits-reducer';

const TuitStats = ({post}) => {
    const dispatch = useDispatch();
    const likedToggleHandler = (id) => {
        dispatch(likedToggle(id));
    }

    return (
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
    )
}

export default TuitStats;