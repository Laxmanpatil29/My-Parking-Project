import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'

export const SignUp = () => {

const {register,handleSubmit,formState:{errors}}=useForm()

const validationSchema={
  

        passwordValidator:{
            required:{
                value:true,
                message:"password is required"
            },
            min:{
                value:7,
                message:'enter full password'
            }
        },

        emailValidator:{
            required:{
                value:true,
                message:'Enter a email'
            }
        }
    }

    const submitHandler=async(data)=>{
            // data.roleId="67c0091e46b71abdd5484571"

            const res=await axios.post("http://localhost:2800/user/signup",data)
            console.log("data is ..",data)
            console.log(res.data)

        
        console.log("errors",errors)
    
    }

  return (

    <>
    <div  class="form">


    <h2 class="loginbtn">Sign Up</h2>
      <form  onSubmit={handleSubmit(submitHandler)}>
         <div>
            <input type="email" placeholder='Enter your email' {...register("email",validationSchema.emailValidator)}/> <br />
            <span style={{color:'red'}}>
                {errors.email?.message}
            </span>
         </div> <br />

         <div>
            <input type="text" placeholder='Enter a password' {...register("password",validationSchema.passwordValidator)} /> <br />
             <span style={{color:'red'}}>
                {errors.password?.message}
             </span>
         </div> <br />

         <div>
            <input type="text" placeholder='Confirm a password'  {...register("confirm",validationSchema.passwordValidator)}/> <br />
            <span style={{color:'red'}}>
                {errors.confirm?.message}
            </span>
         </div> <br />

         <div>
            <button id='signupsuccess'>Sign Up</button>
         </div>
         </form>   
         
          </div>

         </>
  )
}

