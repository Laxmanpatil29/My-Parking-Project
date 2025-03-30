import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Bounce, toast, ToastContainer } from 'react-toastify'

export const ParkingDetails = () => {
  const parkingSuccess=()=>toast("Your Parking Slot Booked Successfully 🎉")
 const {id}= useParams()

  const [parkingdetails, setparkingdetails] = useState(null)
   const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getParkingDetailsById=async()=>{
      try{
      const res=await axios.get(`/provider/getparkingdetailsbyid/${id}`)
      console.log(res)
      console.log(res.data)
      setparkingdetails(res.data.data)
      // console.log(parkingdetails)
      
    } catch(err){
      console.error("the error is:- ",err)

      }finally{
        setLoading(false);
      }

    }
    getParkingDetailsById();
  }, [id])

  if (loading) return <h2 className="text-center">Loading...</h2>;
  if (!parkingdetails) return <h2 className="text-center text-red-500">Parking not found</h2>;

  const bookParking=async ()=>{
      
    const res =await axios.post("/book/addbook",{
      parking_id:parkingdetails._id,
      name:parkingdetails.name,
      image_url:parkingdetails.image_url,
      location:parkingdetails.location,
      capacity:parkingdetails.capacity,
      available_spots:parkingdetails.available_spots,
      price_per_hour:parkingdetails.price_per_hour,
      type:parkingdetails.type,
      features:parkingdetails.features
    })
    parkingSuccess()

    console.log("your booking",res)
    console.log(res.data)
  }
  
  // const {id} = useParams();
  // useEffect(() => {
  //   const parking = parkingAreas.find((p) => String(p._id) === String(id));
  //   setparkingdetails(parking);
  //   console.log(parkingdetails);
  // }, [id]); // Only runs when id changes
  // if (!parkingdetails) return <h2>Parking not found</h2>;

  return (
  <div className='text-center'>
    <ToastContainer
            position="top-center"
            autoClose={2500}
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
    <div>
      <h1>perticular parking lot details</h1>
      <h4>Parking Details</h4>
    </div>

  <div className="flex justify-center items-center ">
   
        <div className="p-6 bg-gray-800 text-white rounded-lg cursor-pointer  ">
            <img className='w-[360px] ml-12 mb-2 rounded-lg' src={parkingdetails.image_url} alt="" />
            <h2>Name:{parkingdetails.name}</h2>
            <h4>Location: {parkingdetails.location}</h4>
            <p>Capacity: {parkingdetails.capacity}</p>
            <p>available Spots: {parkingdetails.available_spots}</p>
            <p> price Per Hour: {parkingdetails.price_per_hour}</p>
            <p>Type: {parkingdetails.type}</p>
            <p>Features: {parkingdetails.features}</p>
            
             <button onClick={bookParking} className='border-1 rounded-lg px-2 text-lg font-bold bg-[#96b4b2] text-black'>Book slot</button>

            
        </div>
  
  </div>


  
  </div>
  )
}   
