import React from "react";
import "./SlackClone.css";
import sc from "../../assets/slacklogo.png";
import sc2 from "../../assets/sc11.png";
import EastIcon from "@mui/icons-material/East";
import { useNavigate } from "react-router-dom";

function SlackClone() {
  const navigate = useNavigate();

  const handleNavigate2 = () => {
    navigate("/fam");
  };

  return (
    <div className="sc-container">
      <div>
        <div className="sc">
          <p className="sc-heading" style={{ fontFamily: "sans" }}>
            SlackClone
          </p>
        </div>
        <div className="sc-second-p">
          <div className="sc-role">
            <p className="sc-r-p-1">ROLE / SERVICE</p>
            <p className="sc-r-p-2">Development</p>
          </div>
          <div className="sc-role">
            <p className="sc-r-p-1">YEAR</p>
            <p className="sc-r-p-2">2023</p>
          </div>
          <div className="sc-role">
            <p className="sc-r-p-1">WEB / MOBILE</p>
            <p className="sc-r-p-2">Web</p>
          </div>
        </div>
        <div className="sc-overview">
          <p style={{ fontFamily: "sans" }} className="sc-ov">
            Overview
          </p>
          <p className="sc-ov-1">
            Step into the realm of my Slack clone project, a testament to my
            passion for reimagining real-time communication and collaboration
            through technology. This project underscores my expertise in
            crafting interactive web applications that facilitate seamless
            teamwork and communication. Designed with a keen eye for user
            experience, the Slack clone embodies the spirit of modern workplace
            dynamics, where instant messaging, channel-based organization, and
            file sharing converge. From its foundation, the project aimed to
            capture the essence of Slack's user-friendly interface while adding
            a touch of creativity to ensure a unique user experience. Every
            component, from message threads to real-time updates, has been
            meticulously developed to echo the efficiency and camaraderie found
            in contemporary team communication platforms. This project not only
            reflects my technical prowess but also my dedication to shaping
            digital environments that foster collaboration and enhance
            productivity in a fast-paced world.
          </p>
        </div>
        <div className="tech">
          <div>
            <p style={{ fontFamily: "sans" }} className="sc-ov">
              Technologies
            </p>
          </div>
          <div className="sc-b1">
            <div className="sc-b1-1">React</div>
            <div className="sc-b1-1">Firebase</div>
            <div className="sc-b1-1">Context API</div>
            <div className="sc-b1-1">React Hook Form</div>
            <div className="sc-b1-1">Yup</div>
            <div className="sc-b1-1">Figma</div>
          </div>
        </div>
        <div className="sc-container3c">
          <div class="sc-typewriter">
            <h1 style={{ fontFamily: "sans" }}>
              Unveiling a digital realm of seamless collaboration, this project
              transforms virtual conversations into vibrant dialogues that fuel
              productivity and camaraderie, redefining the way teams connect.
            </h1>
          </div>
          <div>
            <div className="sc-img-container">
              <img src={sc2} className="sc-av-img" alt="logo" />
            </div>
          </div>
        </div>
        <div className="sc-button-c">
          <div className="sc-xx">
            <a
              href="https://slack-clone-c5252.web.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>Live Site</button>
            </a>
            <EastIcon className="sc-iconeast" />
          </div>
        </div>
        <div className="sc6" style={{ fontFamily: "outFit" }}>
          Thanks for Watching
        </div>
        <div className="sc-button-tainer">
          <div className="sc-xxx">
            <button onClick={handleNavigate2}>Next Project</button>
            <EastIcon className="sc-iconeastt" />
          </div>
        </div>
      </div>
      <div className="sc-image-container">
        <img src={sc} className="sc-image" alt="logo" />
      </div>
    </div>
  );
}

export default SlackClone;
