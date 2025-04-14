import axios from 'axios'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Bounce, toast, ToastContainer } from 'react-toastify'

export const AddYourArea = () => {
    const areasuccess=()=>toast("Your area Details added successfully")

    const {register,handleSubmit,formState:{errors}}=useForm()


    const submitHandler=async(data)=>{
        try{
            const formData = new FormData()
            formData.append("name", data.name)
            formData.append("location", data.location)
            formData.append("capacity", data.capacity)
            formData.append("available_spots", data.available_spots)
            formData.append("price_per_hour", data.price_per_hour)
            formData.append("type", data.type)
            formData.append("features", data.features)
            formData.append("image_url", data.image_url[0]) // Send image file
            

            
            const res=await axios.post("/provider/addparkingarea",formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            areasuccess()
              console.log(res)
              console.log(res.data)
        }catch(err){
            console.log("The error is",err)
        }

    }

    const validationSchema={
        nameValidator:{
            required:{
                value:true,
                message:"please enter a name"
            }
        },
        imageValidator:{
            required:{
                value:true,
                message:"please enter a image url"
            }
        },
        locationValidator:{
            required:{
                value:true,
                message:"please enter location"
            }
        },
        capacityValidator:{
            required:{
                value:true,
                message:"please enter capcity"
            }
        },
        availableSpotValidator:{
            required:{
                value:true,
                message:"please enter available spot"
            }
        },
        priceValidator:{
            required:{
                value:true,
                message:"Please enter the price per hour"
            }
        },
        typeValidator:{
            required:{
                value:true,
                message:"please enter the type"
            }
        },
        featureValidator:{
            required:{
                value:true,
                message:"please enter the feature"
            }
        }
    }
  return (
    <div className='text-center bg-[#F1EFEC]  py-6 flex items-center justify-center mt-[70px]'>
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

        <form onSubmit={handleSubmit(submitHandler)} >

            <div className=' w-full bg-white p-10 rounded-3xl shadow-lg'>
               <div>
                <h1 className='text-3xl font-extrabold text-center text-gray-800 mb-8'>Add Parking Area</h1>
              </div>

                 <div className='mt-4 flex  gap-3'>
                    <p className='flex flex-col gap-4'>

                <div>
                <input   className="w-[25rem] px-2 py-2 text-lg border rounded-lg hover:outline-none hover:ring-2 hover:ring-teal-500" type="text" placeholder='Enter The Parking Name' {...register("name",validationSchema.nameValidator)} />
                <span className='text-red-500 ml-2'>
                {errors.name?.message}
                </span>
                </div>
                    
                <div>
                  <input 
                  className="w-[25rem] px-2 py-2 text-lg bg-white border rounded-lg hover:outline-none hover:ring-2 hover:ring-teal-500"
                  type="file" 
                  accept="image/*" 
                  {...register("image_url",validationSchema.imageValidator)}
                  />
                   </div>

                    <div >
                        <input  className="w-[25rem] px-2 py-2 text-lg border rounded-lg hover:outline-none hover:ring-2 hover:ring-teal-500" type="text" placeholder='Enter The Parking Location' {...register("location",validationSchema.locationValidator)} />
                         <span className='text-red-500 ml-2'>
                            {errors.location?.message}
                        </span>
                    </div> 
                    
                     <div >
                        <input  className="w-[25rem] px-2 py-2 text-lg border rounded-lg hover:outline-none hover:ring-2 hover:ring-teal-500" type="text" placeholder='Enter The Parking Capacity' {...register("capacity",validationSchema.capacityValidator)} />
                         <span className='text-red-500 ml-2'>
                            {errors.capacity?.message}
                        </span>
                    </div>  
                    </p>

                    <p className='flex flex-col gap-4'>

                        <div >
                        <input  className="w-[25rem] px-2 py-2 text-lg border rounded-lg hover:outline-none hover:ring-2 hover:ring-teal-500" placeholder='Enter The Parking Available Spots' {...register("available_spots",validationSchema.availableSpotValidator)} />
                         <span className='text-red-500 ml-2'>
                            {errors.available_spots?.message}
                        </span>
                    </div>
                    
                      <div >
                        <input className="w-[25rem] px-2 py-2 text-lg border rounded-lg hover:outline-none hover:ring-2 hover:ring-teal-500" type="text" placeholder='Enter The Parking Price Per Hour' {...register("price_per_hour",validationSchema.priceValidator)} />
                         <span className='text-red-500 ml-2'>
                            {errors.price_per_hour?.message}
                        </span>
                    </div> 

                     <div >
                        <input  className="w-[25rem] px-2 py-2 text-lg border rounded-lg hover:outline-none hover:ring-2 hover:ring-teal-500" type="text" placeholder='Enter The Parking Type' {...register("type",validationSchema.typeValidator)} />
                         <span className='text-red-500 ml-2'>
                            {errors.type?.message}
                        </span>
                    </div>

                    <div >
                        <input  className="w-[25rem] px-2 py-2 text-lg border rounded-lg  hover:border-none hover:ring-2 hover:ring-teal-500" type="text" placeholder='Enter The Parking Feature' {...register("features",validationSchema.featureValidator)} />
                         <span className='text-red-500 ml-2'>
                            {errors.features?.message}
                        </span>
                    </div>

                    </p>

               </div>

                    <div >
                        <button className='border-2 border-black rounded-lg px-2 py-1 bg-emerald-600 hover:bg-emerald-700 text-white' >Add Details</button>
                    </div>

               </div>
        </form> 


    </div>
  )
}
