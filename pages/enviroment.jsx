import React from "react";
import GreenRecycle from "./component/enviroment/green-recycle";
import Insta from "./component/enviroment/insta";
import Facebook from "./component/enviroment/facebook";
import Twiter from "./component/enviroment/twiter";
import Hamburger from "./component/enviroment/hamburger";

const RecycleInfo = ({ recycles }) => {
  return (
    <div className="recyclelist">
      {recycles.image}
      <h1>{recycles.name}</h1>
      <p>{recycles.para}</p>
    </div>
  );
  // console.log (recycles.key)
};

function Enviroment() {
  const recycleList = [
    {
      image: <img className="responsive-img" src="../assets/hangerbag.png" />,
      name: "Recycle",
      para: "When you put the whole picture together, recyclingis the right thing to do",
    },
    {
      image: <img className="responsive-img" src="../assets/blueglobe.png" />,
      name: "Recycle",
      para: "Everybody wants a better world to live in. Let's make it happen.",
    },
    {
      image: <img className="responsive-img" src="../assets/electricitycar.png" />,
      name: "Friendly Cars",
      para: "The time is right for electric cars. Electric cars are the future.",
    },
  ];

  return (
    <div className="Enviroment-page">
      <div className="header-wrapper">
        <div className="upper-header">
          <div className="left-upper-header">
            <GreenRecycle />
          </div>
          <div className="right-upper-header">
          <div className="hamburger-icon">
                <Hamburger/>
              </div>
            <div className="register">
              <div className="register-text">
                <a href="#">Register</a>
              </div>
            </div>
            <div className="sign-in">
              <a href="#">Sign In</a>
            </div>
          </div>
        </div>
        <div className="lower-header">
          <div className="left-lower-header">
            <h1>
              Lets Make The World <br />A Better Place
            </h1>
            <p>
              Have you ever wondered how you can make the world a better place?
              Here's a reminder that YOU matter and that it's the small things
              that count.
            </p>
          </div>
          <div className="right-lower-header">
            <img className="responsive-img" src="/assets/enviroment.png" />
          </div>
        </div>
      </div>

      <div className="recycles-info">
        {recycleList.map((t, index) => {
          // console.log("key is",index)
          return <RecycleInfo recycles={t} key={`ti-${index.toString()}`} />;
         
        })}
      </div>
      <div className="footer">
        <div className="footer-half">
          <div className="logo">
            <GreenRecycle />
            {/* <span>©2021 Dummy Terms Privacy</span> */}
          </div>
          <div className="about">
            <h1> Blog</h1>
            <h1>Sed Feedback</h1>
            <h1>Dummy Link</h1>
            <h1>About</h1>
            <h1> Help</h1>
          </div>
          <div className="icon">
            <h1>
              <Facebook />
            </h1>
            <h1>
              <Insta />
            </h1>
            <h1>
              <Twiter />
            </h1>
          </div>
        </div>
        <div className="footer-half2">
          <span>©2021 Dummy Terms Privacy</span>
        </div>
      </div>
    </div>
  );
}

export default Enviroment;
