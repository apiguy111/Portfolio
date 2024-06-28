import React from "react";
import "./Service.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

function Service() {
  return (
    <div className="home-s">
      <div className="heading-s" id="services">
        <div className="heading_box-s">
          <div className="para1_container">
            <p className="para1">Mine service</p>
          </div>
          <h2 className="heading1-s" style={{ fontFamily: "outFit" }}>
            What I Do?
          </h2>
        </div>

        <div className="home_container-s">
          <div className="container_image_box-s">
            <div className="container_image-s">
              <img
                src="https://images.unsplash.com/photo-1630852722667-ef9764a76b3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=600&q=60"
                alt=""
              />
              <div className="image_content-s">
                <h2 className="img_heading-s">UX Designing</h2>
                <p className="img_para-s">
                  Transforming ideas into intutive and delightful user
                  experiences for digital products
                </p>
              </div>
            </div>
          </div>

          <div className="container_text_box-s">
            <h1>Turning Caffeine Into Code To Create Digital Wonders</h1>
            <p>
              Crafting seamless user experiences and building stunning web
              solutions.
            </p>
            <a
              className="home2"
              href="mailto:mailbox.ekansh@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>
                Hire Me
                <ArrowForwardIcon />{" "}
              </button>
            </a>
          </div>
          <div className="container_image_box-s">
            <div className="container_image-s">
              <img
                src="https://images.unsplash.com/photo-1517134191118-9d595e4c8c2b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA2fHx3ZWIlMjBhbmQlMjBtb2JpbGUlMjBkZXZlbG9wbWVudHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60"
                alt=""
              />
              <div className="image_content-s">
                <h2 className="img_heading-s">Web And Mobile Development</h2>
                <p className="img_para-s">
                  Crafting responsive and high-performance websites and mobile
                  applications that drive results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
