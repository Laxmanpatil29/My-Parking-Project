import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Profile from "../../assets/LOGO.png"



export const AdminNavbar = ({setSearchActiveBooking}) => {

  // const [token, settoken] = useState(true)
  const navigate=useNavigate()

  const logoutUser=()=>{
    localStorage.removeItem("id");
    localStorage.removeItem("role");
    localStorage.removeItem("name");
    sessionStorage.clear();
    navigate('/')

  }


  return (
  <>
  <nav className=" bg-[#0E2D33] text-white h-[70px] p-4 flex items-center justify-between" >
      <div className="flex items-center ml-8">
        <Link to=''> <img className='w-16' src={Profile} alt="" /></Link> 
      </div>


      <div className="absolute ml-[20%] text-xl  flex gap-10 ">
          <Link className=" text-center no-underline text-white hover:no-underline "  to="" >Dashbord</Link>
          <Link className=" text-center no-underline text-white hover:no-underline "  to="bookings" >Bookings</Link> 
          <Link className=" text-center no-underline text-white hover:no-underline " to="parkingspots" >Parking Spots</Link>
          <Link className=" text-center no-underline text-white hover:no-underline" to="users" >Users</Link>
          <Link className=" text-center no-underline text-white hover:no-underline" to="providers" >Providers</Link>
      </div>

      <div className='flex items-center gap-4'>
                  <div className='flex items-center gap-2 cursor-pointer group relative'>
                     
                     <p className=' border-1 rounded-full w-7 text-center mt-3'><i class="fa-solid fa-user" ></i></p> 
                      <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
                        <div className='min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4'>
                          <p onClick={()=>navigate('profile')} className=' hover:text-black cursor-pointer'>My Profile</p>
                          <p onClick={()=>navigate('inquiry')} className=' hover:text-black cursor-pointer'>All Inquiry</p>
                          <p onClick={logoutUser} className=' text-gray-700 hover:text-black cursor-pointer'>Logout</p>
                        </div>
                      </div>
                    </div>
                    

                            
                              
      </div>
    
  </nav>
  
  </>
  
  )
}
