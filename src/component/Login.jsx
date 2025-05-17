import axios from 'axios'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { Bounce, toast, ToastContainer } from 'react-toastify'
import '../assets/login.css'

const Login = () => {

const [islogin, setislogin] = useState(true)
const {register,handleSubmit,formState:{errors},reset}=useForm()
const navigate=useNavigate();
const loginsuccess=()=>toast("login successfull 👍");
const loginfail=()=>toast("invalid details 👎");
const signup=()=>toast("signup successfully 👍" )

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

const submitHandler=async(data)=>{

try{
    if(islogin===true){
            
            const res = await axios.post("/user/login",data);
            console.log(res.data.data)
            loginsuccess();
          
            localStorage.setItem("id", res.data.data._id)   
            localStorage.setItem("role",res.data.data.roleId.name)  
            localStorage.setItem("name",res.data.data.userName)
            console.log(res.data.data.roleId.name)

            if(res.data.data.roleId.name==="user"){
                setTimeout(() => 
                    navigate("/user ")
                ,2000);
            }else if(res.data.data.roleId.name==="provider"){
                setTimeout(() => 
                    navigate("/provider")
                ,2000);   
            }else{
                setTimeout(() => 
                    navigate("/admin")  
                ,2000);
            }

            
    }else{
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
    <>
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
        <div class="form ">
         <div class="btns">
            <button class={islogin?"loginbtn":"signupbtn"}  onClick={()=>setislogin(true)}>Log in</button>
            <button class={!islogin?"loginbtn":"signupbtn"}  onClick={()=>setislogin(false)}>Sign up</button>
         </div> <br />
      <form  onSubmit={handleSubmit(submitHandler)}>
         {islogin?<>
       <div >
            <input   class="ip" type="text" placeholder='enter username' {...register("email",validationSchema.nameValidator)}/> <br />
         <span  style={{color:'red'}}>
            {errors.email?.message}
         </span>
        </div>  <br />
        <div >
            <input  class="input" type="password" placeholder='enter password' {...register("password",validationSchema.passwordValidator)}/> <br />
            <span style={{color:'red'}}>
                {errors.password?.message}
            </span>
        </div>

        <div class="forgot">
            <Link to="/forgetpassword">Forgot Password ?</Link>
        </div>

        <div>
            <button id="loginsuccess">Login</button>
        </div> 

        <div class="lastpart">
            <p className="font-bold underline" >Don't have an Account? 
            <a href="#" id="signup" onClick={()=>setislogin(false)}>Sign Up</a></p>
        </div>
         </>:<>
         <div>
            <input class='ip' type="text" placeholder='Enter your username' {...register("userName",validationSchema.emailValidator)}/> <br />
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
            <input  class='input' type="password" placeholder='Enter a password'  {...register("password",validationSchema.passwordValidator)} /> <br />
             <span style={{color:'red'}}>
                {errors.password?.message}
             </span>
         </div> <br />

         <div>
            <label className='font-bold'>Roles:-</label>
            <select className='mb-2 w-[10rem] rounded-md pl-1' {...register("roleId")}>
                <option value="67ea169d0b27d76db25ade9e">User</option>
                <option value="67ea16c20b27d76db25adea0">Provider</option>
                <option value="67ea16e70b27d76db25adea2">Admin</option>
            </select>
         </div>
         <div>
            <button  id='signupsuccess'>Sign Up</button>
         </div>
         </>}
      </form>
        </div>
    </div>
    </>
  )
}
export default Login
