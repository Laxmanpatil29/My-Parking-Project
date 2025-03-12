import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

export const Booking = () => {
  const [State, setState] = useState([])
  const [city, setcity] = useState([])
  const [area, setarea] = useState([])

 const {register,handleSubmit} =useForm()

 const getAllState=async()=>{
  const res=await axios.get("/state/getallstate")
  setState(res.data.data);
 }

 
 const getCityByStateId = async (id) => {
  const res = await axios.get("/city/getcitybystate/" + id);
  setcity(res.data.data);
 }

const  getAreaByCityId=async(id)=>{
  const res=await axios.get("/area/getareabycity/" + id);
  console.log(res.data.data)
  setarea(res.data.data);
}
 

 const submitHandler=()=>{

 }

 
 useEffect(() => {
  getAllState();
}, []);

  return (
    <>
    <div>
      <form onSubmit={handleSubmit(submitHandler)}>

        <div>
          <label>Name</label>
          <input type="text" placeholder='enter your name' {...register("name")}/>
        </div>

        <div>
          <label>Select State</label>
          <select {...register('stateId')} onChange={(event)=>getCityByStateId(event.target.value)}>
            <option>Select state</option>
            {State?.map((states)=>(
              
              <option key={states._id} value={states._id}>{states.name}</option>
            ))}
          </select>
        </div>

        <div>
                <label>Select City</label>
                <select {...register('cityId')} onChange={(event)=>getAreaByCityId(event.target.value)}>
                  <option>Select city</option>
                  {city?.map((cities) => (
                    <option key={cities._id} value={cities._id}>{cities.name}</option>
                  ))}
                </select>
              </div>

          <div>
            <label>Select Area</label>
            <select {...register("areaId")}>
              
              <option>Select area</option>
              {
                area?.map((areas)=>(
                   <option key={area._id} value={area._id}>{areas.name}</option>
                ))
              }


            </select>
          </div>





      </form>
    </div>
    </>
  )
}
