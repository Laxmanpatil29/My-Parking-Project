import axios from 'axios'
import React, { useEffect, useState } from 'react'

export const Allinquiry = () => {

    const [inquiry, setinquiry] = useState([])
    const [search, setsearch] = useState("")

    const incomingInquiry=async()=>{
        const res=await axios.get("/contactUs/getallcontactdetails")
        console.log(res.data)
        setinquiry(res.data.data)
        console.log("data in state",inquiry)
    }

    const deleteInquiry=async(id)=>{
      const confirmDelete = window.confirm("Are you sure you want to remove this inquiry?")
      if(confirmDelete){
        const res=await axios.delete("/contactUs/deletecontactdetails/"+id)
        console.log(res)
        incomingInquiry()}
    }

    useEffect(() => {
    
      incomingInquiry()
    }, [])
    
    const filterIncomingInquiry = search
    ? inquiry.filter((incomingInquiry) => {
        const fullName = `${incomingInquiry.firstname || ''} ${incomingInquiry.lastname || ''}`.toLowerCase();
        const reversedFullName = `${incomingInquiry.lastname || ''} ${incomingInquiry.firstname || ''}`.toLowerCase();
        return fullName.includes(search.toLowerCase()) || reversedFullName.includes(search.toLowerCase());
      })
    : inquiry

  return (
    <div className='bg-[#F8F4E1] pt-4'>
      <div className='text-center'>
        <h1>
            Incoming Inquiry
        </h1>
    </div> 

    <div className='flex gap-2 mb-2 right-0 ml-[80%] ' >
      <input className='w-60 h-10 pl-2 text-xl rounded-xl text-black border border-black '  type="text" placeholder='Search'  onChange={(e) => setsearch(e.target.value)} />
      <button className='border-1 border-black  px-1 h-10 w-10 rounded '><i class="fa-solid fa-magnifying-glass"></i></button>
      </div>
    <div className="flex justify-center items-center">

      <table className='table table-dark'>
        <thead>
          <tr className='text-center'>
            <th>Name</th>
            <th>Email Id</th>
            <th>Phone no</th>
            <th>Message</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>

          {filterIncomingInquiry.length>0?(
          
          
       
      filterIncomingInquiry?.map((i)=>(
          
          <tr className='text-center'>
            <td>{i.firstname} {i.lastname}</td>
            <td>{i.email}</td>
            <td>{i.phone}</td>
            <td>{i.message}</td>

            <td>
              <button class='btn btn-danger' onClick={()=>deleteInquiry(i._id)}>
                Delete
              </button>
            </td>
          </tr>
          ))):(
            <p className="text-center text-white" >No Matching Inquiry Found</p>
          )}
        </tbody>
      </table>
      


    </div>

    </div>
   
  )
}
