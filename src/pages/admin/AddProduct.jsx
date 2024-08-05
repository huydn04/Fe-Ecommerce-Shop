import React from 'react'
import { IoChevronBack } from "react-icons/io5";

const AddNewProduct = () => {
  return (
    <div>
      <div className='flex flex-col items-center'>
        <div className='border-solid border-gray-400 border rounded mt-6 '>
        <div className="border-solid border-gray-400 border-b pb-2 pl-4 pt-2 flex justify-between">
      <label className="text-2xl font-bold">Thêm Sản Phẩm </label>

      <button className='flex mr-2 items-center text-lg'><IoChevronBack className='mr-1' /> Trở Về</button>
      </div>
     
      <div className="mt-6">
      <form action="" method="post">

      {/* 1st location */}
      <div className="flex flex-col w-full ">
      <div className="ml-4">
      <label>Tên Sản Phẩm</label> 
      <br/>
      <input className="mt-1 mr-2 mb-7 border-solid border rounded w-[460px] h-9 pl-2 focus:outline-none focus:border-[#00B207]" type="text"  />
      </div>


      <div className="ml-4 ">     
      <label className="">Giá Sản Phẩm</label> 
      <br/>
      <input className="mt-1 mr-2 mb-7 border-solid border rounded w-[300px] h-9 pl-2 focus:outline-none focus:border-[#00B207]" type="text"   />
      </div>

      </div>

      {/* 2nd location */}
      <div className="ml-4">
      <label>Mô Tả Sản Phẩm</label> 
      <br/>
      <input className=" mt-1 mb-7 border-solid border rounded w-[700px] mr-4 h-9 pl-2 focus:outline-none focus:border-[#00B207]" type="text" />
      </div>

      {/* 3rd location */}
      <div className="flex flex-col w-full ">
      <div className="ml-4">
      <label>Danh Mục</label> 
      <br/>
      <select className="mt-1 mr-2 mb-7 border-solid border rounded w-[338px] h-9 pl-2 focus:outline-none focus:border-[#00B207]">
          <option value="Việt Nam">Rau Củ</option>
          <option value="United States">Trái Cây</option>
          <option value="Korea">Nhu Yếu Phẩm</option>
          <option value="Japan">Thực Phẩm</option>
        </select>
      </div>


      <div className="ml-4 ">     
      <label className="">Thẻ</label> 
      <br/>
      <select className="mt-1 mr-2 mb-7 border-solid border rounded w-[338px] h-9 pl-2 focus:outline-none focus:border-[#00B207]">
          <option value="Đồng Nai">Sản Phẩm Mới</option>
          <option value="Hồ Chí Minh">Sản Phẩm Phổ Biến</option>
          <option value="Hà Nội">Sản Phẩm Bán Chạy</option>
        </select>
      </div>

      </div>

      {/* 4th location */}
      <div className="flex flex-col w-full ">

      <div className="ml-4">
      <label>Ảnh</label> 
      <br/>
      <input className="mt-1 mb-7 mr-7 border-solid border rounded w-[260px] h-10 pl-2 focus:outline-none focus:border-[#00B207] flex pt-1" type="file" />
      </div>

      <div className="ml-4 ">     
      <label className="">Tình Trạng</label> 
      <br/>
      <select className="mt-1 mr-2 mb-7 border-solid border rounded w-[338px] h-9 pl-2 focus:outline-none focus:border-[#00B207]">
          <option value="Đồng Nai">Còn Hàng</option>
          <option value="Hồ Chí Minh">Hết Hàng</option>

        </select>
      </div>

      </div>

      <input className=" w-40 h-10 rounded-3xl text-white ml-4 mt-6 mb-6 bg-[#00B207] cursor-pointer" value="Thêm Sản Phẩm" type="submit"/>
      </form>
    </div>
    
    </div>
    </div>
  </div>
  )
}

export default AddNewProduct
