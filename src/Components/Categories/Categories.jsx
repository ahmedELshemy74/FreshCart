import React, { useState } from 'react'
import style from './Categories.module.css'
import useCategories from '../../Hooks/useCategories.jsx'
import Loading from '../Loading/Loading.jsx';

export default function Categories() {



  let { data, isLoading } = useCategories()
  console.log(data);
  
  return <>
    
    {isLoading ? <Loading /> :
      <div className='flex flex-wrap justify-center py-2'>
        {data?.map((category) => <div key={category._id} className="md:w-1/3 p-2 cursor-pointer">
          <div className='  '>
            <img src={category.image} className='w-full h-[500px]' alt={category.slug} />
            <h2 className='text-main text-center py-4 text-3xl '>{category.name}</h2>
          </div>
        </div>
        
        )
        }</div>
    }
  
  </>
}
