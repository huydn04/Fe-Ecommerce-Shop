import Header from '../../components/home/Header'
import { Header1 } from '../../assets/MenuPage'
import { CgHome } from 'react-icons/cg'
import { IoIosArrowForward } from 'react-icons/io'
// import { IoIosArrowUp } from 'react-icons/io'
import { Button } from 'react-daisyui'
import Gia from '../../components/menuPages/Gia'
import DanhMuc from '../../components/menuPages/DanhMuc'
import DanhGia from '../../components/menuPages/DanhGia'
import PhoBien from '../../components/menuPages/PhoBien'
import Footer from '../../components/home/Footer'
import { QuangCaoPhoBien } from '../../assets/MenuPage'
import SanPhamGiamGia from '../../components/menuPages/SanPhamGiamgia'
import SanPhamPhoBien from '../../components/menuPages/SanPhamPhoBien'
import LocSanPham from '../../components/menuPages/Loc'
const MenuPage = () => {
  return (
    <div className="">
      <Header />
      {/*  */}
      <div className="relative">
        <img src={Header1} alt="" />
        <div className="absolute top-[40px] text-white ml-[235px]">
          <div className="flex items-center gap-2">
            <a href="#">
              <CgHome style={{ color: '#808080' }} size={16} />
            </a>
            <IoIosArrowForward style={{ color: '#808080' }} />
            <a href="#" className="text-[#808080]">
              Danh Mục
            </a>
            {/* <IoIosArrowForward style={{ color: '#808080' }} />
            <a href="#" className="text-[#00B207]">
              Nhu Yếu Phẩm
            </a> */}
          </div>
        </div>
      </div>
      <div className="flex">
        {/* Lộc */}
        <div className="ml-[180px] mt-[20px]">
          <div className="ml-[30px]">
            <Button className="bg-[#00B207] hover:bg-green-600 w-[100px] h-[45px] border rounded-full font-poppins text-[white]">
              lọc
            </Button>
          </div>
          {/* Danh Mục */}
          <div className="w-[312px]">
            <DanhMuc />
          </div>
          {/* Giá */}
          <div className="w-[312px]">
            <Gia />
          </div>
          {/* Đánh Giá */}
          <div className="w-[312px]">
            <DanhGia />
          </div>
          {/* Phổ Biến */}
          <div className="w-[312px]">
            <PhoBien />
          </div>
          {/* Quảng Cáo */}
          <div className="ml-[5px]">
            <img src={QuangCaoPhoBien} alt="" />
          </div>
          {/* Sản Phẩm Giảm Giá */}
          <div className="w-[312px] mt-[10px]">
            <SanPhamGiamGia />
          </div>
        </div>
        <div className="mt-[5px]">
          <div className="">
            <LocSanPham />
          </div>
          <SanPhamPhoBien />
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}
export default MenuPage
