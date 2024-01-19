import React, { useEffect } from "react";
import Image from "next/image";
// import Profile from "components/admin-spms/profile";
import gsap from "gsap";
import Insta from "./component/insta";
import Twiter from "./component/twiter";
import ScrollDown from "./component/scroldown";
import Dash from "./component/dashline";
import Profilelogo from "./component/profilelogo";
import RightArrowM from "./rightarrow";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

function Mountain() {
  // gsap.from('.img1',{duration:1, y:'-100',ease:'bounce'})
  // gsap.from('.img2',{duration:1, opacity:1,delay:1,stagger:.5})
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.utils.toArray(".img1").forEach((panel, i) => {
      ScrollTrigger.create({ trigger: ".img1", start: "top top", pin:true,pinSpacing:false });
      // y: 200,
      // duration: 1,
    });
    gsap.to(".img2", {
      scrollTrigger: { trigger: ".img2", scrub: 3},
      y: 200,
      duration: 2,
    });
    gsap.to(".img3", {
      scrollTrigger: { trigger: ".img3", scrub: 2 },
      y: 200,
      duration: 1,
    });
    gsap.to(".left-hiker-level", {
      scrollTrigger: {
        trigger: ".left-hiker-level",
        scrub: 2,
        start: "center",
        end: "center",
        // markers: true,
      },
      x: 100,
      // scale: 1,
      ease: "none",
      duration: 3,
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".start-container",
        start: 0,
        end: "max",
        scrub: true,
        // onUpdate: ScrollTrigger.isInViewport(".start-left ")
      },
    });
    tl.to(".dark", { yPercent: 300 });

    // gsap.to(".img4", {
    //   scrollTrigger: { trigger: ".img3" },
    //   x: 300,
    //   duration: 1,
    // });
  });

  return (
    <div className="mountain-page">
      <div className="img-wrapper">
        <div className="img1">
          <div className="mountain-header">
            <h1 className="mntn">MNTN</h1>
            <div className="equipment-box">
              <h1 className="blog">Equipment</h1>
              <h1 className="blog">About us</h1>
              <h1 className="blog">Blog</h1>
            </div>
            <div className="account">
              <span className="profile">
                <Profilelogo />
              </span>
              <div className="account-text">Account</div>
            </div>
          </div>
          <div className="main-container-center">
          <div className="main-container-left">
            <div className="follow-us">
              <div className="follow-us-text">Follow us</div>
              <div className="insta">
                <Insta />
              </div>
              <span className="twiter">
                <Twiter />
              </span>
            </div>
            <div className="a-Hiking-guide-container">
              <div className="dash">
                <Dash />

                <h1 className="text">A Hiking guide</h1>
              </div>
              <h1 className="be-prepared">
                Be prepared for the Mountains and beyond!
              </h1>
              <ScrollDown />
            </div>
            </div>
           
          </div>
         
        </div>
        <div className="start-container">
              <div className="start-right">
                <span className="start">Start</span>
                <span className="start">01</span>
                <span className="start">02</span>
                <span className="start">03</span>
              </div>
              <div className="start-left">
                <div className="dark"></div>

              </div>
            </div>
        <div className="img2" />
        <div className="img3" />
      </div>
      {/* <Image className="img3" src="/assets/mountain/3.png"width={1920}height={1422}/>
        <Image className="img4" src="/assets/mountain/4.png"width={1920} height={926}/> */}
      <div className="main">
        <div className="hiker-level-container">
          <div className="left-hiker-level">
            <div className="no01">01</div>
            <div className="get-started">
              <Dash />
              <h1 className="get-started-text">GEt Started</h1>
            </div>
            <h1 className="heading-hiker-level">
              What level of hiker are you?
            </h1>
            <p className="para-hiker-level">
              Determining what level of hiker you are can be an important tool
              when planning future hikes. This hiking level guide will help you
              plan hikes according to different hike ratings set by various
              websites like All Trails and Modern Hiker. What type of hiker are
              you - novice, moderate, advanced moderate, expert, or expert
              backpacker?
            </p>
            <div className="read-more">
              <h1 className="read-more-text">read more</h1> <RightArrowM />
            </div>
          </div>
          <div className="right-hiker-level">
            <Image
              className="img4"
              src="/assets/mountain/5.png"
              width={566}
              height={720}
            />
          </div>
        </div>
        <div className="hiker-level-container">
          <div className="right-hiker-level">
            <Image
              className="img4"
              src="/assets/mountain/6.png"
              width={566}
              height={720}
            />
          </div>
          <div className="left-hiker-level">
            <div className="no01">02</div>

            <div className="get-started">
              <Dash />
              <h1 className="get-started-text">Hiking Essentials</h1>
            </div>
            <h1 className="heading-hiker-level">
              Picking the right Hiking Gear!
            </h1>
            <p className="para-hiker-level">
              The nice thing about beginning hiking is that you don't really
              need any special gear, you can probably get away with things you
              already have. Let's start with clothing. A typical mistake hiking
              beginners make is wearing jeans and regular clothes, which will
              get heavy and chafe wif they get sweaty or wet.
            </p>
            <div className="read-more">
              <h1 className="read-more-text">read more</h1> <RightArrowM />
            </div>
          </div>
        </div>
        <div className="hiker-level-container">
          <div className="left-hiker-level">
            <div className="no01">03</div>

            <div className="get-started">
              <Dash />
              <h1 className="get-started-text">where you go is the key</h1>
            </div>
            <h1 className="heading-hiker-level">
              Understand Your Map & Timing
            </h1>
            <p className="para-hiker-level">
              To start, print out the hiking guide and map. If it's raining,
              throw them in a Zip-Lock bag. Read over the guide, study the map,
              and have a good idea of what to expect. I like to know what my
              next landmark is as I hike. For example, I'll read the guide and
              know that say, in a mile, I make a right turn at the junction..
            </p>
            <div className="read-more">
              <h1 className="read-more-text">read more</h1> <RightArrowM />
            </div>
          </div>
          <div className="right-hiker-level">
            <Image
              className="img4"
              src="/assets/mountain/7.png"
              width={566}
              height={720}
            />
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="left-footer">
          <div className="mntn-destintion">
            <h1 className="mntn">MNTN</h1>
            <p className="destination">
              Get out there & discover your next slope, mountain & destination!
            </p>
          </div>
          <p className="copyright">Copyright 2019 MNTN, Inc. Terms & Privacy</p>
        </div>
        <div className="right-footer">
          <div className="more-on-the-blog-container">
            <h1 className="more-on-the-blog">More on The Blog</h1>
            <span className="about">About MNTN</span>
            <span className="about">Contributors & Writers</span>
            <span className="about">Write For Us</span>
            <span className="about">Contact Us</span>
            <span className="about">Privacy Policy</span>
          </div>
          <div className="more-on--container">
            <h1 className="more-on">More on MNTN</h1>
            <div className="the-team">The Team</div>
            <div className="the-team">Jobs</div>
            <div className="the-team">Press</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mountain;
