import React from "react";
import "./Conversa.css";
import con from "../../assets/6c.png";
import con2 from "../../assets/conn.png";
import con3 from "../../assets/conv555.png";
import EastIcon from "@mui/icons-material/East";
import { useNavigate } from "react-router-dom";

function Conversa() {
  const navigate = useNavigate();

  const handleNavigate4 = () => {
    navigate("/Vacation");
  };

  return (
    <div className="conv-container">
      <div>
        <div className="con">
          <p className="con-heading" style={{ fontFamily: "sans" }}>
            Conversa
          </p>
        </div>
        <div className="con-second-p">
          <div className="con-role">
            <p className="con-r-p-1">ROLE / SERVICE</p>
            <p className="con-r-p-2">Development</p>
          </div>
          <div className="con-role">
            <p className="con-r-p-1">YEAR</p>
            <p className="con-r-p-2">2022-2023</p>
          </div>
          <div className="con-role">
            <p className="con-r-p-1">WEB / MOBILE</p>
            <p className="con-r-p-2">Web</p>
          </div>
        </div>
        <div className="con-overview">
          <p style={{ fontFamily: "sans" }} className="con-ov">
            Overview
          </p>
          <p className="con-ov-1">
            This project showcases a dynamic one-to-one chat application that
            enables real-time communication between users. Built with
            technologies like React and firebase, the platform offers features
            such as secure user authentication, instant messaging, message
            status indicator. The project highlights my proficiency in creating
            responsive web applications that provide seamless and interactive
            communication experiences.
          </p>
        </div>
        <div className="con-tech">
          <div>
            <p style={{ fontFamily: "sans" }} className="con-ov">
              Technologies
            </p>
          </div>
          <div className="con-b1">
            <div className="con-b1-1">React</div>
            <div className="con-b1-1">Firebase</div>
            <div className="con-b1-1">Context API</div>
            <div className="con-b1-1">Figma</div>
          </div>
        </div>
        <div className="d-container">
          <div class="d-typewriter">
            <h1 style={{ fontFamily: "Outfit" }}>
              Fostering Conversations: Bringing people closer with real-time
              chats that bridge the digital divide.
            </h1>
          </div>
          <div>
            <div className="d-img-container">
              <img src={con2} className="d-av-img" alt="logo" />
            </div>
          </div>
        </div>
        <div className="con2-c">
          <div className="con2-image-container">
            <img src={con3} className="con2-image" alt="logo" />
          </div>
        </div>
        <div className="con-button-c">
          <div className="con-xx">
            <button>Live Site</button>

            <EastIcon className="con-iconeast" />
          </div>
        </div>
        <div className="con-av6" style={{ fontFamily: "outFit" }}>
          Thanks for Watching
        </div>
        <div className="button-tainer">
          <div className="xxx">
            <button onClick={handleNavigate4}>Next Project</button>
            <EastIcon className="iconeastt" />
          </div>
        </div>
      </div>
      <div className="con-image-container">
        <img src={con} className="con-image" alt="logo" />
      </div>
    </div>
  );
}

export default Conversa;
