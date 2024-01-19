import React, { useEffect } from 'react'
import gsap from 'gsap';
function Gap() {
    useEffect(()=>{
        // gsap.to(".car",{x:150,scale:2,rotation:360, duration:3});
        gsap.to(".car",{x:150,stagger:1,rotation:360, duration:3});

    });
  return (
    <div>Gap
        <img className='car' src='/assets/electricitycar.png'/>
        <img className='car' src='/assets/electricitycar.png'/>
        <img className='car' src='/assets/electricitycar.png'/>
    </div>
  )
}

export default Gap