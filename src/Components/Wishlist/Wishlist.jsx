import React, { useContext, useEffect, useState } from 'react'
import style from './Wishlist.module.css'
import { WishlistContext } from '../../Context/WishlistContext.jsx'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import Loading from '../Loading/Loading.jsx'
import { CartContext } from '../../Context/CartContext.jsx'

export default function Wishlist() {

  let {addProductToCart,loading }=useContext(CartContext)
  let { getProductWishlist, wishlist,deleteProductFromWishlist } = useContext(WishlistContext);
 
  
  useEffect(() => {
    getProductWishlist();
  }, [])
  
  return <>
    

{wishlist? <div > <table className="w-3/4 mx-auto hidden md:block text-sm text-left mb-2 rtl:text-right text-gray-500 dark:text-gray-400">
    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
        <th scope="col" className="px-16 py-3">
          <span className="sr-only">Image</span>
        </th>
        <th scope="col" className="px-6 py-3">
          Product
        </th>
        <th scope="col" className="px-6 py-3">
          Add To Cart
        </th>
        <th scope="col" className="px-6 py-3">
          Price
        </th>
        <th scope="col" className="px-6 py-3">
          Action
        </th>
      </tr>
    </thead>
    <tbody>
       {wishlist?.data?.map((product)=> <tr key={product.id}  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <td className="p-4">
          <img src={product.imageCover} className="w-16 md:w-32 max-w-full max-h-full" alt="Apple Watch" />
        </td>
        <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
          {product.title}
        </td>
        <td className="px-6 py-4">
          <div className="flex items-center">
            
            <div>
            <button onClick={()=>addProductToCart(product.id)} className="font-medium p-2 rounded-md bg-green-700 text-white dark:text-white hover:underline">Add To Cart</button>
            </div>
          </div>
        </td>
        <td className="px-2 py-4 font-semibold text-gray-900 dark:text-white">
         {product.price} EGP
        </td>
        <td className="px-6 py-4">
           <button onClick={()=>deleteProductFromWishlist(product.id)} className="font-medium p-2 rounded-md bg-red-700 text-white dark:text-white hover:underline">Remove</button> 
        </td>
      </tr>)}
          </tbody>
         
    </table>
    <div className='md:hidden block'>
      {wishlist?.data.map((product) => <div className='product my-5 p-5' key={product.id}>
      <img src={product.imageCover} alt="" />
      <div className='text-center text-2xl m-2 font-semibold'>
      {product.title}
      </div>
     
      <div className='flex justify-around items-center bg-gray-300 mb-2 w-[50%] mx-auto rounded'>
          <span className='text-xl font-semibold m-3'>Price : {product.price} EGP</span>
      </div>
          <div className='flex justify-around items-center my-5'>
          <button onClick={()=>addProductToCart(product.id)} className="font-medium p-2 rounded-md bg-green-700 text-white dark:text-white hover:underline">Add To Cart</button>
      <button onClick={()=> deleteProductFromWishlist(product.id)} className="font-medium p-2 rounded-md bg-red-700 text-white dark:text-white hover:underline">Remove</button>
          </div>
     
    </div>)}
        
  

      </div>
      </div>
    
  :<Loading/>}
   
  </>
}
