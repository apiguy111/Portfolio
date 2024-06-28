import React from "react";
import "./Testimonial.css";
import image from "../../assets/ig.png";
import image2 from "../../assets/twit.png";
import image3 from "../../assets/facebook.png";
import image4 from "../../assets/niks.JPG";
import image5 from "../../assets/ash.jpg";
import image6 from "../../assets/noAvatar.png";

function Testimonial() {
  const handleFacebookClick = () => {
    alert(
      "Apologies, I am no longer a member of Facebook. Thank you for your interest."
    );
  };

  return (
    <div className="home5">
      <div className="heading">
        <h1 style={{ fontFamily: "outFit" }}>Testimonial</h1>
      </div>
      <div className="contener">
        <div className="contener1">
          <img src={image6}></img>
          <div className="contener_content">
            <p>
              His design skills are unmatched. The attention to detail and
              user-friendly approach made my app shine. I'm incredidly impressed
              with his talent and professionalism. Highly recommended!
            </p>
          </div>

          <div className="contener_content1">
            <h5>Shivansh Singh</h5>
            <p>
              Dr Shakuntala Misra National Rehabilitation University-Lucknow
            </p>
          </div>
        </div>
        <div className="contener1">
          <img src={image6}></img>
          <div className="contener_content">
            <p>
              Working with shiv was a game-changer for my project. Their
              front-end expertise took my engineering project to the next level.
            </p>
          </div>
          <div className="contener_content2">
            <h5>Aakansha Baneerjee</h5>
            <p>Birla Institute of Technology-Mesra</p>
          </div>
        </div>
        <div className="contener1">
          <img src={image5}></img>
          <div className="contener_content">
            <p>
              Shiv significantly improved my full-stack social media app with
              their exceptional UX design skills, resulting in a seamless and
              enjoyable user experience. Their contribution elevated the
              project's success.
            </p>
          </div>
          <div className="contener_content1">
            <h5>Ashwini Kumar</h5>
            <p>Rajkiya Engineering College-Banda</p>
          </div>
        </div>
      </div>
      <div class="horizontal-line"></div>
      <div className="contact_container">
        <h1>Contact Information</h1>
        <div className="contact_content">
          <div className="contact_info">
            <p>
              Feel free to reach out to me for any inquiries, collaborations, or
              just to say hello. I'm always excited to connect with fellow
              developers and creative minds. You can reach me at
              mailbox.ekansh@gmail.com or connect with me on below platforms
            </p>
          </div>
          <div className="contact_logo">
            <a onClick={handleFacebookClick}>
              <img src={image3} />
            </a>
            <a
              href="https://twitter.com/apiguy111"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={image2} />
            </a>
            <a
              href="https://www.instagram.com/0xnmy"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={image} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Testimonial;
