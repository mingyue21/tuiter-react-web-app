import React from 'react';
import { useSelector } from 'react-redux';
import './index.css';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { saveProfile } from './profile-reducer';

const EditProfileComponent = () => {
    const savedProfile = useSelector(state => state.profile);
    const [profile, setProfile] = useState(savedProfile);

    const handleNameChange = (event) => {
        const name = event.target.value;
        const [firstName, lastName=""] = name.split(" ");
        setProfile({
            ...profile, 
            firstName,
            lastName});     
    }

    const handleBioChange = (event) => {
        const bio = event.target.value;
        setProfile({
            ...profile,
            bio
        });
    }

    const handleLocationChange = (event) => {
        const location = event.target.value;
        setProfile({
            ...profile,
            location
        });
    }

    const handleWebsiteChange = (event) => {
        const website = event.target.value;
        setProfile({
            ...profile,
            website
        });
    }

    const handleBirthdateChange = (event) => {
        const dateOfBirth = event.target.value;
        setProfile({
            ...profile,
            dateOfBirth
        });
    }

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleSave = () => {
        dispatch(saveProfile(profile));
        navigate('/tuiter/profile')
    }

    return (
        <div className="container border">
            <div className="row mt-2 mb-2 align-items-center">
                <div className="col-1">
                    <Link to="/tuiter/profile" className="bi bi-x-lg"></Link>
                </div>
                <div className="col-4">
                    <div className="wd-font-bold">Edit Profile</div>
                </div>
                <div className="col-7">
                    <button className="btn btn-primary rounded-pill float-end"
                    onClick={() => handleSave()}>Save</button>
                </div>
            </div>     
            <div className="row">
                <img src={`/images/${profile.bannerPicture}`} className="wd-profile-banner"/>
            </div>
            <div className="row position-relative">
                <div className="col-4">
                    <img src={`/images/${profile.profilePicture}`} className="rounded-circle wd-profile-avator"/>
                </div>
            </div>
            <form className="pt-4 pb-4">
                <div className="form-group mt-5">
                    <label for="name" className="wd-font-color-gray">Name</label>
                    <input type="text" className="form-control" id="firstName" name="name"
                        value={profile.firstName + `${profile.lastName ? " " + profile.lastName : ""}`}
                        onChange={handleNameChange}/>
                </div>
                <div className="form-group mt-3">
                    <label for="bio" className="wd-font-color-gray">Bio</label>
                    <textarea className="form-control" id="bio" name="bio" 
                        value={profile.bio}
                        onChange={handleBioChange}></textarea>
                </div>
                <div className="form-group mt-3">
                    <label for="location" className="wd-font-color-gray">Location</label>
                    <input type="text" className="form-control" id="location" name="location" 
                        value={profile.location}
                        onChange={handleLocationChange}/>
                </div>
                <div className="form-group mt-3">
                    <label for="website" className="wd-font-color-gray">Website</label>
                    <input type="text" className="form-control" id="website" name="website" 
                        value={profile.website}
                        onChange={handleWebsiteChange}/>
                </div>
                <div className="form-group mt-3">
                    <label for="birthdate" className="wd-font-color-gray">Birth date</label>
                    <input type="text" className="form-control" id="birthdate" name="birthdate" 
                        value={profile.dateOfBirth}
                        onChange={handleBirthdateChange}/>
                </div>
            </form>
            
        </div>
    )
}

export default EditProfileComponent;