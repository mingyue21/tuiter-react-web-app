const WhoToFollowListItem = (who) => {
    return (`
    <div class="list-group-item">
        <div class="row align-items-center">
            <div class="col-2">
                <img class="rounded-circle float-start wd-sidebar-avatar"
                     src="${who.avatarIcon}"/>
            </div>
            <div class="col-8">
                <div class="fw-bold">${who.userName} <i class="fa-solid fa-circle-check"></i>
                </div>
                <div>@${who.handle}</div>
            </div>
            <div class="col-2">
                <button class="btn btn-primary rounded-pill float-end">Follow</button>
            </div>
        </div>
    </div>
    `)
}

export default WhoToFollowListItem;