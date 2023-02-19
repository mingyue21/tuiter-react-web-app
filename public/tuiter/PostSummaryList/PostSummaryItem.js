const PostSummaryItem = (post) => {
    return (`
    <div class="list-group-item">
        <div class="row">
            <div class="col-sm-9 col-md-10">
                <div class="wd-font-color-gray">
                    ${post.topic}
                </div>
                <div class="fw-bold text-white">
                    ${post.userName} <i class="fa-solid fa-circle-check"></i> <span class="fw-normal wd-font-color-gray">- ${post.time}</span>
                </div>
                <div class="fw-bold pe-3 text-white">
                    ${post.title}
                </div>
            </div>
            <div class="col-sm-3 col-md-2">
                <img class="float-end wd-content-img"
                     src="${post.image}"/>
            </div>
        </div>
    </div>
    `)
}

export default PostSummaryItem;