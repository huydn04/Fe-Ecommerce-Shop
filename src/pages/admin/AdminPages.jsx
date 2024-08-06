// import React from "react";

// import { IoMdArrowUp } from "react-icons/io";
import SidebarAdminPages from "../../components/admin/sidebar/SidebarAdmin";
import { Outlet } from "react-router-dom";
const AdminPages = () => {
  return (
    <div className=" h-full   ">
      <div className=" flex  h-full  ">
        <div className="">
          {/* Side Bar */}
          <SidebarAdminPages />
        </div>
        <div className="ml-64 w-full">
        <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminPages;
