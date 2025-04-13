import React from 'react'
import { AdminNavbar } from './AdminNavbar'
import { Outlet } from 'react-router-dom'

export const AdminSidebar = () => {
  return (
   <>
   <AdminNavbar/>
   <main class='app-main'>
    <Outlet></Outlet>
   </main>
   </>
  )
}
