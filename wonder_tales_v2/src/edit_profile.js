import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import CaretLeft from './assets/CaretLeft.svg';
import mobile_logos from './assets/mobile_logos.svg';
import profile_image from './assets/Ellipse 29.png';
import edit_profile from './assets/PencilSimpleLine.png';

const EditProfile = () => {
    const navigate = useNavigate();
    const [dob, setDob] = useState({ month: '', day: '', year: '' });

    const handleDateChange = (field, value) => {
        setDob({ ...dob, [field]: value });
    };

    return (
        <>
            <div className="container">
                <div className="header">
                    <div className="time">9:30</div>
                    <img
                        loading="lazy"
                        src={mobile_logos}
                        className="mobile-logos"
                    />
                </div>
                <div className="profile-details">
                    <div className="profile-header">
                        <img
                            loading="lazy"
                            src={CaretLeft}
                            className="small-image"
                            onClick={() => navigate('/profile')}
                        />
                        <div className="profile-name">Edit Profile</div>
                    </div>
                </div>
                <img
                    loading="lazy"
                    src={profile_image}
                    className="large-image"
                />
                <form className="profile-form">
                    <div className="input-container">
                        <input type="text" placeholder="First Name" className="input-field" />
                        <img src={edit_profile} className="edit-icon" />
                    </div>
                    <div className="input-container">
                        <input type="text" placeholder="Last Name" className="input-field" />
                        <img src={edit_profile} className="edit-icon" />
                    </div>
                    <input type="text" placeholder="Mobile No." className="input-field" />
                    <div className="input-container">
                        <select className="input-field">
                            <option value="" disabled selected>Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    <div className="dob-container">
                        <select className="dob-select" value={dob.month} onChange={(e) => handleDateChange('month', e.target.value)}>
                            <option value="" disabled selected>Month</option>
                            {Array.from({ length: 12 }, (v, k) => k + 1).map(month => (
                                <option key={month} value={month}>{month}</option>
                            ))}
                        </select>
                        <select className="dob-select" value={dob.day} onChange={(e) => handleDateChange('day', e.target.value)}>
                            <option value="" disabled selected>Day</option>
                            {Array.from({ length: 31 }, (v, k) => k + 1).map(day => (
                                <option key={day} value={day}>{day}</option>
                            ))}
                        </select>
                        <select className="dob-select" value={dob.year} onChange={(e) => handleDateChange('year', e.target.value)}>
                            <option value="" disabled selected>Year</option>
                            {Array.from({ length: 100 }, (v, k) => (new Date().getFullYear() - k)).map(year => (
                                <option key={year} value={year}>{year}</option>
                            ))}
                        </select>
                    </div>
                    <button type="button" className="confirm-button">Confirm</button>
                    <div className="button-group">
                        <button type="button" className="button cancel-button" onClick={() => navigate('/profile')}>Cancel</button>
                        <button type="submit" className="button save-button">Save</button>
                    </div>
                </form>
            </div>
            <style jsx>{`
                .container {
                    background-color: #fff;
                    display: flex;
                    flex-direction: column;
                    max-width: 360px;
                    margin: 0 auto;
                    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
                }
                .header {
                    justify-content: space-between;
                    background-color: #fff;
                    display: flex;
                    font-size: 14px;
                    color: #1d1b20;
                    font-weight: 500;
                    white-space: nowrap;
                    letter-spacing: 0.14px;
                    line-height: 125%;
                    padding: 8.74px 16px;
                }
                .time {
                    font-variant-numeric: lining-nums proportional-nums;
                    font-feature-settings: "dlig" on, "ss02" on;
                    font-family: Roboto, sans-serif;
                }
                .mobile-logos {
                    aspect-ratio: 2.7;
                    object-fit: auto;
                    object-position: center;
                    width: 43px;
                    align-self: start;
                }
                .profile-details {
                    width: 100%;
                    margin-top: 16px;
                }
                .profile-header {
                    display: flex;
                    align-items: center;
                    padding: 16px;
                    box-shadow: 0px 10px 15px 0px rgba(0, 0, 0, 0.05);
                    background-color: #fff;
                }
                .small-image {
                    width: 24px;
                    height: 24px;
                    cursor: pointer;
                }
                .profile-name {
                    font-size: 16px;
                    font-style: normal;
                    font-weight: bold;
                    line-height: 18px;
                    margin-left: 8px;
                }
                .large-image {
                    width: 100px;
                    height: 100px;
                    border-radius: 50%;
                    margin-top: 16px;
                    margin-left: auto;
                    margin-right: auto;
                    border: 2px solid #e9ecef;
                }
                .profile-form {
                    width: 328px;
                    display: flex;
                    flex-direction: column;
                    gap: 12px;
                    margin-top: 24px;
                    margin-left: auto;
                    margin-right: auto;
                }
                .input-container {
                    position: relative;
                    width: 100%;
                }
                .input-field {
                    width: 100%;
                    display: flex;
                    padding: 16px;
                    font-size: 16px;
                    justify-content: center;
                    border: 1px solid #e9ecef;
                    border-radius: 4px;
                    align-items: center;
                    box-sizing: border-box;
                    background-color: #fff;
                }
                .input-field::placeholder {
                    color: #ccc;
                }
                .input-field option {
                    color: #1d1b20;
                }
                .edit-icon {
                    position: absolute;
                    right: 12px;
                    top: 50%;
                    transform: translateY(-50%);
                    width: 20px;
                    height: 20px;
                }
                .dob-container {
                    display: flex;
                    justify-content: space-between;
                    margin-top: 16px;
                }
                .dob-select {
                    width: 32%;
                    padding: 16px;
                    font-size: 16px;
                    border: 1px solid #e9ecef;
                    border-radius: 4px;
                    background-color: #fff;
                }
                .confirm-button {
                    width: 100%;
                    padding: 12px;
                    font-size: 16px;
                    border: none;
                    border-radius: 4px;
                    background-color: #fc6200;
                    color: #fff;
                    margin-top: 16px;
                    cursor: pointer;
                }
                .button-group {
                    display: flex;
                    justify-content: space-between;
                    margin-top: 16px;
                }
                .button {
                    width: 48%;
                    padding: 12px;
                    font-size: 16px;
                    border: none;
                    border-radius: 4px;
                    cursor: pointer;
                }
                .cancel-button {
                    background-color: #fff;
                    color: #fc6200;
                    border: 1px solid #fc6200;
                }
                .save-button {
                    background-color: #fc6200;
                    color: #fff;
                }
            `}</style>
        </>
    )
}

export default EditProfile;
