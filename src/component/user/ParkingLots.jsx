import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export const ParkingLots = ({ searchQuery }) => {
  const [parkingAreas, setparkingAreas] = useState([])
 
  useEffect(() => {
    const getParkingAreas=async()=>{
        const res=await axios.get("/provider/getparkingdetails")
        console.log(res)
        console.log(res.data)
        setparkingAreas(res.data.data)
           }
      getParkingAreas();
    }, [])

    const filterParkingAreas = searchQuery
    ? parkingAreas.filter(
        (parking) =>
          parking.name &&
          parking.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : parkingAreas;
    
   
  
  return (  
   <div>
        <h1 className='text-center mt-2'>Available Parking Lots </h1>
        <h4 className='text-center mb-4'>"simply browse through our extensive list of Parking areas,Book your parking lots hussle-free"</h4>
        <div className='bg-[#DEF2F1] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 shadow-lg border border-gray-300  p-4 w-full'>
          
        {filterParkingAreas.length > 0 ? (
              filterParkingAreas.map((parking)=>(
              

          
                <div key={parking._id} className='flex mx-auto gap-2 h-auto w-full rounded-md hover:scale-105 transition-transform duration-300  bg-slate-700 pl-6'>
                
               <div className=' mt-4'>
                <img className='h-52 w-72 border rounded-lg '  src={parking.image_url || "default.jpg"}  alt={parking.name || "Unnamed Parking"} />
                <p className='mt-2 text-white'>Name:- {parking.name || "Unnamed Parking"}</p>
                <p className='text-white'>Price Per Hour:- {parking.price_per_hour || "N/A"}</p>
                <Link  className='no-underline hover:no-underline '  to={`parkingdetails/${parking._id}`} key={parking.id}>
                <button className='border-1 rounded-lg px-2 text-lg font-bold bg-[#96b4b2] text-black mb-3 align-middle ml-[20%] '>Know More Details</button>
               </Link>
               </div>
                </div>
           ))):(
              <p className="text-center text-gray-700">No matching parking found</p>) }
            
        </div>
   </div>
  )
}
