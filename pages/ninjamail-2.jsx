import React from "react";
import GameCommers from "./component/ninjamail/gamecommers";
import Mail from "./component/ninjamail/mail";
import Paris from "./component/ninjamail/paris";
import Quest from "./component/ninjamail/quest";
import Radio from "./component/ninjamail/radio";
import Vodaka from "./component/ninjamail/vodaka";

const CaseStudyInfo = ({ study }) => {
  return (
    <div
      className="casestudy"
      style={{ backgroundImage: `url(${study.backgroundUrl})` }}
    >
      <h1>{study.name}</h1>
      <h2>{study.year}</h2>
    </div>
  );
};

function Ninjamail2() {
  const studylist = [
    {
      backgroundUrl: "/assets/ninjamail3.png",
      name: "Frankie",
      year: "Member since 2016",
    },
    {
      backgroundUrl: "/assets/ninjamail4.png",
      name: "Camile",
      year: "Member since 2012",
    },
    {
      backgroundUrl: "/assets/ninjamail5.png",
      name: "Elayne",
      year: "Member since 2018",
    },
  ];

  return (
    <div className="ninja-mail-page-2">
      <div className="ninja-mail-page-wrapper">
        <div className="header">
          <div className="logo">
            {/* <NinjaMailLogo width={160} height={40} /> */}
            <Mail className="logo-image" />
          </div>
          <div className="links">
            <ul className="menu-links">
              <li>
                <a href="#">FEATURES</a>
              </li>
              <li>
                <a href="#">PRICING</a>
              </li>
              <li>
                <a href="#">SERVICES</a>
              </li>
              <li>
                <a href="#">PARTNERS</a>
              </li>
            </ul>
            <div className="sign-up-link">
              <a href="#" className="btn">
                SIGN UP FREE
              </a>
            </div>
          </div>
        </div>
        <div className="hero-section">
          <div className="create-email-para">
            <h1>Create Stunning Email Campaigns</h1>
            <div>
              <p>
                Create and launch email campaigns that captivate your customers
                in just a few clicks.
              </p>
              <div className="try-now-btn">
                <a className="btn btn-primary" href="#">
                  TRY NOW
                </a>

                <a className="btn btn-secodory" href="#">
                  GET A DEMO
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="ninjamail-customer-img-wrapper">
        <div className="ninjamail-customer-para">
          <h1>Reach More Customers</h1>
          <div className="learn-how-button">
            <a className="btn btn-ter " href="#">
              LEARN HOW
            </a>
          </div>
        </div>
      </div>

      <div className="menu-wrapper">
        <div className="first-img">
          <img src="/assets/ninjamail1.png" />
          <p>
            Launch campaigns but also find new customers. Our unique platform
            handles campaigns from start to end.
          </p>
          <h1>Learn More {">"}</h1>
        </div>
        <div className="second-img">
          <img src="/assets/ninjamail2.png" />
          <p>
            Start building and sharing with your team today. NinjaMail is
            renowned for its industry leading team collaboration tools.
          </p>
          <h1>Learn More {">"} </h1>
        </div>

        <div className="menu-text">
          <h1>The source for proven, engaging email campaigns</h1>
          <p>
            Whether you're a startup, small business, e-commerce store, or want
            to promote your app, NinjaMail has the feature set tailored for your
            business.
          </p>
        </div>
      </div>

      <div className="casestudy-wrapper">
        {studylist.map((t, index) => {
          // console.log("key is",index)
          return <CaseStudyInfo study={t} key={`ti-${index.toString()}`} />;
        })}
      </div>

      <div className="email-reg-para">
        <h2>
          Learn how others are reaching their audience easier than ever before.
        </h2>
        <div className="e-mail-wrap">
          <div className="e-mail">
            <form>
              <input placeholder="Enter your email"></input>
            </form>
            <span>Thanks! Email received.</span>
          </div>
          <div className="join-our-list-btn">
            <button className="btn-quat">
              <a href="#"> JOIN OUR LIST</a>
            </button>
          </div>
        </div>

        <h1>
          All the best brands <br /> already use us.
        </h1>
      </div>

      <div className="brands">
        {/* <span className="logo1"><Paris/></span>
        <span className="logo2"><Vodaka/></span>
        <span className="logo3"><Quest/></span>
        <span className="logo4"><Radio/></span>
        <span className="logo5"><GameCommers/></span> */}

        <img className="logo1" src=" /assets/ninjamail-logo1.png" />
        <img className="logo2" src=" /assets/ninjamail-logo2.png" />
        <img className="logo3" src=" /assets/ninjamail-logo3.png" />
        <img className="logo4" src=" /assets/ninjamail-logo4.png" />
        <img className="logo5" src=" /assets/ninjamail-logo5.png" />
      </div>

      <div className="upper-footer">
        <span>Get started today!</span>
        <div className="white-button">
          <button>
            <a href="#">PICK A PLAN</a>
          </button>
        </div>
      </div>
      <div className="lower-footer">
        <div className="mail-logo">
          <Mail width={154} height={26} />
        </div>
        <div className="footer-content-wrapper">
          <div className="footer-content-wrapper1">
            <div className="footer-content1">
              <span>Features</span>
              <span>Pricing</span>
              <span>Services</span>
              <span>Partners</span>
            </div>
            <div className="footer-content2">
              <span>About Us</span>
              <span>Tutorials</span>
              <span>Resources</span>
              <span>Help Center</span>
              <span>Templates</span>
              <span>Case Studies</span>
            </div>
          </div>
          <div className="footer-content-wrapper2">
            <div className="footer-content3">
              <span>Medium</span>
              <span>Twitter</span>
              <span>Facebook</span>
              <span>Instagram</span>
              <span>LinkedIn</span>
            </div>
            <div className="footer-content4">
              <span>Contact Us</span>
              <span>Slack</span>
              <span>Jobs</span>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-end">
        <div className="border"></div>
        <div className="ninjamail-end">
          <h1>
            NinjaMail is a sample project for Quest AI. © 2019 Quest AI, All
            rights reserved.
          </h1>
          <h2>Terms & Conditions</h2>
          <h3>Privacy Policy</h3>
        </div>
      </div>
    </div>
  );
}

export default Ninjamail2;
