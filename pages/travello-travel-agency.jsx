// import React from "react";
// import RandomSymbol from "components/travello-travel-agency/random-symbol";
// import Vector from "components/travello-travel-agency/vector";

// const PackageInfo = ({ packages }) => {
//   return (
//     <div className="Packageinfo">
//       {packages.image}
//       <h1>{packages.name}</h1>
//       <div className="info">
//         Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//       </div>
//     </div>
//   );
// };
// const CountryInfo = ({ countries }) => {
//   return (
//     <div
//       className="countryinfo"
//       style={{ backgroundImage: `url(${countries.backgroundUrl})` }}
//     >
//       {/* <img src={countries.backgroundUrl} alt={countries.name} /> */}
//       <h1>{countries.name}</h1>
//       <div className="info">
//         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
//         dolor sit amet, consectetur adipiscing elit.
//       </div>
//     </div>
//   );
// };

// function Travellotravelagency() {
//   const packageList = [
//     {
//       image: <img src="../assets/passport1.png" />,
//       name: "Full Guide",
//     },
//     {
//       image: <img src="../assets/passport2.png" />,
//       name: "Transport",
//     },
//     {
//       image: <img src="../assets/passport3.png" />,
//       name: "Easy Book ",
//     },
//     {
//       image: <img src="../assets/passport4.png" />,
//       name: "Camp Fire ",
//     },
//   ];

//   const countryList = [
//     {
//       backgroundUrl: "../assets/travellostate.png",
//       name: "Roma, Italia ",
//     },
//     {
//       backgroundUrl: "../assets/travellostate1.png",
//       name: "Jakarta, Indonesia ",
//     },
//     {
//       backgroundUrl: "../assets/travellostate2.png",
//       name: "Bangkok, Thailand",
//     },
//   ];

//   return (
//     <div className="travello-page-wrapper">
//       <div className="header-wrapper">
//         <div className="hero-background"></div>
//         <div className="header">
//           <div className="logo">
//             <RandomSymbol/>
//           </div>

//           <div className="menu-wrapper">
//             <div className="menu-items">
//               <h1>
//                 <a href="#">Home</a>
//               </h1>
//               <h1>
//                 <a href="#">About</a>
//               </h1>
//               <h1>
//                 <a href="#">Why us</a>
//               </h1>
//               <h1>
//                 <a href="#">Trips</a>
//               </h1>
//             </div>
//             <div className="btn-primary">
//               <button type="button">
//                 <a href="#"> Contact us</a>
//               </button>
//             </div>
//           </div>
//         </div>

//         <div className="hero-wrapper">
//           <div className="hero-section">
//             <span>Explore new places with travello</span>
//             <p>
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//               eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
//               enim ad minim veniam, quis nostrud exercitation ullamco laboris
//               nisi ut aliquip.
//             </p>
//             <div className="btn-normal">
//               <button type="button">
//                 <a href="#">Get started</a>
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="secondbox">
//         <div className="secondboxleft">
//           <div className="img1">
//             <img className="responsive-image" src="/assets/travello1.png" />
//           </div>
//           <div className="img2">
//             <img className="responsive-image" src="/assets/travello2.png" />
//           </div>
//         </div>
//         <div className="secondboxright">
//           <div className="aboutus">About us</div>
//           <span>Explore world with us</span>
//           <p>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//             eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
//             ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
//             aliquip.
//             <br />
//             <br />
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//             eiusmod tempor incididunt ut labore et dolore magna aliqua.
//           </p>
//           <div className="btn-normal">
//             <button type="button">
//               <a href="#">Get started</a>
//               <div className="vector-icon">
//                 <Vector />
//               </div>
//             </button>
//           </div>
//         </div>
//       </div>

//       <div className="Packageinfo-wrapper">
//         <div className="features">
//           {packageList.map((t, index) => {
//             return <PackageInfo packages={t} key={`ti-${index.toString()}`} />;
//           })}
//         </div>
//       </div>
//       <div className="about-us-wrapper">
//         <span>About us</span>
//         <h1>Explore world with us</h1>
//       </div>

//       <div className="country">
//         <div className="country-info">
//           <div className="countryinfo-wrapper">
//             {countryList.map((t, index) => {
//               return (
//                 <CountryInfo countries={t} key={`ti-${index.toString()}`} />
//               );
//             })}
//           </div>
//         </div>
//       </div>

//       <div className="reviewbox">
//         <div className="customerReviews">
//           <span>What they say</span>
//           <h1>Customer Reviews</h1>
//           <p>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//             eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
//             ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
//             aliquip.
//             <br />
//             <br />
//             <br /> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
//             do eiusmod tempor incididunt ut labore et dolore magna aliqua.
//           </p>
//           <div className="all-reviews">
//             <button type="button">
//               <a href="#">All reviews</a>
//               <div className="vector-icon">
//                 <Vector />
//               </div>
//             </button>
//           </div>
//         </div>
//         <img src="/assets/travello-review.png" />
//       </div>
//       <div className="upper-footer">
//         <span>About us</span>
//         <h1>Explore world with us</h1>
//         <p>
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//           eiusmod
//           <br /> tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
//           minim
//           <br /> veniam, quis nostrud exercitation ullamco laboris nisi ut
//           aliquip.
//         </p>
//         <div className="get-started">
//           <button type="button">
//             <a href="#">Get Started</a>
//             <div className="vector-icon">
//               <Vector />
//             </div>
//           </button>
//         </div>
//       </div>
//       <div className="lower-footer">
//         <div className="lower-footer-wrapper">
//           <RandomSymbol />
//           <div className="learn-more-box">
//             <span>Learn More</span>
//             <p> About Lift </p>
//             <p>Press Relaases </p>
//             <p> Environment</p>
//             <p>Jobs</p>
//             <p> Privacy Policy</p>

//             <p> Contact Us</p>
//           </div>
//           <div className="tickets-booking-box">
//             <span> Tickets & Booking</span>
           
//             <p>Lift Tickets  </p>
//             <p> Season Passes  </p>
//             <p> Vacation Packages  </p>
          
//           </div>
//           <div className="contact-us-box">
//             <span> Contact Us</span>
//             <div className="contact-no">
//               <div className="hotel-reservation-section">
//                 <div className="hotel-reservation">Hotel Reservation:</div>
//                 <div className="hotel-reservation-no">123-456-7890</div>
//               </div>
//               <div className="ticket-office-section">
//                 <div className="ticket-office">Ticket Office:</div>
//                 <div className="ticket-office-no">123-456-7890</div>
//               </div>
//             </div>
//           </div>
//           <div className="social-box">
//             <span>Social</span>
//             <div className="logo">
//               <img src="/assets/facebook.png" />
//               <img src="/assets/instagram-logo.png" />
//               <img src="/assets/twitter.png" />
//               <img src="/assets/youtube-logo.png" />
//             </div>
//           </div>
//         </div>
//         {/* <hr /> */}
//         <div className="divider"></div>
//         <div className="travello">© 2022 Travello | All Rights Reserved</div>
//       </div>
//     </div>
//   );
// }

// export default Travellotravelagency;
