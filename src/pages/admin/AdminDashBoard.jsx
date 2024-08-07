import BarCharts from "../../components/admin/chart/BarChartWithMultiXAxis";
import BarChartNoPadding from "../../components/admin/chart/BarChartNoPadding";
import SameDataComposedChart from "../../components/admin/chart/SameDataComposedChart";
import AreaChartFillByValue from "../../components/admin/chart/AreaChartFillByValue";
import { Navbar, Select } from "react-daisyui";
import { BsCalendarDate } from "react-icons/bs";
import { LuClipboardList } from "react-icons/lu";
import { FaUsers } from "react-icons/fa";
import { TfiBarChart } from "react-icons/tfi";
import { GoArchive } from "react-icons/go";
import { FaArrowUpWideShort } from "react-icons/fa6";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const AdminDashBoard = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState("default");
  return (
    <div className="w-full px-5 py-3 ml-64 h-full bg-gray-100 ">
      <Navbar className="flex justify-between items-center">
        <div className="">
          <div className="">
            <p className="font-bold text-3xl">Trang Chủ</p>

            <div className="text-gray-500">
              <p>Trang Thống kê tổng hợp</p>
            </div>
          </div>
        </div>

        <div className="flex-none ">
          <div className="flex w-full  p-4 items-center justify-center gap-2 ">
            <BsCalendarDate className="text-2xl" />
            <Select /*className="w-[200px]"*/
              value={value}
              bordered="false"
              onChange={(event) => setValue(event.target.value)}
              className=" bg-gray-200 focus:bg-white"
            >
              <option value={"default"} disabled>
                Lọc theo năm
              </option>
              <option value={"Date1"}>15/08/2004</option>
              <option value={"Date2"}>15/08/2004</option>
              <option value={"Date3"}>15/08/2004</option>
              <option value={"Date4"}>15/08/2004</option>
              <option value={"Date5"}>15/08/2004</option>
            </Select>
          </div>
        </div>
      </Navbar>

      <div className="grid-cols-4 grid gap-7 h-[150px]  ">
        <div className="bg-white rounded-xl shadow-md font-medium shadow-gray-300 gap-3 flex items-center justify-center">
          <div className="  flex items-center justify-center gap-3">
            <LuClipboardList className="text-6xl text-primary border rounded-xl  p-1 bg-gray-100 hover:bg-gray-300" />

            <div className="">
              <p>100</p>
              <p>Đơn Hàng</p>
              <div className="flex items-center gap-2  ">
                <FaArrowUpWideShort className="text-primary border rounded-xl text-xl p-1 bg-gray-100 hover:bg-gray-300" />
                {/* <IoArrowUpCircleOutline className="text-primary border rounded-xl text-2xl p-1 bg-green-100" />
                    <IoMdArrowUp className="text-primary border rounded-xl text-xl p-1 bg-green-100"/> */}
                <p className="text-xs font-normal text-gray-600">4%(30 Days)</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white   flex items-center justify-center rounded-xl shadow-md shadow-gray-300 gap-3">
          <GoArchive className="text-6xl text-primary border rounded-xl  p-1 bg-gray-100 hover:bg-gray-300" />
          <div className="">
            <p>200</p>
            <p>Sản Phẩm</p>
            <div className="flex items-center gap-2  ">
              <FaArrowUpWideShort className="text-primary border rounded-xl text-xl p-1 bg-gray-100 hover:bg-gray-300" />
              {/* <IoArrowUpCircleOutline className="text-primary border rounded-xl text-2xl p-1 bg-green-100" />
                    <IoMdArrowUp className="text-primary border rounded-xl text-xl p-1 bg-green-100"/> */}
              <p className="text-xs font-normal text-gray-600">4%(30 Days)</p>
            </div>
          </div>
        </div>
        <div
          className="bg-white   flex items-center justify-center rounded-xl shadow-md shadow-gray-300 gap-3 cursor-pointer"
          onClick={() => navigate("/AdminUsers")}
        >
          <FaUsers className="text-6xl text-primary border rounded-xl  p-1 bg-gray-100 hover:bg-gray-300" />
          <div className="">
            <p>300</p>
            <p>Tổng số Tài Khoản</p>
            <div className="flex items-center gap-2  ">
              <FaArrowUpWideShort className="text-primary border rounded-xl text-xl p-1 bg-gray-100 hover:bg-gray-300" />
              {/* <IoArrowUpCircleOutline className="text-primary border rounded-xl text-2xl p-1 bg-green-100" />
                    <IoMdArrowUp className="text-primary border rounded-xl text-xl p-1 bg-green-100"/> */}
              <p className="text-xs font-normal text-gray-600">4%(30 Days)</p>
            </div>
          </div>
        </div>
        <div className="bg-white   flex items-center justify-center rounded-xl shadow-md shadow-gray-300 gap-3">
          <TfiBarChart className="text-6xl text-primary border rounded-xl  p-1 bg-gray-100 hover:bg-gray-300" />
          <div className="">
            <p>400</p>
            <p>Tổng Doanh Thu</p>
            <div className="flex items-center gap-2  ">
              <FaArrowUpWideShort className="text-primary border rounded-xl text-xl p-1 bg-gray-100 hover:bg-gray-300" />
              {/* <IoArrowUpCircleOutline className="text-primary border rounded-xl text-2xl p-1 bg-green-100" />
                    <IoMdArrowUp className="text-primary border rounded-xl text-xl p-1 bg-green-100"/> */}
              <p className="text-xs font-normal text-gray-600">4%(30 Days)</p>
            </div>
          </div>
        </div>
      </div>

      <div className="">
        <div className="grid-cols-2 grid w-full  gap-7 mt-10">
          <div className="bg-white rounded-xl shadow-md">
            <div className="mt-10 mx-10 font-semibold text-xl">
              <p>Tổng Doanh thu 12 Tháng</p>
            </div>
            <div className="  py-10 px-7  w-full h-[350px] ">
              <BarCharts />
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-md">
            <div className="mt-10 mx-10 font-semibold text-xl">
              <p>Tổng Sản Phẩm</p>
            </div>
            <div className="  py-10 px-7  w-full h-[350px] ">
              <BarChartNoPadding />
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-md">
            <div className="mt-10 mx-10 font-semibold text-xl">
              <p>Tổng Đơn Hàng</p>
            </div>
            <div className="  py-10 px-7  w-full h-[350px] ">
              <SameDataComposedChart />
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-md">
            <div className="mt-10 mx-10 font-semibold text-xl">
              <p>Tổng Số gì đó chưa biết</p>
            </div>
            <div className="  py-10 px-7  w-full h-[350px] ">
              <AreaChartFillByValue />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
