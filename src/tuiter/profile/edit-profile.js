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

    const handleFirstNameChange = (event) => {
        const firstName = event.target.value;
        setProfile({
            ...profile, 
            firstName
            });     
    }

    const handleLastNameChange = (event) => {
        const lastName = event.target.value;
        setProfile({
            ...profile, 
            lastName
            });     
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

    const [editDateOfBirth, setEditDateOfBirth] = useState(false);
    const handleEditDateOfBirth = () => {
        setEditDateOfBirth(!editDateOfBirth);
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
                <img alt="img" src={`/images/${profile.bannerPicture}`} className="wd-profile-banner"/>
            </div>
            <div className="row position-relative">
                <div className="col-4">
                    <img alt="img" src={`/images/${profile.profilePicture}`} className="rounded-circle wd-profile-avator"/>
                </div>
            </div>
            <form className="pt-4 pb-4">
                <div className="form-group mt-5 position-relative">
                    <label for="firstName" className="wd-font-color-gray wd-label-position">First name</label>
                    <input type="text" className="form-control pt-4" id="firstName" name="firstName"
                        value={profile.firstName}
                        onChange={handleFirstNameChange}/>
                </div>
                <div className="form-group mt-5 position-relative">
                    <label for="lastName" className="wd-font-color-gray wd-label-position">Last name</label>
                    <input type="text" className="form-control pt-4" id="lastName" name="lastName"
                        value={profile.lastName}
                        onChange={handleLastNameChange}/>
                </div>
                <div className="form-group mt-3 position-relative">
                    <label for="bio" className="wd-font-color-gray wd-label-position">Bio</label>
                    <textarea className="form-control pt-4" id="bio" name="bio" 
                        value={profile.bio}
                        onChange={handleBioChange}></textarea>
                </div>
                <div className="form-group mt-3 position-relative">
                    <label for="location" className="wd-font-color-gray wd-label-position">Location</label>
                    <input type="text" className="form-control pt-4" id="location" name="location" 
                        value={profile.location}
                        onChange={handleLocationChange}/>
                </div>
                <div className="form-group mt-3 position-relative">
                    <label for="website" className="wd-font-color-gray wd-label-position">Website</label>
                    <input type="text" className="form-control pt-4" id="website" name="website" 
                        value={profile.website}
                        onChange={handleWebsiteChange}/>
                </div>
                <div className="form-group mt-3 position-relative">
                    {!editDateOfBirth ? 
                        <div>
                            <div className="wd-font-color-gray wd-label-position">
                                Birth date
                                <span> &#183;</span>
                                <Link href="#" className="text-decoration-none" 
                                onClick={() => handleEditDateOfBirth()}> Edit</Link>
                            </div>
                            <div className='mt-4 ms-3'>{profile.dateOfBirth}</div>
                        </div>
                        :
                        <div>
                        <label for="birthdate" className="wd-font-color-gray wd-label-position">
                            Birth date
                        </label>
                        <input type="text" className="form-control pt-4" id="birthdate" name="birthdate"
                            value={profile.dateOfBirth}
                            onChange={handleBirthdateChange}/>
                        </div>
                    }                
                </div>
            </form>
        </div>
    )
}

export default EditProfileComponent;