import React, { useState } from 'react'
import style from './Brands.module.css'
import useBrands from '../../Hooks/useBrands.jsx'
import Loading from '../Loading/Loading.jsx';

export default function Brands() {

  let { data,isLoading}=useBrands()

    console.log(data);
    
  return <>
    
    {isLoading ? <Loading /> :
      <div className='md:flex md:flex-wrap md:justify-center py-2'>
        {data?.map((Brand) => <div key={Brand._id} className="md:w-1/5 p-2 cursor-pointer ">
          <div className='border-solid border-gray-300 border p-4 hover:border-gray-700 transition-all'>
            <img src={Brand.image} className='w-full ' alt={Brand.slug} />
            <h2 className='text-main text-center py-1 text-2xl '>{Brand.name}</h2>
          </div>
        </div>
        
        )
        }</div>
    }
  
  </>
}
