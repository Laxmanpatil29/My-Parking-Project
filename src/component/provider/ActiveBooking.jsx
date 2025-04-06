import axios from 'axios'
import React, { useEffect, useState } from 'react'

export const ActiveBooking = ({SearchActiveBooking}) => {

  const [activeParking, setactiveParking] = useState([])

  const activeParkings=async()=>{
    const res=await axios.get("/book/getallactivebooking")
    console.log(res.data)
    setactiveParking(res.data.data)
    console.log(activeParking)
  }

  const deleteBookings=async(id)=>{
    try{
      const res=await axios.delete("/book/cancelbook/"+id)
      console.log(res.data)
  
      activeParkings()
 }catch(err){
  console.log("not working this button",err)
 }
  
  }

  useEffect(() => {
    activeParkings()

  }, [])

  const filterParkingdetails = SearchActiveBooking
  ? activeParking.filter(
      (parking) =>
       ( parking.owner_name &&
        parking.owner_name.toLowerCase().includes(SearchActiveBooking.toLowerCase())) ||
        (parking.registration_number.toLowerCase().includes(SearchActiveBooking.toLowerCase()))||
        (parking.location.toLowerCase().includes(SearchActiveBooking.toLowerCase()))
      
    )
  :activeParking;
  
  return (
    <>
   
    <div className='text-center'>
        <h1>
            Active Booking 
        </h1>
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
            <th>In-Out Time</th>
            <th>Contact no</th>
            <th>Action</th>
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
            <td>{booking.in_time} to {booking.out_time}</td>
            <td>{booking.owner_contact_number}</td>
            <td>
              <button class='btn btn-danger' onClick={()=>deleteBookings(booking._id)}>
                Cancel
              </button>
            </td>
          </tr>
          ))):( <p className="text-center text-white" >No matching parking found</p>) }
        </tbody>
      </table>
      


    </div>
    </>
  )
}
