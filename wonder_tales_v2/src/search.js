import React from 'react';
import { useNavigate } from "react-router-dom";
import CaretRight from './assets/CaretRight.svg';
import house from './assets/House_1.png';
import search from './assets/MagnifyingGlass_1.png';
import searchicon from './assets/MagnifyingGlass.png';
import user from './assets/User.png';
import filtericon from './assets/Funnel.png';
import leftArrow from './assets/ArrowLeft.png';
import mobile_logos from './assets/mobile_logos.svg';
import book1 from './assets/book1.png'; 
import book2 from './assets/book2.png'; 
import book3 from './assets/book3.png'; 
import book4 from './assets/book4.png'; 

const Search = () => {
    const navigate = useNavigate();
    return(
        <>
            <div className="container">
                <div className="header">
                    <div className="time">9:30</div>
                    <img
                        loading="lazy"
                        src={mobile_logos}
                        alt="Mobile Logos"
                        className="mobile-logos"
                    />
                </div>
                <div className="search-bar">
                    <img src={leftArrow} alt="Back" className="back-icon" onClick={() => navigate('/')}/>
                    <input type="text" placeholder="Search Books,Authors" className="search-input" />
                    <img src={searchicon} className="search-icon" />
                    <img src={filtericon} alt="Filter" className="filter-icon" />
                </div>
                <div className="recent-search">
                    <h2>Recent Search</h2>
                    <div className="book-list">
                        <div className="book-item">
                            <img src={book1} alt="When Do Hippos Play?" />
                            <div className="book-details">
                                <div className="book-title">When Do Hippos Play?</div>
                                <div className="book-author">By Sagar Dagur</div>
                                <div className="book-type">Kids • Ebook • Audio</div>
                            </div>
                        </div>
                        <div className="book-item">
                            <img src={book2} alt="The Gruffalo" />
                            <div className="book-details">
                                <div className="book-title">The Gruffalo</div>
                                <div className="book-author">By Sugandha Attri</div>
                                <div className="book-type">Kids • Audio</div>
                            </div>
                        </div>
                        <div className="book-item">
                            <img src={book3} alt="Green Thumb Poppy" />
                            <div className="book-details">
                                <div className="book-title">Green Thumb Poppy</div>
                                <div className="book-author">By Dhiraj Kumar</div>
                                <div className="book-type">Kids • Ebook • Audio</div>
                            </div>
                        </div>
                        <div className="book-item">
                            <img src={book4} alt="Maybe Something Beautiful" />
                            <div className="book-details">
                                <div className="book-title">Maybe Something Beautiful</div>
                                <div className="book-author">By Vishal Bhardwaj</div>
                                <div className="book-type">Kids • Ebook</div>
                            </div>
                        </div>
                    </div>
                </div>
                <footer className="footer">
                    <div className="footer-item">
                        <img src={house} alt="Home" className="footer-icon" onClick={() => navigate('/')} />
                        Home
                    </div>
                    <div className="footer-item_1">
                        <img src={search} alt="Search" className="footer-icon" />
                        Search
                    </div>
                    <div className="footer-item">
                        <img src={user} alt="Profile" className="footer-icon" onClick={() => navigate('/profile')} />
                        Profile
                    </div>
                </footer>
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
                .search-bar {
                    display: flex;
                    align-items: center;
                    padding: 8px 16px;
                    gap: 16px;
                    box-shadow: 0px 10px 15px 0px rgba(0, 0, 0, 0.05);
                }
                .back-icon, .filter-icon {
                    width: 24px;
                    height: 24px;
                }
                .search-input {
                    width: 248px;
                    height: 44px;
                    font-size: 14px;
                    box-sizing: border-box;
                    padding: 12px 40px;
                    border-radius: 8px;
                    border: 1px solid #ccc;
                }
                .search-input:focus {
                    outline: none;
                }
                .search-icon {
                    position: absolute;
                    left: 65px;
                    width: 24px;
                    height: 24px;
                }
                .recent-search {
                    padding: 10px;
                }
                .recent-search h2 {
                    font-size: 18px;
                    margin-bottom: 10px;
                }
                .book-list {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 16px;
                    justify-content: center;
                }
                .book-item {
                    display: flex;
                    flex-direction: column;
                    width: 45%;
                }
                .book-item img {
                    width: 100%;
                    height: auto;
                    border-radius: 8px;
                }
                .book-details {
                    margin-top: 5px;
                }
                .book-title {
                    font-size: 14px;
                    text-overflow: ellipsis;
                    font-weight: 600;
                }
                .book-author {
                    font-size: 12px;
                    color: #555;
                }
                .book-type {
                    font-size: 12px;
                    color: var(--Neutral-Color-Neutral-60, #777);
                }
                .footer {
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
                .footer-item {
                    flex: 1;
                    text-align: center;
                }
                .footer-item_1{
                    flex: 1;
                    text-align: center;
                    color: orange;
                }
                .footer-icon {
                    width: 24px; 
                    height: 24px;
                    display: block; 
                    margin: 0 auto 4px; 
                }
            `}</style>
        </>
    )
}

export default Search;
