import React, { useState } from "react";
import { Menu } from "react-daisyui";
import { BiCommentDetail } from "react-icons/bi";
import { FaChartBar, FaUserCog, FaUserEdit } from "react-icons/fa";
import { FaBoxesPacking } from "react-icons/fa6";
import { IoHomeOutline } from "react-icons/io5";
import { LuUserCog } from "react-icons/lu";
import { MdSystemUpdateAlt } from "react-icons/md";
import { RiBillLine } from "react-icons/ri";
import { VscListFlat } from "react-icons/vsc";

import { Link } from "react-router-dom";


const AdminPages = () => {
  const [active, setActive] = useState("Bảng Điều Khiển");
  const UsersPage = [
    {
      name: "Trang chủ",
      icon: IoHomeOutline,
      link: "/setting",
    },
    { name: "Tất cả sản phẩm", icon: VscListFlat
    },
    { name: "Quản lí đơn hàng", icon: RiBillLine },
    { name: "Thống kê doanh thu", icon: FaChartBar  },
    { name: "Cập nhật sản phẩm", icon:  MdSystemUpdateAlt },
    { name: " Quản lí người dùng", icon: LuUserCog  },
    { name: " Quản lí người dùng", icon:  FaUserEdit},
    { name: "Nhập - Xuất Hàng", icon: FaBoxesPacking  },
    { name: " Đánh giá", icon: BiCommentDetail  },
  ];

  return (

    
   <div className="bg-gray-200">
     <div className="w-[250px]  bg-white  h-screen ">
      <p className="p-5 text-primary font-bold text-3xl">FPT TEAM</p>
      <p className=" pt-10 ml-9 font-bold text-2xl">Navigation</p>
      <Menu className="flex-grow mt-3 ">
        {UsersPage.map((item, index) => {
          const Icon = item.icon;
          return (
            <Menu.Item key={index} className="relative ">
              <Link
                to={item.link}
                className={`btn flex  items-center justify-start rounded-none shadow-white hover:bg-gray-100 hover:text-primary hover:border-l-4 hover:border-y-0 hover:border-r-0 hover:border-solid hover:border-[#00B207] hover:font-bold  ${
                  active === item.name
                    ? "  font-bold text-primary hover:border-none bg-gray-200"
                    : "bg-transparent font-light "
                } relative pl-4`}
                onClick={() => setActive(item.name)}
              >
                <div
                  className={`${
                    active === item.name
                      ? "absolute left-0 top-0 h-full w-1 bg-primary"
                      : ""
                  }`}
                />
                <Icon className={"ml-2 mr-2 h-5 w-5"} />
                {item.name}
              </Link>
            </Menu.Item>
          );
        })}
      </Menu>
    </div>
   </div>
  );
};

export default AdminPages;
