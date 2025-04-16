import React from 'react'
import { Navbar } from './Navbar'
import { Footer } from './Footer'

export const CommonUiAbout = () => {
  return (
    <>
    <div className='mt-[75px] text-center '>
      <h1 >About Us</h1>
      <h3>Welcome to "My Parking App"– your trusted partner for easy, reliable, and secure parking solutions.</h3>
        <div className='pl-5 mt-4 py-4 bg-[#F1EFEC]'>
          <h2 className='font-bold text-start'>We started with a simple idea:</h2>
             <div className='ml-10'>
              <p className='text-2xl'> 
                finding parking shouldn't be stressful. Whether you're heading to work, exploring the city, or catching a flight, <br />
                 we believe your journey should begin and end with peace of mind. That’s why we’ve built a platform that connects  <br />
                  with the best parking spots—fast, affordable, and hassle-free.</p>
             </div>
        </div> 

        <div className='pl-5  py-4 bg-[#F1EFEC]'>
          <h2 className='font-bold text-start'>What We Do:</h2>
          <p className='text-2xl'>
            At "My Parking App", we're here to take the hassle out of parking. Whether you're on a daily commute, heading to a <br />
             big event, or planning a weekend getaway, we’ve got your parking needs covered from start to finish.</p>
          <h3  className='text-start'>Here’s how we make parking easier for you:</h3>
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
            
            <div>
              <h2 className='font-bold text-start'>Our Mision</h2>
              <p className='text-2xl'>To make parking smart, seamless, and stress-free for everyone.</p>
            </div>

            <h3 className='text-3xl'>"We’re passionate about making everyday life a little smoother—and parking a lot easier."</h3>
            </div>



        </div>
    </div>
   <Footer/>
    </>
  )
} 
