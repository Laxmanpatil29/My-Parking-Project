import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'
// import { Link } from 'react-router-dom'
import { Bounce, toast, ToastContainer } from 'react-toastify'

export const ForgotPassword = () => {
    const {register,handleSubmit,formState:{errors}}=useForm()
     const emailsuccess=()=>toast("Reset Link sent to your mail successsfully");

    const validationSchema={
        emailValidator:{
            required:{
                value:true,
                message:"email is required"
            }
        }
    }

    const submitHandler=async(data)=>{
        const res=await axios.post("/user/forgetpassword",data)
        console.log(res)
        emailsuccess()

        console.log("errors",errors)

    }




  return (
    <div className="text-center relative">  
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

       <form onSubmit={handleSubmit(submitHandler)}  className=' absolute left-[30%] top-20 border-3 border-black h-auto w-[30rem] bg-[#FDFAF6]'>
        <h1 className='text-[#1B56FD]'>Forgot your password?</h1>
       <p className='font-bold'>please enter your email address. you will recieve a link to create a new passsword via email.</p>
       <label>Email <span className='text-red-500'>*</span></label> <br />
        <input type="text" className='border-2 border-black w-[60%] pl-3' placeholder='Enter your email' {...register("email",validationSchema.emailValidator)}/> <br />
        <span className='text-red-600 ml-2'>
            {errors.email?.message}
        </span>
    <div>

       <button className='mt-4 border-2 border-black bg-[#103a67] text-white mb-3 px-2' type="submit">Request reset Link</button>
    </div>
       </form>


    </div>
  )
}
