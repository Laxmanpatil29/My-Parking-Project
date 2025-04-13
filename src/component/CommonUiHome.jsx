import React from 'react'
import { Link } from 'react-router-dom'
import "../assets/home.css"
import { Footer } from './Footer'


export const CommonUiHome = () => {
  return (
  <>
<div class="main mt-0">
        <section class="content1" style={{backgroundImage:"url('src/assets/bg-img.jpg')", zIndex:'1',width:'100%'}}> {/*content 1 start here */}

          <div class="overlay">

          <div class="content1text" className=' text-center m-auto'>

        <h1 style={{color:'#FFFFFF'}}>
        "LET’S GOODBYE TO ALL THE PARKING PROBLEMS!"
        </h1>

        <h3 style={{color:'#fffffff7',fontSize:'30px'}}>
        "Book a spot in seconds and park stress-free."
        </h3>
      
        <h4 className=' text-slate-300'>
        "Save time and avoid the hassle <br /> 
        Secure your spot before you arrive."
        </h4> 
		  <div className='mt-6'>
			<Link  class='works' className='ml-[0%]  hover:no-underline no-underline bg-[#23adc0]  p-1 text-white font-bold rounded-lg px-2x ' to="https://www.youtube.com/@laxmanpatil9842">How It Works</Link>
		  </div>

          </div>
          </div>
        </section>

        <div className='py-20 text-center'>
          <h1 className='font-bold'>Why Choose Us</h1>
          <h2>Because your time and peace of mind matter.</h2>
          <h4> We make parking effortless, So you can park smarter, faster, and without the stress.</h4>

          <div className='mt-3 flex gap-4'>
              <div className='border-2  w-[25%] justify-center pt-3 bg-[#FDFAF6] p-6 rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-300'>
                <p className="border-2 border-black rounded-full px-6 py-3 bg-[#FDFAF6] flex items-center justify-center w-20 h-20  mx-auto shadow-sm text-3xl">
                  🚀
                </p>
                <h5>Easy Booking Process</h5>
                <p>Reserve your parking <br />
                  spot in just a few clicks, <br />
                   no more circling around!</p>
              </div>

              <div className='border-2  w-[25%] justify-center pt-3 bg-[#FDFAF6] p-6 rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-300'>
                <p className="border-2 border-black rounded-full px-6 py-3 bg-[#FDFAF6] flex items-center justify-center w-20 h-20 mx-auto shadow-sm text-3xl">
                ⏳
                </p>
                <h5>Advance Booking</h5>
                <p>Reserve your spot ahead<br />
                of time and skip the<br />
                last-minute parking rush. </p>
              </div>

              <div className='border-2  w-[25%] justify-center pt-3 bg-[#FDFAF6] p-6 rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-300'>
                <p className="border-2 border-black rounded-full px-6 py-3 bg-[#FDFAF6] flex items-center justify-center h-20 w-20 mx-auto shadow-sm text-3xl">
                📍
                </p>
                <h5>Real-Time Availability</h5>
                <p>See which spots are  <br />
                available right now  <br />
                 in your area. </p>
                  
              </div>

              <div className='border-2  w-[25%] justify-center pt-3 bg-[#FDFAF6] p-6 rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-300'>
                <p className="border-2 border-black rounded-full px-6 py-3 bg-[#FDFAF6] flex items-center justify-center h-20 w-20 mx-auto shadow-sm text-3xl">
                🛡️ 
                </p>
                <h5> Secure & Verified Locations
                </h5>
                <p>All parking spots are  <br />verified and monitored for <br />your peace of mind.</p>
              </div>

              <div className='border-2  w-[25%] justify-center pt-3 bg-[#FDFAF6] p-6 rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-300'>
                <p className="border-2 border-black rounded-full px-6 py-3 bg-[#FDFAF6] flex items-center justify-center h-20 w-20 mx-auto shadow-sm text-3xl">
                💰 
                </p>
                <h5>Affordable Pricing</h5>
                <p>Get competitive rates <br /> with no hidden fees.</p>
              </div>
          </div>

        </div>


        <div className='bg-[#F2EFE7]  w-[100%] flex gap-10 text-center pl-[15%] py-10' >
             <div>
              <p className='text-6xl'>📈</p>
              <h2>Our Mision</h2>
              <p className='font-serif text-xl'>“Our mission is to simplify and elevate the parking <br /> experience — transforming every space into an opportunity for <br />convenience, efficiency, and smarter urban living.”</p>
             </div>

             <div>
              <p className='text-6xl text-red-600'>🌐</p>
             <h2>Our Vision</h2>
             <p className='font-serif text-xl'>"To be the most trusted platform for modern parking <br />solutions — empowering people with seamless access to <br /> space, time, and movement."</p>
             </div>
        </div>

        <div className='bg-[#fffcf8] w-[100%] py-20 text-start pl-[15%] flex gap-[20%]'>
          <div>
          <h1>List Your Parking Space,Now !</h1>
          <p className='font-medium'>“Turn your unused parking spot into steady income. List with us today.”</p>
          </div>
          <div>
            <Link to='/addparking'>
            <button className='font-serif justify-center rounded-lg shadow-2xl px-2 py-2 mt-6 font-bold bg-[#1B56FD] text-white'>LET'S START</button>
            </Link>
          </div>


        </div>


<Footer/>
  </div>
  </>
  )
}
