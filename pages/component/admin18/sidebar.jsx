import React from "react";
import Home from "./home-icon";
import Chart from "./chart";
import Profile from "./profile";
import TimeCircle from "./time-circle";
import Wallet from "./wallet";
import Forword from "./forword";
import Copyright from "./copyright";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="SchoolAccountbox">
        <div className="SchoolAccountinnerbox">
          <div className="wallet">
            <Wallet />
          </div>
          <div className="SchoolAccount">School Account</div>
          <div className="forword">
            <Forword />
          </div>
        </div>
      </div>

      <div className="homeouterbox">
        <Home />
        <div className="hometext">Home</div>
      </div>

      <div className="Activitybox">
        <div className="chart">
          <Chart />
        </div>
        <input placeholder="Activity" />
      </div>

      <div className="Accountsbox">
        <div className="profile">
          <Profile />
        </div>
        <input placeholder="Accounts" />
      </div>

      <div className="Historybox">
        <div className="timecircle">
          <TimeCircle />
        </div>
        <input placeholder="History" />
      </div>

      <div className="spms">
        <Copyright />
        <div className="spmstext">Spms. 2022</div>
      </div>
      <div className="digitalmang">
        Digital management software <br />
        designed for Schools
      </div>
    </div>
  );
}

export default Sidebar;
