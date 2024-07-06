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

        <div className=" w-[1311px] ">

            <div className="pt-2 mb-4 w-full">
                <div className=" w-full text-3xl font-bold text-center">Danh Sách Ước</div>
            </div>
            {/* show product */}
            <div className="border-solid border-gray-400 border w-full">
                <table className="w-full ">
                        <tr className="w-full flex mt-4 ">
                            <th className="w-[460px] text-start ml-7">SẢN PHẨM</th>
                            <th className="w-[260px] text-start ">GIÁ TIỀN</th>
                            <th className="w-[570px] col-span-3 text-center">TRẠNG THÁI SẢN PHẨM</th>
                        </tr>
                        <tr className="w-full flex mt-4 border-solid border-gray-400 border-t" >
                            <td className="w-[480px] h-18 flex flex-row items-center "><img className="ml-4 w-18 h-18 " src="src\assets\img\wishlist_img1.png" />Ớt Chuông Xanh</td>
                            <td className="w-[280px] h-18 flex flex-row items-center">230.000 VND</td>
                            <td className="w-[180px] h-18 flex flex-row items-center"><label className="w-24 h-7 bg-[#AFFFB2] text-center" >Còn Hàng</label></td>
                            <td className="w-[260px] h-18 flex flex-row items-center "><a href="" className="text-center pt-2 w-48 h-10 rounded-3xl text-white  mt-6 mb-6 bg-[#00B207] cursor-pointer">Thêm vào giỏ hàng</a></td>
                            <td className="w-[50px] h-18 flex flex-row items-center"><button className="w-8 h-8 border border-solid rounded-full pb-1  ">x</button></td>
                        </tr>
                       
                        <tr className="w-full flex mt-4 border-solid border-gray-400 border-t" >
                            
                            <td className="w-[480px] h-18 flex flex-row items-center "><img className="ml-4 w-18 h-18 " src="src\assets\img\wishlist_img2.png" />Xoài Tươi</td>
                            <td className="w-[280px] h-18 flex flex-row items-center">440.000 VND</td>
                            <td className="w-[180px] h-18 flex flex-row items-center"><label className="w-24 h-7 bg-[#EA4B48] text-center" >Hết Hàng</label></td>
                            <td className="w-[260px] h-18 flex flex-row items-center "><a href="" className="text-center pt-2 w-48 h-10 rounded-3xl text-white  mt-6 mb-6 bg-gray-400 cursor-pointer disabled" >Thêm vào giỏ hàng</a></td>
                            <td className="w-[50px] h-18 flex flex-row items-center"><button className="w-8 h-8 border border-solid rounded-full pb-1  ">x</button></td>
                        </tr>

                    </table>
            </div>
            {/* share */}
            <div className="flex items-center pl-5 border-solid border-gray-400 border-l border-r border-b w-full h-16">
                <label className="text-xl">Share: </label> 
                <img src="src\assets\img\twiter_icon.png" alt="" />
            </div>


        
        </div>
        </div>
    );
};

export default OrderHistory;