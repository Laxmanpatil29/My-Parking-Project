import React, { useEffect } from 'react'
import axios from 'axios'

const parkingImages={

  img1:"https://files.yappe.in/place/small/amc-multilevel-parking-commercial-complex-navrangpura-9449464.webp",
  img2:"https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1295,h_964/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/ai7cyocb5906nqgaczxj/GujaratScienceCityTicketinAhmedabad.jpg",
  img3:"https://img.staticmb.com/mbcontent/images/crop/uploads/2023/6/Ahmedabad-Airport-Terminal_0_1200.jpg",
  img4:"https://gujarat.mallsmarket.com/sites/default/files/photos/malls/ISCON-MegaMall-Ahmedabad-1.jpg",
  img5:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmTp0VF5HXe3BRCtMFkR-xo5tDCTXnsOAvgSesZKOuB26cqmDQqa5XJmMBleGMu52iUQw&usqp=CAU",
  img6:"https://static.toiimg.com/thumb/msid-83913138,width-1280,height-720,resizemode-72/83913138.jpg",
  img7:"https://ahmedabadtourism.in/images/places-to-visit/headers/vastrapur-lake-ahmedabad-entry-fee-timings-holidays-reviews-header.jpg",
  img8:"https://pbs.twimg.com/media/EQF_fV-XYAEqARi.jpg",
  img9:"https://i.ytimg.com/vi/Dvux7BSP3lM/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCNbLkKvoZhAEWpsWPaAd77iosbRQ",
  img10:"https://ahmedabadtourism.in/images/places-to-visit/headers/kankaria-lake-ahmedabad-entry-fee-timings-holidays-reviews-header.jpg"

}

export const ParkingObject =() => {

  useEffect(() => {
    
       const addparkingarea=async()=>{

        try{
          const parkingAreas=[
            {
              name: "AMC Multi-Level Parking",
              image_url:parkingImages.img1,
              location: "Lal Darwaja, Ahmedabad",
              capacity: 500,
              available_spots: 120,
              price_per_hour: 10,
              type: "Multi-Level",
              features: "CCTV, 24/7 Security, Handicap Accessible"
            },
            {
              name: "AmdaPark - Science City Road",
              image_url:parkingImages.img2,
              location: "Science City Road, Ahmedabad",
              capacity:300 ,
              available_spots:80 ,
              price_per_hour: 8,
              type: "Open Plot Parking",
              features: "EV Charging, CCTV, Security Personnel"
            },
            {
              name: "SVP Airport Parking",
              image_url:parkingImages.img3,
              location: "SVPI Airport, Ahmedabad",
              capacity:1000 ,
              available_spots:300 ,
              price_per_hour: 85,
              type: "Airport Parking",
              features: "Long-Term Parking, VIP Parking, Shuttle Service"
            },
            {
              name: "ISCON Mega Mall Parking",
              image_url:parkingImages.img4,
              location: "SG Highway, Ahmedabad",
              capacity: 400,
              available_spots:150 ,
              price_per_hour: 5,
              type: "Underground Parking",
              features: "Valet Service, Handicap Accessible, Security Cameras"
            },
            {
              name: "Narendra Modi Stadium Parking",
              image_url:parkingImages.img5,
              location: "Motera, Ahmedabad",
              capacity:16000 ,
              available_spots:5000 ,
              price_per_hour: 20,
              type: "Event Parking",
              features: "Online Booking, Private Parking, CCTV Monitoring"
            },
            {
              name: "Gota Overbridge Parking",
              image_url:parkingImages.img6,
              location: "Gota, Ahmedabad",
              capacity:250 ,
              available_spots:90 ,
              price_per_hour: 7,
              type: "Street Parking",
              features: "Security Personnel, 24/7 Access, Bike Parking"
            },
            {
              name: "Vastrapur Lake Parking",
              image_url:parkingImages.img7,
              location: "Vastrapur, Ahmedabad",
              capacity:200 ,
              available_spots:60 ,
              price_per_hour: 6,
              type: "Open Parking",
              features: "Near Public Park, Security Cameras, Bike & Car Parking"
            },
            {
              name: "CG Road Parking",
              image_url:parkingImages.img8,
              location: "CG Road, Ahmedabad",
              capacity:350,
              available_spots:100,
              price_per_hour:10,
              type: "Street Parking",
              features: "Shopping Area, Night Parking Allowed, Security"
            },
            {
              name: "Maninagar Railway Station Parking",
              image_url:parkingImages.img9,
              location: "Maninagar, Ahmedabad",
              capacity: 500,
              available_spots:180 ,
              price_per_hour: 12,
              type: "Railway Station Parking",
              features: "24/7 Open, Near Metro, CCTV Surveillance"
            },
            {
              name: "Kankaria Lake Parking",
          image_url:parkingImages.img10,
              location: "Kankaria, Ahmedabad",
              capacity: 400,
              available_spots:140,
              price_per_hour:8,
              type: "Tourist Parking",
              features: "Near Amusement Park, EV Charging, Security Guards"
            },
          ]
        
          const res=await axios.post("/provider/addparkingarea",parkingAreas)
          console.log(res)
          console.log(res.data)
          
        
        }catch(err){
         console.log("the error is: ",err)
        }
      

      }
      addparkingarea();
   
      
  }, [])
  
  return (
    <div></div>
  )
}









