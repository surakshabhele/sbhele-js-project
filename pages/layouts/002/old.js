// import React from "react";

// function FlexBox() {
//   return (
//     <div className="app-wrapper">
//     <div className="flexbox">
//       <div className="box1">
//         <div className="text1">Decorative</div>
//         <div className="text2">Decorative</div>
//       </div>
//       <div className="boxparent">
//         <div className="box2">
//           <div className="img">
//             <img src="/assets/s.png" />
//           </div>
//           <div className="text3">
//             Prefer knowledge to wealth, for the one is transitory, the other
//             perpetual.
//           </div>
//           <div className='img3'>
//           <img src='/assets/1.png'/>
//           </div>
//         </div>
//         <div className="box3">
//           <div className="text4">Heading2</div>
//           <div className="text5">
//             The hour of departure has arrived, and we go our separate ways, I to
//             die, and you to live. Which of these two is better only God knows.
//           </div>
//           <div className="box4">
//             <div className="img2">
//               <img src="/assets/2.png" />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//     </div>
//   );
// }

// export default FlexBox;

import React from "react";

function FlexBox() {
  return (
    <div className="app-wrapper">
      <div className="flexbox-002-old">
        <div className="header">
          <div className="text1">Decorative</div>
          <div className="text2">Decorative</div>
        </div>
        <div className="parentbox">
          <div className="rightbox">
            <div className="img1">
              <img src="/assets/s.png" />
            </div>
            <div className="paragraph1">
              Prefer knowledge to wealth, for the one is transitory, the other
              perpetual.
            </div>
            <div className="img3">
              <img src="/assets/1.png"/>
            </div>
          </div>
          <div className="leftbox">
            <div className="leftbottom">
            <div className="text3">Heading 2</div>
            <div className="paragraph2">
              The hour of departure has arrived, and we go our separate ways, I
              to die, and you to live. Which of these two is better only God
              knows.
            </div>
            <div className="img2">
              <img src="/assets/2.png"/>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlexBox;
