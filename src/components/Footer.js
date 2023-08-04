import "./FooterStyles.css"

import React from 'react'

import{FaHome, FaPhone ,FaMailBulk, FaInstagram, FaLinkedin, FaTwitter} from "react-icons/fa";



const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
         <div className="location">
            <h4><FaHome size={20} style={{color:"#fff" , marginRight:"2rem"}}/></h4>
            <div>
                <p>Ward No:1 Baripada.</p>
                <p>Dist:Mayurbhanj,Odisha</p>
                <p>India</p>
                <p>PIN-757002</p>
            </div>
          </div>
            <div className="phone">
                <h4><FaPhone size={20} style={{color:"#fff" , marginRight:"2rem"}}/>+917992535677</h4>
                 
            </div>
            <div className="email">
              <h4><FaMailBulk size={20} style={{color:"#fff" , marginRight: "2rem"}}/>omkaroneofakind@gmail.com</h4>
            </div>
        
      
        
        </div>
        <div className="right">
            <h4>About Me</h4>
            <p>Hi, This is me Omkar Mandal. I am a freelancer and frontend developer.I enjoy discussing new projects and designing interactive Websites.</p>
           <div className="social">
           <a href="https://www.instagram.com/kryptoknight12/" ><FaInstagram  size={30} style={{color:"#fff" , marginRight: "1rem"}}/></a>
           <a href="https://www.linkedin.com/in/omkar-mandal-335889225" ><FaLinkedin size={30} style={{color:"#fff" , marginRight: "1rem"}}/></a>
           <a href="https://twitter.com/OmkarMandal18" ><FaTwitter size={30} style={{color:"#fff" , marginRight: "1rem"}}/></a>
           </div>
         </div>
      </div>
    </div>
   
  )
}

export default Footer
