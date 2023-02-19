const PostItem = (post) => {
    return (`
    <div class="list-group-item bg-transparent">
        <div class="row">
            <div class="col-1">
                <img class="wd-bookmark-post-avatar" src="${post.avatarIcon}">
            </div>
            
            <div class="col-11 ps-5 pt-2">
                <div class="row mt-1">
                    <div class="col">
                            <span class="fw-bold">${post.userName}</span>
                            <i class="fa-solid fa-circle-check"></i>
                            <span class="wd-font-color-gray">@${post.handle} &#183 ${post.time}</span>
                            <i class="fa-solid fa-ellipsis float-end wd-font-color-gray"></i><br/>
                            <span>${post.mainContent}</span>       
                    </div>
                </div>
                 
                <div class="row mt-3">
                    <div class="card bg-transparent">
                        ${(post.imageTitle || post.imageContent || post.link) ?
                            `<img class="card-img-top wd-card-img-border wd-card-top-round-corner" src="${post.image}">
                    
                            <div class="card-body wd-card-text-border wd-card-bottom-round-corner">
                                ${post.imageTitle ? `<div class="card-text">${post.imageTitle}</div>` : ''}
                                ${post.imageContent ? `<div class="card-text text-secondary">${post.imageContent}</div>` : ''}
                                ${post.link ? `<div class="card-text text-secondary"><i class="fa-solid fa-link"></i> ${post.link}</div>` : ''}
                            </div>`
                            : `<img class="card-img-top wd-card-img-border wd-card-top-round-corner wd-card-bottom-round-corner" src="${post.image}">`
                        }
                    </div>
                </div>
       
                <div class="row mt-3">
                    <div class="wd-bookmark-post-icon-item">
                        <a href="#" class="wd-bookmark-post-icon-pair wd-color-lightgray">
                            <i class="fa-regular fa-comment"></i>
                            <div class="wd-bookmark-post-icon-number">${post.reply}</div>
                        </a>
                    </div>
    
                    <div class="wd-bookmark-post-icon-item">
                    <a href="#" class="wd-bookmark-post-icon-pair wd-color-lightgray">
                        <i class="fa-solid fa-retweet"></i>
                        <div class="wd-bookmark-post-icon-number">${post.repost}</div>
                    </a>
                    </div>
    
                    <div class="wd-bookmark-post-icon-item ">
                    <a href="#" class="wd-bookmark-post-icon-pair wd-color-lightgray">
                        <i class="fa-regular fa-heart"></i>
                        <div class="wd-bookmark-post-icon-number">${post.like}</div>
                    </a>
                    </div>
    
                    <div class="wd-bookmark-post-icon-item">
                    <a href="#" class="wd-bookmark-post-icon-pair wd-color-lightgray">
                        <i class="fa-solid fa-arrow-up-from-bracket"></i>
                    </a>
                    </div>
                </div>    

            </div>
        </div>
    </div>
    `);
}

export default PostItem;