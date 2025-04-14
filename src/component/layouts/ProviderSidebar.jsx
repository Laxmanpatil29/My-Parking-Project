import React from 'react'
import { ProviderNavbar } from './ProviderNavbar'
import { Outlet } from 'react-router-dom'

export const ProviderSidebar = () => {
  return (
   <>
   <ProviderNavbar/>
   
  <main class='app-main pt-16'>
    <Outlet></Outlet>
  </main>

   </>
  )
}
