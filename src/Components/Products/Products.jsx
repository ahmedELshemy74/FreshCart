import React, { useState } from 'react'
import style from './Products.module.css'
import useProducts from '../../Hooks/useProducts.jsx'
import Loading from '../Loading/Loading.jsx'
import RecentProducts from '../RecentProducts/RecentProducts.jsx'

export default function Products() {

  let{data ,isLoading}=useProducts()


    
  return <>
    
    {!isLoading?   <div className="flex flex-wrap justify-center">
    {data.map((product,index) => <RecentProducts key={index} product={ product} />)}
  </div>: <Loading/>}
  
  </>
}
