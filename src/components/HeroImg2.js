import "./HeroImg2Styles.css";

import Typewriter from "typewriter-effect"
import React, { Component } from 'react'

class HeroImg2 extends Component {
  render (){
    return(
        <div className="hero-img">
        <div className="heading">
            <h1> Contact</h1>
            <p>
            <Typewriter
      options={{
        strings: ["Let's have a chat!",  'Hire Me !!!'],
        autoStart: true,
        loop: true,
      }}
    /></p>
      
        </div>
     
    </div>
    );
   
  }
   
}


export default HeroImg2
