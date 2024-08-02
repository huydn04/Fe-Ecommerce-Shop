import Sidebar from "../../components/users/SideBarUsers";
import Header from "../../components/home/Header"


const SettingUser = () => {





  return (
    <div className="flex flex-col justify-center pt-10">
       
        <div>
          <Header/>
        </div>

        <div className="flex justify-center mt-12">
        {/* Sidebar */}
     
          <Sidebar/>
       
      
         {/* start setting */}
      <div className=" w-[816px] ml-4 rounded-md	 " >

{/* 1st box */} 
<div className="border-solid border border-gray-400 w-full flex flex-row items-center	">

  
  <div className="border-solid mt-2 w-full ">
    
    <div className="border-solid border-b pb-2 pl-4 pt-2">
      <label className="text-2xl font-bold ">Cài Đặt Tài Khoản</label>
      </div>
     
    <div className="flex flex-row items-center justify-around ">

    <div className="mt-6 ">
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

    
  
  <div className=" mb-10 w-[300px] mr-16 flex flex-col justify-center items-center">
      <img className="w-60 h-60" src="https://cutitoutvinyl.ca/wp-content/uploads/2022/10/Cut-it-Out-Vinyl-7.png" alt="" />
      <label className="w-40 h-10 rounded-3xl border-2 font-bold border-solid boder-[#00B207] text-[#00B207] ml-4 mt-3 cursor-pointer flex justify-center items-center" htmlFor="chon-anh">Chọn Ảnh</label>
      <input className="hidden" type="file" id="chon-anh" />
    </div>
    </div>
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
      <input className="mt-1 mr-2 mb-7 border-solid border rounded w-[238px] h-9 pl-2 focus:outline-none focus:border-[#00B207]" type="text"  />
      </div>


      <div className="ml-4 ">     
      <label className="">Họ</label> 
      <br/>
      <input className="mt-1 mr-2 mb-7 border-solid border rounded w-[238px] h-9 pl-2 focus:outline-none focus:border-[#00B207]" type="text"   />
      </div>

      <div className="ml-4  ">     
      <label className="">Công Ty</label> 
      <br/>
      <input className=" mt-1 mr-2 mb-7 border-solid border rounded w-[238px] h-9 pl-2 focus:outline-none focus:border-[#00B207]" type="text"   />
      </div>

      </div>

      {/* 2nd location */}
      <div className="ml-4">
      <label>Địa Chỉ</label> 
      <br/>
      <input className=" mt-1 mb-7 border-solid border rounded w-[760px] h-9 pl-2 focus:outline-none focus:border-[#00B207]" type="text" />
      </div>

      {/* 3rd location */}
      <div className="flex flex-row w-full ">
      <div className="ml-4">
      <label>Quốc Tịch / Region</label> 
      <br/>
      <select className="mt-1 mr-2 mb-7 border-solid border rounded w-[238px] h-9 pl-2 focus:outline-none focus:border-[#00B207]">
          <option value="Việt Nam">Việt Nam</option>
          <option value="United States">United States</option>
          <option value="Korea">Korea</option>
          <option value="Japan">Japan</option>
        </select>
      </div>


      <div className="ml-4 ">     
      <label className="">Tỉnh</label> 
      <br/>
      <select className="mt-1 mr-2 mb-7 border-solid border rounded w-[238px] h-9 pl-2 focus:outline-none focus:border-[#00B207]">
          <option value="Đồng Nai">Đồng Nai</option>
          <option value="Hồ Chí Minh">Hồ Chí Minh</option>
          <option value="Hà Nội">Hà Nội</option>
          <option value="Nam Định">Nam Định</option>
        </select>
      </div>

      <div className="ml-4  ">     
      <label className="">Zip Code</label> 
      <br/>
      <input className=" mt-1 mr-2 mb-7 border-solid border rounded w-[238px] h-9 pl-2 focus:outline-none focus:border-[#00B207]" type="text"   />
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
     </div>
     

  );
};

export default SettingUser;
