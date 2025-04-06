import axios from 'axios';
import React, { useEffect, useState } from 'react'

import { Bounce, toast, ToastContainer } from 'react-toastify'

export const MyBooking = () => {
  const [bookedParking, setbookings] = useState([])
  

  const payment=()=>toast("Payment process is work in progress...");
  const parkingcancel=()=>toast("Parking Slot cancel Successfully");

  
      const bookedParkings=async()=>{

        const userId=localStorage.getItem("id")
  
        const res=await axios.get(`/book/getallbook?userId=${userId}`)
        console.log(res)
        setbookings(res.data.data)
        console.log(bookedParking)
      }
  useEffect(() => {
     bookedParkings()
  }, [])

  const deleteBooking=async(id)=>{
    try{
      const res=await axios.delete("/book/cancelbook/"+id)
      console.log(res.data)
      parkingcancel()
      bookedParkings()
 }catch(err){
  console.log("not working this button",err)
 }
  
  }

  
  return (
    <>
     <ToastContainer
            position="top-center"
            autoClose={1500}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
            transition={Bounce}
            />

      <h2 className='text-center mt-4'>
        Here Is Your Booked Parking Slot
      </h2>

      <div className='mt-6 border-2   w-full  bg-[#92ccc9] rounded-xl' >
        { bookedParking.map((bookings)=>(

    <div className='flex gap-4 my-4 border-2 rounded-lg w-[60%] ml-[5%] py-[1%] bg-slate-300'>
      
       <img className='w-[360px] ml-12  rounded-md' src={bookings.image_url} alt="" />
       <div className='mr-0 w-[50%]'>
             <p className='font-bold'>Name:- {bookings.name}</p>
             <p><span className='font-bold'>Location:-</span> {bookings.location}</p>
             <p><span className='font-bold'>Price Per Hour:-</span> {bookings.price_per_hour}</p>
             <p><span className='font-bold'>Features:-</span> {bookings.features}</p>

             <div className='flex gap-3 ml-[47%] mt-[5%]'>
              <button className='border-2 bg-[blue] px-1 text-white font-bold' onClick={()=>{payment()}} >pay online</button>
              <button className='border-2 bg-[red]  p-1 text-white font-bold' onClick={()=>deleteBooking(bookings._id)} >cancel Booking</button>
             </div>

       </div>
    </div>
        ))
        }
      </div>




      

    
    





    </>

)
}
