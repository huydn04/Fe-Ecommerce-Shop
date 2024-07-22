import { useState } from "react";
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
const UsersPages = () => {
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
    <div className="">
      <div className="flex mt-10 gap-4 justify-center ">
        {/* Sidebar */}
        <div className="w-[300px] h-[400px]  ml-2 border border-solid border-gray-300 rounded">
          <p className=" pt-10 ml-9 font-bold text-2xl">Navigation</p>
          <Menu className="flex-grow mt-3 text-gray-500  ">
            {UsersPage.map((item, index) => {
              const Icon = item.icon;
              return (
                <Menu.Item key={index} className="relative">
                  <Link
                    to={item.link}
                    className={`btn flex  items-center justify-start font-semibold rounded-none shadow-white hover:bg-gray-100 hover:text-primary hover:border-l-4 hover:border-y-0 hover:border-r-0 hover:border-solid hover:border-[#00B207] hover:font-bold  ${
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

        {/* Dashboard */}

        <div className="">
          <div className="  grid-cols-2 grid gap-4   ">
            <div className=" rounded  border-solid border border-gray-300 w-[400px] h-[300px] text-center ">
              <div className="flex items-center justify-center mt-10">
                <img src={Avatar} className="" />
                <img src={Avatar} alt="" />
              </div>
              <p className="mt-5 font-semibold">Huy Vip Pro</p>
              <p className="mt-1 font-light">Khách Hàng</p>
              <p className="mt-2 text-primary font-semibold">Chỉnh Sửa Hồ Sơ</p>
            </div>

            <div className="rounded  border-solid border border-gray-300 px-10 h-[300px] w-[400px]  ">
              <p className="mt-10">Nguyễn Đức Huy</p>
              <p className="mt-2">Địa chỉ: Biên Hòa</p>
              <p className="mt-2">Email: fromfptwithlove@fpt.edu.vn</p>
              <p className="mt-2 ">Sđt: 113</p>
              <p className=" mt-2 text-primary font-semibold">
                Chỉnh Sửa Thông Tin
              </p>
            </div>
          </div>

          <div className="">
            <div className="overflow-x-auto">
              <Table>
                <Table.Head className="text-lg">
                  <span>Lịch sử đặt hàng</span>
                  <span />
                  <span />
                  <span />

                  <span className="flex items-center gap-1 text-primary">
                    Xem tất cả <IoMdArrowForward className="text-xl" />
                  </span>
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
        </div>
      </div>
    </div>
  );
};

export default UsersPages;
