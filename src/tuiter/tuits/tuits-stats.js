import React from 'react';
import { useDispatch } from 'react-redux';
import { updateTuitThunk } from '../../services/tuits-thunks';

const TuitStats = ({post}) => {
    const dispatch = useDispatch();

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
                <a href="#" className="wd-bookmark-post-icon-pair wd-color-lightgray" 
                    onClick={() => dispatch(updateTuitThunk({
                        ...post,
                        likes: post.liked ? post.likes - 1 : post.likes + 1,
                        liked: !post.liked
                    }))}>
                    {post.liked ? <i className="bi bi-heart-fill wd-color-red"></i> : <i className="bi bi-heart"></i>}
                    <div className="wd-bookmark-post-icon-number">{post.likes}</div>
                </a>
            </div>

            <div className="wd-bookmark-post-icon-item">
                <a href="#" className="wd-bookmark-post-icon-pair wd-color-lightgray" 
                    onClick={() => dispatch(updateTuitThunk({
                        ...post,
                        dislikes: post.disliked ? post.dislikes - 1 : post.dislikes + 1,
                        disliked: !post.disliked
                    }))}>
                    {post.disliked ? <i className="bi bi-hand-thumbs-down-fill"></i> : <i className="bi bi-hand-thumbs-down"></i>}
                    <div className="wd-bookmark-post-icon-number">{post.dislikes}</div>
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