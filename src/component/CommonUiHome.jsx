import React from 'react'
import "../assets/home.css"
import { Footer } from './Footer'
import { Link } from 'react-router-dom'


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
		  <div>
			<Link  class='works' className='ml-[0%]  hover:no-underline no-underline border-2 bg-[#23adc0]  p-1 text-white font-bold ' to="https://www.youtube.com/@laxmanpatil9842">How It Works</Link>
		  </div>

          </div>
          </div>
        </section>
<Footer/>
  </div>
  </>



  )
}
