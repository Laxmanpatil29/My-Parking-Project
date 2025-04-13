import axios from 'axios'
import IMG from "./../../assets/profile-2.jpg"
import React,{ useEffect,useState} from 'react'

export const AdminProfile = () => {

  const [formData, setformData] = useState({
    userName: '',
    email: '',
    contact: '',
    address: 'Not Provided',  
    gender: '',
    dob: '',
     profileImg:" "
  })

  const profileDetails=async()=>{
    const userId=localStorage.getItem("id")

    const res=await axios.get('/user/user/'+userId)
    setformData(res.data.data)
    console.log(res.data.data)
  }
   
  useEffect(() => {
    profileDetails() 
   }, [])

   const handleChange = (e) => {
    const { name, value,files } = e.target;
    if (name === "profileImg") {
      setformData(prev => ({ ...prev, profileImg: files[0] })); // store file object
    } else {
      setformData(prev => ({ ...prev, [name]: value }));
    }
  } 

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userId = localStorage.getItem("id");
    try {

      const formDataUpdate = new FormData()
    formDataUpdate.append("userName", formData.userName)
    formDataUpdate.append("email", formData.email)
    formDataUpdate.append("contact", formData.contact)
    formDataUpdate.append("address", formData.address)
    formDataUpdate.append("gender", formData.gender)
    formDataUpdate.append("dob", formData.dob)
    if (formData.profileImg) {
      formDataUpdate.append("profileImg", formData.profileImg)
    }

console.log(formData.profileImg)
      const res = await axios.put('/user/user/' + userId, formDataUpdate,{
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });


      alert('Profile updated successfully!');
      console.log('Updated data is', res.data);
      console.log(formData.profileImg)
    } catch (err) {
      console.error('Error updating profile:', err);
      alert('Failed to update profile.');
    } 
  }

  return (
    <div className='bg-[#FDFAF6]'>
   <div className="justify-center text-center border-2 h-auto ">
     

 
      <form className='my-6' onSubmit={handleSubmit}>
        <div className='flex  ml-[40%] mt-4'> 
      <h1>Hi,{formData.userName || 'User'}</h1>  
      {/* <button className='bg-[#57B4BA] px-2 h-10 ml-10 rounded-lg font-bold'>Update Profile</button>    */}
        </div>
            <div className='flex mt-3'> 
              <img src={formData.profileImg instanceof File 
    ? URL.createObjectURL(formData.profileImg)
    : formData.profileImg 
      ? `http://localhost:3000/uploads/${formData.profileImg}` 
      : IMG }alt="Profile" name='profileImg'  accept="image/*" className='border-2 bg-white h-28 w-28 rounded-full ml-[45%]'></img>
             <label className='h-8 w-8 rounded-full border-1 border-black mt-20 -ml-8 bg-white pt-0.5 ' >
               <i  class="fa-solid  fa-camera"></i>
              <input type="file" accept="image/*" className="hidden" name='profileImg' onChange={handleChange} />
            </label>
           </div>
        <div className='flex gap-5  ml-[35%]'>
          <input type="text" placeholder='Enter Your Name' name="userName" className='border-1 pl-2 h-10 w-[28rem] rounded-md' value={formData.userName ||' '} onChange={handleChange}/>
          {/* <input type="text" placeholder='Enter LastName' className='border-1 pl-2 h-10 w-[13rem] rounded-md '/> */}
        </div>

        <div className='mt-3'>
          <input type="email" placeholder='Enter Email Id'   name="email" className='border-1 pl-2 w-[30%] h-10 rounded-md '  value={formData.email || ' '} onChange={handleChange}/>
        </div>

        <div  className='mt-3'>
          <input type="text" placeholder='Enter Phone Number'  name="contact" className='border-1 pl-2 w-[30%] h-10 rounded-md ' value={formData.contact || ' '} onChange={handleChange}/>
        </div>

        <div  className='mt-3'>
          <input type="text" placeholder='Enter Address' value={formData.address || ' '} name="address" className='border-1 pl-2 w-[30%] h-10 rounded-md ' onChange={handleChange} />
        </div>

        <div  className='mt-3 '>
          <label>Gender:-</label>
          <select  name="gender" value={formData.gender || ' '} className='ml-4 border-2 w-[13rem] rounded-md pl-2'onChange={handleChange}>
            <option value="">Selact-gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>

        <div  className='mt-3'>
          <label>DOB</label>
          <input    name="dob" type="date"  value={formData.dob ||' '}className='ml-4 border-2 w-[13rem] rounded-md pl-2' onChange={handleChange}/>
        </div>

        <div className='mt-3 '>
          <button type='submit' className='bg-[#60B5FF] w-[10rem] h-8 rounded-lg text-xl'>Save</button>
        </div>
      </form>
    
   </div>
   </div>
  )
}
