import React from "react";
import Profile from "../component/admin18/profile";
import Lock from "./lock";

function admin() {
  return (
    <div className="admin-wrapper">
      <div className="admin-page">
        <div className="log-title">Log in to Spms</div>
        <div className="para">
          <p>
            Welcome back! login with your data that you <br />
            entered during registration
          </p>
        </div>
        <form>
          <div className="user">
           <div className="profile"><Profile /></div> 
            <input
              type="text"
              id="usertext"
              name="Username"
              placeholder="Username"
            />
          </div>
          <div className="pass">
           <div className="lock"> <Lock /></div>
            <input
              type="text"
              id="Password"
              name="Password"
              placeholder="Password"
            />
          </div>
        </form>

        <div className="first-box">
          <div className="Remember">
            <form>
              <input type="radio" id="text" name="text" />
              <label for="text"> Remember me</label>
            </form>
          </div>
          <div className="Forgot">Forgot your password?</div>
        </div>

        <button className="LOGIN">LOGIN</button>
        <div className="text1">Don't have account? <a href="">Register</a> </div>
        <div className="text2">Terms & Privacy Policy</div>
      </div>
    </div>
  );
}

export default admin;
