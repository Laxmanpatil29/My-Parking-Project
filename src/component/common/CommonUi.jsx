
import React from 'react'
// import { Link } from 'react-router-dom'
import { Navbar } from '../Navbar'
import { Route, Router, Routes } from 'react-router-dom'
import { CommonUiHome } from '../CommonUiHome'
import Login from '../Login'
import { CommonUiContact } from '../COmmonUiContact'
import { CommonUiAbout } from '../CommonUiAbout'
import { CommonUiServices } from '../CommonUiServices'
import { Footer } from '../Footer'


export const CommonUi = () => {
  return (
    <>
    <Navbar/>   
      <Routes>
        <Route path='/login' element={<Login/>}></Route> 
        <Route path='/home' element={<CommonUiHome/>}></Route> 
        <Route path='/about' element={<CommonUiAbout/>}></Route> 
        <Route path='/services' element={<CommonUiServices/>}></Route> 
        <Route path='/contact' element={<CommonUiContact/>}></Route> 
      </Routes>
      <Footer/>
      
    </>
   
  )
}
