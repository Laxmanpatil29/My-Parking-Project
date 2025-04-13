import React from 'react'
import "../assets/uicontact.css"
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { Bounce, toast, ToastContainer } from 'react-toastify'
import { Footer } from './Footer'

export const CommonUiContact = () => {

  const {register,handleSubmit,formState:{errors},reset}=useForm()
  const sendSuccess=()=>toast("details send Successfully 👍")

  const validationSchema={
      nameValidator:{
          required:{
            value:true,
            message:"name is required"
          }
      },
      emailValidator:{
        required:{
          value:true,
          message:"email is required"
        }
      },
      phoneValidator:{
        required:{
          value:true,
          message:'phone num is required'
        }
      }

  }


const submitHandler=async(data)=>{
  console.log(data)
  const userId=localStorage.getItem("id")
  const fullData={
    ...data,
    userId:userId
  }
  const res=await axios.post("/contactus/addcontactus",fullData)
  sendSuccess()
  console.log(res.fullData)
  reset()

}


  return (
    <div  class="contact">
       <ToastContainer
            position="top-center"
            autoClose={2000}
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
      
      <div >
        <h1 >Contact US</h1>
        <h2>We Are Here For You</h2>
        <p>We’d love to hear from you. Take five minutes to fill out our form so that we can get to know you.</p>
      </div>


      <div class="flex flex-wrap justify-center ml-60 gap-10 w-full max-w-5xl">
        
        {/* <!-- India Office -->\ */}
        <div class="bg-white p-6 rounded-2xl shadow-lg text-center w-80">
            {/* <img src="india-flag.png" alt="India Flag" class="w-12 mx-auto mb-4"/> */}
            <h2 class="text-xl font-semibold">Registered Office</h2>
            <p class="text-gray-600 mt-2 hover:text-red-500">
                <i class="fas fa-map-marker-alt text-blue-500"></i> A-502, Tilak Nagar, Opposite VS Hospital, <br />
                Vastral, Ahmedabad - 380026, Gujarat, India.
            </p>
            <p class="text-gray-700 mt-2  hover:text-red-500"><i class="fas fa-phone text-blue-500"></i> +91 4512789685</p>
            <p class="text-gray-700 mt-2  hover:text-red-500"><i class="fas fa-envelope text-blue-500"></i> myparking@gmail.com</p>
            <div class="mt-4 flex justify-center gap-4 text-gray-600">
                <a href="#" class="hover:text-blue-500"><i class="fab fa-facebook"></i></a>
                <a href="#" class="hover:text-blue-500"><i class="fab fa-twitter"></i></a>
                <a href="#" class="hover:text-blue-500"><i class="fab fa-instagram"></i></a>
                <a href="#" class="hover:text-blue-500"><i class="fab fa-linkedin"></i></a>
                <a href="#" class="hover:text-blue-500"><i class="fab fa-youtube"></i></a>
            </div>
        </div>

        {/* <!-- UK Office --> */}
        <div class="bg-white p-6 rounded-2xl shadow-lg text-center w-80">
            {/* <img src="uk-flag.png" alt="UK Flag" class="w-12 mx-auto mb-4"/> */}
            <h2 class="text-xl font-semibold">Registered Office</h2>
            <p class="text-gray-600 mt-2  hover:text-red-500">
                <i class="fas fa-map-marker-alt text-blue-500"></i> B-702,Bhakti Nagar, <br />
                Nikol, Ahmedabad - 382430, Gujarat, India.
            </p>
            <p class="text-gray-700 mt-2  hover:text-red-500"><i class="fas fa-phone text-blue-500"></i> +91 7525714555</p>
            <p class="text-gray-700 mt-2  hover:text-red-500"><i class="fas fa-envelope text-blue-500"></i> myparking@gmail.com</p>
            <div class="mt-4 flex justify-center gap-4 text-gray-600">
                <a href="#" class="hover:text-blue-500"><i class="fab fa-facebook"></i></a>
                <a href="#" class="hover:text-blue-500"><i class="fab fa-twitter"></i></a>
                <a href="#" class="hover:text-blue-500"><i class="fab fa-instagram"></i></a>
                <a href="#" class="hover:text-blue-500"><i class="fab fa-linkedin"></i></a>
                <a href="#" class="hover:text-blue-500"><i class="fab fa-youtube"></i></a>
            </div>
        </div>

      </div>

      <div class='contactUsForm'>
        <h1 className='pt-2 text-white'>Get In Touch</h1>
          <form onSubmit={handleSubmit(submitHandler)}>

        <div class='detail'>
           <div className='flex items-center space-x-2'>
          <div className='mb-2 mt-4'>
            <input className="w-60 h-10 border border-gray-300 rounded-lg px-2" type="text" placeholder='First Name' {...register("firstname",validationSchema.nameValidator)} />
            <div style={{color:"red",fontSize:'20px'}}>
                {errors.firstname?.message}
            </div>
          </div>
          <div className='mb-2 mt-4'>
            <input className="w-60 h-10 border border-gray-300 rounded-lg px-2" type="text" placeholder='Last Name' {...register("lastname",validationSchema.nameValidator)} />
            <div style={{color:"red",fontSize:'20px'}}>
                {errors.lastname?.message}
            </div>
          </div>
            </div>

            <div className='flex items-center mt-2 space-x-2'>
          <div className='mb-2'>
            <input className="w-60 h-10 border border-gray-300 rounded-lg px-2"  type="text" placeholder='Email' {...register("email",validationSchema.emailValidator)} />
            <div style={{color:"red",fontSize:'20px'}}>
                {errors.email?.message}
            </div>
          </div>
          <div className='mb-2'>
            <input className="w-60 h-10 border border-gray-300 rounded-lg px-2"  type="text" placeholder='Phone' {...register("phone",validationSchema.phoneValidator)} />
            <div style={{color:"red",fontSize:'20px'}}>
                {errors.phone?.message}
            </div>
          </div>
            </div>
        </div>
          <div>
            <textarea className="w-80 h-24 mt-2 border border-gray-300 rounded-lg px-2" name="messege" id='textarea' placeholder='Enter Your Message' {...register('message')}></textarea>
          </div>

          <div >
            <input type="submit" className="px-6 py-2 w-96 mt-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600" value="Submit" />
          </div>
          </form>
      </div>
    <Footer/>
    </div>
  
)
}
