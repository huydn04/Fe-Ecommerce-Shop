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
      
      
  
  
        {/* start OrderHistory */}
        
            
        </div>
        <div className=" w-[833px] " >

                <div className=" w-full border-solid border border-gray-400 h-[900px] flex flex-col justify-between">
          
                <div className="">
            <div className="overflow-x-auto">
              <Table>
                <Table.Head className="text-lg">
                  <span>Lịch sử đặt hàng</span>
                  <span />
                  <span />
                  <span />       
                  <span />
                </Table.Head>
                <Table.Head className="bg-gray-200">
                  {/* <span /> */}
                  <span>Mã Đơn</span>
                  <span>Thời Gian</span>
                  <span>Tất Cả</span>
                  <span>Trạng Thái</span>
                  <span />
                </Table.Head>

                <Table.Body>
                  <Table.Row>
                    <span>#113</span>
                    <span>15/08/2024</span>
                    <span>
                      <div className="flex gap-1">
                        <p className="font-semibold">$100.000</p>
                        <p>(5 Sản Phẩm)</p>
                      </div>
                    </span>
                    <span>Xử lý</span>
                    <span className="text-primary font-semibold">
                      Xem chi tiết
                    </span>
                  </Table.Row>

                  <Table.Row>
                    <span>#113</span>
                    <span>15/08/2024</span>
                    <span>
                      <div className="flex gap-1">
                        <p className="font-semibold">$100.000</p>
                        <p>(5 Sản Phẩm)</p>
                      </div>
                    </span>
                    <span>Trên Đường Đi</span>
                    <span className="text-primary font-semibold">
                      Xem chi tiết
                    </span>
                  </Table.Row>

                  <Table.Row>
                    <span>#113</span>
                    <span>15/08/2024</span>
                    <span>
                      <div className="flex gap-1">
                        <p className="font-semibold">$100.000</p>
                        <p>(5 Sản Phẩm)</p>
                      </div>
                    </span>
                    <span>Hoàn thành</span>
                    <span className="text-primary font-semibold">
                      Xem chi tiết
                    </span>
                  </Table.Row>

                  <Table.Row>
                    <span>#113</span>
                    <span>15/08/2024</span>
                    <span>
                      <div className="flex gap-1">
                        <p className="font-semibold">$100.000</p>
                        <p>(5 Sản Phẩm)</p>
                      </div>
                    </span>
                    <span>Hoàn thành</span>
                    <span className="text-primary font-semibold">
                      Xem chi tiết
                    </span>
                  </Table.Row>

                  <Table.Row>
                    <span>#113</span>
                    <span>15/08/2024</span>
                    <span>
                      <div className="flex gap-1">
                        <p className="font-semibold">$100.000</p>
                        <p>(5 Sản Phẩm)</p>
                      </div>
                    </span>
                    <span>Hoàn thành</span>
                    <span className="text-primary font-semibold">
                      Xem chi tiết
                    </span>
                  </Table.Row>

                  <Table.Row>
                    <span>#113</span>
                    <span>15/08/2024</span>
                    <span>
                      <div className="flex gap-1">
                        <p className="font-semibold">$100.000</p>
                        <p>(5 Sản Phẩm)</p>
                      </div>
                    </span>
                    <span>Hoàn thành</span>
                    <span className="text-primary font-semibold">
                      Xem chi tiết
                    </span>
                  </Table.Row>
                </Table.Body>
              </Table>
            </div>
          </div>
                

                {/* <div className="w-full ">
                    <div className="border-solid border-gray-400 border-b pl-4 pt-3 h-14 ">
                    <label className="text-2xl font-bold">Lịch Sử Đặt Hàng</label></div>

                    <table className="w-full ">
                        <tr className="w-full h-12 bg-[#F2F2F2]">
                            <th className="w-1/5">ID DƠN HÀNG</th>
                            <th className="w-1/5">NGÀY</th>
                            <th className="w-1/5">TỔNG</th>
                            <th className="w-1/5">TRẠNG THÁI</th>
                            <th className="w-1/5"></th>
                        </tr>
                        <tr className="">
                            <td className="w-1/5 text-center h-12">#3933</td>
                            <td className="w-1/5 text-center h-12">4 April, 2021</td>
                            <td className="w-1/5 text-center h-12">$135.00 (5 Products)</td>
                            <td className="w-1/5 text-center h-12">Đang thực hiện</td>
                            <td className="w-1/5 text-center h-12"><a href="" className="text-[#00B207]">Xem Chi Tiết</a></td>
                        </tr>
                        <tr>
                            <td className="w-1/5 text-center h-12">#5028</td>
                            <td className="w-1/5 text-center h-12">20 Mar, 2021</td>
                            <td className="w-1/5 text-center h-12">$250.00 (4 Products)</td>
                            <td className="w-1/5 text-center h-12">Hoàn thành</td>
                            <td className="w-1/5 text-center h-12"><a href="" className="text-[#00B207]">Xem Chi Tiết</a></td>
                        </tr>
                    </table>
                </div> */}

                {/* button change page */}
                <div className="w-full h-10 flex flex-row justify-center items-center mb-10" >
                    <a href="" className="w-10 h-10  rounded-full mr-2 bg-gray-200 flex justify-center items-center"><img src="src\assets\img\order_move1.png" alt="" /></a>
                    <a href="" className="w-10 h-10  text-white rounded-full bg-[#00B207] flex justify-center items-center">1</a>
                    <a href="" className="w-10 h-10  rounded-full flex justify-center items-center">2</a>
                    <a href="" className="w-10 h-10  rounded-full flex justify-center items-center">3</a>
                    <a href="" className="w-10 h-10  rounded-full ml-2 bg-gray-200 flex justify-center items-center"><img src="src\assets\img\order_move2.png" alt="" /></a>
                </div>  

            </div>  
        </div>
        
        </div>
    );
};

export default OrderHistory;