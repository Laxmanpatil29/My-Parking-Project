import axios from 'axios'
import React, { useEffect, useState } from 'react'

export const AllUsers = () => {
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
  return (
    <div className='mt-4'>
    <h1 className='text-center font-bold'>All Users</h1>
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
        { users.map((user)=>(
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
             ))}

        </tbody>
      </table>
    </div>
    
    
    
    </div>
  )
}
