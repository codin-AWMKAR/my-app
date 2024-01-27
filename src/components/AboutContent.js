import "./AboutContentStyles.css";
import React from 'react';
import { Link } from "react-router-dom";
import React1 from "../assets/react1.mp4";
import ResumePDF from "../assets/resume.pdf";

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h2 className="about-heading">About Me</h2>
        <h1>I DON'T PANIC.....</h1>
        <p>
          I'm a Front-End Web Developer who's passionate about creating high-end
          designs for websites and making them highly secure and interactive.
        </p>
        <div className="tech-stack-container">
          <p className="tech-stack">My Tech Stack Includes:</p>
          <ul className="tech-stack-list">
            <li className="tech-stack-list-item">React || Tailwind.css Mongo.DB||React||Node.Js||Express.JS</li>
          </ul>
        </div>
        <Link to="/contact">
          <button className="btn">Contact</button>
        </Link>
        <a href={ResumePDF} download="OMKAR_MANDAL_CV.pdf">
          <button style={{ marginTop: "10px" }} className="btn">
            Download Resume
          </button>
        </a>
      </div>
      <div className="right">
        <div className="img-container">
          <div className="img-stack top">
            <video src={React1} autoPlay loop muted className="img" alt="true"  />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
