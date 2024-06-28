import React from "react";
import "./MovieMania.css";
import mm from "../../assets/mm17.png";
import mm2 from "../../assets/mm16.png";
import mm3 from "../../assets/mm14.png";
import mm4 from "../../assets/mm13.png";
import mm5 from "../../assets/mm15.png";
import mm6 from "../../assets/m12.png";
import EastIcon from "@mui/icons-material/East";
import { useNavigate } from "react-router-dom";

function MovieMania() {
  const navigate = useNavigate();

  const handleNavigate3 = () => {
    navigate("/Vacation");
  };

  return (
    <div className="mm-container">
      <div>
        <div className="mm">
          <p className="mm-heading" style={{ fontFamily: "sans" }}>
            MovieMania
          </p>
        </div>

        <div className="mm-second-p">
          <div className="mm-role">
            <p className="mm-r-p-1">ROLE / SERVICE</p>
            <p className="mm-r-p-2">Design & Development</p>
          </div>
          <div className="mm-role">
            <p className="mm-r-p-1">YEAR</p>
            <p className="mm-r-p-2">2022-2023</p>
          </div>
          <div className="mm-role">
            <p className="mm-r-p-1">WEB / MOBILE</p>
            <p className="mm-r-p-2">Web</p>
          </div>
        </div>
        <div className="mm-overview">
          <p style={{ fontFamily: "sans" }} className="mm-ov">
            Overview
          </p>
          <p className="mm-ov-1">
            Step into the world of my API-based movie catalog project, where my
            love for web development and digital creativity comes to life. This
            project is all about sharing my knack for making technology work for
            us. It's like having a backstage pass to the movies – I've used a
            special tool called an API to gather a bunch of movie information
            for you. Think of it as your movie companion, helping you explore
            films with ease. You can search for movies, get all the scoop on
            your favorites, and even find those hidden gems that deserve more
            attention. Plus, it keeps you in the loop with the latest releases.
            I've put together a cool space where the techie stuff (back-end and
            front-end magic) comes together to create a super smooth and fun
            experience. It's not just a project, but a way for me to share my
            excitement for movies and technology with you.
          </p>
        </div>
        <div className="mm-tech">
          <div>
            <p style={{ fontFamily: "sans" }} className="mm-ov">
              Technologies
            </p>
          </div>
          <div className="mm-b1">
            <div className="mm-b1-1">React</div>
            <div className="mm-b1-1">Firebase</div>
            <div className="mm-b1-1">TMDB API</div>
          </div>
        </div>
        <div className="mm2-container">
          <div class="mm2-typewriter">
            <h1 style={{ fontFamily: "Outfit" }}>
              By merging my passion for movies and tech wizardry, this project
              offers a virtual cinema hub that turns data into cinematic
              journeys, enriching how we explore and enjoy the world of film.
            </h1>
          </div>
          <div>
            <div className="mm2-img-container">
              <img src={mm2} className="mm2-av-img" alt="logo" />
            </div>
          </div>
        </div>
        <div className="mm-c">
          <div className="mm2-image-container">
            <img src={mm3} className="mm2-image" alt="logo" />
          </div>
        </div>
        <div className="mm3-container">
          <div class="mm3-typewriter">
            <h1 style={{ fontFamily: "Outfit" }}>
              A symphony of code and creativity, this project is a testament to
              the hours spent meticulously crafting a seamless blend of design
              and functionality for a truly immersive movie discovery experience
            </h1>
          </div>
          <div>
            <div className="mm3-img-container">
              <img src={mm4} className="mm3-av-img" alt="logo" />
            </div>
          </div>
        </div>
        <div className="mm4-c">
          <div className="mm4-image-container">
            <img src={mm5} className="mm4-image" alt="logo" />
          </div>
        </div>
        <div className="mm5-c">
          <div className="mm5-image-container">
            <img src={mm6} className="mm5-image" alt="logo" />
          </div>
        </div>
        <div className="mm-button-c">
          <div className="mm-xx">
            <a
              href="https://movie-app-9a263.web.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>Live Site</button>
            </a>
            <EastIcon className="mm-iconeast" />
          </div>
        </div>
        <div className="mm-av6" style={{ fontFamily: "outFit" }}>
          Thanks for Watching
        </div>
        <div className="mm-button-tainer">
          <div className="mm-xxx">
            <button onClick={handleNavigate3}>Next Project</button>
            <EastIcon className="mm-iconeastt" />
          </div>
        </div>
      </div>
      <div className="mm-image-container">
        <img src={mm} className="mm-image" alt="logo" />
      </div>
    </div>
  );
}

export default MovieMania;
