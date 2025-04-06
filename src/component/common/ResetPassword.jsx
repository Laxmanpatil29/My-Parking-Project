import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'
import { Link, useParams } from 'react-router-dom'
import { Bounce, toast, ToastContainer } from 'react-toastify'

export const ResetPassword = () => {
  const token=useParams().token
 
  const {register,handleSubmit,formState:{errors}}=useForm()
  const resetsuccess=()=>toast("Password reset successfully")
  const passwordnotmatch=()=>toast("both passwords are not match")

  const submitHandler=async(data)=>{
    
      
   if(data.password !== data.confirmpassword){
      passwordnotmatch()
      return
    }
    const obj={
      token:token,
      password:data.password
    }

    console.log(data)
    const res=await axios.post("/user/resetpassword",obj)
    console.log(res.data)
    resetsuccess()

  }
  const validationSchema={
    passwordValidator:{
        required:{
            value:true,
            message:"password is required"
        }
    },
    confirmpasswordValidator:{
      required:{
          value:true,
          message:"Confirm password is required"
      }
  }
}

  return (
    <div className='border-3 border-black text-center mt-[5%] h-auto w-[30rem] ml-[32rem]  bg-[#FDFAF6]' >
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
    <h1 className='text-[#1B56FD] mb-6'> Reset your password</h1>
    <form onSubmit={handleSubmit(submitHandler)} >

      <div>
        <label className='font-bold mr-2 mb-3'>NEW PASSWORD:</label>
        <input type='password' {...register("password",validationSchema.passwordValidator)}></input> <br />
        <span className='text-red-500'>
           {errors.password?.message}
        </span> 
      </div>


        <label className='font-bold mr-2'>confirm PASSWORD:</label>
        <input type='password' {...register("confirmpassword",validationSchema.confirmpasswordValidator)}></input> <br />
        <span className='text-red-500'>
           {errors.confirmpassword?.message}
        </span> 
  
    
      <div>
        <button type='submit' className='border-2 border-black bg-[#103a67] text-white px-2 mb-3' >Reset Password</button>
      </div>

      
        <Link to='/login' className='no-underline hover:no-underline hover:text-black font-bold'>
       <i class="fa-solid fa-arrow-left mr-2"></i>Back to Login
        </Link>

  
        
    

    </form>
</div>
)
}
