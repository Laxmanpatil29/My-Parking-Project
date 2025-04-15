import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Profile from "../../assets/LOGO.png"



export const ProviderNavbar = ({setSearchActiveBooking}) => {

  const [token, settoken] = useState(true)
  const navigate=useNavigate()

  const logoutUser=()=>{
    localStorage.removeItem("id");
    localStorage.removeItem("role");
    localStorage.removeItem("name");
    sessionStorage.clear();
    navigate('/')

  }


  return (
  <div className="fixed top-0 left-0 right-0 z-50 bg-teal-900  shadow-sm">
  <nav className=" bg-[#0E2D33] text-white h-[70px] p-4 flex items-center justify-between" >
      <div className="flex items-center ml-8">
        <Link to=''> <img className='w-16' src={Profile} alt="" /></Link> 
      </div>


      <div className="absolute ml-[20%] text-xl  flex gap-10 ">
          <Link className=" text-center no-underline text-white hover:no-underline "  to="" >Dashboard</Link>
          <Link className=" text-center no-underline text-white hover:text-red-600 hover:no-underline "  to="activebooking" >Bookings</Link>
          <Link className=" text-center no-underline text-white hover:text-red-600 hover:no-underline " to="incominginquiry" >Inquiry</Link>
          {/* <Link className=" text-center no-underline text-white hover:text-red-600 " to="contact" >Contact</Link> */}
      </div>


      <div className=' absolute ml-[80%] border-3 border-white px-2 py-2 rounded-xl bg-[#23adc0]'>
        <Link to='listparkingdetails'><button className=' text-black font-bold'>List Parking Spot</button>  </Link>
      </div>

      

      <div className='flex items-center gap-4'>
                  { 
                  token 
                ? <div className='flex items-center gap-2 cursor-pointer group relative'>
                      {/* <img className='w-8 rounded-full' src={Profile} alt="profile" /> */}
                     <p className=' border-1 rounded-full w-7 text-center mt-3'><i class="fa-solid fa-user" ></i></p> 
                      {/* <i className='w-2.5' class="fa-solid fa-caret-down"></i> */}
                      
                      <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
                        <div className='min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4'>
                          <p onClick={()=>navigate('profile')} className=' hover:text-black cursor-pointer'>My Profile</p>
                          <p onClick={logoutUser} className=' text-gray-700 hover:text-black cursor-pointer'>Logout</p>
                        </div>
                      </div>
                    </div>
                    :
                    <button onClick={()=>navigate('/login')} className='bg-[black] border-2 border-white text-white px-6 py-2 rounded-full font-light hidden md:block'>Create Account</button>
                              }

                            
                              
      </div>
    
  </nav>
  
  </div>
  
  )
}