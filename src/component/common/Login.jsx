import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'
import {  useNavigate } from 'react-router-dom'

export const Login = () => {
    const navigate=useNavigate();

    const {register,handleSubmit,formState:{errors}}=useForm()
    const validationSchema={
        nameValidator:{
            required:{
                value:true,
                message:'Username is required'
            }
        },
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

        const res=await axios.post("http://localhost:2800/user/login",data)
        console.log("data is ..",data)
        console.log(res.data)

    
    console.log("errors",errors)
    }

  return (
    <>
     <div class="form">
        <h2 class="loginbtn1">
            login 
        </h2>
        <form onSubmit={handleSubmit(submitHandler)}>
             <div >
            {/* <label>UserName/Email Id</label> <br /> */}
            <input  class="input" type="text" placeholder='enter email' {...register("email",validationSchema.emailValidatorValidator)}/> <br />
         <span  style={{color:'red'}}>
            {errors.email?.message}
         </span>
        </div>  <br />

        <div >
            {/* <label>Password</label> <br /> */}
            <input  class="input" type="text" placeholder='enter password' {...register("password",validationSchema.passwordValidator)}/> <br />
            <span style={{color:'red'}}>
                {errors.password?.message}
            </span>
        </div>

        <div className="forgot" style={{textAlign:"end"}}>
            <a href="#">Forgot Password ?</a>
        </div>

        <div>
            <button id="loginsuccess">Login</button>
        </div> 

        <div style={{marginTop:'5px'}}>
            <p>Don't have an Account? 
                <p onClick={()=>navigate("/user/signup")}>Sign Up</p>
            </p>
        </div>
        </form>
     </div>
    </>
    
  )

}
