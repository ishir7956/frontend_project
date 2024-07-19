import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import FictionIcon from './assets/FlyingSaucer.png';
import NonFictionIcon from './assets/Atom.png';
import NovelIcon from './assets/BookBookmark.png';
import BiographyIcon from './assets/AddressBook.png';
import PoemsIcon from './assets/Scroll.png';
import KidsIcon from './assets/Baby.png';
import SpiritualityIcon from './assets/HandsPraying.png';
import ShortStoriesIcon from './assets/Vector.png';
import RomanceIcon from './assets/HandHeart.png';
import PersonalIcon from './assets/Personal.png';
import YoungsterIcon from './assets/Sunglasses.png';
import CrimeIcon from './assets/Detective.png';
import CaretRight from './assets/CaretRight.svg';
import mobile_logos from './assets/mobile_logos.svg';
import HouseIcon from './assets/House.png'; 
import MagnifyingGlassIcon from './assets/MagnifyingGlass.png'; 
import UserIcon from './assets/User.png';



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


const Home = () => {
  const navigate = useNavigate();
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

  const categories = [
    { name: 'Fiction', icon: FictionIcon},
    { name: 'Non-Fiction', icon: NonFictionIcon},
    { name: 'Novel', icon: NovelIcon},
    { name: 'Biography', icon: BiographyIcon},
    { name: 'Poems', icon: PoemsIcon },
    { name: 'Kids', icon: KidsIcon},
    { name: 'Spirituality', icon: SpiritualityIcon},
    { name: 'Short Stories', icon: ShortStoriesIcon},
    { name: 'Romance', icon: RomanceIcon},
    { name: 'Personal Development & Lifestyle', icon: PersonalIcon},
    { name: 'Youngsters & Teens', icon: YoungsterIcon},
    { name: 'Crime & Thrillers', icon: CrimeIcon},
  ];
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
          <div className="navbar-title">Wondertales</div>
        </div>
        <div className="search-bar">
          <input type="text" placeholder= "Search Book, Authors" className="search-input" />
          <img src={MagnifyingGlassIcon} className="search-icon" />
        </div>
        <div className="section-heading">
          <h2>Categories</h2>
          <img src={CaretRight} alt="Caret Right" className="section-caret" onClick={() => navigate('/categories')} />
        </div>
        <div className="categories">
          {categories.map((category) => (
            <div key={category.name} className="category-card">
              <img src={category.icon} alt={category.name} className="category-image" />
              <div className="category-info">
                <h3>{category.name}</h3>
              </div>
            </div>
          ))}
        </div>
        <div className="section-heading">
          <h2>Top 10</h2>
          <img src={CaretRight} alt="Caret Right" className="section-caret" onClick={() => navigate('/top10')} />
        </div>
        <div className="books">
          {top10Books.map((book) => (
            <div key={book.title} className="book-card">
              <img src={book.image} alt={book.title} className="book-image" onClick={() => handleBookClick(book)} />
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
          ))}
        </div>
        <div className="section-heading">
          <h2>Weekly Pick</h2>
          <img src={CaretRight} alt="Caret Right" className="section-caret" onClick={() => navigate('/weekly-pick')} />
        </div>
        <div className="books">
          {weeklyPickBooks.map((book) => (
            <div key={book.title} className="book-card">
              <img src={book.image} alt={book.title} className="book-image" onClick={() => handleBookClick(book)} />
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
          ))}
        </div>
        <footer className="footer">
          <div className="footer-item_1">
            <img src={HouseIcon} alt="Home" className="footer-icon" />
            Home
          </div>
          <div className="footer-item">
            <img src={MagnifyingGlassIcon} alt="Search" className="footer-icon" onClick={() => navigate('/search')} />
            Search
          </div>
          <div className="footer-item">
            <img src={UserIcon} alt="Profile" className="footer-icon" onClick={() => navigate('/profile')} />
            Profile
          </div>
        </footer>
      </div>
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Aladin&display=swap');

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
        .navbar {
          justify-content: center;
          box-shadow: 0px 10px 15px 0px rgba(0, 0, 0, 0.05);
          background-color: #fff;
          display: flex;
          width: 100%;
          flex-direction: column;
          font-size: 14px;
          color: #101415;
          font-weight: 500;
          line-height: 129%;
        }
        .navbar-title {
          font-family: 'Aladin', sans-serif;
          font-size: 24px;
          text-align: center;
          font-weight: bold;
          padding: 16px;
          color: orange;
        }
        .search-bar {
          margin: 16px;
          position: relative;
        }
        .search-input {
          width: 100%;
          box-sizing: border-box;
          padding: 12px 40px;
          border-radius: 8px;
          border: 1px solid #ccc;
        }
        .search-input::placeholder {
          padding: 10px;
        }
        .search-icon {
          position: absolute;
          left: 10px;
          transform: translateY(-50%);
          width: 24px;
          height: 24px;
          top: 50%;
        }
        .section-heading {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 16px;
        }
        .section-heading h2 {
          font-size: 18px;
          font-weight: bold;
        }
        .section-caret {
          width: 16px;
          height: 16px;
        }
        .categories, .books {
          display: flex;
          overflow-x: scroll;
          padding: 0px 16px;
          gap: 16px;
          align-items: flex-start;
        }
        .categories::-webkit-scrollbar {
          display: none;
        }
        .books::-webkit-scrollbar {
          display: none;
        }
        .category-card {
          width: 150px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .book-card {
          width: 150px;
          display: flex;
          flex-direction: column;
          align-items: left;
        }
        .category-image {
          width: 50px; 
          height: 50px; 
          margin-bottom: 8px;
        }
        .category-info h3 {
          font-size: 14px;
          font-weight: 500;
        }
        .book-image {
          width: 130px;
          height: 130px; 
          border-radius: 8px;
          object-fit: cover; 
        }
        .book-info-1 {
          overflow: hidden;
          text-overflow: ellipsis;
          color: var(--Neutral-Color-Neutral-100, #101415);
          font-size: 14px;
          font-style:normal;
          font-weight: 500;
          line-height: 18px;
          text-align: left;
        }
        .book-info-2 {
          overflow: hidden;
          text-overflow: ellipsis;
          color: var(--Neutral-Color-Neutral-80, #444);
          font-family: sans-serif;
          font-size: 10px;
          font-style:normal;
          font-weight: 400;
          line-height: 14px;
          text-align: left;
        }
        .book-info-3 {
          leading-trim: both;
          text-edge: cap;
          color: var(--Neutral-Color-Neutral-60, #777);
          font-family: sans-serif;
          font-size: 10px;
          font-style:normal;
          font-weight: 400;
          line-height: 14px;
          text-align: left;
        }
        .footer {
          display: flex;
          justify-content: space-around;
          padding: 7px 0px 8px 0px;
          background-color: #fff;
          box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.1);
          position: static;
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
  );
};

export default Home;
