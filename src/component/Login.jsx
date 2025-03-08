import axios from 'axios'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Bounce, toast, ToastContainer } from 'react-toastify'
import '../assets/login.css'
import { useNavigate } from 'react-router-dom'

const Login = () => {
const [islogin, setislogin] = useState(true)
const {register,handleSubmit,formState:{errors},reset}=useForm()
const navigate=useNavigate();
const loginsuccess=()=>toast("login successfull 👍");
const loginfail=()=>toast("invalid details 👎");
const signup=()=>toast("signup successfully" )
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
        },
        contactValidator:{
            required:{
                value:true,
                message:"contact number is required"
            }
        }
    
    
    
}
// const submitHandler = async (data) => {
//     try {
//         console.log("Sending login request:", data);
//         const res = await axios.post("http://localhost:2800/user/login", data); // Ensure this URL is correct

//         console.log("Login Success:", res.data);
//         alert("Login Successful!");
//     } catch (error) {
//         console.error("Login Error:", error.response?.data || error.message);
//         alert(error.response?.data?.message || "An error occurred.");
//     }
// };

const submitHandler=async(data)=>{

try{
    if(islogin===true){
            const res = await axios.post("/user/login",data);
              
            console.log(res.data)
            loginsuccess();
            setTimeout(() => {
                navigate("/user")
            }, 2000 );
            localStorage.setItem("id", res.data.data._id)
            localStorage.setItem("name",res.data.data.roleId.name)   
    }else{
        data.roleId="67c0091e46b71abdd5484571"
        const res=await axios.post("/user/signup",data)
        console.log(res.data)
        signup()
       
        reset();
    }
}catch(err){
    console.log(err)
    console.log("somthing wrong here")
    loginfail()
}

}

  return (
    <div>
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
        <div class="form">
        
         <div class="btns">
            <button class={islogin?"loginbtn":"signupbtn"}  onClick={()=>setislogin(true)}>Log in</button>
            <button class={!islogin?"loginbtn":"signupbtn"}  onClick={()=>setislogin(false)}>Sign up</button>

         </div> <br />
      <form  onSubmit={handleSubmit(submitHandler)}>



         {islogin?<>
         
       <div >
            {/* <label>UserName/Email Id</label> <br /> */}
            <input  class="input" type="text" placeholder='enter username' {...register("email",validationSchema.nameValidator)}/> <br />
         <span  style={{color:'red'}}>
            {errors.email?.message}
         </span>
        </div>  <br />

        <div >
            {/* <label>Password</label> <br /> */}
            <input  class="input" type="password" placeholder='enter password' {...register("password",validationSchema.passwordValidator)}/> <br />
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
            <p>Don't have an Account? <br />

                 <button href="#" id="signup" onClick={()=>setislogin(false)}>Sign Up</button></p>
        </div>
         </>:<>

         <div>
            <input class='input' type="text" placeholder='Enter your username' {...register("userName",validationSchema.emailValidator)}/> <br />
            <span style={{color:'red'}}>
                {errors.userName?.message}
            </span>
         </div> <br />

         <div>
            <input class='input' type="text" placeholder='Enter your contact number' {...register("contact",validationSchema.contactValidator)}/> <br />
            <span style={{color:'red'}}>
                {errors.contact?.message}
            </span>
         </div> <br />

         <div>
            <input class='input' type="email" placeholder='Enter your email' {...register("email",validationSchema.emailValidator)}/> <br />
            <span style={{color:'red'}}>
                {errors.email?.message}
            </span>
         </div> <br />

         <div>
            <input  class='input' type="text" placeholder='Enter a password' {...register("password",validationSchema.passwordValidator)} /> <br />
             <span style={{color:'red'}}>
                {errors.password?.message}
             </span>
         </div> <br />


         <div>
            <button id='signupsuccess'>Sign Up</button>
         </div>
         </>}

      </form>
        </div>
    </div>
  )
}
export default Login
