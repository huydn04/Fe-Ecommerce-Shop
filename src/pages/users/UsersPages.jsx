
import { Table } from "react-daisyui";

import { Link } from "react-router-dom";
import { Avatar } from "../../assets";

import { IoMdArrowForward } from "react-icons/io";
import Sidebar from "../../components/users/SideBarUsers";


const UsersPages = () => {


  return (
    <div className="">
      <div className="flex mt-10 gap-4 justify-center ">
        {/* Sidebar */}
        <Sidebar />

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
