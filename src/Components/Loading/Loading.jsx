import React, { useState } from 'react'
import style from './Loading.module.css'
import { Audio } from 'react-loader-spinner'

export default function Loading() {



    
  return <>
    <div className='flex justify-center py-20'>
    <Audio
  height="100"
  width="100"
  radius="9"
  color="green"
  ariaLabel="three-dots-loading"
  wrapperStyle
  wrapperClass
      />  
      </div>
  </>
}
