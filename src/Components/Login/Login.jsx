import React, { useContext, useState } from 'react'
import style from './Login.module.css'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import { UserContext } from '../../Context/UserContext.jsx'

export default function Login() {

  let navigate=useNavigate()
  
  const [apiError, setApiError] = useState(null)
  const [loading, setLoading] = useState(false)

  let { setUserData } = useContext(UserContext);

  async function Login(values) {
    try {
      setLoading(true)
      let { data } = await axios.post(`https://ecommerce.routemisr.com/api/v1/auth/signin`, values); 
      localStorage.setItem('userToken', data.token);
      navigate('/');
      setUserData(data.token);

    } catch (err) {
      console.log(err.response.data.message);
      setApiError(err.response.data.message)
      setLoading(false)
    }
    
  }
  let validationSchema = Yup.object().shape({
    email: Yup.string().email('invalid email').required('email is required'),
    password: Yup.string().matches(/^[A-Z]\w{5,10}$/, 'invalid password ex(Ahmed123)').required('password is required'),
})
  let formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema
   , onSubmit:Login
})
    
  return <>
    <div className='w-1/2 mx-auto pt-5'>
    <h1 className="text-3xl font-semibold py-6">Login</h1>
      <form onSubmit={formik.handleSubmit}>
        {apiError&&<div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-300" role="alert">
          {apiError}
        </div>}
          {/* input Email */}
      <div className="relative z-0 w-full mb-5 group">
      <input type="email" name="email" id="email" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" "  />
      <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"> Enter Your Email</label>
        </div>
        {formik.errors.email && formik.touched.email &&<div className="p-4 mb-4 text-sm text-yellow-800 rounded-lg bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300" role="alert">
          {formik.errors.email}
        </div>}
          {/* input Password */}
  <div className="relative z-0 w-full mb-5 group">
      <input type="password" name="password" id="password" value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" "  />
      <label htmlFor="password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"> Enter Your password</label>
        </div>
        {formik.errors.password && formik.touched.password &&<div className="p-4 mb-4 text-sm text-yellow-800 rounded-lg bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300" role="alert">
          {formik.errors.password}
        </div>}
        {/* forget password */}
        <div className='py-2 pb-5'>
             <Link to={'/forgetpassword'}> <span className='underline text-lg font-semibold'>forget Your Password?</span></Link>
             </div>
          {/* Submit */}
        {loading? <button type="button" className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg w-full sm:w-auto px-3 py-1.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
          <i className='fas fa-spinner fa-spin-pulse'></i>
        </button>:<button type="submit" className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Submit</button>
        }
      </form>
    </div>
  
  </>
}
