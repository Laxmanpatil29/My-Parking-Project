import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { UserNavbar } from './UserNavbar'


export const UserSidebar = () => {

  
  

  // const toggleSidebar=()=>{
  //   console.log("toggleSidebar")
  //   setisSidebarOpen(!isSidebarOpen)
  // }
  return (
    <>

    
    <UserNavbar ></UserNavbar>
      {/* <aside 
          className='bg-[#2c4e64] w-52 flex flex-1'>
          <div
            data-overlayscrollbars-viewport="scrollbarHidden overflowXHidden overflowYScroll"
            tabIndex={-1}
            style={{
              marginRight: "-16px",
              marginBottom: "-16px",
              marginLeft: 0,
              top: "-8px",
              right: "auto",
              left: "-8px",
              width: "calc(100% + 16px)",
              padding: 8,
            }}>
            <nav className="mt-2"> 
              <ul
                className="nav sidebar-menu flex-column"
                data-lte-toggle="treeview"
                role="menu"
                data-accordion="false"
              >
                <li className="nav-item menu-open">
                  <Link to='profile' className="nav-link active">
                    <i className="nav-icon bi bi-speedometer" />
                    <p>
                      My Profile 
                      <i className="nav-arrow bi bi-chevron-right" />
                    </p>
                  </Link>

                  <ul className="nav nav-treeview">
                    <li className="nav-item">
                      <Link to='mybooking' className="nav-link active">
                        <i className="nav-icon bi bi-circle" />
                        <p>My Booking </p>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <a  className="nav-link">
                        <i className="nav-icon bi bi-circle" />
                        <p>Log Out</p>
                      </a>
                    </li>
                  
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
        </aside> */}
  

  <main className='app-main'>
    <Outlet></Outlet>

  </main>

    </>
  )
}
