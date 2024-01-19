import React from "react";

function FlexBox() {
  return (
    <div className="app-wrapper">
      <div className="FlexBox">
        <div className="start">
          <div className="text1">Decorative</div>
          <div className="text2">Decorative</div>
        </div>
        <div className="box1">
          <div className="leftbox">
            <div className="text3">
              <div>Decorative Texts</div>
              <div>Other Decorative Texts</div>
            </div>
            <div className="img">
              <img src="/assets/3.png" />
            </div>
          </div>
          <div className="box2">
            <div className="rightbox">
              <div className="rightupper">
                <div className="gray">
                  <div className="text4">
                    The hour of departure has arrived, and we go our separate
                    ways, I to die, and you to live. Which of these two is
                    better only God knows.
                  </div>
                  <div className="img3">
                    <img src="/assets/1.png" />
                  </div>
                
                </div>
                <div className="img2">
                  <img src="/assets/4.png" />
                </div>
              </div>
              <div className="rightbelow">
                <div className="text5">Heading.</div>
                <div className="textbox">
                  <div className="num1">01.</div>

                  <div className="text6">
                    Prefer knowledge to wealth, for the one is transitory, the
                    other perpetual.
                  </div>
                  <div className="num2">02.</div>
                  <div className="text7">
                    We cannot live better than in seeking to become better.
                  </div>
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
