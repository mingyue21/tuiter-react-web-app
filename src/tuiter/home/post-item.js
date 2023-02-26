import React from "react";
import "./index.css";

const PostItem = (
    {
        post = {
            "_id": 123,
            "avatarIcon": 'elonmusk.jpg',
            "userName": 'Elon Musk',
            "handle": 'elonmusk',
            "time": '23h',
            "mainContent": (<>Amazing show about{" "}<span className="wd-font-color-blue">@Inspiration</span> mission!</>),
            "image": 'inspiration4x.jpg',
            "imageTitle": 'Countdown: Inspiration4 Mission to Space | Netflix Official site',
            "imageContent": 'From training to launch to landing, this all-access docuseries rides along with the Inspiration4 crew on the first all-civilian orbital space ...',
            "link": 'netflix.com',
            "reply": '4.2k',
            "repost": '3.5k',
            "like": '37.5k',
            "retuited": "Donald Trump",
            "show": "Show this thread"
        }
    }
    ) => {
    const data = post.mainContent;

    return (
        <div className="list-group-item bg-transparent">
            {post.retuited ? (
                <div className="col ms-5 wd-margin-bottom-minus-5-em">
                    <i className="bi bi-repeat"></i>
                    <span className="fw-bold wd-color-lightgray"> {post.retuited} Retuited</span>
                </div>
            ) : ''}

            <div className="row pt-0">
                <div className="col-1">
                    <img className="wd-bookmark-post-avatar" src={`/images/${post.avatarIcon}`}/>
                </div>

                <div className="col-11 ps-5 pt-2">
                    <div className="row mt-1">
                        <div className="col">
                            <span className="fw-bold">{post.userName} </span>
                            <i className="bi bi-check-circle-fill wd-font-color-blue"></i>
                            <span className="wd-color-lightgray"> @{post.handle} &#183; {post.time}</span>
                            <i className="bi bi-three-dots float-end wd-color-lightgray"></i><br/>
                            <span dangerouslySetInnerHTML={{ __html: data}}></span>
                        </div>
                    </div>

                    <div className="row mt-3">
                        <div className="card border-0 bg-transparent">
                            {(post.imageTitle || post.imageContent || post.link) ? (
                                <div>
                                    <img className="card-img-top wd-card-img-border wd-card-top-round-corner" src={`/images/${post.image}`} />
                                    <div className="card-body wd-card-text-border wd-card-bottom-round-corner">
                                        {post.imageTitle && <div className="card-text">{post.imageTitle}</div>}
                                        {post.imageContent && <div className="card-text text-secondary">{post.imageContent}</div>}
                                        {post.link && (
                                            <div className="card-text text-secondary">
                                                <i className="bi bi-link-45deg"></i> {post.link}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ) : (
                                <img className="card-img-top wd-card-img-border wd-card-top-round-corner wd-card-bottom-round-corner" src={`/images/${post.image}`} />
                            )}
                        </div>
                    </div>

                    <div className="row mt-3">
                        <div className="wd-bookmark-post-icon-item">
                            <a href="#" className="wd-bookmark-post-icon-pair wd-color-lightgray">
                                <i className="bi bi-chat"></i>
                                <div className="wd-bookmark-post-icon-number">{post.reply}</div>
                            </a>
                        </div>

                        <div className="wd-bookmark-post-icon-item">
                            <a href="#" className="wd-bookmark-post-icon-pair wd-color-lightgray">
                                <i className="bi bi-repeat"></i>
                                <div className="wd-bookmark-post-icon-number">{post.repost}</div>
                            </a>
                        </div>

                        <div className="wd-bookmark-post-icon-item ">
                            <a href="#" className="wd-bookmark-post-icon-pair wd-color-lightgray">
                                <i className="bi bi-heart"></i>
                                <div className="wd-bookmark-post-icon-number">{post.like}</div>
                            </a>
                        </div>

                        <div className="wd-bookmark-post-icon-item">
                            <a href="#" className="wd-bookmark-post-icon-pair wd-color-lightgray">
                                <i className="bi bi-upload"></i>
                            </a>
                        </div>
                    </div>

                    {post.show ? (
                        <div className="row wd-font-color-blue ms-1 mt-3 mb-3">Show this thread</div>
                    ) : ''}

                </div>
            </div>
        </div>
    );
}

export default PostItem;