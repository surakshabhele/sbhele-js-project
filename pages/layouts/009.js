import React from "react";

function FlexBoxNinePage() {
  return (
    <div className="flexboxNinePage">
      <div className="header">
        <div className="logo-text">Decorative </div>
        <div className="logo-text">Decorative </div>
      </div>
      <div className="content">
        <div className="leftside">
          <img className="responsive-img" src="/assets/9.1.png" alt="image" />
        </div>
        <div className="rightside">
          <p>
            By all means marry; if you get a good wife, you ll become happy; if
            you get a bad one, you ll become a philosopher.
          </p>
        </div>
      </div>
      <div className="footer">
        <div className="left-footer">
        <div className="text1">Decorative Texts 
        <br/> Other Decorative Texts</div>
        <div className="heading">Heading.</div>
        </div>
        <div className="right-footer">
          <img className="responsive-img2" src="/assets/9.2.png" alt="image"/>
        </div>
      </div>
    </div>
  );
}

export default FlexBoxNinePage;
