import React from 'react'
import { Footer } from './Footer'

export const CommonUiServices = () => {
  return (

    <>
    
    <div className='mt-[100px] text-center h-[100vh]'>
      <h1>Our Services</h1>

      <div className='text-start ml-16 mt-4'>
           <h4>1.🚘 Find Nearby Parking in Real-Time:</h4>
           <p className='text-xl ml-6'>Instantly discover available parking spots near your destination using our smart search </p>

           <h4>2.📅 Book in Advance:</h4>
           <p className='text-xl ml-6'>Reserve your spot ahead of time so you can drive with confidence—no more circling the block or last-minute stress.</p>

          <h4>3.💰 Compare Prices & Features:</h4>
          <p className='text-xl ml-6'>Get a clear look at parking rates and features.So you can choose what fits your needs and budget.</p>

          <h4>4.📱 Pay Securely from Your Phone:</h4>
          <p className='text-xl ml-6'>Enjoy seamless, secure checkout with multiple payment options—right from your phone or computer. No cash, no paper tickets, no worries.</p>

           <h4>5.🔒 Park with Confidence:</h4>
           <p className='text-xl ml-6'>All our listings are vetted for safety and reliability, giving you peace of mind wherever you park.</p> 
            
            <h4>6.🌎 Save Time, Fuel & the Environment:</h4>
            <p className='text-xl ml-6'>Cut down on time spent searching for parking and reduce your carbon footprint. Smart parking is greener parking.</p>
            </div>
    </div>
    <Footer/>
    </>
  )
}
