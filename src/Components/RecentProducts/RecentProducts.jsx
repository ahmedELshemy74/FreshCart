import React, { useContext, useEffect, useState } from 'react'
import style from './RecentProducts.module.css'
import { Link } from 'react-router-dom'
import { CartContext } from '../../Context/CartContext.jsx'
import { WishlistContext } from '../../Context/WishlistContext.jsx'

export default function RecentProducts({ product }) {
  let { addProductToWishlist,wishlist, getProductWishlist } = useContext(WishlistContext);

  let { addProductToCart } = useContext(CartContext);
 

  return <>
  


    <div className="md:w-1/6 product px-2 py-4">
      <div className=''>
        <Link to={`/productdetails/${product.id}`}>
          <img src={product.imageCover} className='w-full' alt={product.title} />
            <h2 className='text-main text-sm '>{product.category.name}</h2>
            <h2 className='font-medium'>{product.title.split(' ').slice(0,2).join(' ')}</h2>
            <div className="flex justify-between my-2">
              <h3>{ product.price} EGP</h3>
              <h3> <i className='fas fa-star rating-color'></i> { product.ratingsAverage}</h3>
            </div>
        </Link>
        <div className='flex justify-between items-center'>
          <button onClick={() => addProductToCart(product.id)} className='btn w-full rounded bg-main text-white py-1'>Add To Cart</button>
          {/* <i onClick={()=> addProductToWishlist(product.id)} className="fa-regular fa-heart px-2 fa-xl text-red-700 "></i> */}
          <i onClick={() => addProductToWishlist(product.id)} className={`fa-solid fa-heart text-2xl px-2  ${wishlist?.data.some((item) => item.id === product.id)?'text-red-500' : 'text-black'}`}></i>
          </div>
    </div>
    </div>
  
  </>
}
