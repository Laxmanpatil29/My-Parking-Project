import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { UserNavbar } from './UserNavbar'


export const UserSidebar = ({setSearchQuery}) => {
  return (
    <>
    <UserNavbar  setSearchQuery={setSearchQuery} ></UserNavbar>
  <main className='app-main pt-16 '>
    <Outlet></Outlet>
  </main>
    </>
  )
}
