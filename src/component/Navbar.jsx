import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "../assets/Navbar.css"

export const Navbar = () => {
  return (
   <nav class='nav1' >

     <Link to='/'> <img id="logo" src="src/assets/LOGO.png" alt="" /></Link> 
            <div className="item">

          <Link  class="component" to="/">Home</Link>
          <Link class="component"  to="/about">About</Link>
          <Link class="component" to="/services">Services</Link>
          <Link class="component" to="/contact">Contact</Link>


          <form class="search">
            <input  id="s-text" class='input' type="text" placeholder='Search' />
            <button id="s-btn">search</button>
          </form>

          <Link id="login" class="link" to="/login"><i style={{marginRight:'5px'}} class="fa-solid fa-user"></i>Login </Link>

          {/* {ispageloading===true&& <WheelLoader/>} */}
            </div>
   </nav>
    

    
  )
}
