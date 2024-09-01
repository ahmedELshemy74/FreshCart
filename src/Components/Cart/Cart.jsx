import React, { useContext, useEffect, useState } from 'react'
import style from './Cart.module.css'
import { CartContext } from '../../Context/CartContext.jsx'
import Loading from '../Loading/Loading.jsx'
import { Link } from 'react-router-dom'

export default function Cart() {

  let { getCart,cart,updateProductCount,loading,deleteProduct }=useContext(CartContext)
  useEffect(() => {

    getCart();

    },[])
    
  
  return <>
    
    <h1 className="text-4xl text-center ">Cart Shop</h1>

    {loading ? <Loading /> : <div>
      {cart?<div className="relative md:block hidden overflow-x-auto w-3/4 mx-auto shadow-md sm:rounded-lg">
  <table className="w-full text-sm text-left mb-2 rtl:text-right text-gray-500 dark:text-gray-400">
    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
        <th scope="col" className="px-16 py-3">
          <span className="sr-only">Image</span>
        </th>
        <th scope="col" className="px-6 py-3">
          Product
        </th>
        <th scope="col" className="px-6 py-3">
          Qty
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
        {cart?.data.products.map((product)=>  <tr key={product.product.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <td className="p-4">
          <img src={product.product.imageCover} className="w-16 md:w-32 max-w-full max-h-full" alt="Apple Watch" />
        </td>
        <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
          {product.product.title}
        </td>
        <td className="px-6 py-4">
          <div className="flex items-center">
            <button onClick={()=> updateProductCount(product.product.id,product.count-1)} className="inline-flex items-center justify-center p-1 me-3 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
              <span className="sr-only">Quantity button</span>
              <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h16" />
              </svg>
            </button>
            <div>
                <span>{product.count}</span>
            </div>
            <button onClick={()=> updateProductCount(product.product.id,product.count+1)} className="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
              <span className="sr-only">Quantity button</span>
              <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 1v16M1 9h16" />
              </svg>
            </button>
          </div>
        </td>
        <td className="px-2 py-4 font-semibold text-gray-900 dark:text-white">
          {product.price} EGP
        </td>
        <td className="px-6 py-4">
          <button onClick={()=> deleteProduct(product.product.id)} className="font-medium p-2 rounded-md bg-red-700 text-white dark:text-white hover:underline">Remove</button>
        </td>
      </tr>)}
          </tbody>
          <tfoot className='py-5'>
            <tr className=' text-black text-lg font-semibold'>
              <td className='font-semibold text-center' colSpan={2}>Total Cart Price</td>
              <td className='font-semibold text-center' colSpan={2}>{ cart.data.totalCartPrice}</td>
            </tr>
          </tfoot>
  </table>
          <Link to={'/checkout'} className='bg-main hover:text-white text-white p-2 rounded-md text-center w-1/3 mx-auto flex justify-center'>Check out</Link>
</div>:<h2 className='text-center font-semibold text-2xl text-black'>Cart Is Empty</h2>}

    <div className='md:hidden block '>
        {cart?.data.products.map((product) => <div className='product my-5 p-5' key={product.product.id}>
        <img src={product.product.imageCover} alt="" />
        <div className='text-center text-2xl font-semibold'>
        {product.product.title}
        </div>
        <div className="flex justify-center py-6 text-xl items-center">
            <button onClick={()=> updateProductCount(product.product.id,product.count-1)} className="inline-flex items-center justify-center p-1 me-3 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
              <span className="sr-only">Quantity button</span>
              <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h16" />
              </svg>
            </button>
            <div>
                <span>{product.count}</span>
            </div>
            <button onClick={()=> updateProductCount(product.product.id,product.count+1)} className="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
              <span className="sr-only">Quantity button</span>
              <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 1v16M1 9h16" />
              </svg>
            </button>
        </div>
        <div className='flex justify-around items-center'>
        <span className='text-xl font-semibold'>{product.price} EGP</span>
        <button onClick={()=> deleteProduct(product.product.id)} className="font-medium p-2 rounded-md bg-red-700 text-white dark:text-white hover:underline">Remove</button>
        </div>
       
      </div>)}
      <div className='flex items-center justify-center rounded-md mt-4 bg-gray-300 p-2  text-black text-lg font-semibold'>
              <span className='font-semibold text-center px-8' colSpan={2}>Total Cart Price</span>
              <span className='font-semibold text-center px-5' colSpan={2}>{ cart?.data.totalCartPrice}</span>
      </div>
      <div>
      <Link to={'/checkout'} className='bg-main hover:text-white mt-3 text-white p-3 rounded-md text-center w-full mx-auto flex justify-center'>Check out</Link>
      </div>
      

      </div> 
    </div>
      
    }
  </>
}
