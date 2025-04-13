import React from 'react'
import { Link } from 'react-router-dom'
import "../assets/Navbar.css"

export const Navbar = () => {
  const handleClick=()=>{
    window.scrollTo(0,0)
  }
  return (
   <nav class='nav1' >  

     <Link to='/'> <img id="logo" src="src/assets/LOGO.png" alt="" /></Link> 
            <div className="item">

          <Link  class="component" to="/" onClick={handleClick}>Home</Link>
          <Link class="component"  to="/about" onClick={handleClick}>About</Link>
          <Link class="component" to="/services" onClick={handleClick}>Services</Link>
          <Link class="component" to="/contact" onClick={handleClick}>Contact Us</Link>


          {/* <form class="search">
            <input  id="s-text" class='input' type="text" pla ceholder='Search' />
            <button id="s-btn">search</button>
          </form> */}

          <Link id="login" class="link" to="/login"><i style={{marginRight:'5px'}} class="fa-solid fa-user"></i>Login </Link>

          {/* {ispageloading===true&& <WheelLoader/>} */}
            </div>
   </nav>
    

    
  )
}
