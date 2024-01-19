import React from "react";

function FlexBox() {
  return (
    <div className="app-wrapper">
      <div className="flexbox">
        <div className="header">
          <div className="text1">Decorative</div>
          <div className="text2">Decorative</div>
        </div>
        <div className="box1">
          <div className="text3">Heading 2</div>
          <div className="img1">
            <img src="/assets/5.png" />
          </div>
        </div>
        <div className="box2">
          <div className="text4">INTERACTION</div>
        </div>
        <div className="box3">
            <div className="img2">
                <img src='/assets/6.png'/>
            </div>
            <div className="text5">Heading 2</div>
        </div>
      </div>
    </div>
  );
}

export default FlexBox;
