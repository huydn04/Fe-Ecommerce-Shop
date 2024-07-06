// import React from "react";
import React, { useState } from "react";
import { Menu, Table } from "react-daisyui";
import { CiHeart } from "react-icons/ci";
import { IoSettingsOutline } from "react-icons/io5";
import {
  MdHistory,
  MdOutlineDashboard,
  MdOutlineShoppingBag,
} from "react-icons/md";
import { SlLogout } from "react-icons/sl";
import { Link } from "react-router-dom";
import { Avatar } from "../../assets";

import { IoMdArrowForward } from "react-icons/io";
const SettingUser = () => {
  const [active, setActive] = useState("Bảng Điều Khiển");
  const UsersPage = [
    {
      name: "Bảng Điều Khiển",
      icon: MdOutlineDashboard,
      link: "/setting",
    },
    { name: "Lịch sử đặt hàng", icon: MdHistory },
    { name: "Danh sách yêu thích", icon: CiHeart },
    { name: "Giỏ hàng", icon: MdOutlineShoppingBag },
    { name: "Settings", icon: IoSettingsOutline },
    { name: "Đăng xuất", icon: SlLogout },
  ];

  return (
    
    <div className="flex justify-center pt-10">


        {/* Sidebar */}
        <div className="w-[300px] h-[400px]  ml-2 border border-solid border-gray-300 rounded">
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


      
      
      {/* navigation
      <div className="mr-7 w-[300px] border-solid border-gray-400">
        <div className="border-solid border-gray-400 border w-full mr-20 flex flex-col justify-evenly ">
          <div className="border-solid border-gray-400 border-b pl-4 pb-3 pt-3">
            <label className="mb-3 ml-4 mt-3 text-2xl">Đường Dẫn</label>
          </div>

          <div className="h-16 flex items-center pl-4 text-lg text-gray-500 hover:bg-gray-200 hover:text-black hover:border-l-4 hover:border-solid hover:border-[#00B207]"><img className="mr-2" src="src\assets\img\nav_1.png" alt="" /> <a href="">Trang Chủ</a></div>
          <div className="h-16 flex items-center pl-4 text-lg text-gray-500 hover:bg-gray-200 hover:text-black hover:border-l-4 hover:border-solid hover:border-[#00B207]"><img className="mr-2" src="src\assets\img\nav_2.png" alt="" /> <a href="">Lịch Sử Đặt Hàng</a></div>
          <div className="h-16 flex items-center pl-4 text-lg text-gray-500 hover:bg-gray-200 hover:text-black hover:border-l-4 hover:border-solid hover:border-[#00B207]"><img className="mr-2" src="src\assets\img\nav_3.png" alt="" /> <a href="">Danh Sách Ước</a></div>
          <div className="h-16 flex items-center pl-4 text-lg text-gray-500 hover:bg-gray-200 hover:text-black hover:border-l-4 hover:border-solid hover:border-[#00B207]"><img className="mr-2" src="src\assets\img\nav_4.png" alt="" /> <a href="">Giỏ Hàng</a></div>
          <div className="h-16 flex items-center pl-4 text-lg text-gray-500 hover:bg-gray-200 hover:text-black hover:border-l-4 hover:border-solid hover:border-[#00B207]"><img className="mr-2" src="src\assets\img\nav_5.png" alt="" /> <a href="">Cài Đặt</a></div>
          <div className="h-16 flex items-center pl-4 text-lg text-gray-500 hover:bg-gray-200 hover:text-black hover:border-l-4 hover:border-solid hover:border-[#00B207]"><img className="mr-2" src="src\assets\img\nav_6.png" alt="" /> <a href="">Đăng Xuất</a></div>
        </div>
      </div>
      end nav */}

      {/* start setting */}
      <div className=" w-[1300px]" >

      {/* 1st box */} 
      <div className="border-solid border-gray-400 border w-full flex flex-row justify-between	">
 
        
        <div className="border-solid mt-2 border-red-300 w-full ">
          
          <div className="border-solid border-gray-400 border-b pb-2 pl-4 pt-2">
            <label className="text-2xl font-bold ">Cài Đặt Tài Khoản</label>
            </div>
           
          
          <div className="mt-6">
            <form action="" method="post">
            <div className="ml-4">
            <label>Tên</label> 
            <br/>
            <input className="mt-1 mb-6 border-solid border rounded w-96 h-9 pl-2 focus:outline-none focus:border-[#00B207]" type="text"  />
            </div>

            <div className="ml-4">     
            <label className="">Họ</label> 
            <br/>
            <input className="mt-1 mb-6 border-solid border rounded w-96 h-9 pl-2 focus:outline-none focus:border-[#00B207]" type="text"   />
            </div>

            <div className="ml-4">
            <label>Email</label> 
            <br/>
            <input className="mt-1 mb-6 border-solid border rounded w-96 h-9 pl-2 focus:outline-none focus:border-[#00B207]" type="text" />
            </div>

            <div className="ml-4">
            <label>Số Điện Thoại</label> 
            <br/>
            <input className="mt-1 mb-6 border-solid border rounded w-96 h-9 pl-2 focus:outline-none focus:border-[#00B207]" type="text"  />
            </div>

            <input className=" w-40 h-10 rounded-3xl text-white ml-4 mt-6 mb-6 bg-[#00B207] cursor-pointer" value="Lưu Thay Đổi" type="submit"/>
            </form>
          </div>
          
        </div>
        <div className="mt-14 w-full border-t border-solid border-gray-400 flex flex-col justify-center items-center">
            <img className="w-60" src="https://cutitoutvinyl.ca/wp-content/uploads/2022/10/Cut-it-Out-Vinyl-7.png" alt="" />
            <button  className=" w-40 h-10 rounded-3xl border-2 font-bold border-solid boder-[#00B207] text-[#00B207] ml-4 mt-3 " type="submit">Chọn Ảnh</button>
           
          </div>
        </div>
        {/* end 1st */}


        {/* 2nd box */}


        <div className="border-solid border-gray-400 mt-7 border w-full">
 
        
        <div className="border-solid mt-2 ">
          
          <div className="border-solid border-gray-400 border-b pb-2 pl-4 pt-2">
            <label className="text-2xl font-bold">Địa Chỉ Người Nhận</label>
            </div>
           
          
            <div className="mt-6">
            <form action="" method="post">

            {/* 1st location */}
            <div className="flex flex-row w-full ">
            <div className="ml-4">
            <label>Tên</label> 
            <br/>
            <input className="mt-1 mr-2 mb-7 border-solid border rounded w-[285px] h-9 pl-2 focus:outline-none focus:border-[#00B207]" type="text"  />
            </div>


            <div className="ml-4 ">     
            <label className="">Họ</label> 
            <br/>
            <input className="mt-1 mr-2 mb-7 border-solid border rounded w-[285px] h-9 pl-2 focus:outline-none focus:border-[#00B207]" type="text"   />
            </div>

            <div className="ml-4  ">     
            <label className="">Công Ty</label> 
            <br/>
            <input className=" mt-1 mr-2 mb-7 border-solid border rounded w-[285px] h-9 pl-2 focus:outline-none focus:border-[#00B207]" type="text"   />
            </div>

            </div>

            {/* 2nd location */}
            <div className="ml-4 w-96">
            <label>Địa Chỉ</label> 
            <br/>
            <input className=" mt-1 mb-7 border-solid border rounded w-[900px] h-9 pl-2 focus:outline-none focus:border-[#00B207]" type="text" />
            </div>

            {/* 3rd location */}
            <div className="flex flex-row w-full ">
            <div className="ml-4">
            <label>Quốc Tịch / Region</label> 
            <br/>
            <select className="mt-1 mr-2 mb-7 border-solid border rounded w-[285px] h-9 pl-2 focus:outline-none focus:border-[#00B207]">
                <option value="Việt Nam">Việt Nam</option>
                <option value="United States">United States</option>
                <option value="Korea">Korea</option>
                <option value="Japan">Japan</option>
              </select>
            </div>


            <div className="ml-4 ">     
            <label className="">Tỉnh</label> 
            <br/>
            <select className="mt-1 mr-2 mb-7 border-solid border rounded w-[285px] h-9 pl-2 focus:outline-none focus:border-[#00B207]">
                <option value="Đồng Nai">Đồng Nai</option>
                <option value="Hồ Chí Minh">Hồ Chí Minh</option>
                <option value="Hà Nội">Hà Nội</option>
                <option value="Nam Định">Nam Định</option>
              </select>
            </div>

            <div className="ml-4  ">     
            <label className="">Zip Code</label> 
            <br/>
            <input className=" mt-1 mr-2 mb-7 border-solid border rounded w-[285px] h-9 pl-2 focus:outline-none focus:border-[#00B207]" type="text"   />
            </div>

            </div>

            {/* 4th location */}
            <div className="flex flex-row w-full ">

            <div className="ml-4">
            <label>Email</label> 
            <br/>
            <input className="mt-1 mb-7 mr-7 border-solid border rounded w-[430px] h-9 pl-2 focus:outline-none focus:border-[#00B207]" type="text" />
            </div>

            <div className="ml-4">
            <label>Số Điện Thoại</label> 
            <br/>
            <input className="mt-1 mb-7 border-solid border rounded w-[430px] h-9 pl-2 focus:outline-none focus:border-[#00B207]" type="text"  />
            </div>
            </div>

            <input className=" w-40 h-10 rounded-3xl text-white ml-4 mt-6 mb-6 bg-[#00B207] cursor-pointer" value="Lưu Thay Đổi" type="submit"/>
            </form>
          </div>
          
        </div>

        </div>
        {/* 2nd box end */}

        {/* 3rd box */}
        <div className="mt-7 border-solid border-gray-400 border w-full flex flex-row justify-between	mb-20">
 
        
        <div className="border-solid mt-2 border-red-300 w-full ">
          
          <div className="border-solid border-gray-400 border-b pb-2 pl-4 pt-2 ">
            <label className="text-2xl font-bold">Thay Đổi Mật Khẩu</label>
            </div>
           
          
          <div className="mt-6">
            <form action="" method="post">

            <div className="ml-4">
            <label>Mật Khẩu Hiện Tại</label> 
            <br/>
            <input className="mt-1 mb-6 border-solid border rounded w-[900px] h-9 pl-2 focus:outline-none focus:border-[#00B207]" type="password"  />
            </div>


            <div className="flex flex-row w-full ">

            <div className="ml-4">
            <label>Mật Khẩu Mới</label> 
            <br/>
            <input className="mt-1 mb-7 mr-10 border-solid border rounded w-[420px] h-9 pl-2 focus:outline-none focus:border-[#00B207]" type="password" />
            </div>

            <div className="ml-4">
            <label>Xác Nhận Mật khẩu</label> 
            <br/>
            <input className="mt-1 mb-7 border-solid border rounded w-[420px] h-9 pl-2 focus:outline-none focus:border-[#00B207]" type="password"  />
            </div>
            </div>


            <input className=" w-40 h-10 rounded-3xl text-white ml-4 mt-6 mb-6 bg-[#00B207] cursor-pointer" value="Đổi Mật Khẩu" type="submit"/>
            </form>
          </div>
          
        </div>

        </div>


        </div>
     
      </div>
         {/* start setting */}
      <div className=" w-[801px] ml-4 border border-solid border-gray-300 rounded-md	 " >

{/* 1st box */} 
<div className="border-solid border-gray-300 border w-full flex flex-row justify-between	">

  
  <div className="border-solid mt-2 border-red-300 w-full ">
    
    <div className="border-solid border-gray-400 border-b pb-2 pl-4 pt-2">
      <label className="text-2xl font-bold ">Cài Đặt Tài Khoản</label>
      </div>
     
    
    <div className="mt-6">
      <form action="" method="post">
      <div className="ml-4">
      <label>Tên</label> 
      <br/>
      <input className="mt-1 mb-6 border-solid border rounded w-96 h-9 pl-2 focus:outline-none focus:border-[#00B207]" type="text"  />
      </div>

      <div className="ml-4">     
      <label className="">Họ</label> 
      <br/>
      <input className="mt-1 mb-6 border-solid border rounded w-96 h-9 pl-2 focus:outline-none focus:border-[#00B207]" type="text"   />
      </div>

      <div className="ml-4">
      <label>Email</label> 
      <br/>
      <input className="mt-1 mb-6 border-solid border rounded w-96 h-9 pl-2 focus:outline-none focus:border-[#00B207]" type="text" />
      </div>

      <div className="ml-4">
      <label>Số Điện Thoại</label> 
      <br/>
      <input className="mt-1 mb-6 border-solid border rounded w-96 h-9 pl-2 focus:outline-none focus:border-[#00B207]" type="text"  />
      </div>

      <input className=" w-40 h-10 rounded-3xl text-white ml-4 mt-6 mb-6 bg-[#00B207] cursor-pointer" value="Lưu Thay Đổi" type="submit"/>
      </form>
    </div>
    
  </div>
  <div className="mt-14 w-full border-t border-solid border-gray-400 flex flex-col justify-center items-center">
      <img className="w-60" src="https://cutitoutvinyl.ca/wp-content/uploads/2022/10/Cut-it-Out-Vinyl-7.png" alt="" />
      <button  className=" w-40 h-10 rounded-3xl border-2 font-bold border-solid boder-[#00B207] text-[#00B207] ml-4 mt-3 " type="submit">Chọn Ảnh</button>
     
    </div>
  </div>
  {/* end 1st */}


  {/* 2nd box */}


  <div className="border-solid border-gray-400 mt-7 border w-full">

  
  <div className="border-solid mt-2 ">
    
    <div className="border-solid border-gray-400 border-b pb-2 pl-4 pt-2">
      <label className="text-2xl font-bold">Địa Chỉ Người Nhận</label>
      </div>
     
    
      <div className="mt-6">
      <form action="" method="post">

      {/* 1st location */}
      <div className="flex flex-row w-full ">
      <div className="ml-4">
      <label>Tên</label> 
      <br/>
      <input className="mt-1 mr-2 mb-7 border-solid border rounded w-[236px] h-9 pl-2 focus:outline-none focus:border-[#00B207]" type="text"  />
      </div>


      <div className="ml-4 ">     
      <label className="">Họ</label> 
      <br/>
      <input className="mt-1 mr-2 mb-7 border-solid border rounded w-[236px] h-9 pl-2 focus:outline-none focus:border-[#00B207]" type="text"   />
      </div>

      <div className="ml-4  ">     
      <label className="">Công Ty</label> 
      <br/>
      <input className="w-full mt-1 mr-2 mb-7 border-solid border rounded w-[236px] h-9 pl-2 focus:outline-none focus:border-[#00B207]" type="text"   />
      </div>

      </div>

      {/* 2nd location */}
      <div className="ml-4 w-96">
      <label>Địa Chỉ</label> 
      <br/>
      <input className=" mt-1 mb-7 border-solid border rounded w-[760px] h-9 pl-2 focus:outline-none focus:border-[#00B207]" type="text" />
      </div>

      {/* 3rd location */}
      <div className="flex flex-row w-full ">
      <div className="ml-4">
      <label>Quốc Tịch / Region</label> 
      <br/>
      <select className="mt-1 mr-2 mb-7 border-solid border rounded w-[236px] h-9 pl-2 focus:outline-none focus:border-[#00B207]">
          <option value="Việt Nam">Việt Nam</option>
          <option value="United States">United States</option>
          <option value="Korea">Korea</option>
          <option value="Japan">Japan</option>
        </select>
      </div>


      <div className="ml-4 ">     
      <label className="">Tỉnh</label> 
      <br/>
      <select className="mt-1 mr-2 mb-7 border-solid border rounded w-[236px] h-9 pl-2 focus:outline-none focus:border-[#00B207]">
          <option value="Đồng Nai">Đồng Nai</option>
          <option value="Hồ Chí Minh">Hồ Chí Minh</option>
          <option value="Hà Nội">Hà Nội</option>
          <option value="Nam Định">Nam Định</option>
        </select>
      </div>

      <div className="ml-4  ">     
      <label className="">Zip Code</label> 
      <br/>
      <input className="w-full mt-1 mr-2 mb-7 border-solid border rounded w-[236px] h-9 pl-2 focus:outline-none focus:border-[#00B207]" type="text"   />
      </div>

      </div>

      {/* 4th location */}
      <div className="flex flex-row w-full ">

      <div className="ml-4">
      <label>Email</label> 
      <br/>
      <input className="mt-1 mb-7 mr-7 border-solid border rounded w-[360px] h-9 pl-2 focus:outline-none focus:border-[#00B207]" type="text" />
      </div>

      <div className="ml-4">
      <label>Số Điện Thoại</label> 
      <br/>
      <input className="mt-1 mb-7 border-solid border rounded w-[360px] h-9 pl-2 focus:outline-none focus:border-[#00B207]" type="text"  />
      </div>
      </div>

      <input className=" w-40 h-10 rounded-3xl text-white ml-4 mt-6 mb-6 bg-[#00B207] cursor-pointer" value="Lưu Thay Đổi" type="submit"/>
      </form>
    </div>
    
  </div>

  </div>
  {/* 2nd box end */}

  {/* 3rd box */}
  <div className="mt-7 border-solid border-gray-400 border w-full flex flex-row justify-between	mb-20">

  
  <div className="border-solid mt-2 border-red-300 w-full ">
    
    <div className="border-solid border-gray-400 border-b pb-2 pl-4 pt-2 ">
      <label className="text-2xl font-bold">Thay Đổi Mật Khẩu</label>
      </div>
     
    
    <div className="mt-6">
      <form action="" method="post">

      <div className="ml-4">
      <label>Mật Khẩu Hiện Tại</label> 
      <br/>
      <input className="mt-1 mb-6 border-solid border rounded w-[760px] h-9 pl-2 focus:outline-none focus:border-[#00B207]" type="password"  />
      </div>


      <div className="flex flex-row w-full ">

      <div className="ml-4">
      <label>Mật Khẩu Mới</label> 
      <br/>
      <input className="mt-1 mb-7 mr-10 border-solid border rounded w-[350px] h-9 pl-2 focus:outline-none focus:border-[#00B207]" type="password" />
      </div>

      <div className="ml-4">
      <label>Xác Nhận Mật khẩu</label> 
      <br/>
      <input className="mt-1 mb-7 border-solid border rounded w-[350px] h-9 pl-2 focus:outline-none focus:border-[#00B207]" type="password"  />
      </div>
      </div>


      <input className=" w-40 h-10 rounded-3xl text-white ml-4 mt-6 mb-6 bg-[#00B207] cursor-pointer" value="Đổi Mật Khẩu" type="submit"/>
      </form>
    </div>
    
  </div>

  </div>


  </div>
     
     </div>
     
  );
};

export default SettingUser;