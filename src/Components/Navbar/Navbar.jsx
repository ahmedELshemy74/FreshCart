import React, { useContext, useState } from 'react'
import style from './Navbar.module.css'
import logo from '../../assets/images/freshcart-logo.svg'
import { NavLink, useNavigate } from 'react-router-dom'
import { UserContext } from '../../Context/UserContext.jsx'
import { CartContext } from '../../Context/CartContext.jsx'
import { WishlistContext } from '../../Context/WishlistContext.jsx'

export default function Navbar() {
  let { wishlist } = useContext(WishlistContext);
  
  let navigate = useNavigate()
  let {cart}=useContext(CartContext);
  let { userData,setUserData } = useContext(UserContext)
  
  function LogOut() {
    localStorage.removeItem('userToken');
    setUserData(null);
    navigate('/login')
  }
  
  const [isOpen, setIsOpen] = useState(false)
  const toogleMenu = () => {
      setIsOpen(!isOpen)
  }

  return <>
    
    <nav className='bg-gray-200 fixed z-50  top-0 inset-x-0 py-2 text-center capitalize'>
      <div className='container md:flex md:flex-row'>
        <div className='flex md:w-[15%] justify-between w-full space-x-3 '>
          <img src={logo} width={120}  alt="" />
          <button onClick={()=> toogleMenu()} data-collapse-toggle="navbar-solid-bg" type="button" className="inline-flex items-center  w-10 h-10 justify-center text-sm text-gray-800 rounded-lg md:hidden hover:bg-gray-300 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-solid-bg" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth ="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
          </button>
          </div>
          <div className={isOpen? " block w-full   ": "hidden md:w-[85%] w-full md:block " }  id="navbar-solid-bg">
          <div className="container flex flex-col md:flex-row justify-between items-center text-gray-500">
          <div className='flex flex-col md:flex-row space-x-3'>
            {userData && <ul className=' flex flex-col md:flex-row py-3 md:py-0 space-x-2'>
            <li><NavLink to="">Home</NavLink></li>
            <li><NavLink to="products">products</NavLink></li>
            <li><NavLink to="categories">categories</NavLink></li>
            <li><NavLink to="brands">brands</NavLink></li>
            <li><NavLink to="wishlist">Wishlist <span className='bg-green-500 m-1 p-1 rounded-md -mx-1 text-white'>{wishlist?.data.length}</span></NavLink></li>
          </ul>}
        </div>
       
       
        
          <ul className='flex flex-col md:flex-row space-x-2'>
           
            {userData ?
              <>
                <li className='relative'><NavLink to="cart"><i className="fa-solid text-main fa-2xl fa-cart-shopping"></i><span className='text-white absolute left-1/2 top-[-5px]'>{ cart? cart.numOfCartItems:0}</span></NavLink></li>
                <li onClick={() => LogOut()}><span className='cursor-pointer mx-2'>logout</span></li>
              </>
               : <>
                
              <li><NavLink to="login">Login</NavLink></li>
              <li><NavLink to="register">Register</NavLink></li>
            </>}
            
            <li className='space-x-2 text-black'>
              <i className='fab fa-facebook-f'></i>
              <i className='fab fa-linkedin-in'></i>
              <i className='fab fa-youtube'></i>
              <i className='fab fa-twitter'></i>
              <i className='fab fa-instagram'></i>
            </li>
            </ul>
            </div>
        
        </div>
        </div>
    </nav>
  
  </>
}
