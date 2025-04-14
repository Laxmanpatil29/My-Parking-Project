import axios from 'axios'
import React, { useEffect, useState } from 'react'

export const AllProviders = () => {
  const [provider, setprovider] = useState([])
  const allProvider=async()=>{

    const res=await axios.get("/admin/allprovider")
    setprovider(res.data.data)
    
    console.log("provider found here",provider)
}

const deleteProvider=async(id)=>{
  try{
    const confirmDelete = window.confirm("Are you sure you want to remove this Provider?");
  if(confirmDelete){

    const res=await axios.delete(`/admin/deleteuser/${id}`)
    console.log(res)
    allProvider()
  }
  }catch(err){
    console.log("Somthing problem",err)
    
  }

}

useEffect(() => {
 allProvider()
}, [])
  return (
    <div className='mt-4'>
    <h1 className='text-center font-bold'>All Provider</h1>
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
        { provider.map((p)=>(
        <tr>
          <td>{p.userName}</td>
          <td>{p.email}</td>
          <td>{p.contact}</td>
          <td>
            <button class="btn btn-danger" onClick={()=>deleteProvider(p._id)}>
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
