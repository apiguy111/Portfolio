import React from "react";
import "./Body.css";
import image from "../../assets/fam.png";
import image2 from "../../assets/HOT4.png";
import image3 from "../../assets/7.png";
import image4 from "../../assets/cc3.png";
import image5 from "../../assets/mm16.png";
import image6 from "../../assets/conn.png";
import sclone from "../../assets/slacklogo.png";
import { useNavigate } from "react-router-dom";

function Body() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/Anime");
  };

  const handleNavigate2 = () => {
    navigate("/Conversa");
  };

  const handleNavigate3 = () => {
    navigate("/Slack");
  };

  const handleNavigate4 = () => {
    navigate("/Vacation");
  };

  const handleNavigate5 = () => {
    navigate("/Medicare");
  };

  const handleNavigate6 = () => {
    navigate("/Movie");
  };

  const handleNavigate7 = () => {
    navigate("/fam");
  };

  return (
    <div className="main-c">
      <div className="container3">
        <div className="content3">
          <div>
            <div className="fam" style={{ fontFamily: "Oxygen" }}>
              ANIMEVERSE
            </div>
            <div className="p-role" style={{ fontFamily: "Outfit-Semi" }}>
              UX DESIGNER AND DEVELOPER
            </div>
            <div className="heading2" style={{ fontFamily: "Outfit" }}>
              Exploring the AnimeVerse: A Gateway to Anime Details
            </div>
            <div className="summary">
              A Dynamic Portal for Anime Enthusiasts. Explore and discover
              information about your favorite anime series, characters, and much
              more, all in one place.
            </div>
            <button
              className="view-button"
              style={{ fontFamily: "Outfit-Semi" }}
              onClick={handleNavigate}
            >
              VIEW CASE STUDY
            </button>
          </div>
        </div>

        <div className="image-container3">
          <img src={image3} className="image3" alt="logo" />
        </div>
      </div>

      <div className="container">
        <div className="content">
          <div>
            <div className="fam" style={{ fontFamily: "Oxygen" }}>
              FAMILIARITY
            </div>
            <div className="p-role" style={{ fontFamily: "Outfit-Semi" }}>
              UX DESIGNER AND DEVELOPER
            </div>
            <div className="heading2" style={{ fontFamily: "Outfit" }}>
              A VIBRANT COMMUNITY PLATFORM FOR UNIVERSITY STUDENTS
            </div>
            <div className="summary">
              I had the privilege to develop a dynamic community application,
              fostering engagement and connectivity among university students.
            </div>
            <button
              className="view-button"
              style={{ fontFamily: "Outfit-Semi" }}
              onClick={handleNavigate7}
            >
              VIEW CASE STUDY
            </button>
          </div>
        </div>

        <div className="image-container">
          <img src={image} className="image" alt="logo" />
        </div>
      </div>
      <div className="container5">
        <div className="content5">
          <div>
            <div className="fam" style={{ fontFamily: "Oxygen" }}>
              SLACKCLONE
            </div>
            <div className="p-role" style={{ fontFamily: "Outfit-Semi" }}>
              FULL STACK DEVELOPER
            </div>
            <div className="heading2" style={{ fontFamily: "Outfit" }}>
              Revolutionizing Communication: A Collaborative Workspace Inspired
              by Slack
            </div>
            <div className="summary">
              I designed and developed a Slack clone project that facilitates
              seamless communication
            </div>
            <button
              className="view-button"
              style={{ fontFamily: "Outfit-Semi" }}
              onClick={handleNavigate3}
            >
              VIEW CASE STUDY
            </button>
          </div>
        </div>
      </div>
      <div className="container7">
        <div className="content7">
          <div>
            <div className="fam" style={{ fontFamily: "Oxygen" }}>
              MOVIEMANIA
            </div>
            <div className="p-role" style={{ fontFamily: "Outfit-Semi" }}>
              UX DESIGNER AND DEVELOPER
            </div>
            <div className="heading2" style={{ fontFamily: "Outfit" }}>
              CURATING MOVIE TO YOUR FINGERTIPS THROUGH ADVANCED API
              INTEGRATION.
            </div>
            <div className="summary">
              Bringing the silver screen to your fingertips with a curated
              collection of movies through cutting-edge API integration.
            </div>
            <button
              className="view-button"
              style={{ fontFamily: "Outfit-Semi" }}
              onClick={handleNavigate6}
            >
              VIEW CASE STUDY
            </button>
          </div>
        </div>

        <div className="movie-image-container">
          <img src={image5} className="movie-image" alt="logo" />
        </div>
      </div>

      {/* <div className="container6">
        <div className="content6">
          <div>
            <div className="fam" style={{ fontFamily: "Oxygen" }}>
              CONVERSA
            </div>
            <div className="p-role" style={{ fontFamily: "Outfit-Semi" }}>
              FULL STACK DEVELOPER
            </div>
            <div className="heading2" style={{ fontFamily: "Outfit" }}>
              Building a Dynamic Chat Application for Enhanced Communication
            </div>
            <div className="summary">
              Elevating Conversations: Crafting a Dynamic Chat Application for
              Seamless Communication and Connection
            </div>
            <button
              className="view-button"
              style={{ fontFamily: "Outfit-Semi" }}
              onClick={handleNavigate2}
            >
              VIEW CASE STUDY
            </button>
          </div>
        </div>

        <div className="movie2-image-container">
          <img src={image6} className="movie2-image" alt="logo" />
        </div>
      </div> */}
      <div className="container2">
        <div className="content2">
          <div>
            <div className="fam" style={{ fontFamily: "Oxygen" }}>
              WANDERSTAY
            </div>
            <div className="p-role" style={{ fontFamily: "Outfit-Semi" }}>
              UX DESIGNER
            </div>
            <div className="heading2" style={{ fontFamily: "Outfit" }}>
              Discover and Reserve Your Ideal Accommodation
            </div>
            <div className="summary">
              Crafted an intuitive UI for a hotel booking app, seamlessly
              guiding users to discover their dream getaways with ease and
              efficiency.
            </div>
            <button
              className="view-button"
              style={{ fontFamily: "Outfit-Semi" }}
              onClick={handleNavigate4}
            >
              VIEW CASE STUDY
            </button>
          </div>
        </div>

        <div className="image-container">
          <img src={image2} className="image" alt="logo" />
        </div>
      </div>

      {/* <div className="container4">
        <div className="content4">
          <div>
            <div className="fam" style={{ fontFamily: "Oxygen" }}>
              MEDICARE
            </div>
            <div className="p-role" style={{ fontFamily: "Outfit-Semi" }}>
              UX DESIGNER
            </div>
            <div className="heading2" style={{ fontFamily: "Outfit" }}>
              An online hospital appointment booking system
            </div>
            <div className="summary">
              Crafted an intuitive UI for an online hospital appointment booking
              system, streamlining healthcare access by enabling users to
              effortlessly schedule appointments and manage health-related tasks
            </div>
            <button
              className="view-button"
              style={{ fontFamily: "Outfit-Semi" }}
              onClick={handleNavigate5}
            >
              VIEW CASE STUDY
            </button>
          </div>
        </div>

        <div className="image-container4">
          <img src={image4} className="image" alt="logo" />
        </div>
      </div> */}
    </div>
  );
}

export default Body;
