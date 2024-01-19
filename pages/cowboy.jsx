import React, { useState } from "react";
import Cowboylogo from "./component/cowboy/cowboylogo";
import ElectricBike from "./component/cowboy/electricbike";
import PlayButton from "./component/cowboy/playbutton";
// import RideAwake from "./component/cowboy/appstore";
import AppStoreLogo from "./component/cowboy/appstore";
import GooglePlay from "./component/cowboy/googleplay";
import LeftDoubleQoutation from "./component/cowboy/leftdoubleqoutation";
import DropDownArrow from "./component/cowboy/drop-down-arrow";
import DropUpArrow from "./component/cowboy/drop-up-arow";

// function myFunction() {
//   var x = document.getElementById("specification");
//   if (x.style.display === "none") {
//     x.style.display = "block";
//   } else {
//     x.style.display = "none";
//   }
// }

const FeatureInfo = ({ features }) => {
  return (
    <div className="feature">
      {features.image}
      <h1>{features.title}</h1>
      <span>{features.detail}</span>
    </div>
  );
};

function Cowboy() {
  const featureList = [
    {
      image: <img src="/assets/cyclebodypart1.png" />,
      title: "Auto Unlock",
      detail: "The app senses when you're nearby to unlock automatically.",
    },
    {
      image: <img src="/assets/cyclebodypart2.png" />,
      title: "Hydraulic disc brakes",
      detail: "Brakes with total stopping power the second you make contact.",
    },
    {
      image: <img src="/assets/cyclebodypart3.png" />,
      title: "Resilient Tires",
      detail:
        "All-rounder tires with flexible grip and a puncture-resistant layer.",
    },
    {
      image: <img src="/assets/cyclebodypart3.png" />,
      title: "Resilient Tires",
      detail:
        "All-rounder tires with flexible grip and a puncture-resistant layer.",
    },
    {
      image: <img src="/assets/cyclebodypart3.png" />,
      title: "Resilient Tires",
      detail:
        "All-rounder tires with flexible grip and a puncture-resistant layer.",
    },
  ];

  const [sections, setSections] = useState({
    specs:false,
    bike:false, 
    electro:false,
  });
  const handleDropDown = (e, type) => {
    e.preventDefault();
    setSections({ ...sections, [type]: !sections[type] });
  };

  return (
    <div className="cowboy-page">
      <div className="header-wrapper">
        <div className="header-menu">
          <div className="logo">
            <div className="cowboy-logo">
              <Cowboylogo />
            </div>

            <div className="header-content">
              <span>Overview</span>
              <span>Key featuers</span>
              <span>Ride awake</span>
              <span>Reviews</span>
              <span>Tech specs</span>
            </div>
          </div>
          <div className="menu-wrap">
            <div className="order-no">
              <span>From $2,190 $2,190</span>
              <h1>Discounts available</h1>
            </div>
            <div className="order-now">
              <button>
                <a>Order now</a>
              </button>
            </div>
          </div>
        </div>
        <div className="header-img">
          <div className="img-text">
            <span>COWBOY 4</span>
            <h1>Dream Machine</h1>
            <div className="play-button">
              <PlayButton /> <span>Select in action</span>
            </div>
          </div>
        </div>
      </div>
      <div className="electric-bike-wrap">
        <div className="electric-bike-para">
          <h1>Electric bike remagined</h1>
          <p>
            Find your pace at the edge of the urban frontier for a new path
            forward.
          </p>
          <div className="order-now">
            <button>
              <a>Order now</a>
            </button>
            <span>From $2,190 $2,190</span>
          </div>
        </div>
        <div className="electric-bike-img">
          <ElectricBike />
        </div>
      </div>
      <div className="key-features">
        <h1>Key features</h1>
        <div className="featurelist">
          {featureList.map((t, index) => {
            return <FeatureInfo features={t} key={`ti-${index.toString()}`} />;
          })}
        </div>
      </div>
      {/* <div className="divider">

      </div> */}
      <div className="ride-awake-wrapper">
        <h1>Ride Awake</h1>
        <div className="ride-awake-para">
          <p>
            With your phone docked in sight, your bike becomes an all-knowing
            companion. Connected to your every move and on the lookout for
            what's ahead, now's your chance to wander and wonder.
          </p>
          <p>
            Your next ride is no longer a question of if or when. Rather, where
            to? A swift first kick powers the speed you need for an active ride
            and an easy climb.
          </p>
        </div>
        <div className="ride-awake-img">
          <div className="ride-awake-text">
            <h1>Ride stats</h1>
            <p>
              With a constant ally tuned into the road, it will keep you moving
              well informed.
            </p>
          </div>
          <div className="logo">
            <AppStoreLogo />
            <GooglePlay />
          </div>
        </div>
      </div>
      <div className="our-castomers-speak">
        <h1>Our castomers speak</h1>

        <div className="customer-speack-para">
          <LeftDoubleQoutation />
          <p>
            Problems with my beltchain and I discovered a sound on my
            frontwheel…the bolt on my frontwheel was almost loose so my
            frontwheel was loose and the disk of my brakes and the brake paddles
            Where making this nose…very dangerous…luckily I discovered the
            problem on time
          </p>
        </div>
        <div className="profile-wrapper">
          <div className="profile-img active">
            <img src="/assets/cowboyprofile.png" />
            <div className="person-name">
              <h3>Jesse Walker</h3>
              <span>Professional rider</span>
            </div>
          </div>
          <div className="profile-img">
            <img src="/assets/cowboyprofile2.png" />
            <div className="person-name">
              <h3>Jesse Walker</h3>
              <span>Professional rider</span>
            </div>
          </div>

          <div className="profile-img">
            <img src="/assets/cowboyprofile3.png" />
            <div className="person-name">
              <h3>Jesse Walker</h3>
              <span>Professional rider</span>
            </div>
          </div>

          <div className="profile-img">
            <img src="/assets/cowboyprofile4.png" />
            <div className="person-name">
              <h3>Jesse Walker</h3>
              <span>Professional rider</span>
            </div>
          </div>
        </div>
        <h2>Our castomers speak</h2>
      </div>

      <div className="key-specification-wrapper">
        <div className="key-specification-table">
          <div className="key-specification">
            <h1>Key specification</h1>
            <span>16</span>
          </div>
          <a
            href="#"
            className="dropdown-sign"
            onClick={(e) => handleDropDown(e, "specs")}
          >
            { sections.specs && <DropUpArrow />}
            { sections.specs == false && (
              <span>
                < DropDownArrow/>
              </span>
            )}
          </a>
        </div>
        {sections.specs && (
          <div
            // className={showKeySpec ? "specifications" : "specifications active"}
          >
            <div className="specification">
              <div className="border"></div>
              <div className="price">
                <h1>Price</h1>
                <span>$ 2,190</span>
              </div>
              <div className="border"></div>
              <div className="price">
                <h1>Colors</h1>
                <span>Black</span>
              </div>
              <div className="border"></div>
              <div className="Abouth">
                <h1>Abouth </h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Rutrum consequat risus est sed nulla sed. Ultrices imperdiet
                  fringilla elit eu vitae nunc elementum sagittis.
                </p>
              </div>
              <div className="border"></div>
              <div className="price">
                <h1>Price</h1>
                <span>$ 2,190</span>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="bike-table">
        <div className="bike-text">
          <span>Bike</span>
          <div className="bike-no">
            <span>8</span>
          </div>
        </div>
        <div className="drop-down">
          <DropDownArrow />
        </div>
      </div>
      <div className="Electronics-table">
        <div className="Electronics-text">
          <span>Electronics</span>
          <div className="Electronics-no">
            <span>5</span>
          </div>
        </div>
        <div className="drop-down">
          <DropDownArrow />
        </div>
      </div>

      <div className="footer-img">
        <div className="img-text">
          <span>COWBOY 4</span>
          <h1>Mount up, ride on.</h1>
          <div className="but">
            <button>
              <a>Order now</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cowboy;
