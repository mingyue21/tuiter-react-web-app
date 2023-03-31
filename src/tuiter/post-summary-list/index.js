import React from "react";
import PostSummaryItem from "./post-summary-list-item";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { findTuitsThunk } from "../../services/tuits-thunks";
import { useEffect } from "react";

const PostSummaryList = () => {
    const postsArray = useSelector(state => state.tuitsData.tuits);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findTuitsThunk())
    }, []);
    
    return(
        <ul className="list-group">
            {
                postsArray.map(post =>
                    <PostSummaryItem
                        key={post._id} post={post}/> )
            }
        </ul>
    );
};
export default PostSummaryList;