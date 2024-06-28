import React from "react";
import "./ProjectScreenTwo.css";
import image from "../../assets/f2.png";

function ProjectScreenTwo() {
  return (
    <div className="ps-2">
      <div className="h-text" style={{ fontFamily: "sans" }}>
        <div className="t1">Engaging.Inclusive.Empowering</div>
        <div className="t2">
          Seamless navigation and a visually captivating experience for students
          to explore and connect within the university community.
        </div>
      </div>

      <div className="f-image-container">
        <img src={image} className="f-image" alt="logo" />
      </div>
    </div>
  );
}

export default ProjectScreenTwo;
