import React from "react";
import Bag from "./bag";
import Lock from "./lock";
import Email from "./email";
import Call from "./call";
function CreatAccount() {
  return (
    <div className="accountwrapper">
      <div className="account-page">
        <div className="createaccount"> Create Account</div>
        <div className="para">
          Student Pocket Money Management has become much <br />
          more easier, just fill the info below to begin.
        </div>



<form>
<div className="firstflex">
          <div className="SName">
           <div className="bag"> <Bag/></div> 
            <input
              type="text"
              id="SchoolNamet"
              name="School Name"
              placeholder="School Name"
            />
          </div>
          <div className="semail">
           <div className="email"> <Email /></div>
            <input
              type="text"
              id="SchoolEmail"
              name="School Email"
              placeholder="School Email"
            />
          </div></div>
        </form>
        

  <form>< div className="secondflex">
        <div className="spass">
           <div className="lock"> <Lock /></div>
            <input
              type="text"
              id="Password"
              name="Password"
              placeholder="Password"
            />
            </div>
            <div className="SPhonenumber">
           <div className="call"> <Call /></div>
            <input
              type="text"
              id="School Phonenumber"
              name="School Phonenumber"
              placeholder="School Phonenumber"
            />
            </div>
            </div>
            </form>

            <form>
            < div className="third">
        <div className="scpass">
           <div className="lock"> <Lock /></div>
            <input
              type="text"
              id="Confirm Password"
              name="Confirm Password"
              placeholder="Confirm Password"
            />
            </div></div>
            </form>

        <div className="agreeterm">
        <fieldset>
             
                <div className="spms-checkbox">
                  <input  type="checkbox" id="termtext" name="terms" />
                  <label htmlFor="termtext">
                    <span></span>
                  </label>
          
                <label for="termsprivacy">
                  I agree to the Terms and Privacy Policy.
                </label>
              </div>
            </fieldset>
        </div>
        <div className="butclass">
        <button className="REGISTER">REGISTER</button></div>
        <div className="end">Already have an account? <a href="#">Login</a></div>
      </div>
    </div>
  );
}

export default CreatAccount;
