import React from 'react'
import { Link } from 'react-router-dom'

export const ProviderNavbar = () => {
  return (
    <nav className="app-header navbar navbar-expand bg-body">

    <div className="container-fluid">

      <ul className="navbar-nav">
        <li className="nav-item">
          <a
            className="nav-link"
            data-lte-toggle="sidebar"
            href="#"
            role="button"
          >
            <i className="bi bi-list" />
          </a>
        </li>
        <li className="nav-item d-none d-md-block">
          <a href="#" className="nav-link">
            Home
          </a>
        </li>
        <li className="nav-item d-none d-md-block">
          <a href="#" className="nav-link">
            Contact
          </a>
        </li>

        <li className="nav-item d-none d-md-block">
          <a href="#" className="nav-link">
            About Us
          </a>
        </li>

        <li className="nav-item d-none d-md-block">
          <a href="#" className="nav-link">
            Services
          </a>
        </li>


      <li>
        
        <Link id="login" class="link" to="login"><i class="fa-solid fa-user"></i> Log in/Sign in </Link>

        </li>
       
        
      </ul>

      </div>
     
     </nav>
  )
}
