import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useLocation } from 'react-router-dom'
import { Bounce, toast, ToastContainer } from 'react-toastify'

export const Booking = () => {
  
  const addsuccess=()=>toast("your slot booked successfully")
  const location =useLocation();
  const areadata=location.state?.parkingData
const {register,handleSubmit,formState:{errors}}=useForm()
const  submitHandler=async(data)=>{

  const userId=localStorage.getItem("id")

  const fullData={
    ...data,
    parking_id:areadata?.parking_id,
    name:areadata?.name,
    image_url:areadata?.image_url,
    location:areadata?.location,
    capacity:areadata?.capacity,
    available_spots:areadata?.available_spots,
    price_per_hour:areadata?.price_per_hour,
    type:areadata?.type,
    features:areadata?.features, 
    userId:userId,
    providerId:areadata.providerId,
    payment_status:"pending"
  }

  console.log("Full data of booking",fullData)
  const res=await axios.post("/book/addbook",fullData)
  // console.log("the full data of booking ",res.fullData)
  addsuccess()
  
}
  return (
    <div className='text-center  bg-[#F1EFEC] '>
       <ToastContainer
            position="top-center"
            autoClose={2500}
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
      <form className="my-2 flex flex-col gap-3" onSubmit={handleSubmit(submitHandler)}>
        <div className='max-w-lg w-full bg-white p-10 rounded-3xl shadow-lg ml-[33%]'>

        <h1 className='text-3xl font-extrabold text-center text-gray-800 mb-8'>Add Vehicle Detail</h1>
        <div>
          <label className='font-bold mt-2'>Vehicle Category <span className='text-red-500'>*</span></label> <br />
          <select className='w-[25rem] px-2 py-2 text-lg bg-white border rounded-lg hover:outline-none hover:ring-2 hover:ring-teal-500' defaultValue=""  {...register("vehicle_category")} required>  
          <option value="" disabled>Select-Category </option>
            <option value="Two Wheeler">Two wheeler</option>
            <option value="Three Wheeler">Three wheeler</option>
            <option value="Four Wheeler">Four wheeler</option>
          </select>
        </div>

        <div>
          <label className='font-bold mt-2'>Vehicle Compony</label> <br />
          <input className='w-[25rem] px-2 py-2 text-lg bg-white border rounded-lg hover:outline-none hover:ring-2 hover:ring-teal-500' type="text" placeholder='Enter Company Name' {...register("vehicle_company")} />
        </div>

        <div>
          <label className='font-bold mt-2'>Registration Number</label> <br />
          <input className='w-[25rem] px-2 py-2 text-lg bg-white border rounded-lg hover:outline-none hover:ring-2 hover:ring-teal-500' type="text" placeholder='Enter REgistration Number' {...register("registration_number")} />
        </div>

        <div>
          <label className='font-bold mt-2'>Owner Name</label> <br />
          <input  className='w-[25rem] px-2 py-2 text-lg bg-white border rounded-lg hover:outline-none hover:ring-2 hover:ring-teal-500' type="text" placeholder='Enter Owner Name' {...register("owner_name")}/>
        </div>

        <div>
          <label className='font-bold mt-2'>Owner Contact Number</label> <br />
          <input  className='w-[25rem] px-2 py-2 text-lg bg-white border rounded-lg hover:outline-none hover:ring-2 hover:ring-teal-500' type="text" placeholder='Enter Owner Contact Number' {...register("owner_contact_number")} />
        </div>

        <div>
          <label className='font-bold mt-2'>Parking Date</label> <br />
          <input   className='w-[25rem] px-2 py-2 text-lg bg-white border rounded-lg hover:outline-none hover:ring-2 hover:ring-teal-500' type="date" {...register("parking_date")}/>
        </div>

        <div className='flex gap-3 text-center mt-2' >
          <div>
          <label className='font-bold'>In Time</label> <br />
          <input  className='w-[12.5rem] px-2 py-2 text-lg bg-white border rounded-lg hover:outline-none hover:ring-2 hover:ring-teal-500' type="time" {...register("in_time")}/>
          </div>

          <div>
            <label className='font-bold'>Out Time</label> <br />
            <input  className='w-[12.5rem] px-2 py-2 text-lg bg-white border rounded-lg hover:outline-none hover:ring-2 hover:ring-teal-500'type="time" {...register("out_time")} />
          </div>
        </div>

        <div>
          <button className='border-2 border-black  mt-3 px-2 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg' type='submit'>ADD BOOKING</button>
        </div>
        </div>
      </form>
    

    </div>
  )
}
