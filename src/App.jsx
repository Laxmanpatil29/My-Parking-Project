import { Route, Routes, useLocation } from 'react-router-dom'
import "./assets/adminlte.css"
import "./assets/adminlte.min.css"
import { UserSidebar } from './component/layouts/UserSidebar'
import { UserProfile } from './component/user/UserProfile'
// import './App.css'
import axios from 'axios'
import { AdminProfile } from './component/admin/AdminProfile'
import { AdminSidebar } from './component/layouts/AdminSidebar'
import { ProviderSidebar } from './component/layouts/ProviderSidebar'
import Login from './component/Login'
import { ProviderProfile } from './component/provider/ProviderProfile'

import { CommonUi } from './component/common/CommonUi'

import PrivateRoutes from './component/hooks/PrivateRoutes'
import { CommonUiHome } from './component/CommonUiHome'
import { CommonUiContact } from './component/CommonUiContact'
import { CommonUiAbout } from './component/CommonUiAbout'
import { CommonUiServices } from './component/CommonUiServices'
import { Navbar } from './component/Navbar'
import { MyBooking } from './component/user/MyBooking'
import { ParkingLots } from './component/user/ParkingLots'
import { ParkingDetails } from './component/user/ParkingDetails'
import {ParkingObject} from './component/provider/ParkingObject'



function App() {

  <body class="layout-fixed sidebar-expand-lg bg-body-tertiary">
      <div className='app-wrapper'></div>
    </body>
axios.defaults.baseURL="http://localhost:3000"

const location = useLocation(); // Get current location

const showNavbar = ['/', '/about', '/contact', '/services', '/login',].includes(location.pathname); // Check if Navbar should be shown

  return (
    <div>

{showNavbar && <Navbar />} {/* Conditionally render Navbar */}
  <Routes>
        <Route path="/" element={<CommonUi/>} />
        <Route path='/login' element={<Login/>}></Route> 
        <Route path='/' element={<CommonUiHome/>}></Route> 
        <Route path='/about' element={<CommonUiAbout/>}></Route> 
        <Route path='/services' element={<CommonUiServices/>}></Route> 
        <Route path='/contact' element={<CommonUiContact/>}></Route> 
        

    <Route element={<PrivateRoutes />}>
        <Route path="/user" element={<UserSidebar />}>
          <Route path="profile" element={<UserProfile />} />
          {/* <Route path="" element={<Ui />} /> */}
          <Route path="mybooking" element={<MyBooking/>}/>
          <Route path="" element={<CommonUiHome/>}/>
          <Route path='about' element={<CommonUiAbout/>}/>
          <Route path='services' element={<CommonUiServices/>}/>
          <Route path='contact' element={<CommonUiContact/>}/>
          <Route path='parkinglots' element={<ParkingLots/>}/>
          <Route path='parkinglots/parkingdetails/:id' element={<ParkingDetails/>}/>
          
       
          {/* <Route path="book" element={<Booking />} /> */}
        </Route>
      </Route>

    <Route path='/admin' element={<AdminSidebar/>}>
      <Route path='profile' element={<AdminProfile/>}></Route>
      <Route path='login' element={<Login/>}></Route>
    </Route>

    <Route path='/provider' element={<ProviderSidebar/>}>
      <Route path='profile' element={<ProviderProfile/>}></Route>
      <Route path='login' element={<Login/>}></Route>
      <Route path='addparkingdetails' element={<ParkingObject/>}/>
    </Route>

  

  </Routes>
  

    {/*  </div>
     </body> */}
    </div>
  )
}

export default App
