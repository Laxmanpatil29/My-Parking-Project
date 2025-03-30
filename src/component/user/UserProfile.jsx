import React, { useState } from 'react'
import img from "../../assets/profile-2.jpg"

export const UserProfile = () => {

  const [userData, setuserData] = useState({
    name:'Laxman Patil',
    image:img,
    email:'laxman9974@gmail.com',
    phone:'+91 8849949974',
    address:{
      line1:'301-305,surbhi complex,nr.municipal market',
      line2:'CG road,Navrangpura,Ahmedabad',
    },
    gender:'Male',
    DOB:'2003-09-15',
  })

    const [isEdit, setisEdit] = useState(false)

  return (
    <div className='max-w-lg mx-[10%] mb-[10%] flex flex-col gap-2 text-sm'> <br />
      <img className='bg-green-950 h-36 w-36 rounded-full' src={userData.image} alt="" />

      {
        isEdit 
        ? <input className='bg-gray-50 text-3xl font-medium max-w-100 mt-4' type="text" value={userData.name} onChange={(e)=> setuserData(prev=>({...prev,name:e.target.value}))} />
        : <p className='font-medium text-3xl text-neutral-800 mt-4'>{userData.name}</p>
      }

      <hr className='bg-zinc-400 h-[1px] border-none' />

      <div>
        <p className='text-neutral-800 underline mt-3'>CONTACT INFORMATION</p>
        <div className='grid grid-cols-[1fr_2fr] gap-y-2.5 mt-3 text-neutral-700'>
          <p className='font-medium'>Email Id: </p>
            <p className='text-blue-500'>{userData.email}</p>
          <p className='font-medium'>Phone:</p>
            {
              isEdit 
              ? <input className='bg-gray-100 max-w-52' type="text" value={userData.phone} onChange={(e)=> setuserData(prev=>({...prev,phone:e.target.value}))} />
              : <p className='text-blue-400'>{userData.phone}</p>
            }
            <p className='font-medium'>Address:</p>
            {
              isEdit 
              ? <p>
                <input className='bg-gray-100' value={userData.address.line1} onChange={(e)=> setuserData(prev=>({...prev,address, line1:e.target.value}))} type="text" /> <br />
                <input className='bg-gray-100' value={userData.address.line2} onChange={(e)=> setuserData(prev=>({...prev,address, line2:e.target.value}))} type="text" />
              </p>              
              : <p className='text-gray-500'>{userData.address.line1} <br />
                    {userData.address.line2}
              </p>
            }
        </div>
      </div>

      <div>
        <p className='text-neutral-800 underline mt-3'>BASIC INFORMATION</p>
        <div className='grid grid-cols-[1fr_2fr] gap-y-2.5 mt-3 text-neutral-700'>
          <p className='font-medium'>Gender:</p>
          {
              isEdit 
              ? <select className='max-w-20 bg-gray-100' value={userData.gender} onChange={(e)=> setuserData(prev=>({...prev,gender:e.target.value}))}>
                  <option value="Male">Male</option>
                  <option value="Felmale">Female</option>
              </select>
              : <p className='text-gray-400'>{userData.gender}</p>
            }
            <p className='font-medium'>Birthdate:</p>
            {
              isEdit 
              ? <input className='max-w-28 bg-gray-100' type="date" value={userData.DOB} onChange={(e)=> setuserData(prev=>({...prev,DOB:e.target.value}))} />
              : <p className='text-gray-400'>{userData.DOB}</p>
            }
        </div>
      </div>

      <div className='mt-10'>
            {
              isEdit
              ?<button className='border-2 border-green-950 px-8 py-2 rounded-full hover:bg-green-950 hover:text-white transition-all' onClick={()=> setisEdit(false)}>Save</button>
              :<button className='border-2 border-green-950 px-8 py-2 rounded-full hover:bg-green-950 hover:text-white transition-all' onClick={()=> setisEdit(true)}>Edit</button>
            }
      </div>
    </div>
  )
}

