import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js";
const WhoToFollowList = () => {
    return (`
           <ul class="list-group">
                <div class="list-group-item fw-bold">Who to follow</div>
                ${who.map(item => WhoToFollowListItem(item)).join('')}
           </ul>
`); }

export default WhoToFollowList;