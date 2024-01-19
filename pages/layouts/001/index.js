// import React from "react";

// function FlexBox() {
//   return (
//     <div className="flex-box-page">
//       <div className="first-box">
//         <div className="first-text">Decorative</div>
//         <div className="second-text">Decorative</div>
//       </div>
//       <div className="second-box">
//         <div className="inside-second-box-1">
//           <div className="paragraph">
//             The hour of departure has arrived, and we go our separate ways, I to
//             die, and you to live. Which of these two is better only God knows.
//           </div>
//           <div className="img">image1</div>
//         </div>
//         <div className="third-box">
//           <div className="thirdbox-1">
//             <div className="inside-third-box-1">img</div>
//             <div className="inside-third-box-2">Heading3</div>
//           </div>
//           <div className="thirdbox2">
//             <div className="inside-thirdbox2-1">Heading2</div>
//             <div className="inside-thirdbox2-2">Heading</div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default FlexBox;



import React from "react";
function FlexBoxOne() {
  return (
    <div className="flex-box-page">
      <div className="first-box">
        <div className="first-text">Decorative</div>
        <div className="second-text">Decorative</div>
      </div>
      <div className="second-box">
        <div className="inside-second-box-1">
          <div className="paragraph">
            <p>
              The hour of departure has arrived, and we go our separate ways, I
              to die, and you to live. Which of these two is better only God
              knows.
            </p>
          </div>
          <div className="img-1">
            <img src="/assets/001.1.png" />
          </div>
        </div>
        <div className="inside-second-box-2">
          <div className="inside-box-3">
            <div className="inside-box-img-2">
              <img src="/assets/001.2.png" />
            </div>
            <div className="inside-box-text-1">
              <span>Heading 3</span>
            </div>
          </div>
          <div className="inside-box-4">
            <div className="inside-box-text-2">
              <span> Heading 2</span>
            </div>
            <div className="inside-box-text-3">
              <span>Heading</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default FlexBoxOne;




