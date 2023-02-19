import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return(`
        <div class="row align-items-center">
                <div class="col-11 position-relative">
                    <input class="form-control rounded-pill ps-5" placeholder="Search Tuit"/>
                    <i class="fa-solid fa-magnifying-glass position-absolute wd-top-30-pc ms-3"></i>
                </div>
                <div class="col-1">
                    <a href="#"><i class="fa-solid fa-gear fa-2x float-end"></i></a>
                </div>
           </div>
        <ul class="nav nav-tabs mt-2">
            <li class="nav-item">
                <a class="nav-link active" href="#">For you</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Trending</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">News</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Sports</a>
            </li>
            <li class="nav-item d-none d-md-block">
                <a class="nav-link" href="#">Entertainment</a>
            </li>
        </ul>
        <div class="row mt-2 mb-2 position-relative">
            <img src="../images/starship.jpg"/>
            <div class="position-absolute start-0 bottom-0 ms-2 mb-1 fw-bold wd-font-size-30-px">SpaceX's Starship</div>
        </div>
        ${PostSummaryList()}
    `);
}
export default ExploreComponent;
