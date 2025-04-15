import axios from 'axios'
import React, { useEffect, useState } from 'react'

export const AllProviders = () => {
  const [search, setsearch] = useState("")
  const [provider, setprovider] = useState([])
  const allProvider=async()=>{

    const res=await axios.get("/admin/allprovider")
    setprovider(res.data.data)
    console.log(res.data.data)
    
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

const filterProvider = search
? provider.filter((providers) => 
  ( providers.userName &&
    providers.userName?.toLowerCase().includes(search.toLowerCase()))
  )
:provider

  return (
    <div className='bg-[#F8F4E1] pt-4'>
    <h1 className='text-center font-bold'>All Provider</h1>
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
          {filterProvider.length>0?
        (filterProvider.map((p)=>(
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
             ))):
             <p className="text-center text-xl text-white" >Provider Not Found</p>
            }

        </tbody>
      </table>
    </div>
    
    
    
    </div>
  )
}
