import React, { useEffect, useState } from 'react'
import style from './CategoriesSlider.module.css'
import Slider from "react-slick";
import axios from 'axios';

export default function CategoriesSlider() {

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 3,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1500,
  };

  const [categories, setCategories] = useState([])
  async function getRecentProducts() {
    try {
      let { data } = await axios.get(`https://ecommerce.routemisr.com/api/v1/categories`)
      console.log(data.data);
      setCategories(data.data)
    
    } catch (err) {
      console.log(err);
      
    }
  }
useEffect(() => {
  getRecentProducts()


}, [])


    
  return <>
    
      <Slider {...settings}>
      {categories?.map((category, index) => <div key={index} className='my-6'>
        <img src={category.image} className=' w-full h-[200px]' alt={category.name} />
        <h3>{ category.name}</h3>
        </div>)}
      </Slider>  
  </>
}
