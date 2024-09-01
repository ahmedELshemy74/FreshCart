import React, { useContext, useEffect, useState } from 'react'
import style from './Home.module.css'
import axios from 'axios'
import RecentProducts from '../RecentProducts/RecentProducts.jsx'
import Loading from '../Loading/Loading.jsx'
import CategoriesSlider from '../CategoriesSlider/CategoriesSlider.jsx'
import MainSlider from '../MainSlider/MainSlider.jsx'
import { useQuery } from '@tanstack/react-query'
import useProducts from '../../Hooks/useProducts.jsx'
import { CartContext } from '../../Context/CartContext.jsx'
import { WishlistContext } from '../../Context/WishlistContext.jsx'

export default function Home() {
  let { getCart } = useContext(CartContext)
 let{getProductWishlist,wishlist}= useContext(WishlistContext)
//   const [products, setProducts] = useState([])
  
//   async function getRecentProducts() {
//     try {
//       let { data } = await axios.get(`https://ecommerce.routemisr.com/api/v1/products`)
//       console.log(data.data);
//       setProducts(data.data)
    
//     } catch (err) {
//       console.log(err);
      
//     }
//   }
// useEffect(() => {
//   getRecentProducts()

  // }, [])
  // const [SearchState, setSearchState] = useState([])
  // const [searchValue, setSearchValue] = useState('');
  // function Search(e) {
  //   setSearchValue(e.target.value)
    
  // }
  // console.log(searchValue);
  
  // function SearchCheck() {
  //   for (let i = 0; i < data?.length; i++) {
  //     if (data[i].title.toLowerCase().includes(searchValue.toLowerCase())) {
  //       data?.map((product, index) => { console.log(product.title);
  //        product.title });
       
        
  //     }
  //   }
  // }
  // Hook  
  let{data ,isLoading}=useProducts()
 
  // useEffect(() => {
  //   getProductWishlist();
    
  // }, [])
  
  return <>
    <MainSlider/>
    <CategoriesSlider />
    
  {/* <form className="max-w-md mx-auto">   
  <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
  <div className="relative">
    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
      <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
      </svg>
    </div>
    <input onKeyUp={()=>SearchCheck()} value={searchValue} onChange={Search.bind(this)} type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for Products..." required />
  </div>
</form> */}
 {!isLoading?   <div className="flex flex-wrap justify-center mb-3">
    {data.map((product,index) => <RecentProducts key={index} product={ product} />)}
  </div>: <Loading/>}
  
  </>
}
