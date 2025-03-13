import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "../assets/Navbar.css"

export const Navbar = () => {
  return (
   <nav class='nav1' >
       <img id="logo" src="src/assets/images.jpeg" alt="" />
            <div className="item">

          <Link  class="component" to="/home">Home</Link>
          <Link class="component"  to="/about">About</Link>
          <Link class="component" to="/services">Services</Link>
          <Link class="component" to="/contact">Contact</Link>


          <form class="search">
            <input  id="s-text" type="text" placeholder='Search' />
            <button id="s-btn">search</button>
          </form>

          <Link id="login" class="link" to="/login"><i class="fa-solid fa-user"></i> Log in/Sign in </Link>

          {/* {ispageloading===true&& <WheelLoader/>} */}
            </div>
   </nav>
    

    
  )
}
