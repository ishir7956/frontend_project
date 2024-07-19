import React from "react";
import CaretLeft from "./assets/CaretLeft.svg";
import mobile_logos from "./assets/mobile_logos.svg";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";

function TermsConditions() {
  const navigate = useNavigate();
  return (
    <>
      <div className="container">
        <header className="header">
          <div className="time">9:30</div>
          <img src={mobile_logos} alt="Mobile logos" className="logos" />
        </header>
        <nav className="navbar">
            <img src={CaretLeft} alt="Back" className="back-icon" onClick={() => navigate('/profile')} />
            <div className="navbar-title">Terms & Conditions</div>
        </nav>
        <main className="content">
          <h1 className="main-heading">Terms & Conditions</h1>
          <p className="effective-date">With effect from: 09 Jan 2024</p>
          <section className="section">
            <h2>Lorem Ipsum</h2>
            <p className="paragraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu
              hendrerit orci. Cras ut mi in tellus dignissim ultricies. Nullam
              elementum vehicula erat in pulvinar. Duis in rhoncus felis, ac
              fringilla nisl. Nullam at suscipit justo. Nam ac tristique diam.
              Proin posuere, mi vitae gravida sollicitudin, tellus nulla
              malesuada nunc, ut bibendum elit massa eu magna. Ut mi diam,
              egestas at luctus eu, convallis vel turpis. Quisque elementum
              eleifend metus sit amet elementum. Nulla luctus sem ligula.
              Praesent at dapibus ligula.
            </p>
          </section>
          <section className="section">
            <h2>Lorem Ipsum</h2>
            <ul className="list">
              <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                eu hendrerit orci. Cras ut mi in tellus dignissim ultricies.
              </li>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                eu hendrerit orci.
              </li>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                eu hendrerit.
              </li>
            </ul>
          </section>
          <p className="paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu
            hendrerit orci. Cras ut mi in tellus dignissim ultricies. Nullam
            elementum vehicula erat in pulvinar.
          </p>
        </main>
        <footer className="footer">
          <div className="footer-bar" />
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
          display: flex;
          justify-content: space-between;
          background-color: #fff;
          padding: 9px 16px;
          font-size: 14px;
          color: #1d1b20;
          font-weight: 500;
          line-height: 125%;
        }
        .time {
          font-variant-numeric: lining-nums proportional-nums;
          font-feature-settings: "dlig" on, "ss02" on;
          font-family: Roboto, sans-serif;
        }
        .logos {
          width: 43px;
        }
        .navbar {
          display: flex;
          align-items: center;
          padding: 16px;
          box-shadow: 0px 10px 15px 0px rgba(0, 0, 0, 0.05);
          background-color: #fff;
        }
        .back-icon {
          width: 24px;
        }
        .navbar-title {
          font-size: 16px;
          font-style: normal;
          font-weight: bold;
          line-height: 18px;
          font-family: sans-serif;
        }
        .content {
          display: flex;
          flex-direction: column;
          padding: 0 16px;
          text-align: left;
          margin-top: 15px;
        }
        .main-heading {
          text-align: left; /* Ensure left alignment for the first heading */
          font-size: 18px;
          font-weight: 600;
          margin-bottom: 8px; /* Reduce bottom margin */
        }
        .effective-date {
          color: #777;
          font-size: 12px;
          margin-top: 4px; /* Reduce top margin */
          margin-bottom: 8px; /* Adjust bottom margin */
        }
        .section {
          margin-bottom: 24px;
        }
        .section h2 {
          font-size: 16px;
          font-weight: 600;
          margin-bottom: 12px;
        }
        .paragraph {
          color: #444;
          line-height: 18px;
          margin-bottom: 16px;
        }
        .list {
          color: #191e1f;
          margin-bottom: 16px;
        }
        .list li {
          margin-bottom: 8px;
        }
        .footer {
          display: flex;
          justify-content: center;
          margin-top: 88px;
          padding: 10px 60px;
        }
        .footer-bar {
          border-radius: 12px;
          background-color: #202124;
          width: 108px;
          height: 4px;
        }
      `}</style>
    </>
  );
}

export default TermsConditions;
