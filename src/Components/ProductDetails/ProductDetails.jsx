import React, { useContext, useEffect, useState } from 'react'
import style from './ProductDetails.module.css'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import Slider from "react-slick";
import Loading from '../Loading/Loading.jsx';
import { CartContext } from '../../Context/CartContext.jsx';


export default function ProductDetails() {

  let {addProductToCart}=useContext(CartContext)

  let { id } = useParams();
  const [productDetails, setProductDetails] = useState({})
  const [relatedProducts, setRelatedProducts] = useState({})

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrow: false,
    autoplay: true,
    autoplaySpeed:1000,
  };

  async function getProductDetails(id) {
    let { data } = await axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
    console.log(data);
    setProductDetails(data.data)
  }
  async function getRelatedProducts() {
    let { data } = await axios.get(`https://ecommerce.routemisr.com/api/v1/products`)
    console.log(data);
    setRelatedProducts(data.data)
  }
   
  useEffect(() => {
    getProductDetails(id);
    getRelatedProducts()
  },[])
    
  return <>
    
    <h1 className="text-3xl">ProductDetails</h1>
   {productDetails.id? <div className="flex items-center py-10">
      <div className="w-1/4 p-4 ">
      {productDetails.images.length > 1 ?<Slider {...settings}>
          {productDetails.images.map((image,index) => <img key={index} src={image} className='w-full' alt={productDetails.title} />)}
      </Slider>:<img src={productDetails.imageCover} className='w-full' alt={productDetails.title} />}
      </div>
      <div className="w-3/4">
        <div>
          <h2>{productDetails.title}</h2>
          <p className='my-6 text-gray-500'>{productDetails.description}</p>
          <h3>{productDetails.category.name}</h3>
          <div className="flex justify-between my-2">
              <h3>{ productDetails.price} EGP</h3>
              <h3> <i className='fas fa-star rating-color'></i> { productDetails.ratingsAverage}</h3>
          </div>
          <button onClick={()=> addProductToCart(productDetails.id)} className='btn w-full rounded bg-main text-white py-1'>Add To Cart</button>
          <div className='flex'>
            {productDetails?.title === relatedProducts?.title ?
                <Slider {...settings}>
                {relatedProducts.category.name.filter((image,index) => <img key={index} src={image} className='w-full' alt={relatedProducts.title} />)}
            </Slider>:<img src={relatedProducts.imageCover} className='w-full' alt={relatedProducts.title} />
          }
          </div>
        </div>
      </div>
    </div>
      : <div className='flex justify-center py-20'><Loading /></div>}
  
  </>
}
