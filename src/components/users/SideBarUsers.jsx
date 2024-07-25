import  { useState } from "react";
import { Menu } from "react-daisyui";
import { CiHeart } from "react-icons/ci";
import { IoSettingsOutline } from "react-icons/io5";
import {
  MdHistory,
  MdOutlineDashboard,
  MdOutlineShoppingBag,
} from "react-icons/md";
import { SlLogout } from "react-icons/sl";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [active, setActive] = useState("Bảng Điều Khiển");
  const UsersPage = [
   
    {
      name: "Bảng Điều Khiển",
      icon: MdOutlineDashboard,
      link: "/user",
    },
    { name: "Lịch sử đặt hàng",
       icon: MdHistory,
       link: "/order-history"
    },
    { 
      name: "Danh sách yêu thích",
      icon: CiHeart,
      link: "/wish-list"
    },
    { 
      name: "Giỏ hàng",
      icon: MdOutlineShoppingBag,
      link: "/cart"
    },
    { 
      name: "Settings",
      icon: IoSettingsOutline,
      link: "/setting" 
    },
    { name: "Đăng xuất", icon: SlLogout },
  ];

  return (
    <div className="w-[300px] h-[400px] ml-2 border border-solid rounded-2xl">
      <p className=" pt-10 ml-9 font-bold text-2xl">Navigation</p>
      <Menu className="flex-grow mt-3 ">
        {UsersPage.map((item, index) => {
          const Icon = item.icon;
          return (
            <Menu.Item key={index} className="relative text-gray-500 ">
              <Link
                to={item.link}
                className={`btn flex  items-center justify-start font-semibold  rounded-none shadow-white hover:bg-gray-100 hover:text-primary hover:border-l-4 hover:border-y-0 hover:border-r-0 hover:border-solid hover:border-[#00B207] hover:font-bold  ${
                  active === item.name
                    ? "font-bold text-primary hover:border-none bg-gray-200"
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
  );
};

export default Sidebar;
