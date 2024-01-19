import React from "react";
import DropDownArrow from "./component/cowboy/drop-down-arrow";
import DropDown from "./component/photography-event/drop-down";
import Plus from "./component/photography-event/plus";
import Saved from "./component/photography-event/saved";

function photographyEvent() {
  return (
    <div className="photography-event-page">
      <div className="header">
        <div className="bg-img">
          <div className="header-img"></div>
        </div>
        <div className="header-containt">
          <div className="saved-icon">
            {/* <Saved /> */}
            <img src="assets/saved-tag.png" alt="saved tag" />
          </div>
          <div className="header-containt-left">
            <h1>Photography Event </h1>
            <h2>by Jwish Patel</h2>
            <div className="profile">
              <img src="/assets/photographyevent-profile.png" />
              <h1>YourMoments</h1>
              <span>posted 1 month ago</span>
            </div>

            <div className="sticky-bar-left-side">
              <div className="content1">
                <h1>Date</h1>
                <span> 1 April 2022 </span>
              </div>
              <div className="content2">
                <h1>Time</h1>
                <span> 7:00 pm</span>
              </div>
              <div className="content3">
                <h1>Duration</h1>
                <span>80 min</span>
              </div>
            </div>

            <div className="event-include-wrapper">
              <div className="event-include">
                <h1>This event includes</h1>
                <span className="interaction">
                 <div className="emoji"> 👍🏻 </div>Direct interaction with the photographer
                </span>
                <span className="recording">
                <div className="emoji"> 🎥 </div>  Session recording after the event
                </span>

                <span className="about-the-event">About the Event</span>
                <p>
                  Whether you are a Beginner, Intermediate level or want to turn
                  yourself into a Professional and we have the strategy of
                  teaching the Photography Basics.
                </p>
                <span className="read-more">
                  Read More <DropDown />
                </span>
              </div>
            </div>
          </div>
          <div className="header-containt-right">
            <div className="about-the-event">About the Event</div>
            <div className="photography-profile">
              <img src="/assets/photographyevent-profile.png" />
              <div className="profile-name">
                <h1>YourMoments</h1>
                <h2>@JwishPatel</h2>
              </div>
              <Plus />
            </div>
            <p>
              capture the true essence of your relations and the most amazing
              moments of your life
            </p>
            <span>
              Read More <DropDown />
            </span>
            <div className="read-full-story">Read full story <DropDown/> </div>
          </div>
        </div>
      </div>

      <div className="footer">
        <div className="frequently-asked-questions">
          <h1 className="faq">Frequently Asked Questions</h1>
          <span className="find-ans">
            find all your answers related to this event.
          </span>
          <div className="question1">
            <h1>Who can participate in this Event?</h1>
            <span>
              <DropDown />
            </span>
          </div>
          <div className="question2">
            <h1>What are the prerequisites for joining this workshop?</h1>
            <span>
              <DropDown />
            </span>
          </div>
          <div className="question3">
            <h1>Do we own our Images?</h1>
            <span>
              <DropDown />
            </span>
          </div>
          <div className="question4">
            <h1>Is it pre-recorded or live Event?</h1>
            <span>
              <DropDown />
            </span>
          </div>
        </div>
        <div className="post-your-question">
          <h1>Post Your Question</h1>
          <span>Your question might be answered as soon as</span>
          <form>
            <input placeholder="please submit your questions"></input>
            <div className="but">
              <button type="text" onClick={()=>{alert("successfully post")}}>Post</button>
            </div>
          </form>
        </div>
      </div>

      <div className="sticky-bar">
        <div className="sticky-bar-left-side">
          <div className="content1">
            <h1>Date</h1>
            <span> 1 April 2022 </span>
          </div>
          <div className="content2">
            <h1>Time</h1>
            <span> 7:00 pm</span>
          </div>
          <div className="content3">
            <h1>Duration</h1>
            <span>80 min</span>
          </div>
        </div>
        <div className="sticky-bar-right-side">
          <div className="Price">
            <h1>Price</h1>
            <span>Rs. 400</span>
          </div>
          <div className="tickets">
            <button>
              <a href="#">Tickets</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default photographyEvent;
