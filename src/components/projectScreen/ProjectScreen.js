import React, { useEffect } from "react";
import "./ProjectScreen.css";
import PImage from "../../assets/fam.png";
import ss1 from "../../assets/ss 2.png";
import ss2 from "../../assets/ss 3.png";
import ProjectScreenTwo from "./ProjectScreenTwo";
import { useNavigate } from "react-router-dom";

function ProjectScreen() {
  const navigate = useNavigate();

  const handleNavigate6 = () => {
    navigate("/Movie");
  };

  return (
    <div className="ps-container">
      <div>
        <div className="fh">
          <p className="fam-heading" style={{ fontFamily: "sans" }}>
            Familiarity
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
            <p className="r-p-1">ROLE / SERVICE</p>
            <p className="r-p-2">Design & Development</p>
          </div>
        </div>
        <div className="overview">
          <p style={{ fontFamily: "sans" }} className="ov">
            Overview
          </p>
          <p className="ov-1">
            The development of this community application stemmed from the
            recognition of a growing need among university students for a
            centralized platform that fosters engagement, collaboration, and
            personal development. Traditional methods of connecting students
            with various clubs and societies often relied on fragmented
            communication channels and lacked a comprehensive solution. To
            address this, our team embarked on creating a community application
            that would serve as a hub for students to explore, join, and
            actively participate in a wide range of clubs and societies.
          </p>
          <p className="ov-1">
            The motivation behind this application arose from the desire to
            provide students with a seamless and efficient means of discovering
            and engaging with their university's vibrant extracurricular
            community. By offering a user-friendly platform that consolidates
            club information, event details, and networking opportunities, we
            aimed to enhance the overall university experience for students.
            Additionally, we recognized the potential of such an application to
            cultivate essential skills like leadership, communication, and
            teamwork by encouraging active participation and providing
            opportunities for personal growth.
          </p>

          <p className="ov-1">
            Furthermore, our team acknowledged the transformative power of
            community involvement in shaping an individual's personal and
            professional journey. By creating a digital space that brings
            together like-minded individuals with shared interests, our
            application seeks to create a sense of belonging, encourage
            collaboration, and facilitate the exchange of ideas. Through this
            application, we aspire to promote inclusivity, diversity, and a
            strong sense of community within the university environment.
          </p>
        </div>
        <div className="tech">
          <div>
            <p style={{ fontFamily: "sans" }} className="ov">
              Technologies
            </p>
          </div>
          <div className="b1">
            <div className="b1-1" style={{ fontFamily: "sans" }}>
              React Native
            </div>
            <div className="b1-1" style={{ fontFamily: "sans" }}>
              Firebase
            </div>
            <div className="b1-1" style={{ fontFamily: "sans" }}>
              React Context Api
            </div>
            <div className="b1-1" style={{ fontFamily: "sans" }}>
              Formik
            </div>
            <div className="b1-1" style={{ fontFamily: "sans" }}>
              Yup
            </div>
            <div className="b1-1" style={{ fontFamily: "sans" }}>
              Figma
            </div>
          </div>
        </div>
        <ProjectScreenTwo />
        <div className="third-section">
          <div>
            <p style={{ fontFamily: "sans" }} className="ov ov1">
              Problem Statement
            </p>
            <p className="ov-2">
              Furthermore, our team acknowledged the transformative power of
              community involvement in shaping an individual's personal and
              professional journey. By creating a digital space that brings
              together like-minded individuals with shared interests, our
              application seeks to create a sense of belonging, encourage
              collaboration, and facilitate the exchange of ideas. Through this
              application, we aspire to promote inclusivity, diversity, and a
              strong sense of community within the university environment.
            </p>
          </div>
        </div>
        <div className="fourth-section">
          <p style={{ fontFamily: "sans" }} className="ov11">
            Features
          </p>

          <div className="mcontainer">
            <div className="f1">
              <p className="t11">Centralized platform</p>
              <p className="t111">
                Empowering students through a centralized platform for seamless
                connections and enriched experiences.
              </p>
            </div>
            <div className="f1">
              <p className="t11"> Content Sharing</p>
              <p className="t111">
                Empower your voice by sharing your thoughts, experiences, and
                stories with the community.
              </p>
            </div>
            <div className="f1">
              <p className="t11">Networking and Collaboration</p>
              <p className="t111">
                Fostering connections and collaboration within the student
                community, building a strong network that thrives on shared
                experiences.
              </p>
            </div>
            <div className="f1">
              <p className="t11">Club and Society Management</p>
              <p className="t111">
                Effortlessly manage and explore diverse clubs and societies,
                fostering a vibrant campus community.
              </p>
            </div>
          </div>
          <div className="mcontainer">
            <div className="f1">
              <p className="t11">Event Management</p>
              <p className="t111">
                Effortlessly manage and create exciting events that bring our
                community together.
              </p>
            </div>
            <div className="f1">
              <p className="t11"> Skill Showcase</p>
              <p className="t111">
                Showcasing the array of skills that empower us to shape ideas
                into reality
              </p>
            </div>
            <div className="f1">
              <p className="t11">Leadership Development</p>
              <p className="t111">
                Nurturing leadership skills through collaborative experiences
                that empower students to lead with confidence and purpose.
              </p>
            </div>
            <div className="f1">
              <p className="t11">Streamline the joining process</p>
              <p className="t111">
                Joining clubs made easy: a few clicks, endless opportunities.
              </p>
            </div>
          </div>
        </div>
        <div className="c5">
          <div className="s-image-container">
            <img src={ss1} className="s-image" alt="logo" />
          </div>
        </div>
        <div className="c5">
          <div className="s2-image-container">
            <img src={ss2} className="s2-image" alt="logo" />
          </div>
        </div>
        <div className="c6" style={{ fontFamily: "sans" }}>
          Thanks for Watching
        </div>
        <div className="c7">
          <button className="button1" onClick={handleNavigate6}>
            Next Project{" "}
          </button>
        </div>
      </div>
      <div className="p-image-container">
        <img src={PImage} className="p-image" alt="logo" />
      </div>
    </div>
  );
}

export default ProjectScreen;
