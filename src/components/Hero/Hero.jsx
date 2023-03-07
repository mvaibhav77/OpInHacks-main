import React from "react";
import "../Hero/Hero.css";
import spaceLines from "../../assets/space-lines.png";
import eye from "../../assets/eye.png";
import stairs from "../../assets/stairs.png";
import pillar from "../../assets/intro-pillar.png";
import cube from "../../assets/intro-cube.png";
import cubes from "../../assets/intro-cubes.png";
import laptop from "../../assets/laptop.png";
import { FaTwitter, FaInstagram, FaLinkedinIn, FaDiscord } from "react-icons/fa";
import { BsArrowDown } from "react-icons/bs";
import { HiOutlinePencilSquare } from "react-icons/hi2";



export const Hero = () => {
  
  document.addEventListener("mousemove", parallax)
  function parallax (e)  {
    document.querySelectorAll(".elements").forEach(element => {
      const speed = element.getAttribute("data-speed");
      const x = (window.innerWidth - e.pageX*speed)/200;
      const y = (window.innerHeight - e.pageY*speed)/200;
    
      element.style.transform = "translate("+x+ "px,"+ y + "px)"
    
    })
  }
  
  // $(document).ready(function(){
  //   var elements = $(".elements");
   
  //   const layer = $("#Hero");
  //   layer.mousemove(function(e){
      
      
  //     elements.each(index => {
        
  //       var valueX = (e.pageX * -1/20);
  //       var valueY = (e.pageY* -1/ 20);
        
        
  //      console.log(this)
  //     })

  

  //   })
  // })
 



 
  return (
    <section id="Hero" className="hero-section">
      <img src={stairs} data-speed="2" className="stair-el elements" alt="" />
      <img src={pillar} data-speed="-6" className="pillar-el elements" alt="" />
      <img src={eye} data-speed="0" className="eye-el elements" alt="" />
      <img src={laptop} data-speed="3" className="laptop-el elements" alt="" />
      <img src={cube} data-speed="-3" className="cube-el elements" alt="" />
      <img src={cubes} data-speed="-9" className="cubes-el elements" alt="" />
      <img className="space-lines" src={spaceLines} alt="" />

      <div className="social-links-bottom">
        <a
          href="https://www.linkedin.com/company/opinhacks/"
          target="_blank"
          className="in-icon"
        >
          <FaLinkedinIn fontSize="1.6rem" />
        </a>
        <a
          href="https://twitter.com/opinhacks"
          target="_blank"
          className="twitter-icon"
        >
          <FaTwitter fontSize="1.5rem" />
        </a>
        <a
          href="https://www.instagram.com/opinhacks/"
          target="_blank"
          className="instagram-icon"
        >
          <FaInstagram fontSize="1.5rem" />
        </a>
      </div>

      <div className="hero-container">
        <div className="hero-title">
          <div className="opin-text">OPIN</div>
          <div className="hacks-text">HACKS</div>
        </div>
        <div className="hero-subtitle">
          5 - 7 May 2023 &nbsp; CHHATTISGARH
        </div>
        <div className="social-links">
        <a href="https://discord.gg/Gwztum9snV" target="_blank">
          <button className="discord-btn">
            
              {/* <FaDiscord fontSize="1.6rem"/> */}
              DISCORD
          </button>
            </a> 
            <a href="https://lu.ma/opin-hacks" target="_blank">
          <button className="register-btn">
            {/* <HiOutlinePencilSquare fontSize="1.6rem"/> */}
              REGISTER
          </button>
            </a>
        </div>
        <div className="down-arrow">
          <BsArrowDown fontSize="2.5rem" />
        </div>
      </div>
    </section>
  );
};
