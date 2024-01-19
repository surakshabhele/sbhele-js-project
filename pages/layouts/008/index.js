import React from "react";

function Flexbox08Page() {
  return (
    <div className="flexbox-08-page">
      <div className="header">
        <div className="logo-text">
          <p>Decorative</p>
        </div>
        <div className="logo-text">
          <p>Decorative</p>
        </div>
      </div>
      <div className="content-wrapper">
        <div className="left-side">
          <img class="reponsive-img" src="/assets/8.png" alt="image" />
        </div>
        <div className="right-side">
          <div className="rightupper">
            <div className="text1">
              <span>Heading 2_</span>
            </div>
            <div className="rightcorner">
              <div className="paragraph1">
                <p>
                  The hour of departure has arrived, and we go our separate
                  ways, I to die, and you to live. Which of these two is better
                  only God knows.
                </p>
              </div>
              <img class="reponsive-img" src="/assets/9.png" alt="image" />
            </div>
          </div>
          <div className="rightdown">
            <div className="side-left">
              <span className="num">01</span>
              <span className="title">
                Prefer knowledge to wealth, for the one is transitory, the other
                perpetual.
              </span>
            </div>
            <div className="side-right">
              <span className="num">02</span>
              <span className="title">
                We cannot live better than in seeking to become better.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Flexbox08Page;
