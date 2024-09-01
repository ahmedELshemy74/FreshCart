import React, { useState } from 'react'
import style from './VerfiyCode.module.css'
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup'
import axios from 'axios';


export default function VerfiyCode() {



  let navigate=useNavigate()

  async function verfiyCode(values) {
    try {
      let { data } = await axios.post(`https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode`, values); 
      navigate('/newpassword');
      console.log(data);
      
  
    } catch (err) {
      console.log(err);
    }
  }
  
    let validationSchema = Yup.object().shape({
      resetCode:Yup.string().min(6, 'you must enter 6 numbers').max(6, 'you must enter 6 numbers').required('code is required')
    })
    let formik = useFormik({
      initialValues: {
        resetCode: '',
      },
      validationSchema
     , onSubmit:verfiyCode
  })
      
    return <>
      <div className='w-1/2 mx-auto pt-16'>
      <h1 className="text-3xl pb-8">Verfiy Code</h1>
      <form onSubmit={formik.handleSubmit}>
       {/* input Email */}
       <div className=" relative z-0 w-full mb-5 group">
        <input type="text" name="resetCode" id="resetCode" value={formik.values.resetCode} onChange={formik.handleChange} onBlur={formik.handleBlur} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" "  />
        <label htmlFor="resetCode" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"> Enter Your resetCode</label>
          </div>
          {formik.errors.resetCode && formik.touched.resetCode &&<div className="p-4 mb-4 text-sm text-yellow-800 rounded-lg bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300" role="alert">
            {formik.errors.resetCode}
        </div>}
           {/* Submit */}
          <button type="submit" className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Verfiy code</button>
          
  
      </form>
      </div>
    
    </>
  }
  