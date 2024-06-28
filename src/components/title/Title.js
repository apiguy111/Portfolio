import React from "react";
import "./Title.css";
import image from "../../assets/edit.jpg";

function Title() {
  return (
    <div>
      <div className="front-end-one" style={{ fontFamily: "outFit" }}>
        FRONT-END DEVELOPER
      </div>
      <div className="front-end-two" style={{ fontFamily: "outFit" }}>
        <div className="scroller">
          AND
          <span>
            UI DESIGNER
            <br />
            Programmer
            <br />
            Gamer
            <br />
            Traveller
          </span>
        </div>
      </div>

      <div className="image-title-container">
        <img src={image} className="title-image" alt="" />
        <div className="name">
          <div className="text-one" style={{ fontFamily: "outFit" }}>
            KUWAR SHIV
          </div>
          <div className="text-one" style={{ fontFamily: "outFit" }}>
            PRATAP SINGH
          </div>
        </div>
      </div>
      <div className="about-container" id="about">
        <p className="about" style={{ fontFamily: "outFit" }}>
          About Me
        </p>
        <p className="about-me">
          I'm <span className="name2">Kuwar Shiv Pratap Singh</span>, a
          versatile developer with expertise in React and React Native, backed
          by strong skills in JavaScript, Java, and Firebase. My proficiency
          extends to the server-side with Node, Express, and MongoDB. I excel in
          identifying and addressing security concerns while also specializing
          in UX design, research, and writing. I thrive in agile environments,
          conducting usability tests, and presenting my work effectively. I
          ensure seamless front-end and server-side integration, and my
          experience with databases includes Firebase and MongoDB. What sets me
          apart is my excellent communication, people management, and meticulous
          documentation skills, making me a well-rounded professional in the
          tech industry.
        </p>
      </div>
    </div>
  );
}

export default Title;
