import React from "react";

function FlexBox() {
  return (
    <div className="five-wrapper">
      <div className="flexbox">
        <div className="header">
          <div className="text1">Decorative</div>
          <div className="text2">Decorative</div>
        </div>
        <div className="box1">
          <div className="leftbox">
            <div className="innerleft">
              <div className="text3">Heading 2_</div>
              <div className="text4">
                The hour of departure has arrived, and we go our separate ways,
                I to die, and you to live. Which of these two is better only God
                knows.
              </div>
            </div>
          </div>
          <div className="rightbox">
            <div className="img1">
              <img src="/assets/7.png" />
            </div>
            <div className="rightdown">
              <div className="text5">Heading 3_</div>
              <div className="title">
                <div className="num1">01</div>
                <div className="title1">
                  Prefer knowledge to wealth, for the one is transitory, the
                  other perpetual.
                </div>
                <div className="num2">02</div>
                <div className="title2">
                  We cannot live better than in seeking to become better.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlexBox;
