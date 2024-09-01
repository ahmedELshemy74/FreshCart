import React, { useState } from 'react'
import style from './MainSlider.module.css'
import Slider from "react-slick";
import slide1 from '../../assets/images/slider-image-3.jpeg'
import slide2 from '../../assets/images/slider-image-2.jpeg'
import slide3 from '../../assets/images/slider-image-1.jpeg'
import slide4 from '../../assets/images/grocery-banner-2.jpeg'
import slide5 from '../../assets/images/grocery-banner.png'


export default function MainSlider() {


  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1500,
  };

    
  return <>
    
    <div className="flex">
      <div className="w-3/4">
      <Slider {...settings}>
      <img src={slide1} className='w-full h-[400px]' alt="slide1" />
      <img src={slide2} className='w-full h-[400px]' alt="slide2" />
      <img src={slide3} className='w-full h-[400px]' alt="slide3" />
    </Slider>
      </div>
      <div className="w-1/4">
      <img src={slide4} className='w-full h-[200px] rounded-s-none' alt="slide4" />
      <img src={slide5} className='w-full h-[200px] rounded-s-none' alt="slide5" />
      </div>
    </div>  
    
  </>
}
