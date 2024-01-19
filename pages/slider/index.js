import Image from 'next/image';
import React from 'react'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination,Navigation,Autoplay } from 'swiper';
export default function MySlider() { 
  return (
    <div className='slider-demo'>
    <Swiper
      spaceBetween={10}
      slidesPerView={2}
      modules={[Pagination,Navigation,Autoplay]}
      onSwiper={(swiper) => console.log(swiper)}
      navigation
      pagination={{ clickable: true }} 
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
     loop
      >
      <SwiperSlide><Image src="/swiper/1.jpg" width={500} height={400} /></SwiperSlide>
      <SwiperSlide><Image src="/swiper/2.jpg" width={500} height={400} /></SwiperSlide>
      <SwiperSlide><Image src="/swiper/3.jpg" width={500} height={400} /></SwiperSlide>
      <SwiperSlide><Image src="/swiper/4.jpg" width={500} height={400} /></SwiperSlide>    
    </Swiper>
    </div>
  )
}
