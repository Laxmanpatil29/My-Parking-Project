import axios from 'axios'
import React, { useEffect, useState } from 'react'

export const IncomingInquiry = () => {

    const [inquiry, setinquiry] = useState([])

    const incomingInquiry=async()=>{
        const res=await axios.get("/contactUs/getallcontactdetails")
        console.log(res.data)
        setinquiry(res.data.data)
        console.log("data in state",inquiry)
    }

    const deleteInquiry=async(id)=>{
        const res=await axios.delete("/contactUs/deletecontactdetails/"+id)
        console.log(res)
        incomingInquiry()
    }

    useEffect(() => {
    
      incomingInquiry()
    }, [])
    
  return (
    <>
      <div className='text-center'>
        <h1>
            Incoming Inquiry
        </h1>
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
       
      {inquiry?.map((i)=>(
          
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
          ))}
        </tbody>
      </table>
      


    </div>

    </>
   
  )
}
