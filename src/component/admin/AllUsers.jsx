import axios from 'axios'
import React, { useEffect, useState } from 'react'

export const AllUsers = () => {
  const [search, setsearch] = useState("")
  const [users, setusers] = useState([])
  const allUser=async()=>{

    const res=await axios.get("/admin/alluser")
    setusers(res.data.data)
    
    console.log("users found here",users)
}

const deleteUser=async(id)=>{
  try{
    const confirmDelete = window.confirm("Are you sure you want to remove this user?");
  if(confirmDelete){

    const res=await axios.delete(`/admin/deleteuser/${id}`)
    console.log(res)
    allUser()
  }
  }catch(err){
    console.log("Somthing problem",err)
    
  }

}

useEffect(() => {
 allUser()
}, [])

const filterUser = search
? users.filter((user) => 
  (user.userName &&
    user.userName?.toLowerCase().includes(search.toLowerCase()))
  )
:users 

  return (
    <div className='bg-[#F8F4E1] pt-4'>
    <h1 className='text-center font-bold'>All Users</h1>

    <div className='flex gap-2 mb-2 right-0 ml-[80%] ' >
      <input className='w-60 h-10 pl-2 text-xl rounded-xl text-black border border-black '  type="text" placeholder='Search'  onChange={(e) => setsearch(e.target.value)} />
      <button className='border-1 border-black  px-1 h-10 w-10 rounded '><i class="fa-solid fa-magnifying-glass"></i></button>
      </div> 

    <div>
      <table className='table table-dark'>
        <thead className='text-center'>
            <tr>
              <th>Name</th>
              <th>Email Id</th>
              <th>Contact No</th>
              <th>Action</th>
            </tr>
        </thead>
        <tbody className='text-center'>

      {filterUser.length>0?(
        filterUser?.map((user)=>(
        <tr>
          <td>{user.userName}</td>
          <td>{user.email}</td>
          <td>{user.contact}</td>
          <td>
            <button class="btn btn-danger" onClick={()=>deleteUser(user._id)}>
               Remove
            </button>
          </td>
        </tr>
             ))):
             <p className="text-center text-xl text-white" >User Not Found</p>
            }
        </tbody>
      </table>
    </div>
    
    
    
    </div>
  )
}
