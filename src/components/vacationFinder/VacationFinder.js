import React from "react";
import "./VacationFinder.css";
import vf from "../../assets/HOT4.png";
import vf2 from "../../assets/h1.png";
import vf3 from "../../assets/vf1.png";
import vf4 from "../../assets/h11.png";
import EastIcon from "@mui/icons-material/East";
import { useNavigate } from "react-router-dom";

function VacationFinder() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/Anime");
  };

  return (
    <div className="vf-container">
      <div>
        <div className="vf">
          <p className="vf-heading" style={{ fontFamily: "sans" }}>
            WanderStay
          </p>
        </div>
        <div className="vf-second-p">
          <div className="vf-role">
            <p className="vf-r-p-1">ROLE / SERVICE</p>
            <p className="vf-r-p-2">Design</p>
          </div>
          <div className="vf-role">
            <p className="vf-r-p-1">YEAR</p>
            <p className="vf-r-p-2">2022-2023</p>
          </div>
          <div className="vf-role">
            <p className="vf-r-p-1">WEB \ MOBILE</p>
            <p className="vf-r-p-2">UI Design</p>
          </div>
        </div>
        <div className="vf-overview">
          <p style={{ fontFamily: "sans" }} className="vf-ov">
            Overview
          </p>
          <p className="vf-ov-1">
            Imagine stepping into the world of my hotel booking application UI
            project, where I've combined my love for design and user-friendly
            experiences. This project is a window into my dedication to creating
            interfaces that are both visually appealing and easy to use. As soon
            as you start using the platform, you'll notice that it's like a
            well-crafted journey that balances beauty and practicality. The
            design is carefully put together with inviting layouts, interactive
            elements, and colors that feel soothing. It's almost like taking a
            virtual trip even before you've booked anything! Every little detail
            has been thought through to make sure you can smoothly find the
            perfect stay, explore amenities, and complete your booking
            hassle-free. This project is a testament to my passion for creating
            digital spaces that look great and work even better, making
            technology a seamless part of our travel experiences.
          </p>
        </div>
        <div className="vf-tech">
          <div>
            <p style={{ fontFamily: "sans" }} className="vf-ov">
              Technologies
            </p>
          </div>
          <div className="vf-b1">
            <div className="vf-b1-1">Figma</div>
          </div>
        </div>
        <div className="d2-container">
          <div class="d2-typewriter">
            <h1 style={{ fontFamily: "Outfit" }}>
              Infusing artistry and functionality, this project redefines the
              way travelers explore and choose their perfect getaway, making
              every click a step closer to unforgettable journeys.
            </h1>
          </div>
        </div>
        <div className="vf-c">
          <div className="vf2-image-container">
            <img src={vf2} className="vf2-image" alt="logo" />
          </div>
        </div>
        <div className="d3-container">
          <div class="d3-typewriter">
            <h1 style={{ fontFamily: "Outfit" }}>
              A masterpiece of pixels, this snapshot reflects the meticulous
              crafting of an intuitive and visually captivating hotel booking
              experience, where every detail invites travelers to embark on a
              seamless adventure.
            </h1>
          </div>
          <div>
            <div className="d3-img-container">
              <img src={vf3} className="d3-av-img" alt="logo" />
            </div>
          </div>
        </div>
        <div className="vf4-c">
          <div className="vf4-image-container">
            <img src={vf4} className="vf4-image" alt="logo" />
          </div>
        </div>

        <div className="vf-av6" style={{ fontFamily: "outFit" }}>
          Thanks for Watching
        </div>
        <div className="vf-button-tainer">
          <div className="vf-xxx">
            <button onClick={handleNavigate}>Next Project</button>
            <EastIcon className="vf-iconeastt" />
          </div>
        </div>
      </div>
      <div className="vf-image-container">
        <img src={vf} className="vf-image" alt="logo" />
      </div>
    </div>
  );
}

export default VacationFinder;
