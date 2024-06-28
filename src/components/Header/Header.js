import React from "react";
import image from "../../assets/p1.png";
import "./Header.css";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/");
  };

  return (
    <div className="header">
      <div className="header_left" onClick={handleNavigate}>
        <img src={image} className="logo" alt="logo" />
        <h1 style={{ fontFamily: "outFit" }} className="anime">
          Portfolio
        </h1>
      </div>
      <div className="middle" style={{ fontFamily: "outFit" }}>
        <div className="home" onClick={handleNavigate}>
          <p>Home</p>
        </div>
        <div className="home1">
          <a href="#work" className="link">
            Work
          </a>
        </div>
        <div className="home1">
          <a href="#services" className="link">
            Services
          </a>
        </div>
        <div className="home1">
          <a href="#about" className="link">
            About Me
          </a>
        </div>
      </div>
      <div className="signout" style={{ fontFamily: "outFit" }}>
        <a
          className="home"
          href="mailto:mailbox.ekansh@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button>Contact Me</button>
        </a>
      </div>
    </div>
  );
}

export default Header;
