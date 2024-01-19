import React from "react";
import Home from "./home-icon";
import Chart from "./chart";
import Profile from "./profile";
import TimeCircle from "./time-circle";
import Wallet from "./wallet";
import Forword from "./forword";
import Copyright from "./copyright";

const MeunItem = ({ icon, name, active = false }) => {
  const menuItemClassName = active ? "menu-item active" : "menu-item";
  return (
    <div className={menuItemClassName}>
      {icon} <div className="label">{name}</div>
    </div>
  );
};

function Sidebar() {
  const menuItems = [
    {
      name: "Home",
      icon: <Home />,
      active: true,
    },
    {
      name: "Activity",
      icon: <Chart />,
      active: false,
    },
    {
      name: "Accounts",
      icon: <Profile />,
      active: false,
    },
    {
      name: "History",
      icon: <TimeCircle />,
      active: false,
    },
  ];
  return (
    <div className="sidebar-menu">
      {/* <div className="SchoolAccountbox">
        <div className="SchoolAccountinnerbox">
          <div className="wallet">
            <Wallet />
          </div>
          <div className="SchoolAccount">School Account</div>
          <div className="forword">
            <Forword />
          </div>
        </div>
      </div> */}

      {/* <MeunItem icon={<Home />} name="Home" active={true} />
      <MeunItem icon={<Chart />} name="Activity" />
      <MeunItem icon={<Profile />} name="Accounts" />
      <MeunItem icon={<TimeCircle />} name="History" /> */}

      <>
        {menuItems.map((item, index) => {
          if (index === 1) {
            return (
              <React.Fragment key={index.toString()}>
                <MeunItem
                  name={item.name}
                  icon={item.icon}
                  active={item.active}
                />
                <div className="menu-divider" />
              </React.Fragment>
            );
          }
          return (
            <MeunItem
              name={item.name}
              icon={item.icon}
              active={item.active}
              key={index.toString()}
            />
          );
        })}
      </>

      <div className="footer-text">
        <div className="copyright-text">
          <Copyright />
          <div className="spmstext">Spms. 2022</div>
        </div>
        <div className="digitalmang">
          Digital management software <br />
          designed for Schools
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
