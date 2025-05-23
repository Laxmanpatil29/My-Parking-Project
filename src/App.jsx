import { Route, Routes, useLocation } from 'react-router-dom'
import "./assets/adminlte.css"
import "./assets/adminlte.min.css"
import { UserSidebar } from './component/layouts/UserSidebar'
import { UserProfile } from './component/user/UserProfile'
import './App.css'
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
import { IncomingInquiry } from './component/provider/IncomingInquiry'
import ErrorPage from './component/common/ErrorPage'
import { AdminDashboard } from './component/admin/AdminDashboard'
import { AllBookings } from './component/admin/AllBookings'
import { AllParkingSpots } from './component/admin/AllParkingSpots'
import { AllUsers } from './component/admin/AllUsers'
import { AllProviders } from './component/admin/AllProviders'
import { Allinquiry } from './component/admin/Allinquiry'
import { IncomingBooking } from './component/user/IncomingBooking'
import { ProviderDashboard } from './component/provider/ProviderDashboard'
import { UserHome } from './component/user/UserHome'




function App() {
 
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
       <Route path='/*' element={<ErrorPage/>}/>
        {/* <Route path="/" element={<CommonUi/>} /> */}
        <Route path='/login' element={<Login/>}></Route> 
        <Route path='/' element={<CommonUiHome/>}></Route> 
        <Route path='/about' element={<CommonUiAbout/>}></Route> 
        <Route path='/services' element={<CommonUiServices/>}></Route> 
        <Route path='/contact' element={<CommonUiContact/>}></Route> 

        

    <Route element={<PrivateRoutes  availableroles={["user"]}/>}>
        <Route path="/user" element={<UserSidebar/>}>
          <Route path="profile" element={<UserProfile />} />

        <Route path='addparking' element={<AddYourArea/>}></Route> 
          <Route path="mybooking" element={<MyBooking/>}/>
          <Route path="" element={<UserHome/>}/>
          <Route path='about' element={<CommonUiAbout/>}/>
          <Route path='services' element={<CommonUiServices/>}/>
          <Route path='contact' element={<CommonUiContact/>}/>
          <Route path='parkinglots' element={<ParkingLots/>}/>
          <Route path='incomingbooking' element={<IncomingBooking/>}/>
          <Route path='parkinglots/parkingdetails/:id' element={<ParkingDetails/>}/>
          <Route path='parkinglots/parkingdetails/:id/book' element={<Booking/>}/>
        </Route>
      </Route>

    <Route element={<PrivateRoutes  availableroles={["admin"]}/>}>
    <Route path='/admin' element={<AdminSidebar/>}>
       <Route path='profile' element={<AdminProfile/>}/>
       <Route path='inquiry' element={<Allinquiry/>}/>
      <Route path='' element={<AdminDashboard/>}/>
      <Route path='bookings' element={<AllBookings/>}/>
      <Route path='parkingspots' element={<AllParkingSpots/>}/>
      <Route path='users' element={<AllUsers/>}/>
      <Route path='providers' element={<AllProviders/>}></Route>
      
    </Route>
    </Route>
    
    
    <Route element={<PrivateRoutes  availableroles={["provider"]}/>}>
    <Route path='/provider' element={<ProviderSidebar/>}>
    <Route path='' element={<ProviderDashboard/>}/>
    <Route path='contact' element={<CommonUiContact/>}/>
      <Route path='profile' element={<ProviderProfile/>}></Route>
      <Route path='login' element={<Login/>}></Route>
      <Route path='listparkingdetails' element={<ListParkingArea/>}/>
      <Route path='activebooking' element={<ActiveBooking/>}/>
      <Route path='incominginquiry' element={<IncomingInquiry/>}/>
    </Route>
    </Route>
    
    

    <Route path='/resetpassword/:token' element={<ResetPassword/>}/>
    <Route path='/forgetpassword' element={<ForgotPassword/>}/>
  

  </Routes>
  

   
    </div>
  )
}

export default App
