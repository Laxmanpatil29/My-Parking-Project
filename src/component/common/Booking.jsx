import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useLocation } from 'react-router-dom'

export const Booking = () => {
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
  }

  console.log("Full data of booking",fullData)
  const res=await axios.post("/book/addbook",fullData)
  // console.log("the full data of booking ",res.fullData)
  
}
  return (
    <div className='text-center  bg-[#F1EFEC] '>
      <form className="my-2 flex flex-col gap-3" onSubmit={handleSubmit(submitHandler)}>
        <h1 >Add Vehicle Detail</h1>
        <div>
          <label className='font-bold'>Vehicle Category</label> <br />
          <select className='w-[17rem]' defaultValue=""  {...register("vehicle_category")}>  
          <option value="" disabled>Select-Category</option>
            <option value="Two Wheeler">Two wheeler</option>
            <option value="Three Wheeler">Three wheeler</option>
            <option value="Four Wheeler">Four wheeler</option>
          </select>
        </div>

        <div>
          <label className='font-bold'>Vehicle Compony</label> <br />
          <input  className='w-[17rem]' type="text" placeholder='Enter Company Name' {...register("vehicle_company")} />
        </div>

        <div>
          <label className='font-bold'>Registration Number</label> <br />
          <input  className='w-[17rem]' type="text" placeholder='Enter REgistration Number' {...register("registration_number")} />
        </div>

        <div>
          <label className='font-bold'>Owner Name</label> <br />
          <input  className='w-[17rem]' type="text" placeholder='Enter Owner Name' {...register("owner_name")}/>
        </div>

        <div>
          <label className='font-bold'>Owner Contact Number</label> <br />
          <input  className='w-[17rem]'type="text" placeholder='Enter Owner Contact Number' {...register("owner_contact_number")} />
        </div>

        <div>
          <label className='font-bold'>Parking Date</label> <br />
          <input   className='w-[17rem]'type="date" {...register("parking_date")}/>
        </div>

        <div className='flex gap-3 text-center pl-[42%]' >
          <div>
          <label className='font-bold'>In Time</label> <br />
          <input  className='' type="time" {...register("in_time")}/>
          </div>

          <div>
            <label className='font-bold'>Out Time</label> <br />
            <input  className='' type="time" {...register("out_time")} />
          </div>
        </div>

        <div>
          <button className='border-2 border-black bg-[#205781] mt-3 px-2 py-2 text-white' type='submit'>ADD BOOKING</button>
        </div>

         
      </form>
    

    </div>
  )
}
