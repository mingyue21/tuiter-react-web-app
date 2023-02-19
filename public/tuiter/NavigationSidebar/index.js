import navigationSidebars from "./navigationSidebars.js";

const NavigationSidebar = (active) => {
    return(`
    <div class="list-group">
        ${navigationSidebars.map(item =>
        `<a href="${item.link}" class="list-group-item ${item.label == active ? 'active' : ''}">
             
            <div class="row">
                <div class="col-1">
                    <i class="${item.icon}"></i>
                </div>
                <div class="col-9 d-none d-xl-block">
                    ${item.label}
                </div>
            </div>
        </a>`
    ).join('')}
        
            
        <a href="#" class="btn btn-primary rounded-pill mt-2">Tuit</a>
    </div>
 `);
}
export default NavigationSidebar;