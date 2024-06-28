import React from "react";
import Header from "../components/Header/Header";
import Title from "../components/title/Title";
import Project from "../components/projects/Project";
import Skill from "../components/skill/Skill";
import Service from "../components/serviceSection/Service";
import Testimonial from "../components/testimonial/Testimonial";

function HomeScreen() {
  return (
    <div>
      <Header />
      <Title />
      <Project />
      <Skill />
      <Service />
      <Testimonial />
    </div>
  );
}

export default HomeScreen;
