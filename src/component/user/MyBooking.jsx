import axios from 'axios';
import React, { useEffect, useState } from 'react'

import { Bounce, toast, ToastContainer } from 'react-toastify'

export const MyBooking = () => {
  // const [paymentSuccess, setpaymentSuccess] = useState("pending")
  const deletebtn=()=>toast("After Success Payment,You can't cancel booking")
  const [bookedParking, setbookings] = useState([])

  const ToatalHour=(in_time , out_time)=>{
    const intime=in_time.split(":");
    const outtime=out_time.split(":");
    const totalHour=((outtime[0]-intime[0])+(outtime[1]-intime[1]/60))
    return totalHour.toFixed(2)
  }
  

  // const paid=()=>toast("Payment process is work in progress...");
  const parkingcancel=()=>toast("Parking Slot cancel Successfully");

  
      const bookedParkings=async()=>{

        const userId=localStorage.getItem("id")
  
        const res=await axios.get(`/book/getallbook?userId=${userId}`)
      
        setbookings(res.data.data)
        
      }
  useEffect(() => {
     bookedParkings()
    
  }, [])

  const deleteBooking=async(id,bookings)=>{
    try{

      if(bookings.payment_status==="pending"){
        const res=await axios.delete("/book/cancelbook/"+id)
        console.log(res.data)
        parkingcancel()
        bookedParkings()
      }else{
        deletebtn()
      }
 }catch(err){
  console.log("not working this button",err)
 }
  
  }


  //payment process code start

  // const [orderDetails, setOrderDetails] = useState(null);
  const handleCreateOrder = async (bookings) => {
    try {
      const inTime = bookings.in_time.split(":");
      const outTime = bookings.out_time.split(":");
      const totalHour = ((outTime[0] - inTime[0]) + (outTime[1] - inTime[1])/60) ;
      const Amount=Math.round(bookings.price_per_hour * totalHour)
      console.log("the amount is",Amount)
    
    
 
      const order = await axios.post(
        "http://localhost:3000/payment/create_order",
        {
          amount: Amount,
          currency: "INR",
          receipt: "receipt_order_123",
        }
      );

      // setOrderDetails(order.data);
      displayRazorpay(order.data,bookings);
    } catch (error) {
      console.error("Order creation failed:", error);
    }
  };

  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const displayRazorpay = async (orderData,bookings) => {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    const options = {
      key: "rzp_test_oQ8Zw22kO70V8A",
      amount: orderData.amount,
      currency: orderData.currency,
      name:bookings.owner_name,
      description: "Test Transaction",
      order_id: orderData.id,
      handler: async function (response) {
        const res = await axios.post(
          "http://localhost:3000/payment/verify_order",
          {
            razorpay_order_id: response.razorpay_order_id,
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_signature: response.razorpay_signature,
          }
        );

        if (res.data.status === "success") {
          //database order table:
          //orderId,
          //rporderid
          //paymentid
          //amount
          //statusc: sucess
          // alert("Payment verified successfully!");
          await axios.put(`/book/updatepaymentstatus/${bookings._id}`, 
            {
            payment_status: "success"
          
          })
          console.log(bookings._id)
          bookedParkings()

        
        } else {
          alert("Payment verification failed.");
        }
      },
      prefill: {
        name:bookings.owner_name,
        email:bookings.userId.email,
        contact:bookings.owner_contact_number,
      },
      theme: {
        color: "#61dafb",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  
  return (
    <>
     <ToastContainer
            position="top-center"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
            transition={Bounce}
             toastClassName="custom-toast"
            />

      <h2 className='text-center mt-4'>
        Here Is Your Booked Parking Slot
      </h2>



      <div className='mt-6 border-2   w-full  bg-[#92ccc9] rounded-xl' >
{bookedParking?.length>0?
        ( bookedParking.map((bookings)=>(

        

    <div className='flex gap-4 my-4 border-2 rounded-lg w-[60%] ml-[5%] py-[1%] bg-slate-300'>
      
       <img className='w-[360px] ml-12  rounded-md' src={bookings.image_url} alt="" />
       <div className='mr-0 w-[50%]'>
             <p className='font-bold'>Name:- {bookings.name}</p>
             <p><span className='font-bold'>Location:-</span> {bookings.location}</p>
             <p><span className='font-bold'>Price Per Hour:-</span> {bookings.price_per_hour}</p>
             <p><span className='font-bold'>Features:-</span> {bookings.features}</p>
             <p><span className='font-bold'>Total Hour:- </span>
                {ToatalHour(bookings.in_time,bookings.out_time)} hours
             </p>
             <p><span className='font-bold'>Amount to Pay:- </span>
             {bookings.price_per_hour* ToatalHour(bookings.in_time,bookings.out_time)} Rs
               </p>

             <div className='flex gap-3 ml-[40%] '>

             {bookings.payment_status==="pending"?(
               <button className='border-2 bg-[blue] px-2  text-white font-bold rounded-lg'  onClick={()=>handleCreateOrder(bookings)}
              >pay online</button>):
         (
          <button className='border-2 bg-[green] w-28 h-10 rounded-lg text-white font-bold'
         > Already Paid </button>
         )
          }



              <button className='border-2 bg-[red]  p- w-32 h-10 text-white font-bold rounded-lg' onClick={()=>deleteBooking(bookings._id,bookings)}  >cancel Booking</button>
             </div>

       </div>
    </div>
        ))):( <p className='text-center text-2xl'>"No bookings found. You haven’t reserved any parking spots yet!"</p>)}

      
      </div>




      

    
    





    </>

)
}
