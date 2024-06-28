import React from "react";
import "./AnimeVerse.css";
import av1 from "../../assets/5 (1).png";
import av2 from "../../assets/av2.png";
import av3 from "../../assets/m2.png";
import EastIcon from "@mui/icons-material/East";
import { useNavigate } from "react-router-dom";

function AnimeVerse() {
  const navigate = useNavigate();

  const handleNavigate7 = () => {
    navigate("/Slack");
  };

  return (
    <div className="av-container">
      <div>
        <div className="av">
          <p className="av-heading" style={{ fontFamily: "sans" }}>
            AnimeVerse
          </p>
        </div>
        <div className="second-p">
          <div className="role">
            <p className="r-p-1">ROLE / SERVICE</p>
            <p className="r-p-2">Design & Development</p>
          </div>
          <div className="role">
            <p className="r-p-1">YEAR</p>
            <p className="r-p-2">2022-2023</p>
          </div>
          <div className="role">
            <p className="r-p-1">WEB / MOBILE</p>
            <p className="r-p-2">Web</p>
          </div>
        </div>
        <div className="overview">
          <p style={{ fontFamily: "sans" }} className="ov">
            Overview
          </p>
          <p className="ov-1">
            In this project, I've combined my passion for anime and my coding
            skills to create a unique website that brings the world of anime
            movies and manga to enthusiasts like me. Using the AniList API ,
            I've crafted a user-friendly platform where users can explore,
            discover, and stay updated on their favorite anime content. Through
            this project, I've not only honed my technical skills but also
            demonstrated my creativity in bridging my interests with modern
            technology.
          </p>
        </div>
        <div className="av-tech">
          <div>
            <p style={{ fontFamily: "sans" }} className="ov">
              Technologies
            </p>
          </div>
          <div className="b1">
            <div className="b1-1">React</div>
            <div className="b1-1">Firebase</div>
            <div className="b1-1">React Context API</div>
            <div className="b1-1">React Hook Form</div>
            <div className="b1-1">Yup</div>
            <div className="b1-1">Figma</div>
            <div className="b1-1">GraphQL</div>
          </div>
        </div>
        <div className="container3c">
          <div class="typewriter">
            <h1 style={{ fontFamily: "sans" }}>
              Crafting a digital canvas that brings the vibrant universe of
              anime movies and manga to life.
            </h1>
          </div>
          <div>
            <div className="img-container">
              <img src={av2} className="av-img" alt="logo" />
            </div>
          </div>
        </div>
        <div className="av2-c">
          <div className="av2-image-container">
            <img src={av3} className="av2-image" alt="logo" />
          </div>
        </div>
        <div className="button-c">
          <div className="xx">
            <a
              href="https://animeverse-182c0.web.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>Live Site</button>
            </a>
            <EastIcon className="iconeast" />
          </div>
        </div>
        <div className="av6" style={{ fontFamily: "outFit" }}>
          Thanks for Watching
        </div>
        <div className="button-tainer">
          <div className="xxx">
            <button onClick={handleNavigate7}>Next Project</button>
            <EastIcon className="iconeastt" />
          </div>
        </div>
      </div>
      <div className="av-image-container">
        <img src={av1} className="av-image" alt="logo" />
      </div>
    </div>
  );
}

export default AnimeVerse;
