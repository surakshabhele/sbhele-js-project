import React from "react";
import BlueBall from "./blue-ball";
import StarIcon from "./star-icon";

function Header() {
  return (
    <div className="Header">
      <div className="header-content">
        <div className="header-img">
          <img src="/assets/agency-group.svg" />
        </div>
        <div className="text1">
          <div className="home">
            <a href="home">Home</a>
          </div>
          <div className="about">
            <a href="about"> About</a>
          </div>
          <div className="sev">
            <a href="Sevice">Sevice</a>
          </div>
          <div className="projects">
            <a href="Projests">Projests</a>
          </div>
        </div>
        <div className="click">
          <div className="contact-us">
            <a href="Contact us">Contact us</a>
          </div>
        </div>
      </div>
      <div className="text2">
        Make your dream <br />
        business goal come true
      </div>
      <div className="text3">
        when you need us for improve your business,
        <br /> then come with us to help your business have reach it, you just
        sit and feel that goal
      </div>
      <div className="but1">
        <button>Start Project</button>
      </div>
      <div className="header-img2">
         <img src="/assets/agency1.png" />
      </div>
      <div className="inside-great-project">
      <div className="staricon"></div>
      <div className="great-project"><StarIcon/>GREAT PROJECT</div>
      <div className="Done">800+ Done</div>
      </div>
      <div className="about-us">About Us</div>
      <div className="our-teammate">Our Teammate</div>
      <div className="teammate-img">
        <img src="/assets/agency4.png" />
      </div>
      <div className="blueball">
        <BlueBall />
      </div>
    </div>
  );
}

export default Header;
