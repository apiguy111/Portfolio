import React, { useEffect, useRef } from "react";
import "./Skill.css";
import image from "../../assets/react.png";
import image2 from "../../assets/js.png";
import image3 from "../../assets/java.png";
import image4 from "../../assets/firebase.png";
import image5 from "../../assets/node.png";
import image6 from "../../assets/UX.png";
import image7 from "../../assets/agile.png";
import image8 from "../../assets/ut.png";
import image9 from "../../assets/css.png";
import image10 from "../../assets/graphQL.png";
import image11 from "../../assets/socket.png";

function Skill() {
  const reactRef = useRef(null);
  const jsRef = useRef(null);
  const javaRef = useRef(null);
  const fbRef = useRef(null);
  const rn = useRef(null);
  const gql = useRef(null);
  const node = useRef(null);
  const ux = useRef(null);
  const am = useRef(null);
  const ut = useRef(null);
  const css = useRef(null);
  const gql2 = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("bounce-in-fwd");
        }
      });
    });

    if (reactRef.current) {
      observer.observe(reactRef.current);
    }
    if (jsRef.current) {
      observer.observe(jsRef.current);
    }
    if (javaRef.current) {
      observer.observe(javaRef.current);
    }
    if (fbRef.current) {
      observer.observe(fbRef.current);
    }
    if (rn.current) {
      observer.observe(rn.current);
    }

    if (node.current) {
      observer.observe(node.current);
    }
    if (ux.current) {
      observer.observe(ux.current);
    }
    if (am.current) {
      observer.observe(am.current);
    }
    if (ut.current) {
      observer.observe(ut.current);
    }
    if (gql.current) {
      observer.observe(gql.current);
    }
    if (css.current) {
      observer.observe(css.current);
    }
    if (gql2.current) {
      observer.observe(gql2.current);
    }

    return () => {
      if (reactRef.current) {
        observer.unobserve(reactRef.current);
      }
      if (jsRef.current) {
        observer.unobserve(jsRef.current);
      }
      if (javaRef.current) {
        observer.unobserve(javaRef.current);
      }
      if (fbRef.current) {
        observer.unobserve(fbRef.current);
      }
      if (rn.current) {
        observer.unobserve(rn.current);
      }
      if (gql.current) {
        observer.unobserve(gql.current);
      }
      if (node.current) {
        observer.unobserve(node.current);
      }
      if (ux.current) {
        observer.unobserve(ux.current);
      }
      if (am.current) {
        observer.unobserve(am.current);
      }
      if (ut.current) {
        observer.unobserve(ut.current);
      }
      if (css.current) {
        observer.unobserve(css.current);
      }
      if (gql2.current) {
        observer.unobserve(gql2.current);
      }
    };
  }, []);

  return (
    <div className="skill-container">
      <div className="skill" style={{ fontFamily: "outFit" }}>
        Skills
      </div>
      <div className="row">
        <div>
          <div ref={reactRef} className="row-container">
            <img src={image} className="react" alt="logo" />
          </div>
          <div className="rr">
            <p className="text">React</p>
          </div>
        </div>
        <div>
          <div ref={jsRef} className="row-container javascript">
            <img src={image2} className="js" alt="logo" />
          </div>
          <div className="rr">
            <p className="text">JavaScript</p>
          </div>
        </div>
        <div>
          <div ref={javaRef} className="row-container java">
            <img src={image3} className="react" alt="logo" />
          </div>
          <div className="rr">
            <p className="text">Java</p>
          </div>
        </div>
        <div>
          <div ref={fbRef} className="row-container fb">
            <img src={image4} className="react" alt="logo" />
          </div>
          <div className="rr">
            <p className="text">Firebase</p>
          </div>
        </div>
        <div>
          <div ref={rn} className="row-container rn">
            <img src={image} className="react" alt="logo" />
          </div>
          <div className="rr">
            <p className="text">React-Native</p>
          </div>
        </div>
        {/* <div>
          <div ref={gql} className="row-container gql">
            <img src={image10} className="react" alt="logo" />
          </div>
          <div className="rr">
            <p className="text">GraphQL</p>
          </div>
        </div> */}
      </div>
      <div className="row-two">
        <div>
          <div ref={node} className="row-container node">
            <img src={image5} className="react" alt="logo" />
          </div>
          <div className="rr">
            <p className="text">Node.js</p>
          </div>
        </div>
        <div>
          <div ref={ux} className="row-container-ux ">
            <img src={image6} className="uxx" alt="logo" />
          </div>
          <div className="rr">
            <p className="text">UX Design</p>
          </div>
        </div>

        <div>
          <div ref={am} className="row-container agile">
            <img src={image7} className="agile-image" alt="logo" />
          </div>

          <div className="rr">
            <p className="text">Agile Methodology</p>
          </div>
        </div>
        <div>
          <div ref={ut} className="row-container ut">
            <img src={image8} className="ut-image" alt="logo" />
          </div>
          <div className="rr">
            <p className="text">Unit Testing</p>
          </div>
        </div>
        <div>
          <div ref={css} className="row-container css">
            <img src={image9} className="react" alt="logo" />
          </div>
          <div className="rr">
            <p className="text">CSS</p>
          </div>
        </div>
        {/* <div>
          <div ref={gql2} className="row-container socket">
            <img src={image11} className="react" alt="logo" />
          </div>
          <div className="rr">
            <p className="text">Socket.IO</p>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Skill;
