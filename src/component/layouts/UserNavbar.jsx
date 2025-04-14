import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Profile from "../../assets/LOGO.png"



export const UserNavbar = () => {


  
  const navigate=useNavigate()


  const logoutUser=()=>{
    localStorage.removeItem("id");
    localStorage.removeItem("role");
    localStorage.removeItem("name");
    sessionStorage.clear();
    navigate('/')

  }


  return (
  <div className="fixed top-0 left-0 right-0 z-50 bg-teal-900 shadow-lg">
  <nav className="relative bg-[#0E2D33] text-white h-16 p-4 flex items-center justify-between " >
      <div className="flex items-center ml-8">
        <Link to=''> <img className='w-16' src={Profile} alt="" /></Link> 
      </div>


      <div className="absolute ml-[10%] text-xl  flex gap-6 ">
          <Link className=" text-center no-underline text-white "  to="" >Home </Link>
          <Link className=" text-center no-underline text-white hover:text-red-600 "  to="about" >About</Link>
          <Link className=" text-center no-underline text-white hover:text-red-600 " to="services" >Services</Link>
          <Link className=" text-center no-underline text-white hover:text-red-600 " to="contact" >Contact</Link>
      </div>

      <div className='flex ml-[60%] gap-2' >
      <input className='w-60 h-10 pl-2 text-xl rounded-xl text-black  '  type="text" placeholder='Search'  onChange={(e) => setSearchQuery(e.target.value)} />
      <button className='border-1 border-gray-300 px-1 h-10 w-10 rounded'><i class="fa-solid fa-magnifying-glass"></i></button>
      </div>

      <div className=' absolute ml-[55%] border-3 border-white px-2 py-2 rounded-xl bg-[#23adc0]'>
        <Link to='parkinglots'><button className=' text-black font-bold'>Book Your parking lots</button>  </Link>
      </div>

      

      <div className='flex items-center gap-4'>
                 <div className='flex items-center gap-2 cursor-pointer group relative'>
                     <p className=' border-1 rounded-full w-7 text-center mt-3'><i class="fa-solid fa-user" ></i></p> 
                      <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
                        <div className='min-w-40 bg-stone-100 rounded flex flex-col gap-4 p-3  '>
                          <p onClick={()=>navigate('profile')} className=' hover:text-black cursor-pointer'>My Profile</p>
                          <p onClick={()=>navigate('mybooking')} className=' hover:text-black cursor-pointer'>My Booking</p>
                          <p onClick={logoutUser} className=' text-gray-700 hover:text-black cursor-pointer'>Logout</p>
                        </div>
                      </div>
                    </div>
      
      </div>
    
  </nav>
  
  </div>
  
  )
}