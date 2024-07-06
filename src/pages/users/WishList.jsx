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
const OrderHistory = () => {
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
        <div className="w-[300px] h-[400px]  ml-2 border border-solid border-gray-300 rounded mr-4">
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

        <div className=" w-[817px] ">

            <div className="pt-2 mb-4 w-full">
                <div className=" w-full text-3xl font-bold text-center">Danh Sách Ước</div>
            </div>
            {/* show product */}


            <div className="border-solid border-gray-400 border w-[1000px]">

                <Table>
                    
                    <Table.Head className="text-lg">
                        <span>SẢN PHẨM</span>
                        <span className="">GIÁ TIỀN</span>
                        <span/>
                        <span>TRẠNG THÁI</span>       
                        <span/>
                
                    </Table.Head>

                    <Table.Body>
                        <Table.Row>
                    <span><img className="w-26" src="src\assets\img\wishlist_img1.png" alt="" /></span>
                     
                    <span>
                        <div className="flex border text-[17px] ">
                            <p>230.000 VND</p>
                            <p className="line-through ml-2	 ">534.000VND</p>
                        </div>
                    </span>
                    <span>
                      <div className="w-24 flex ">
                        <label className="w-24 leading-[24px] h-7 bg-[#AFFFB2] mt-6 mb-6 text-[17px] text-center">Còn Hàng</label>
                      </div>
                    </span>
                    <span>
                        <div className="w-32 text-center pt-2 w-48 h-10 rounded-3xl text-white text-[17px] mt-6 mb-6 bg-[#00B207] cursor-pointer">
                            <a href="" className="w-full"> Thêm vào giỏ hàng</a>
                        </div>

                    </span>
                    <span >
                      <div className="flex items-center justify-center w-7 h-7 text-center border border-solid border-black rounded-full "><button>X</button></div>
                    </span>
                    </Table.Row>
                        </Table.Body>
                    </Table>

                {/* <table className="w-full ">
                        <tr className="w-full flex mt-4 ">
                            <th className="w-[460px] text-start ml-7">SẢN PHẨM</th>
                            <th className="w-[260px] text-start ">GIÁ TIỀN</th>
                            <th className="w-[570px] col-span-3 text-center">TRẠNG THÁI SẢN PHẨM</th>
                        </tr>
                        <tr className="w-full flex mt-4 border-solid border-gray-400 border-t" >
                            <td className="w-[480px] h-18 flex flex-row items-center text-xl	 "><img className="ml-4 w-18 h-18 mr-5 " src="src\assets\img\wishlist_img1.png" />Ớt Chuông Xanh</td>
                            <td className="w-[280px] h-18 flex flex-row items-center">230.000 VND <s className="ml-2 text-[#999999]">534.000VND</s></td>
                            <td className="w-[180px] h-18 flex flex-row items-center"><label className="w-24 h-7 bg-[#AFFFB2] text-center" >Còn Hàng</label></td>
                            <td className="w-[260px] h-18 flex flex-row items-center "><a href="" className="text-center pt-2 w-48 h-10 rounded-3xl text-white  mt-6 mb-6 bg-[#00B207] cursor-pointer">Thêm vào giỏ hàng</a></td>
                            <td className="w-[50px] h-18 flex flex-row items-center"><button className="w-8 h-8 border border-solid rounded-full pb-1  ">x</button></td>
                        </tr>
                       
                        <tr className="w-full flex mt-4 border-solid border-gray-400 border-t" >
                            
                            <td className="w-[480px] h-18 flex flex-row items-center text-xl	 "><img className="ml-4 w-18 h-18 mr-5  " src="src\assets\img\wishlist_img2.png" />Xoài Tươi</td>
                            <td className="w-[280px] h-18 flex flex-row items-center">440.000 VND</td>
                            <td className="w-[180px] h-18 flex flex-row items-center"><label className="w-24 h-7 bg-[#EA4B48] text-center" >Hết Hàng</label></td>
                            <td className="w-[260px] h-18 flex flex-row items-center "><a href="" className="text-center pt-2 w-48 h-10 rounded-3xl text-white  mt-6 mb-6 bg-gray-400 cursor-pointer disabled" >Thêm vào giỏ hàng</a></td>
                            <td className="w-[50px] h-18 flex flex-row items-center"><button className="w-8 h-8 border border-solid rounded-full pb-1  ">x</button></td>
                        </tr>

                    </table> */}


            </div>


            {/* share */}
            <div className="flex items-center pl-5 border-solid border-gray-400 border-l border-r border-b w-[1000px] h-16">
                <label className="text-xl">Share: </label> 
                <img src="src\assets\img\twiter_icon.png" alt="" />
            </div>


        
                </div>
            </div>

        
    );
};

export default OrderHistory;