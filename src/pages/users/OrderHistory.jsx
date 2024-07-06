// import React from "react";

const OrderHistory = () => {
    return (

        <div className="h-full w-full relative flex flex-row justify-center	mt-10 ">
      
      
        {/* navigation */}
        <div className="mr-8 w-[300px] border-solid border-gray-400">
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
        {/* end nav */}
  
        {/* start OrderHistory */}
        
            <div className=" w-[1311px] " >

                <div className=" w-full border-solid border border-gray-400 h-[900px] flex flex-col justify-between">
          
                

                <div className="w-full ">
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
                </div>

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