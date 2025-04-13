import axios from 'axios'
import React, { useEffect, useState } from 'react'

export const AllBookings = () => {

  
  const [SearchActiveBooking, setSearchActiveBooking] = useState("");
  const [activeParking, setactiveParking] = useState([])


  const activeParkings=async()=>{
     
    const res=await axios.get("/book/getallbooking")
    console.log(res.data)
    setactiveParking(res.data.data)
    console.log(activeParking)
  }



  useEffect(() => {
    activeParkings()

  }, [])

  const filterParkingdetails = SearchActiveBooking
  ? activeParking.filter(
      (parking) =>
       ( parking.owner_name &&
        parking.owner_name?.toLowerCase().includes(SearchActiveBooking.toLowerCase())) ||
        (parking.registration_number?.toLowerCase().includes(SearchActiveBooking.toLowerCase()))||
        (parking.location?.toLowerCase().includes(SearchActiveBooking.toLowerCase()))
      
    )
  :activeParking;
  
  return (
    <div className='bg-[#F8F4E1] pt-4'>
   
    <div className='text-center'>
        <h1>
            Active All Booking
        </h1>
    </div>
   
    <div className='flex gap-2 mb-2 right-0 ml-[80%] ' >
      <input className='w-60 h-10 pl-2 text-xl rounded-xl text-black border border-black '  type="text" placeholder='Search'  onChange={(e) => setSearchActiveBooking(e.target.value)} />
      <button className='border-1 border-black  px-1 h-10 w-10 rounded '><i class="fa-solid fa-magnifying-glass"></i></button>
      </div> 

    <div className="flex justify-center items-center">

      <table className='table table-dark'>
        <thead>
          <tr>
            <th>Parking id</th>
            <th>Owner name</th>
            <th>Vehicle Category</th>
            <th>Reg number</th>
            <th>Location</th>
            <th>Booking Date</th>
            <th>In-Out Time</th>
            <th>Contact no</th>
            {/* <th>Action</th> */}
            <th></th>

          </tr>
        </thead>
        <tbody>
        {filterParkingdetails.length > 0 ? (  
      filterParkingdetails?.map((booking)=>(
          
          <tr>
            <td>{booking._id}</td>
            <td>{booking.owner_name}</td>
            <td>{booking.vehicle_category}</td>
            <td>{booking.registration_number}</td>
            <td>{booking.location}</td>
            <td>{booking.parking_date}</td>
            <td>{booking.in_time} to {booking.out_time}</td>
            <td>{booking.owner_contact_number}</td>
            {/* <td>
              <button class='btn btn-danger' onClick={()=>deleteBookings(booking._id)}>
                Cancel
              </button>
            </td> */}
          </tr>
          ))):( <p className="text-center text-white" >No matching parking found</p>) }
        </tbody>
      </table>
      


    </div>
    </div>
  )
}
