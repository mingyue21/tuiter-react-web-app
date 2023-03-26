import React from 'react';
import { useSelector } from 'react-redux';
import './index.css';
import { Link } from 'react-router-dom';

const ProfileComponent = () => {
    const profile = useSelector(state => state.profile);

    return (
        <div className="container border"> 
            <div className="row">
                <img src={`/images/${profile.bannerPicture}`} className="wd-profile-banner"/>
            </div>
            <div className="row position-relative">
                <div className="col-4">
                    <img src={`/images/${profile.profilePicture}`} className="rounded-circle wd-profile-avator"/>
                </div>
                <div className="col-8">
                    <Link to="/tuiter/edit-profile" 
                    className="btn btn-primary rounded-pill float-end mt-2 me-4">Edit profile</Link>
                </div>
            </div>
            <div className="row mt-3 ms-2 wd-profile-name">   
                {profile.firstName} {profile.lastName}
            </div>
            <div className="row ms-2 wd-font-color-gray wd-font-size-15">   
                {profile.handle}
            </div>
            <div className="row mt-3 ms-2 wd-font-size-15">   
                {profile.bio}
            </div>
            <div className="mt-2 ms-2 wd-font-color-gray wd-font-size-15"> 
                <i className="bi bi-geo-alt-fill me-2"></i>{profile.location}
                <i class="ms-3 bi bi-balloon me-2"></i>{profile.dateOfBirth}
                <i className="ms-3 bi bi-calendar3 me-2"></i>{profile.dateJoined} 
                <i className="ms-3 bi bi-link-45deg me-2"></i>{profile.website} 
            </div>
            <div className="mt-2 ms-2 mb-2 wd-font-size-15">
                <span className="wd-font-bold">{profile.followingCount}</span>
                <span className="wd-font-color-gray me-3"> Following</span> 
                <span className="wd-font-bold">{profile.followersCount}</span>
                <span className="wd-font-color-gray"> Followers</span> 
            </div>
            
        </div>

    );
    };

export default ProfileComponent;