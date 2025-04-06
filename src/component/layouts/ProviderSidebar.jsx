import React from 'react'
import { ProviderNavbar } from './ProviderNavbar'
import { Outlet } from 'react-router-dom'

export const ProviderSidebar = ({setSearchActiveBooking}) => {
  return (
   <>
   <ProviderNavbar setSearchActiveBooking={setSearchActiveBooking}/>
   
  <main class='app-main'>
    <Outlet></Outlet>

  </main>

   </>
  )
}
