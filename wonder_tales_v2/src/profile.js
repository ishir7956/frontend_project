import React, { useState } from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    useNavigate,
} from "react-router-dom";
import CaretRight from './assets/CaretRight.svg';
import profile_image from './assets/Ellipse 29.png';
import edit_profile from './assets/PencilSimpleLine.png';
import file from './assets/FileText.png';
import deactivate from './assets/UserDeactive.png';
import house from './assets/House_1.png';
import search from './assets/MagnifyingGlass.png';
import user from './assets/User_1.png';
import CaretLeft from './assets/CaretLeft.svg';
import mobile_logos from './assets/mobile_logos.svg';

const Profile = () => {
    const navigate = useNavigate();
    const [showDeactivateAlert, setShowDeactivateAlert] = useState(false);
    const [showDeactivateConfirmation, setShowDeactivateConfirmation] = useState(false);

    const handleDeactivate = () => {
        setShowDeactivateAlert(false);
        setShowDeactivateConfirmation(true);
    };

    return (
        <>
            <div className="profile-container">
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
                            onClick={() => navigate('/')}
                        />
                        <div className="profile-name">Profile</div>
                    </div>
                </div>
                <img
                    loading="lazy"
                    src={profile_image}
                    className="large-image"
                />
                <div className="user-name">Sagar Dagur</div>
                <div className="footer-links">
                    <div className="footer-link" onClick={() => navigate('/edit-profile')}>
                        <img
                            loading="lazy"
                            src={edit_profile}
                            className="small-image"
                        />
                        <div className="footer-link-text">Edit Profile</div>
                        <img
                            loading="lazy"
                            src={CaretRight}
                            className="small-image"
                        />
                    </div>
                    <div className="footer-link" onClick={() => navigate('/terms')}>
                        <img
                            loading="lazy"
                            src={file}
                            className="small-image"
                        />
                        <div className="footer-link-text">Terms & Conditions</div>
                        <img
                            loading="lazy"
                            src={CaretRight}
                            className="small-image"
                        />
                    </div>
                    <div className="footer-link" onClick={() => navigate('/privacy-policy')}>
                        <img
                            loading="lazy"
                            src={file}
                            className="small-image"
                        />
                        <div className="footer-link-text">Privacy Policy</div>
                        <img
                            loading="lazy"
                            src={CaretRight}
                            className="small-image"
                        />
                    </div>
                    <div className="footer-link" onClick={() => setShowDeactivateAlert(true)}>
                        <img
                            loading="lazy"
                            src={deactivate}
                            className="small-image"
                        />
                        <div className="footer-link-text">Deactivate Account</div>
                        <img
                            loading="lazy"
                            src={CaretRight}
                            className="small-image"
                        />
                    </div>
                </div>
                <div className="navigation">
                    <div className="nav-item" onClick={() => navigate('/')}>
                        <img
                            loading="lazy"
                            src={house}
                            className="medium-image"
                        />
                        Home
                    </div>
                    <div className="nav-item" onClick={() => navigate('/search')}>
                        <img
                            loading="lazy"
                            src={search}
                            className="medium-image"
                        />
                        Search
                    </div>
                    <div className="nav-item-2">
                        <img
                            loading="lazy"
                            src={user}
                            className="medium-image"
                        />
                        Profile
                    </div>
                </div>

                {showDeactivateAlert && (
                    <div className="popup">
                        <div className="popup-content">
                            <div className="popup-title">Alert !</div>
                            <div className="popup-message">Are you sure you want to deactivate the service?</div>
                            <div className="popup-buttons">
                                <button className="popup-button" onClick={handleDeactivate}>Yes</button>
                                <button className="popup-button" onClick={() => setShowDeactivateAlert(false)}>No</button>
                            </div>
                        </div>
                    </div>
                )}

                {showDeactivateConfirmation && (
                    <div className="popup">
                        <div className="popup-content">
                            <div className="popup-title">Account Deactivated</div>
                            <div className="popup-message">Your request for Account Deactivation has been taken into consideration.</div>
                            <button className="popup-button-1" onClick={() => setShowDeactivateConfirmation(false)}>Ok</button>
                        </div>
                    </div>
                )}
            </div>
            <style jsx>{`
                .profile-container {
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
                    padding: 9px 16px;
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
                .user-name {
                    font-family: Inter, sans-serif;
                    font-size: 18px;
                    text-align: center;
                    font-weight: 600;
                    color: #333;
                    margin-top: 16px;
                }
                .footer-links {
                    width: 100%;
                    margin-top: 16px;
                }
                .footer-link {
                    display: flex;
                    align-items: center;
                    padding: 16px 16px;
                    background-color: #fff;
                    cursor: pointer;
                }
                .footer-link-text {
                    flex: 1;
                    margin-left: 16px;
                    font-size: 14px;
                    color: #333;
                    font-weight: 500;
                }
                .navigation {
                    display: flex;
                    justify-content: space-around;
                    padding: 7px 0px 8px 0px;
                    background-color: #fff;
                    box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.1);
                    position: fixed;
                    bottom: 0;
                    width: 100%;
                    max-width: 360px;
                    height: 50px;
                }
                .nav-item {
                    flex: 1;
                    text-align: center;
                }
                .nav-item-2 {
                    flex: 1;
                    text-align: center;
                    color: orange;
                }
                .medium-image {
                    width: 24px; 
                    height: 24px;
                    display: block; 
                    margin: 0 auto 4px;
                }
                .popup {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    background-color: rgba(0, 0, 0, 0.5);
                }
                .popup-content {
                    background-color: #fff;
                    padding: 20px;
                    border-radius: 8px;
                    text-align: center;
                    max-width: 300px;
                    width: 80%;
                }
                .popup-title {
                    font-size: 18px;
                    font-weight: bold;
                    margin-bottom: 10px;
                }
                .popup-message {
                    font-size: 16px;
                    margin-bottom: 20px;
                }
                .popup-buttons {
                    display: flex;
                    justify-content: space-between;
                }
                .popup-button {
                    padding: 8px 10px;
                    font-size: 16px;
                    font-weight: 600;
                    border: none;
                    border-radius: 4px;
                    cursor: pointer;
                    width: 140px;
                    height: 44px;
                }
                .popup-button-1 {
                    padding: 8px 10px;
                    font-size: 16px;
                    font-weight: 600;
                    border: none;
                    border-radius: 4px;
                    cursor: pointer;
                    width: 296px;
                    height: 44px;
                    background-color: #F26522;
                    color: #fff;
                }
                .popup-button:first-of-type {
                    background-color: #F26522;
                    color: #fff;
                }
                .popup-button:last-of-type {
                    background-color: #FFF;
                    color: #F26522;
                    border: 1px solid var(--Primary, #F26522);
                }
            `}</style>
        </>
    );
}

export default Profile;
