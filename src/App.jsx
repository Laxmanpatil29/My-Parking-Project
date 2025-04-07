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
   
import { CommonUiAbout } from './component/CommonUiAbout'
import { CommonUiContact } from './component/CommonUiContact'
import { CommonUiHome } from './component/CommonUiHome'
import { CommonUiServices } from './component/CommonUiServices'
import PrivateRoutes from './component/hooks/PrivateRoutes'
import { Navbar } from './component/Navbar'
import { MyBooking } from './component/user/MyBooking'
import { ParkingDetails } from './component/user/ParkingDetails'
import { ParkingLots } from './component/user/ParkingLots'
import { useState } from 'react'
import { Booking } from './component/common/Booking'
import { ForgotPassword } from './component/common/ForgotPassword'
import { ResetPassword } from './component/common/ResetPassword'
import { ActiveBooking } from './component/provider/ActiveBooking'
import { ListParkingArea } from './component/provider/ListParkingArea' 
import { AddYourArea } from './component/user/AddYourArea'




function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [SearchActiveBooking, setSearchActiveBooking] = useState("");

  <body class="layout-fixed sidebar-expand-lg bg-body-tertiary">
      <div className='app-wrapper'></div>
    </body>
axios.defaults.baseURL="http://localhost:3000"

const location = useLocation(); // Get current location

const showNavbar = ['/', '/about', '/contact', '/services', '/login','/addparking',].includes(location.pathname); // Check if Navbar should be shown

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
        <Route path='/addparking' element={<AddYourArea/>}></Route> 

        

    <Route element={<PrivateRoutes  availableroles={["user"]}/>}>
        <Route path="/user" element={<UserSidebar  setSearchQuery={setSearchQuery}  />}>
          <Route path="profile" element={<UserProfile />} />
          {/* <Route path="" element={<Ui />} /> */}
          <Route path="mybooking" element={<MyBooking/>}/>
          <Route path="" element={<CommonUiHome/>}/>
          <Route path='about' element={<CommonUiAbout/>}/>
          <Route path='services' element={<CommonUiServices/>}/>
          <Route path='contact' element={<CommonUiContact/>}/>
          <Route path='parkinglots' element={<ParkingLots searchQuery={searchQuery}/>}/>
          <Route path='parkinglots/parkingdetails/:id' element={<ParkingDetails/>}/>
          <Route path='parkinglots/parkingdetails/:id/book' element={<Booking/>}/>
        </Route>
      </Route>

    <Route element={<PrivateRoutes  availableroles={["admin"]}/>}>
    <Route path='/admin' element={<AdminSidebar/>}>
      <Route path='profile' element={<AdminProfile/>}></Route>
      <Route path='login' element={<Login/>}></Route>
    </Route>
    </Route>
    
    
    <Route element={<PrivateRoutes  availableroles={["provider"]}/>}>
    <Route path='/provider' element={<ProviderSidebar setSearchActiveBooking={setSearchActiveBooking}/>}>
    <Route path="" element={<CommonUiHome/>}/>
    <Route path='contact' element={<CommonUiContact/>}/>
      <Route path='profile' element={<ProviderProfile/>}></Route>
      <Route path='login' element={<Login/>}></Route>
      <Route path='listparkingdetails' element={<ListParkingArea/>}/>
      <Route path='activebooking' element={<ActiveBooking SearchActiveBooking={SearchActiveBooking}/>}/>
    </Route>
    </Route>
    
    

    <Route path='/resetpassword/:token' element={<ResetPassword/>}/>
    <Route path='/forgetpassword' element={<ForgotPassword/>}/>
  

  </Routes>
  

    {/*  </div>
     </body> */}
    </div>
  )
}

export default App
