import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import CaretLeft from './assets/CaretLeft.svg';
import mobile_logos from './assets/mobile_logos.svg';
import Playicon from './assets/Play.png';
import Readicon from './assets/BookOpenText.png';

const BookDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const book = JSON.parse(localStorage.getItem('bookDetails'));

  if (!book) {
    return <div>Book not found</div>;
  }

  return (
    <>
      <div className="container">
        <div className="header">
          <div className="time">9:30</div>
          <img src={mobile_logos} className="logo" alt="mobile logos" />
        </div>
        <div className="title-bar">
          <div className="title-container">
            <img src={CaretLeft} className="back-icon" alt="back" onClick={() => navigate('/')} />
            <div className="book-title">{book.title}</div>
          </div>
        </div>
        <img src={book.image} className="book-image" alt={book.title} />
        <div className="book-title-large">{book.title}</div>
        <div className="book-author">By {book.author}</div>
        <div className="book-details">
          <div className="detail-group">
            <div className="detail-item">
              Category: <span className="highlight">{book.category}</span>
            </div>
            <div className="detail-item">Format: {book.format}</div>
          </div>
          <div className="detail-group">
            <div className="detail-item">
              Duration: {book.duration} <span className="separator">•</span> Language: {book.language}
            </div>
          </div>
        </div>
        <div className="button-group">
          <div className="button read-button">
            <img src={Readicon} className="button-icon" alt="read" />
            <div className="button-text">Read</div>
          </div>
          <div className="button play-button">
            <img src={Playicon} className="button-icon" alt="play" />
            <div className="button-text">Play</div>
          </div>
        </div>
        <div className="divider" />
        <div className="summary">
          <div className="summary-title">Summary</div>
          <div className="summary-text">{book.summary}</div>
        </div>
      </div>
      <style jsx>{`
        .container {
          background-color: #fff;
          display: flex;
          max-width: 360px;
          flex-direction: column;
          margin: 0 auto;
        }
        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background-color: #fff;
          padding: 9px 16px;
          font-size: 14px;
          color: #1d1b20;
          font-weight: 500;
        }
        .title-bar {
          display: flex;
          box-shadow: 0px 10px 15px 0px rgba(0, 0, 0, 0.05);
          justify-content: space-between;
          align-items: center;
          background-color: #fff;
          padding: 9px 16px;
          font-size: 14px;
          color: #1d1b20;
          font-weight: 500;
        }
        .time {
          font-variant-numeric: lining-nums proportional-nums;
          font-feature-settings: 'dlig' on, 'ss02' on;
          font-family: Roboto, sans-serif;
        }
        .logo {
          width: 43px;
          aspect-ratio: 2.7;
          object-fit: auto;
          object-position: center;
        }
        .title-container {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .back-icon {
          width: 24px;
          aspect-ratio: 1;
          cursor: pointer;
        }
        .book-title {
          font-size: 14px;
          font-style:normal;
          font-weight:500;
          text-align: center;
        }
        .book-image {
          width: 180px;
          aspect-ratio: 1;
          object-fit: auto;
          border-radius: 14.155px;
          box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.1);
          object-position: center;
          align-self: center;
          margin: 16px auto;
        }
        .book-title-large {
          font: 600 18px/122% Inter, -apple-system, Roboto, Helvetica, sans-serif;
          color: #101415;
          text-align: center;
        }
        .book-author {
          font: 400 12px/133% Inter, -apple-system, Roboto, Helvetica, sans-serif;
          color: #444;
          text-align: center;
          margin-top: 8px;
        }
        .book-details {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-content: center;
          align-items: center;
          max-width: 328px;
          padding: 0 45px;
          font-size: 12px;
          font-weight: 400;
        }
        .detail-group {
          display: flex;
          gap: 10px;
          margin-top: 8px;
        }
        .detail-item {
          color: #777;
        }
        .highlight {
          color: #f26522;
        }
        .separator {
          margin: 0 5px;
        }
        .button-group {
          display: flex;
          justify-content: center;
          gap: 16px;
          padding: 16px;
          margin-top: 14px;
        }
        .button {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 8px 24px;
          border-radius: 9px;
          width: 48%;
          height: 35px;
          box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.16), 0px 1px 2px 0px rgba(0, 0, 0, 0.08);
          cursor: pointer;
          border: 1px solid #f26522;
        }
        .read-button .button-text,
        .play-button .button-text {
          color: #f26522;
          font-size: 16px;
          font-weight: 600;
        }
        .button-icon {
          aspect-ratio: 1;
          object-fit: auto;
          object-position: center;
          margin-right: 10px;
        }
        .divider {
          height: 1px;
          background-color: #e6e6e6;
          margin: 24px 0;
        }
        .summary {
          max-width: 328px;
          padding: 0 16px;
          margin: 24px auto;
          margin-top: 2px;
        }
        .summary-title {
          font-family: sans-serif;
          font-size: 18px;
          font-style: normal;
          font-weight: 600;
          line-height: 22px;
        }
        .summary-text {
          font-family: sans-serif;
          font-size: 14px;
          font-style: normal;
          font-weight: 200;
          margin-top: 4px;
        }
      `}</style>
    </>
  );
};

export default BookDetails;
