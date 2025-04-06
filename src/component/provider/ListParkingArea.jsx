import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'
import { Bounce, toast, ToastContainer } from 'react-toastify'

export const ListParkingArea = () => {
    const areasuccess=()=>toast("Your area Details added successfully")

    const {register,handleSubmit,formState:{errors}}=useForm()

    const submitHandler=async(data)=>{
        try{
            
            const res=await axios.post("/provider/addparkingarea",data)
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
    <div className='text-center bg-[#F1EFEC]  py-6  mt-[70px] '>
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

        <form onSubmit={handleSubmit(submitHandler)}>
               <div className='text-center'>
                <h1>Add Parking Area</h1>
              </div>

               <div className='mt-4 flex flex-col gap-3'>
                    <div>
                        <input  className='w-[25rem] border-1 border-black h-8 rounded-md pl-3' type="text" placeholder='Enter The Parking Name' {...register("name",validationSchema.nameValidator)} />
                        <span className='text-red-500 ml-2'>
                            {errors.name?.message}
                        </span>
                    </div>
                    <div >
                        <input  className='w-[25rem] border-1 border-black h-8 rounded-md pl-3'type="url" name="" id="" placeholder='Enter Parking Image Url' {...register("image_url",validationSchema.imageValidator)}/>
                        <span className='text-red-500 ml-2'>
                            {errors.image_url?.message}
                        </span>
                    </div>
                    <div >
                        <input className='w-[25rem] border-1 border-black h-8 rounded-md pl-3' type="text" placeholder='Enter The Parking Location' {...register("location",validationSchema.locationValidator)} />
                         <span className='text-red-500 ml-2'>
                            {errors.location?.message}
                        </span>
                    </div>  <div >
                        <input className='w-[25rem] border-1 border-black h-8 rounded-md pl-3' type="text" placeholder='Enter The Parking Capacity' {...register("capacity",validationSchema.capacityValidator)} />
                         <span className='text-red-500 ml-2'>
                            {errors.capacity?.message}
                        </span>
                    </div>  <div >
                        <input className='w-[25rem] border-1 border-black h-8 rounded-md pl-3' type="text" placeholder='Enter The Parking Available Spots' {...register("available_spots",validationSchema.availableSpotValidator)} />
                         <span className='text-red-500 ml-2'>
                            {errors.available_spots?.message}
                        </span>
                    </div>  <div >
                        <input className='w-[25rem] border-1 border-black h-8 rounded-md pl-3' type="text" placeholder='Enter The Parking Price Per Hour' {...register("price_per_hour",validationSchema.priceValidator)} />
                         <span className='text-red-500 ml-2'>
                            {errors.price_per_hour?.message}
                        </span>
                    </div> 
                     <div >
                        <input className='w-[25rem] border-1 border-black h-8 rounded-md pl-3' type="text" placeholder='Enter The Parking Type' {...register("type",validationSchema.typeValidator)} />
                         <span className='text-red-500 ml-2'>
                            {errors.type?.message}
                        </span>
                    </div>
                    <div >
                        <input className='w-[25rem] border-1 border-black h-8 rounded-md pl-3' type="text" placeholder='Enter The Parking Feature' {...register("features",validationSchema.featureValidator)} />
                         <span className='text-red-500 ml-2'>
                            {errors.features?.message}
                        </span>
                    </div>
                    <div >
                        <button className='border-2 border-black rounded-lg px-2 py-1 bg-[#48A6A7] text-white' >Add Details</button>
                    </div>
               </div>

        </form>


    </div>
  )
}
