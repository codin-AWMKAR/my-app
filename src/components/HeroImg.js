import "./HeroImgStyles.css";


import React from 'react';

import IntroImg from "../assets/Intro-bg.jpg";
import {Link} from "react-scroll";
import Typewriter from "typewriter-effect"

const Heroimg = () => {
  return (
    <div className="hero"> 
       <div className="mask"><img className="Intro-img" src={IntroImg} alt="IntroImg" /></div>
       <div className="content">
         <p>I'm a Freelancer</p>
        <div className="typewriter">
        <Typewriter
      options={{
        strings: ['Web Designer',  'Full-Stack Developer'],
        autoStart: true,
        loop: true,
      }}
    />
        </div>
       
       <div>
        <Link to="project" className="btn" spy={true} smooth={true} offset={50} duration={500}>Projects</Link>
        <Link to="contact" className=" btn btn-light" spy={true} smooth={true} offset={50} duration={500}>Contact</Link>
       </div>
       </div>
      
       
    </div>
  )
}

export default Heroimg
