import React, { useState } from 'react'
import style from './Footer.module.css'
import logo from '../../assets/images/freshcart-logo.svg'

export default function Footer() {



    
  return <>
    <div className='bg-gray-200 mt-4'>
    <div className='container'>
        <div className='py-10'>
        <img src={logo} width={120} alt="" />
        <h3 className='text-3xl py-3 '>Get the FreshCart app</h3>
        <p className='text-lg pb-4 text-gray-800'>We will send email to download app</p>
        <div className='flex justify-between items-center'>
        <input type="text" placeholder='Write Your Email' id="input" className="bg-white-100 border border-gray-950 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[90%] p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"  />
        <button type="button" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4  font-medium rounded-lg text-sm px-2 py-2.5  me-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Share App Link</button>
        </div>
  </div>
    </div>
    </div>
  </>
}
