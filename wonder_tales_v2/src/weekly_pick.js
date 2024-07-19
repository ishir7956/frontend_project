import React from "react";
import {useNavigate} from "react-router-dom";
import BookImage11 from './assets/weekly_1.png';
import BookImage12 from './assets/weekly_2.png';
import BookImage13 from './assets/weekly_3.png';
import BookImage14 from './assets/weekly_4.png';
import BookImage15 from './assets/weekly_5.png';
import BookImage16 from './assets/weekly_6.png';
import BookImage17 from './assets/weekly_7.png';
import BookImage18 from './assets/weekly_8.png';
import BookImage19 from './assets/weekly_9.png';
import BookImage20 from './assets/weekly_10.png';
import CaretLeft from './assets/CaretLeft.svg';
import mobile_logos from './assets/mobile_logos.svg';

const weeklyPickBooks = [
    { id: 11, image: BookImage11, title: 'Stephen King', author: 'Stephen King', category: 'Novel', format: 'E-book • Audio',  duration: '10 mins', language: 'English', summary: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.' },
    { id: 12, image: BookImage12, title: 'Twinkle Twinkle Little Star', author: 'Tiger Tales', category: 'Teen', format: 'E-book • Audio', duration: '10 mins', language: 'English', summary: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'},
    { id: 13, image: BookImage13, title: 'The Story of Robin Hood', author: 'Stephen Hawkings', category: 'Teen', format: 'Audio', duration: '17 mins', language: 'English', summary: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.' },
    { id: 14, image: BookImage14, title: 'The Start Fairy', author: 'Chris Zuschalg', category: 'Non-Fiction', format: 'E-book • Audio', duration: '10 mins', language: 'English', summary: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.' },
    { id: 15, image: BookImage15, title: 'The Running Effect', author: 'Milind Usha Soman', category: 'Novel', format: 'E-book • Audio', duration: '10 mins', language: 'English', summary: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.' },
    { id: 16, image: BookImage16, title: 'The Power of your Subconscious Mind', author: 'Joseph Murphy', category: 'Biography', format: 'Audio', duration: '32 mins', language: 'English', summary: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.' },
    { id: 17, image: BookImage17, title: 'Sank Magic Practice', author: 'Sank Magic', category: 'Teen', format: 'E-book • Audio', duration: '10 mins', language: 'English', summary: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.' },
    { id: 18, image: BookImage18, title: 'You can', author: 'Don M. Green', category: 'Biography', format: 'E-book • Audio', duration: '30 mins', language: 'English', summary: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.' },
    { id: 19, image: BookImage19, title: 'I Love you to the Moon and Back', author: 'Amelia Hepworth', category: 'Teen', format: 'E-book • Audio', duration: '10 mins', language: 'English', summary: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.' },
    { id: 20, image: BookImage20, title: 'Man’s Search for Meaning', author: 'Viktor E. Frankl', category: 'Biography', format: 'E-book • Audio', duration: '10 mins', language: 'English', summary: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.' },
  ];


const WeeklyPick = () => {
    const navigate = useNavigate();
    const handleBookClick = (book) => {
        localStorage.setItem('bookDetails', JSON.stringify(book));
        navigate(`/book/${book.id}`);
      };
    return (
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
                <div className="navbar">
                    <img src={CaretLeft} alt="Caret Left" className="caret-left" onClick={() => navigate('/')} />
                    <div className="navbar-title">Weekly Pick</div>
                </div>
                <div className="weekly-pick-list">
                    {weeklyPickBooks.map((book) => (
                        <div key={book.title} className="book-item">
                            <img src={book.image} alt={book.title} className="book-image" onClick={() => handleBookClick(book)} />
                            <div className="book-info">
                                <div className="book-info-1">
                                    {book.title}
                                </div>
                                <div className="book-info-2">
                                    By {book.author}
                                </div>
                                <div className="book-info-3">
                                    {book.category} • {book.format}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <style jsx>{`
                .container {
                    background-color: #fff;
                    display: flex;
                    flex-direction: column;
                    max-width: 360px;
                    margin: auto;
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
                .navbar {
                    display: flex;
                    box-shadow: 0px 10px 15px 0px rgba(0, 0, 0, 0.05);
                    align-items: center;
                    padding: 16px;
                }
                .caret-left {
                    cursor: pointer;
                    width: 24px;
                    height: 24px;
                    margin-right: 8px;
                }
                .navbar-title {
                    font-size: 16px;
                    font-style: normal;
                    font-weight: bold;
                    line-height: 18px;
                }
                .weekly-pick-list {
                    padding: 16px;
                }
                .book-item {
                    display: flex;
                    align-items: center;
                    padding: 16px 0;
                    border-bottom: 1px solid #ccc;
                }
                .book-image {
                    width: 76px;
                    height: 76px;
                    margin-right: 16px;
                    object-fit: cover;
                    border-radius: 8px;
                }
                .book-info {
                    display: flex;
                    padding: 12px 0px;
                    flex-direction: column;
                    align-items: flex-start;
                    flex: 1 0 0;
                }
                .book-info-1 {
                    color: var(--Neutral-Color-Neutral-100, #101415);
                    font-style:normal;
                    font-weight: 500;
                }
                .book-info-2 {
                    color: var(--Neutral-Color-Neutral-80, #444);
                    font-family: sans-serif;
                    font-size: 10px;
                    font-style:normal;
                    font-weight: 400;
                }
                .book-info-3 {
                    color: var(--Neutral-Color-Neutral-60, #777);
                    font-family: sans-serif;
                    font-size: 10px;
                    font-style:normal;
                    font-weight: 400;
                    line-height: 14px;
                }
            `}</style>
        </>
    );
};

export default WeeklyPick;
