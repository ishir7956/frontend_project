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
import YoungsterIcon from './assets/Sunglasses.png';
import PersonalIcon from './assets/Personal.png';
import CrimeIcon from './assets/Detective.png';
import CaretLeft from './assets/CaretLeft.svg';
import mobile_logos from './assets/mobile_logos.svg';

const categories = [
  { name: 'Fiction', icon: FictionIcon },
  { name: 'Non-Fiction', icon: NonFictionIcon },
  { name: 'Novel', icon: NovelIcon },
  { name: 'Biography', icon: BiographyIcon },
  { name: 'Poems', icon: PoemsIcon },
  { name: 'Kids', icon: KidsIcon },
  { name: 'Spirituality', icon: SpiritualityIcon },
  { name: 'Short Stories', icon: ShortStoriesIcon },
  { name: 'Romance', icon: RomanceIcon },
  { name: 'Personal Development & Lifestyle', icon: PersonalIcon},
  { name: 'Youngsters & Teens', icon: YoungsterIcon },
  { name: 'Crime & Thrillers', icon: CrimeIcon },
];

const Categories = () => {
    const navigate = useNavigate();
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
          <img src={CaretLeft} alt="Caret Left" className="caret-left" onClick={() => navigate('/')}/>
          <div className="navbar-title">Categories</div>
        </div>
        <div className="categories-grid">
          {categories.map((category) => (
            <div key={category.name} className="category-item">
              <div className="category-icon-frame">
                <img src={category.icon} alt={category.name} className="category-icon" />
              </div>
              <div className="category-name">{category.name}</div>
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
          font-family: sans-serif;
          font-size: 16px;
          font-style: normal;
          font-weight: bold;
          line-height: 18px;
        }
        .categories-grid {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          padding: 16px;
        }
        .category-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 30%;
          margin-bottom: 16px;
        }
        .category-icon-frame {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 60px;
          height: 60px;
          border: 1px solid #e0e0e0;
          border-radius: 12px;
          margin-bottom: 8px;
        }
        .category-icon {
          width: 50%;
          height: 50%;
        }
        .category-name {
          font-size: 14px;
          font-weight: 500;
          color: #000;
          text-align: center;
        }
      `}</style>
    </>
  );
};

export default Categories;
