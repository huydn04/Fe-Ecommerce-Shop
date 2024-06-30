import React from 'react'
import { SideBarAdmin } from '../../components/admin/sidebar/SideBarAdmin'
import { NavbarAdmin } from '../../components/admin/dashboard/navbar/NavbarAdmin'
import { Outlet } from 'react-router-dom'

export const AdminPages = () => {
  return (
    <div>
      <div className="">
        <SideBarAdmin/>
       
      </div>
      <div className="">
        <div className="">
          <NavbarAdmin/>
        </div>
        <div className="">
          <Outlet/>
        </div>
      </div>
    </div>
  )
}












