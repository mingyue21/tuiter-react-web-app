import React from "react";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";

const NavigationSidebar = () => {
    const {pathname} = useLocation();
    const paths = pathname.split('/')
    const active = paths[2];
    return (
        <div className="list-group">
            <a className="list-group-item">
                <div className="row">
                    <div className="col-1">
                        <i className="bi bi-twitter"></i>
                    </div>
                </div>
            </a>
            <Link to="/tuiter/home" className={`list-group-item
                    ${active === 'home'?'active':''}`}>
                <div className="row">
                    <div className="col-1">
                        <i className="bi bi-house-door-fill"></i>
                    </div>
                    <div className="col-9 d-none d-xl-block">
                        Home
                    </div>
                </div>
            </Link>
            <Link to="/tuiter/explore" className={`list-group-item
                    ${active === 'explore'?'active':''}`}>
                <div className="row">
                    <div className="col-1">
                        <i className="bi bi-hash"></i>
                    </div>
                    <div className="col-9 d-none d-xl-block">
                        Explore
                    </div>
                </div>
            </Link>
            <Link to="/" className={`list-group-item`}>
                <div className="row">
                    <div className="col-1">
                        <i className="bi bi-hammer"></i>
                    </div>
                    <div className="col-9 d-none d-xl-block">
                        Labs
                    </div>
                </div>
            </Link>
            <a className={`list-group-item
                    ${active === 'notifications'?'active':''}`}>
                <div className="row">
                    <div className="col-1">
                        <i className="bi bi-bell-fill"></i>
                    </div>
                    <div className="col-9 d-none d-xl-block">
                        Notifications
                    </div>
                </div>
            </a>
            <a className={`list-group-item
                    ${active === 'messages'?'active':''}`}>
                <div className="row">
                    <div className="col-1">
                        <i className="bi bi-envelope-fill"></i>
                    </div>
                    <div className="col-9 d-none d-xl-block">
                        Messages
                    </div>
                </div>
            </a>
            <a className={`list-group-item
                    ${active === 'bookmarks'?'active':''}`}>
                <div className="row">
                    <div className="col-1">
                        <i className="bi bi-bookmark-fill"></i>
                    </div>
                    <div className="col-9 d-none d-xl-block">
                        Bookmarks
                    </div>
                </div>
            </a>
            <a className={`list-group-item
                    ${active === 'lists'?'active':''}`}>
                <div className="row">
                    <div className="col-1">
                        <i className="bi bi-list-ul"></i>
                    </div>
                    <div className="col-9 d-none d-xl-block">
                        Lists
                    </div>
                </div>
            </a>
            <Link to="/tuiter/profile" className={`list-group-item
                    ${active === 'profile' || active === 'edit-profile' ?'active':''}`}>
                <div className="row">
                    <div className="col-1">
                        <i className="bi bi-person-fill"></i>
                    </div>
                    <div className="col-9 d-none d-xl-block">
                        Profile
                    </div>
                </div>
            </Link>
            <a className={`list-group-item
                    ${active === 'more'?'active':''}`}>
                <div className="row">
                    <div className="col-1">
                        <i className="bi bi-three-dots"></i>
                    </div>
                    <div className="col-9 d-none d-xl-block">
                        More
                    </div>
                </div>
            </a>
            <a href="#" className="btn btn-primary rounded-pill mt-2">Tuit</a>
        </div>
    );
};
export default NavigationSidebar;