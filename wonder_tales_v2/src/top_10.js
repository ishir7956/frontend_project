import React from "react";
import {useNavigate} from "react-router-dom";
import BookImage1 from './assets/top10_1.png';
import BookImage2 from './assets/top10_2.png';
import BookImage3 from './assets/top10_3.png';
import BookImage4 from './assets/top10_4.png';
import BookImage5 from './assets/top10_5.png';
import BookImage6 from './assets/top10_6.png';
import BookImage7 from './assets/top10_7.png';
import BookImage8 from './assets/top10_8.png';
import BookImage9 from './assets/top10_9.png';
import BookImage10 from './assets/top10_10.png';
import CaretLeft from './assets/CaretLeft.svg';
import mobile_logos from './assets/mobile_logos.svg';

const top10Books = [
    { id: 1, image: BookImage1, title: 'One Two Three', author: 'Sandra Bounton', category: 'Teen', format: 'E-book • Audio', duration: '10 mins', language: 'English', summary: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.' },
    { id: 2, image: BookImage2, title: 'In my head', author: 'Adam', category: 'Teen', format: 'Audio', duration: '10 mins', language: 'English', summary: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.' },
    { id: 3, image: BookImage3, title: 'Rich Dad Poor Dad', author: 'Robert T. Kiyosaki', category: 'Biography', format: 'E-book • Audio', duration: '52 mins', language: 'English', summary: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.' },
    { id: 4, image: BookImage4, title: 'Ever After', author: 'Emiko Jean', category: 'Non-Fiction', format: 'E-book • Audio', duration: '45 pages', language: 'English', summary: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.' },
    { id: 5, image: BookImage5, title: 'My Life', author: 'Robert Adam', category: 'Teen', format: 'E-book • Audio', duration: '10 mins', language: 'English', summary: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.' },
    { id: 6, image: BookImage6, title: 'Maybe Something Beautiful', author: 'Rafel Lopez', category: 'Biography', format: 'E-book • Audio', duration: '10 mins', language: 'English', summary: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.' },
    { id: 7, image: BookImage7, title: 'Hair Love', author: 'Vashti Harrison', category: 'Non-Fiction', format: 'Audio', duration: '25 mins', language: 'English', summary: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.' },
    { id: 8, image: BookImage8, title: 'Soul', author: 'Olivia Wilson', category: 'Biography', format: 'E-book • Audio', duration: '10 mins', language: 'English', summary: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.' },
    { id: 9, image: BookImage9, title: 'Love', author: 'Olivia Wilson', category: 'Biography', format: 'E-book • Audio', duration: '10 mins', language: 'English', summary: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.' },
    { id: 10, image: BookImage10, title: 'The Fallen Gates: Part One', author: 'Rafel Lopez', category: 'Fiction', format: 'E-book • Audio', duration: '10 mins', language: 'English', summary: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.' },
  ];

const Top10 = () => {
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
                    <div className="navbar-title">Top 10</div>
                </div>
                <div className="top10-list">
                    {top10Books.map((book) => (
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
                .top10-list {
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

export default Top10;
