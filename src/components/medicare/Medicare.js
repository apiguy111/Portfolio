import React from "react";
import "./Medicare.css";
import vf2 from "../../assets/CC1.png";
import hs2 from "../../assets/hs12.png";
import hs3 from "../../assets/hs11.png";
import hs4 from "../../assets/cc21.png";
import EastIcon from "@mui/icons-material/East";

function Medicare() {
  return (
    <div className="chs-container">
      <div>
        <div className="chs">
          <p className="chs-heading" style={{ fontFamily: "sans" }}>
            Medicare
          </p>
        </div>
        <div className="chs-second-p">
          <div className="chs-role">
            <p className="chs-r-p-1">ROLE / SERVICE</p>
            <p className="chs-r-p-2">Design</p>
          </div>
          <div className="chs-role">
            <p className="chs-r-p-1">YEAR</p>
            <p className="chs-r-p-2">2021</p>
          </div>
          <div className="chs-role">
            <p className="chs-r-p-1">WEB / MOBILE</p>
            <p className="chs-r-p-2">UI Design</p>
          </div>
        </div>
        <div className="chs-overview">
          <p style={{ fontFamily: "sans" }} className="chs-ov">
            Overview
          </p>
          <p className="chs-ov-1">
            Imagine taking a deep dive into my hospital appointment booking
            application UI project, where my passion for design and the crucial
            role of technology in modern healthcare come together. This project
            is like a mirror of my commitment to creating interfaces that truly
            make a difference in people's health journeys. Right from the
            beginning, the goal was to build a digital space that brings
            patients, doctors, hospitals, and diagnostics closer. The outcome? A
            user-friendly platform that makes booking medical appointments a
            breeze, all while ensuring patients get matched with the right
            medical experts and facilities. I've carefully woven together
            easy-to-follow layouts, clear information displays, and soothing
            colors to make the healthcare experience less overwhelming. Every
            little detail, from buttons to dropdown menus, has been crafted to
            make both patients and medical professionals feel at home, even in
            the complex world of healthcare. This project is a reflection of my
            commitment to using technology to improve healthcare, leaving a
            meaningful impact where it truly matters.
          </p>
        </div>

        <div className="chs-tech">
          <div>
            <p style={{ fontFamily: "sans" }} className="chs-ov">
              Technologies
            </p>
          </div>
          <div className="chs-b1">
            <div className="chs-b1-1">Figma</div>
          </div>
        </div>
        <div className="chs2-container">
          <div class="chs-typewriter">
            <h1 style={{ fontFamily: "Outfit" }}>
              Fueling a healthier future, this project marries design ingenuity
              with medical needs, offering a virtual bridge that unites
              patients, healthcare providers, and diagnostics in a seamless
              healthcare ecosystem.
            </h1>
          </div>
          <div>
            <div className="chs-img-container">
              <img src={hs2} className="chs-av-img" alt="logo" />
            </div>
          </div>
        </div>
        <div className="chs-c">
          <div className="chs2-image-container">
            <img src={vf2} className="chs2-image" alt="logo" />
          </div>
        </div>
        <div className="chs3-container">
          <div class="chs3-typewriter">
            <h1 style={{ fontFamily: "Outfit" }}>
              Crafted pixel by pixel, this screenshot captures the intricate
              care and meticulous attention poured into designing a medical
              journey that effortlessly connects patients, doctors, and
              hospitals for a healthier world.
            </h1>
          </div>
          <div>
            <div className="chs3-img-container">
              <img src={hs3} className="chs3-av-img" alt="logo" />
            </div>
          </div>
        </div>
        <div className="chs4-c">
          <div className="chs4-image-container">
            <img src={hs4} className="chs4-image" alt="logo" />
          </div>
        </div>

        <div className="chs-av6" style={{ fontFamily: "outFit" }}>
          Thanks for Watching
        </div>
        <div className="chs-button-tainer">
          <div className="chs-xxx">
            <button>Next Project</button>
            <EastIcon className="chs-iconeastt" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Medicare;
