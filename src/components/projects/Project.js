import React from "react";
import "./Project.css";

import "animate.css";
import Body from "../project/Body";

function Project() {
  return (
    <div className="project-container">
      <div className="project " style={{ fontFamily: "outFit" }} id="work">
        Projects & Personal projects
      </div>
      <div>
        <Body />
      </div>
    </div>
  );
}

export default Project;
