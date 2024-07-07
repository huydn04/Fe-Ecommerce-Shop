//Img
import { Bannar } from '../../assets/Home'
import { Logo } from '../../assets/Home'
import { Banner2 } from '../../assets/Home'
import { Banner3 } from '../../assets/Home'
// Các loại phổ biến
import { SanPham1 } from '../../assets/Home'
import { SanPham2 } from '../../assets/Home'
import { SanPham3 } from '../../assets/Home'
import { SanPham4 } from '../../assets/Home'
import { SanPham5 } from '../../assets/Home'
import { SanPham6 } from '../../assets/Home'
import { SanPham7 } from '../../assets/Home'
import { SanPham8 } from '../../assets/Home'
import { SanPham9 } from '../../assets/Home'
import { SanPham10 } from '../../assets/Home'
import { SanPham11 } from '../../assets/Home'
import { SanPham12 } from '../../assets/Home'

//Sản phẩm phổ biến
import { Product1 } from '../../assets/Home'
import { Product2 } from '../../assets/Home'
import { Product3 } from '../../assets/Home'
import { Product4 } from '../../assets/Home'
import { Product5 } from '../../assets/Home'
import { Product6 } from '../../assets/Home'
import { Product7 } from '../../assets/Home'
import { Product8 } from '../../assets/Home'
import { Product9 } from '../../assets/Home'
import { Product10 } from '../../assets/Home'
//Quảng cáo
import { QuangCao1 } from '../../assets/Home'
import { QuangCao2 } from '../../assets/Home'
import { QuangCao3 } from '../../assets/Home'
import { QuangCaoTo } from '../../assets/Home'
// Tin Tức
import { TinTuc1 } from '../../assets/Home'
import { TinTuc2 } from '../../assets/Home'
import { TinTuc3 } from '../../assets/Home'
//Instagram
import { Instagram1 } from '../../assets/Home'
import { Instagram2 } from '../../assets/Home'
import { Instagram3 } from '../../assets/Home'
import { Instagram4 } from '../../assets/Home'
import { Instagram5 } from '../../assets/Home'
import { Instagram6 } from '../../assets/Home'
// Companny Logo
import { CompannyLogo } from '../../assets/Home'
//footer
import { FaFacebook } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { ChuKy } from '../../assets/Home'
import { FPTLogo } from '../../assets/Home'
import { FaCcApplePay } from 'react-icons/fa'
import { FaCcVisa } from 'react-icons/fa'
import { FaCcDiscover } from 'react-icons/fa'
import { FaCcMastercard } from 'react-icons/fa'
import { MdOutlinePayment } from 'react-icons/md'
//User
//Icons
// import { CiSearch } from 'react-icons/ci'
import { FiMapPin } from 'react-icons/fi'
import { BsHeart } from 'react-icons/bs'
import { IoIosArrowDown } from 'react-icons/io'
import { PiPhoneCallLight } from 'react-icons/pi'
import { PiHandbagLight } from 'react-icons/pi'
import { PiTagLight } from 'react-icons/pi'
import { CiUser } from 'react-icons/ci'
import { TfiComment } from 'react-icons/tfi'
import { VscArrowRight } from 'react-icons/vsc'
import { FaStar } from 'react-icons/fa'
//icon bằng ảnh
import { Vector } from '../../assets/Home'
// <-/->
import { FaCircleArrowRight } from 'react-icons/fa6'
import { FaCircleArrowLeft } from 'react-icons/fa6'
import { DaiDien1 } from '../../assets/Home'
// import StarRating from './StarRating'

const Homepages = () => {
  return (
    <div className="w-full h-full m-auto">
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
      />
      {/* header_1 */}
      <nav className="flex items-center justify-between px-4 border-b border-gray-300 text-gray-600 text-xs">
        <div className="flex items-center ml-32">
          <FiMapPin size={20} style={{ color: '#666666' }} />
          <p className="ml-2">FPT TEAM supermarket: Đồng Nai - TP. Biên Hòa</p>
        </div>

        {/* sigh in | sigh up */}
        <div className="ml-auto flex items-center mr-32 gap-2">
          <a href="#" className="ml-2">
            Eng
          </a>
          <IoIosArrowDown size={10} style={{ color: '#666666' }} /> {/*icon*/}
          <a href="#" className="ml-2">
            USD
          </a>
          <IoIosArrowDown size={10} style={{ color: '#666666' }} /> {/*icon*/}
          <p className="ml-2 text-gray-300 text-xs items-center"> | </p>
          <a href="#" className="ml-2">
            Đăng nhập
          </a>
          <p className="ml-2 items-center"> / </p>
          <a href="#" className="ml-2">
            Đăng ký
          </a>
        </div>
      </nav>

      <nav className="order-1 flex flex-grow-0">
        {/* header_2 */}
        {/* LogoFPT */}
        <div className="ml-[150px] w-[100px] bg-cover bg-center">
          <img src={Logo} width="100" height="20" alt="" />
        </div>
        <div className="ml-[255px] flex items-center justify-center mt-0">
          <input
            type="text"
            className="border border-gray-300 focus:outline-none focus:border-gray-300 rounded px-5 py-2 w-96 h-12 flex flex-row items-center p-3 gap-2 w-400 h-45"
            placeholder="Search..."
          />
          <button
            className="bg-green-600 hover:bg-green-700 text-white font-bold w-36 h-12 py-2 px-4 rounded focus:outline-none focus:shadow-outline flex justify-center"
            type="button"
          >
            Tìm kiếm
          </button>

          {/* yêu thích | giỏ hàng */}
        </div>
        <nav className="flex flex-row items-center gap-2 absolute w-160 h-34 left-[1220px] mt-[35px]">
          <div className=" left-6.76 right-6.76 top-13.35 bottom-12.28">
            <BsHeart style={{ color: '#1A1A1A' }} size={25} />
          </div>
          <p className="ml-2 text-gray-300 text-xs items-center text-[25px] justify-center mb-[10px]">
            {' '}
            |{' '}
          </p>
          <div className="flex items-center gap-12 w-96 h-34">
            <PiHandbagLight size={25} />
          </div>
        </nav>
      </nav>

      {/* menu */}
      <nav className="flex items-center justify-around h-16 bg-neutral-900 mt-0">
        <ul className="ml-1 flex items-center space-x-4 p-4 font-size-14">
          <li className="flex flex-row items-center p-0 gap-1 w-17 h-5 order-3 flex-none flex-grow-0">
            <a
              href="#home"
              className="text-white hover:text-gray-400 font-size-14"
            >
              Home
            </a>
            <IoIosArrowDown size={20} style={{ color: '#666666' }} />
          </li>

          <li className="flex flex-row items-center p-0 gap-1 w-17 h-5 order-3 flex-none flex-grow-0">
            <a href="#" className="text-gray-600 hover:text-white font-size-14">
              Shop
            </a>
            <IoIosArrowDown size={20} style={{ color: '#666666' }} />
          </li>
          <li className="flex flex-row items-center p-0 gap-1 w-17 h-5 order-3 flex-none flex-grow-0">
            <a
              href="#services"
              className="text-gray-600 hover:text-white font-size-14"
            >
              Pages
            </a>
            <IoIosArrowDown size={20} style={{ color: '#666666' }} />
          </li>
          <li className="flex flex-row items-center p-0 gap-1 w-17 h-5 order-3 flex-none flex-grow-0">
            <a href="#" className="text-gray-600 hover:text-white font-size-14">
              Tin tức
            </a>
            <IoIosArrowDown size={20} style={{ color: '#666666' }} />
          </li>
          <li className="flex flex-row items-center p-0 gap-1 w-17 h-5 order-3 flex-none flex-grow-0">
            <a href="#" className="text-gray-600 hover:text-white font-size-14">
              Giới thiệu
            </a>
          </li>
          <li className="flex flex-row items-center p-0 gap-1 w-17 h-5 order-3 flex-none flex-grow-0">
            <a href="#" className="text-gray-600 hover:text-white font-size-14">
              Liên hệ hotline
            </a>
          </li>
        </ul>
        <div className="flex items-center justify-end">
          <p className="text-white text-xs flex items-center font-size-14 ml-auto mr-2">
            <PiPhoneCallLight size={20} className="mr-1" />
            <span>(219) 555-0114</span>
          </p>
        </div>
      </nav>

      {/* img */}
      <div className="w-full mt-2 flex flex-row">
        <div
          className="relative w-[750px] h-[530px] bg-cover rounded-[20px] ml-[200px]"
          // style={{ backgroundImage: "url('/assets/Imagesssss.jpg')" }}
        >
          <img src={Bannar} alt="" />
        </div>

        <div className="w-[376px]">
          <div className="ml-[20px] hover:shadwo">
            <img src={Banner2} alt="" />
          </div>

          <div className="ml-[20px] hover:shadwo mt-[30px]">
            <img src={Banner3} alt="" />
          </div>
        </div>
      </div>

      {/*  */}
      <nav
        className="ml-[140px] shadow-lg flex flex-row justify-between items-center p-10 gap-[61px] absolute rounded-lg
			border border-black-600 mt-4"
      >
        <div className="w-[250px]">
          <a href="#" className="font-semibold text-base hover:text-gray-300">
            Free Shipping
          </a>
          <p className="text-sm">
            Giao hàng miễn phí cho tất cả đơn hàng của bạn
          </p>
        </div>
        <div className="w-[250px]">
          <a
            href="#"
            className="font-semibold text-base hover:text-gray-300"
            size={16}
          >
            Hỗ trợ khách hàng 24/7
          </a>
          <p className="text-sm">Truy cập tức thì vào Hỗ trợ</p>
        </div>
        <div className="w-[250px]">
          <a
            href="#"
            className="font-semibold text-base hover:text-gray-300"
            size={16}
          >
            Thanh toán an toàn 100%
          </a>
          <p className="text-sm">
            Chúng tôi đảm bảo tiền của bạn được tiết kiệm
          </p>
        </div>
        <div className="w-[250px]">
          <a
            href="#"
            className="font-semibold text-base hover:text-gray-300"
            size={16}
          >
            Đảm bảo hoàn tiền
          </a>
          <p className="text-sm">Đảm bảo hoàn tiền trong 30 ngày</p>
        </div>
      </nav>
      {/* các loại phổ biến */}

      <nav className="ml-[140px] w-[1265px] h-[530px] mt-[230px]">
        <p className="flex justify-center text-[32px] font-poppins font-bold">
          Các loại phổ biến
        </p>
        <div className="mt-6 flex flex-rows gap-4 h-[220px]">
          <div className="w-[200px] h-[213px] border border-gray-200 rounded-lg hover:border-green-800 shadow hover:shadow-green-800">
            <img src={SanPham1} alt="" />
            <a
              href=""
              className=" flex items-center justify-center text-[18px] mt-[30px]"
            >
              Trái cây
            </a>
          </div>
          <div className="w-[200px] h-[213px] border border-gray-200 rounded-lg hover:border-green-800 shadow hover:shadow-green-800">
            <img src={SanPham2} alt="" />
            <a href="" className=" flex justify-center text-[18px] mt-[30px]">
              Rau củ quả
            </a>
          </div>
          <div className="w-[200px] h-[213px] border border-gray-200 rounded-lg hover:border-green-800 shadow hover:shadow-green-800">
            <img src={SanPham3} alt="" />
            <a href="" className=" flex justify-center text-[18px] mt-[30px]">
              Thịt & Cá
            </a>
          </div>
          <div className="w-[200px] h-[213px] border border-gray-200 rounded-lg hover:border-green-800 shadow hover:shadow-green-800">
            <img src={SanPham4} alt="" />
            <a href="" className=" flex justify-center text-[18px] mt-[30px]">
              Các loại bánh
            </a>
          </div>
          <div className="w-[200px] h-[213px] border border-gray-200 rounded-lg hover:border-green-800 shadow hover:shadow-green-800">
            <img src={SanPham5} alt="" />
            <a href="" className=" flex justify-center text-[18px] mt-[30px]">
              Nước uống
            </a>
          </div>
          <div className="w-[200px] h-[213px] border border-gray-200 rounded-lg hover:border-green-800 shadow hover:shadow-green-800">
            <img src={SanPham6} alt="" />
            <a href="" className=" flex justify-center text-[18px] mt-[30px]">
              Mỹ Phẩm
            </a>
          </div>
        </div>
        {/*  */}
        <div className="mt-4 flex flex-rows gap-4">
          <div className="w-[200px] h-[213px] border border-gray-200 rounded-lg hover:border-green-800 shadow hover:shadow-green-800">
            <img src={SanPham7} alt="" />
            <a href="" className=" flex justify-center text-[18px] mt-[30px]">
              Bánh mì & Bakery
            </a>
          </div>
          <div className="w-[200px] h-[213px] border border-gray-200 rounded-lg hover:border-green-800 shadow hover:shadow-green-800">
            <img src={SanPham8} alt="" />
            <a href="" className=" flex justify-center text-[18px] mt-[30px]">
              Bột làm bánh
            </a>
          </div>
          <div className="w-[200px] h-[213px] border border-gray-200 rounded-lg hover:border-green-800 shadow hover:shadow-green-800">
            <img src={SanPham9} alt="" />
            <a href="" className=" flex justify-center text-[18px] mt-[30px]">
              Cooking
            </a>
          </div>
          <div className="w-[200px] h-[213px] border border-gray-200 rounded-lg hover:border-green-800 shadow hover:shadow-green-800">
            <img src={SanPham10} alt="" />
            <a href="" className=" flex justify-center text-[18px] mt-[30px]">
              Thực phẩm ít đường
            </a>
          </div>
          <div className="w-[200px] h-[213px] border border-gray-200 rounded-lg hover:border-green-800 shadow hover:shadow-green-800">
            <img src={SanPham11} alt="" />
            <a href="" className=" flex justify-center text-[18px] mt-[30px]">
              Chất tẩy rửa
            </a>
          </div>
          <div className="w-[200px] h-[213px] border border-gray-200 rounded-lg hover:border-green-800 shadow hover:shadow-green-800">
            <img src={SanPham12} alt="" />
            <a href="" className=" flex justify-center text-[18px] mt-[30px]">
              Dầu ăn
            </a>
          </div>
        </div>
      </nav>

      {/* Sản phẩm phổ biến */}
      <nav className="ml-[140px] w-[1265px] h-[750px] mt-[40px]">
        <div className="flex items-center">
          <p className="text-[32px] font-poppins font-bold">
            Sản phẩm phổ biến
          </p>
          <div className="flex items-center gap-[10px] ml-auto mt-[20px]">
            <a href="#" className="text-15px" style={{ color: 'green' }}>
              Đọc Thêm
            </a>
            <VscArrowRight size={20} style={{ color: 'green' }} />
          </div>
        </div>
        <div className="flex mt-[20px]">
          <div className="group relative w-[264px] h-[327px] border border-[#E6E6E6] hover:border-green-800 shadow hover:shadow-green-800 mx-auto">
            <div className="relative overflow-hidden">
              <img className="w-full object-cover" src={Product1} alt="" />
              <div className="absolute -bottom-10 flex h-full w-full items-center justify-center  opacity-0 transition-all duration-300 group-hover:bottom-0 group-hover:opacity-100">
                <div className="absolute top-[10px] right-[10px] flex h-[30px] w-[30px] items-center justify-center rounded-full border bg-white  ">
                  <i className="fa-regular fa-heart"></i>
                </div>
                <div className="absolute top-[50px] right-[10px] flex h-[30px] w-[30px] items-center justify-center rounded-full border bg-white  ">
                  <i className="fa-regular fa-eye"></i>
                </div>
              </div>
            </div>
            <div className="absolute bottom-[40px] right-[10px] flex h-[30px] w-[30px] items-center justify-center rounded-full bg-gray-400 object-cover transition-all duration-300 group-hover:bg-green-400">
              <i className="fa-solid fa-cart-shopping group-hover:text-white"></i>
            </div>
            <div className="ml-[10px]">
              <h2 className="mt-3 text-xl capitalize transition-all duration-300 group-hover:text-green-400">
                Bắp cải tươi
              </h2>
              <p className="text-lg">$12.00</p>
              <div className="flex">
                <FaStar size={15} style={{ color: 'yellow	' }} />
                <FaStar size={15} style={{ color: 'yellow	' }} />
                <FaStar size={15} style={{ color: 'yellow	' }} />
                <FaStar size={15} style={{ color: 'yellow	' }} />
                <FaStar size={15} />
              </div>
            </div>
          </div>
          <div className="group relative w-[264px] h-[327px] border border-[#E6E6E6] hover:border-green-800 shadow hover:shadow-green-800 mx-auto">
            <div className="relative overflow-hidden">
              <img className="w-full object-cover" src={Product2} alt="" />
              <div className="absolute -bottom-10 flex h-full w-full items-center justify-center  opacity-0 transition-all duration-300 group-hover:bottom-0 group-hover:opacity-100">
                <div className="absolute top-[10px] right-[10px] flex h-[30px] w-[30px] items-center justify-center rounded-full border bg-white  ">
                  <i className="fa-regular fa-heart"></i>
                </div>
                <div className="absolute top-[50px] right-[10px] flex h-[30px] w-[30px] items-center justify-center rounded-full border bg-white  ">
                  <i className="fa-regular fa-eye"></i>
                </div>
              </div>
            </div>
            <div className="absolute bottom-[40px] right-[10px] flex h-[30px] w-[30px] items-center justify-center rounded-full bg-gray-400 object-cover transition-all duration-300 group-hover:bg-green-400">
              <i className="fa-solid fa-cart-shopping group-hover:text-white"></i>
            </div>
            <div className="ml-[10px]">
              <h2 className="mt-3 text-xl capitalize transition-all duration-300 group-hover:text-green-400">
                Bắp cải tươi
              </h2>
              <p className="text-lg">$12.00</p>
              <div className="flex">
                <FaStar size={15} style={{ color: 'yellow	' }} />
                <FaStar size={15} style={{ color: 'yellow	' }} />
                <FaStar size={15} style={{ color: 'yellow	' }} />
                <FaStar size={15} style={{ color: 'yellow	' }} />
                <FaStar size={15} />
              </div>
            </div>
          </div>
          <div className="group relative w-[264px] h-[327px] border border-[#E6E6E6] hover:border-green-800 shadow hover:shadow-green-800 mx-auto">
            <div className="relative overflow-hidden">
              <img className="w-full object-cover" src={Product3} alt="" />
              <div className="absolute -bottom-10 flex h-full w-full items-center justify-center  opacity-0 transition-all duration-300 group-hover:bottom-0 group-hover:opacity-100">
                <div className="absolute top-[10px] right-[10px] flex h-[30px] w-[30px] items-center justify-center rounded-full border bg-white  ">
                  <i className="fa-regular fa-heart"></i>
                </div>
                <div className="absolute top-[50px] right-[10px] flex h-[30px] w-[30px] items-center justify-center rounded-full border bg-white  ">
                  <i className="fa-regular fa-eye"></i>
                </div>
              </div>
            </div>
            <div className="absolute bottom-[40px] right-[10px] flex h-[30px] w-[30px] items-center justify-center rounded-full bg-gray-400 object-cover transition-all duration-300 group-hover:bg-green-400">
              <i className="fa-solid fa-cart-shopping group-hover:text-white"></i>
            </div>
            <div className="ml-[10px]">
              <h2 className="mt-3 text-xl capitalize transition-all duration-300 group-hover:text-green-400">
                Bắp cải tươi
              </h2>
              <p className="text-lg">$12.00</p>
              <div className="flex">
                <FaStar size={15} style={{ color: 'yellow	' }} />
                <FaStar size={15} style={{ color: 'yellow	' }} />
                <FaStar size={15} style={{ color: 'yellow	' }} />
                <FaStar size={15} style={{ color: 'yellow	' }} />
                <FaStar size={15} />
              </div>
            </div>
          </div>
          <div className="group relative w-[264px] h-[327px] border border-[#E6E6E6] hover:border-green-800 shadow hover:shadow-green-800 mx-auto">
            <div className="relative overflow-hidden">
              <img className="w-full object-cover" src={Product4} alt="" />
              <div className="absolute -bottom-10 flex h-full w-full items-center justify-center  opacity-0 transition-all duration-300 group-hover:bottom-0 group-hover:opacity-100">
                <div className="absolute top-[10px] right-[10px] flex h-[30px] w-[30px] items-center justify-center rounded-full border bg-white  ">
                  <i className="fa-regular fa-heart"></i>
                </div>
                <div className="absolute top-[50px] right-[10px] flex h-[30px] w-[30px] items-center justify-center rounded-full border bg-white  ">
                  <i className="fa-regular fa-eye"></i>
                </div>
              </div>
            </div>
            <div className="absolute bottom-[40px] right-[10px] flex h-[30px] w-[30px] items-center justify-center rounded-full bg-gray-400 object-cover transition-all duration-300 group-hover:bg-green-400">
              <i className="fa-solid fa-cart-shopping group-hover:text-white"></i>
            </div>
            <div className="ml-[10px]">
              <h2 className="mt-3 text-xl capitalize transition-all duration-300 group-hover:text-green-400">
                Bắp cải tươi
              </h2>
              <p className="text-lg">$12.00</p>
              <div className="flex">
                <FaStar size={15} style={{ color: 'yellow	' }} />
                <FaStar size={15} style={{ color: 'yellow	' }} />
                <FaStar size={15} style={{ color: 'yellow	' }} />
                <FaStar size={15} style={{ color: 'yellow	' }} />
                <FaStar size={15} />
              </div>
            </div>
          </div>
          <div className="group relative w-[264px] h-[327px] border border-[#E6E6E6] hover:border-green-800 shadow hover:shadow-green-800 mx-auto">
            <div className="relative overflow-hidden">
              <img className="w-full object-cover" src={Product5} alt="" />
              <div className="absolute -bottom-10 flex h-full w-full items-center justify-center  opacity-0 transition-all duration-300 group-hover:bottom-0 group-hover:opacity-100">
                <div className="absolute top-[10px] right-[10px] flex h-[30px] w-[30px] items-center justify-center rounded-full border bg-white  ">
                  <i className="fa-regular fa-heart"></i>
                </div>
                <div className="absolute top-[50px] right-[10px] flex h-[30px] w-[30px] items-center justify-center rounded-full border bg-white  ">
                  <i className="fa-regular fa-eye"></i>
                </div>
              </div>
            </div>
            <div className="absolute bottom-[40px] right-[10px] flex h-[30px] w-[30px] items-center justify-center rounded-full bg-gray-400 object-cover transition-all duration-300 group-hover:bg-green-400">
              <i className="fa-solid fa-cart-shopping group-hover:text-white"></i>
            </div>
            <div className="ml-[10px]">
              <h2 className="mt-3 text-xl capitalize transition-all duration-300 group-hover:text-green-400">
                Bắp cải tươi
              </h2>
              <p className="text-lg">$12.00</p>
              <div className="flex">
                <FaStar size={15} style={{ color: 'yellow	' }} />
                <FaStar size={15} style={{ color: 'yellow	' }} />
                <FaStar size={15} style={{ color: 'yellow	' }} />
                <FaStar size={15} style={{ color: 'yellow	' }} />
                <FaStar size={15} />
              </div>
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="group relative w-[264px] h-[327px] border border-[#E6E6E6] hover:border-green-800 shadow hover:shadow-green-800 mx-auto">
            <div className="relative overflow-hidden">
              <img className="w-full object-cover" src={Product6} alt="" />
              <div className="absolute -bottom-10 flex h-full w-full items-center justify-center  opacity-0 transition-all duration-300 group-hover:bottom-0 group-hover:opacity-100">
                <div className="absolute top-[10px] right-[10px] flex h-[30px] w-[30px] items-center justify-center rounded-full border bg-white  ">
                  <i className="fa-regular fa-heart"></i>
                </div>
                <div className="absolute top-[50px] right-[10px] flex h-[30px] w-[30px] items-center justify-center rounded-full border bg-white  ">
                  <i className="fa-regular fa-eye"></i>
                </div>
              </div>
            </div>
            <div className="absolute bottom-[40px] right-[10px] flex h-[30px] w-[30px] items-center justify-center rounded-full bg-gray-400 object-cover transition-all duration-300 group-hover:bg-green-400">
              <i className="fa-solid fa-cart-shopping group-hover:text-white"></i>
            </div>
            <div className="ml-[10px]">
              <h2 className="mt-3 text-xl capitalize transition-all duration-300 group-hover:text-green-400">
                Bắp cải tươi
              </h2>
              <p className="text-lg">$12.00</p>
              <div className="flex">
                <FaStar size={15} style={{ color: 'yellow	' }} />
                <FaStar size={15} style={{ color: 'yellow	' }} />
                <FaStar size={15} style={{ color: 'yellow	' }} />
                <FaStar size={15} style={{ color: 'yellow	' }} />
                <FaStar size={15} />
              </div>
            </div>
          </div>
          <div className="group relative w-[264px] h-[327px] border border-[#E6E6E6] hover:border-green-800 shadow hover:shadow-green-800 mx-auto">
            <div className="relative overflow-hidden">
              <img className="w-full object-cover" src={Product7} alt="" />
              <div className="absolute -bottom-10 flex h-full w-full items-center justify-center  opacity-0 transition-all duration-300 group-hover:bottom-0 group-hover:opacity-100">
                <div className="absolute top-[10px] right-[10px] flex h-[30px] w-[30px] items-center justify-center rounded-full border bg-white  ">
                  <i className="fa-regular fa-heart"></i>
                </div>
                <div className="absolute top-[50px] right-[10px] flex h-[30px] w-[30px] items-center justify-center rounded-full border bg-white  ">
                  <i className="fa-regular fa-eye"></i>
                </div>
              </div>
            </div>
            <div className="absolute bottom-[40px] right-[10px] flex h-[30px] w-[30px] items-center justify-center rounded-full bg-gray-400 object-cover transition-all duration-300 group-hover:bg-green-400">
              <i className="fa-solid fa-cart-shopping group-hover:text-white"></i>
            </div>
            <div className="ml-[10px]">
              <h2 className="mt-3 text-xl capitalize transition-all duration-300 group-hover:text-green-400">
                Bắp cải tươi
              </h2>
              <p className="text-lg">$12.00</p>
              <div className="flex">
                <FaStar size={15} style={{ color: 'yellow	' }} />
                <FaStar size={15} style={{ color: 'yellow	' }} />
                <FaStar size={15} style={{ color: 'yellow	' }} />
                <FaStar size={15} style={{ color: 'yellow	' }} />
                <FaStar size={15} />
              </div>
            </div>
          </div>
          <div className="group relative w-[264px] h-[327px] border border-[#E6E6E6] hover:border-green-800 shadow hover:shadow-green-800 mx-auto">
            <div className="relative overflow-hidden">
              <img className="w-full object-cover" src={Product8} alt="" />
              <div className="absolute -bottom-10 flex h-full w-full items-center justify-center  opacity-0 transition-all duration-300 group-hover:bottom-0 group-hover:opacity-100">
                <div className="absolute top-[10px] right-[10px] flex h-[30px] w-[30px] items-center justify-center rounded-full border bg-white  ">
                  <i className="fa-regular fa-heart"></i>
                </div>
                <div className="absolute top-[50px] right-[10px] flex h-[30px] w-[30px] items-center justify-center rounded-full border bg-white  ">
                  <i className="fa-regular fa-eye"></i>
                </div>
              </div>
            </div>
            <div className="absolute bottom-[40px] right-[10px] flex h-[30px] w-[30px] items-center justify-center rounded-full bg-gray-400 object-cover transition-all duration-300 group-hover:bg-green-400">
              <i className="fa-solid fa-cart-shopping group-hover:text-white"></i>
            </div>
            <div className="ml-[10px]">
              <h2 className="mt-3 text-xl capitalize transition-all duration-300 group-hover:text-green-400">
                Bắp cải tươi
              </h2>
              <p className="text-lg">$12.00</p>
              <div className="flex">
                <FaStar size={15} style={{ color: 'yellow	' }} />
                <FaStar size={15} style={{ color: 'yellow	' }} />
                <FaStar size={15} style={{ color: 'yellow	' }} />
                <FaStar size={15} style={{ color: 'yellow	' }} />
                <FaStar size={15} />
              </div>
            </div>
          </div>
          <div className="group relative w-[264px] h-[327px] border border-[#E6E6E6] hover:border-green-800 shadow hover:shadow-green-800 mx-auto">
            <div className="relative overflow-hidden">
              <img className="w-full object-cover" src={Product9} alt="" />
              <div className="absolute -bottom-10 flex h-full w-full items-center justify-center  opacity-0 transition-all duration-300 group-hover:bottom-0 group-hover:opacity-100">
                <div className="absolute top-[10px] right-[10px] flex h-[30px] w-[30px] items-center justify-center rounded-full border bg-white  ">
                  <i className="fa-regular fa-heart"></i>
                </div>
                <div className="absolute top-[50px] right-[10px] flex h-[30px] w-[30px] items-center justify-center rounded-full border bg-white  ">
                  <i className="fa-regular fa-eye"></i>
                </div>
              </div>
            </div>
            <div className="absolute bottom-[40px] right-[10px] flex h-[30px] w-[30px] items-center justify-center rounded-full bg-gray-400 object-cover transition-all duration-300 group-hover:bg-green-400">
              <i className="fa-solid fa-cart-shopping group-hover:text-white"></i>
            </div>
            <div className="ml-[10px]">
              <h2 className="mt-3 text-xl capitalize transition-all duration-300 group-hover:text-green-400">
                Bắp cải tươi
              </h2>
              <p className="text-lg">$12.00</p>
              <div className="flex">
                <FaStar size={15} style={{ color: 'yellow	' }} />
                <FaStar size={15} style={{ color: 'yellow	' }} />
                <FaStar size={15} style={{ color: 'yellow	' }} />
                <FaStar size={15} style={{ color: 'yellow	' }} />
                <FaStar size={15} />
              </div>
            </div>
          </div>
          <div className="group relative w-[264px] h-[327px] border border-[#E6E6E6] hover:border-green-800 shadow hover:shadow-green-800 mx-auto">
            <div className="relative overflow-hidden">
              <img className="w-full object-cover" src={Product10} alt="" />
              <div className="absolute -bottom-10 flex h-full w-full items-center justify-center  opacity-0 transition-all duration-300 group-hover:bottom-0 group-hover:opacity-100">
                <div className="absolute top-[10px] right-[10px] flex h-[30px] w-[30px] items-center justify-center rounded-full border bg-white  ">
                  <i className="fa-regular fa-heart"></i>
                </div>
                <div className="absolute top-[50px] right-[10px] flex h-[30px] w-[30px] items-center justify-center rounded-full border bg-white  ">
                  <i className="fa-regular fa-eye"></i>
                </div>
              </div>
            </div>
            <div className="absolute bottom-[40px] right-[10px] flex h-[30px] w-[30px] items-center justify-center rounded-full bg-gray-400 object-cover transition-all duration-300 group-hover:bg-green-400">
              <i className="fa-solid fa-cart-shopping group-hover:text-white"></i>
            </div>
            <div className="ml-[10px]">
              <h2 className="mt-3 text-xl capitalize transition-all duration-300 group-hover:text-green-400">
                Bắp cải tươi
              </h2>
              <p className="text-lg">$12.00</p>
              <div className="flex">
                <FaStar size={15} style={{ color: 'yellow	' }} />
                <FaStar size={15} style={{ color: 'yellow	' }} />
                <FaStar size={15} style={{ color: 'yellow	' }} />
                <FaStar size={15} style={{ color: 'yellow	' }} />
                <FaStar size={15} />
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Quản cáo */}
      <div className="ml-[140px] w-[1265px] h-[540px] mt-[50px] flex gap-6">
        <img src={QuangCao1} alt="" />
        <img src={QuangCao2} alt="" />
        <img src={QuangCao3} alt="" />
      </div>

      {/* Ưu đãi hấp dẫn */}
      <nav className="w-full h-[1070px] mt-[40px] bg-gray-100">
        <p className="text-[32px] font-poppins font-bold ml-[100px]">
          Ưu đãi hấp dẫn
        </p>
        <div className="flex ml-[110px]">
          <div className="w-[264px] h-[327px] left-0 top-[60px] bg-white border border-[#E6E6E6] hover:border-green-800 shadow hover:shadow-green-800">
            <img src={Product1} alt="" />
            <p className="ml-2 text-customGray">Táo xanh</p>
            <div className="flex">
              <p>$14.99</p>
              <p className="line-through text-gray-500">$20.99</p>
              {/* <StarRating totalStars={5} /> */}
              <div className="ml-[100px]">
                <PiHandbagLight size={25} />
              </div>
            </div>
          </div>
          <div className="w-[264px] h-[327px] left-0 top-[60px] bg-white border border-[#E6E6E6] hover:border-green-800 shadow hover:shadow-green-800">
            <img src={Product1} alt="" />
            <p className="ml-2 text-customGray">Táo xanh</p>
            <div className="flex">
              <p>$14.99</p>
              <p className="line-through">$20.99</p>
              <div className="ml-[100px]">
                <PiHandbagLight size={25} />
              </div>
              {/* <StarRating totalStars={5} /> */}
            </div>
          </div>
          <div className="w-[264px] h-[327px] left-0 top-[60px] bg-white border border-[#E6E6E6] hover:border-green-800 shadow hover:shadow-green-800">
            <img src={Product1} alt="" />
            <p className="ml-2 text-customGray">Táo xanh</p>
            <div className="flex">
              <p>$14.99</p>
              <p className="line-through">$20.99</p>
              <div className="ml-[100px]">
                <PiHandbagLight size={25} />
              </div>
              {/* <StarRating totalStars={5} /> */}
            </div>
          </div>
          <div className="w-[264px] h-[327px] left-0 top-[60px] bg-white border border-[#E6E6E6] hover:border-green-800 shadow hover:shadow-green-800">
            <img src={Product1} alt="" />
            <p className="ml-2 text-customGray">Táo xanh</p>
            <div className="flex">
              <p>$14.99</p>
              <p className="line-through">$20.99</p>
              <div className="ml-[100px]">
                <PiHandbagLight size={25} />
              </div>
              {/* <StarRating totalStars={5} /> */}
            </div>
          </div>
          <div className="w-[264px] h-[327px] left-0 top-[60px] bg-white border border-[#E6E6E6] hover:border-green-800 shadow hover:shadow-green-800">
            <img src={Product1} alt="" />
            <p className="ml-2 text-customGray">Táo xanh</p>
            <div className="flex">
              <p>$14.99</p>
              <p className="line-through">$20.99</p>
              <div className="ml-[100px]">
                <PiHandbagLight size={25} />
              </div>
              {/* <StarRating totalStars={5} /> */}
            </div>
          </div>
        </div>
        {/*  */}
        <div className="flex ml-[110px]">
          <div className="w-[264px] h-[327px] left-0 top-[60px] bg-white border border-[#E6E6E6] hover:border-green-800 shadow hover:shadow-green-800">
            <img src={Product1} alt="" />
            <p className="ml-2 text-customGray">Táo xanh</p>
            <div className="flex">
              <p>$14.99</p>
              <p className="line-through">$20.99</p>
              <div className="ml-[100px]">
                <PiHandbagLight size={25} />
              </div>
              {/* <StarRating totalStars={5} /> */}
            </div>
          </div>
          <div className="w-[264px] h-[327px] left-0 top-[60px] bg-white border border-[#E6E6E6] hover:border-green-800 shadow hover:shadow-green-800">
            <img src={Product1} alt="" />
            <p className="ml-2 text-customGray">Táo xanh</p>
            <div className="flex">
              <p>$14.99</p>
              <p className="line-through">$20.99</p>
              <div className="ml-[100px]">
                <PiHandbagLight size={25} />
              </div>
              {/* <StarRating totalStars={5} /> */}
            </div>
          </div>
          <div className="w-[264px] h-[327px] left-0 top-[60px] bg-white border border-[#E6E6E6] hover:border-green-800 shadow hover:shadow-green-800">
            <img src={Product1} alt="" />
            <p className="ml-2 text-customGray">Táo xanh</p>
            <div className="flex">
              <p>$14.99</p>
              <p className="line-through">$20.99</p>
              <div className="ml-[100px]">
                <PiHandbagLight size={25} />
              </div>
              {/* <StarRating totalStars={5} /> */}
            </div>
          </div>
          <div className="w-[264px] h-[327px] left-0 top-[60px] bg-white border border-[#E6E6E6] hover:border-green-800 shadow hover:shadow-green-800">
            <img src={Product1} alt="" />
            <p className="ml-2 text-customGray">Táo xanh</p>
            <div className="flex">
              <p>$14.99</p>
              <p className="line-through">$20.99</p>
              <div className="ml-[100px]">
                <PiHandbagLight size={25} />
              </div>
              {/* <StarRating totalStars={5} /> */}
            </div>
          </div>
          <div className="w-[264px] h-[327px] left-0 top-[60px] bg-white border border-[#E6E6E6] hover:border-green-800 shadow hover:shadow-green-800">
            <img src={Product1} alt="" />
            <p className="ml-2 text-customGray">Táo xanh</p>
            <div className="flex">
              <p>$14.99</p>
              <p className="line-through">$20.99</p>
              <div className="ml-[100px]">
                <PiHandbagLight size={25} />
              </div>
              {/* <StarRating totalStars={5} /> */}
            </div>
          </div>
        </div>
        {/*  */}
        <div className="flex ml-[110px]">
          <div className="w-[264px] h-[327px] left-0 top-[60px] bg-white border border-[#E6E6E6] hover:border-green-800 shadow hover:shadow-green-800">
            <img src={Product1} alt="" />
            <p className="ml-2 text-customGray">Táo xanh</p>
            <div className="flex">
              <p>$14.99</p>
              <p className="line-through">$20.99</p>
              <div className="ml-[100px]">
                <PiHandbagLight size={25} />
              </div>
              {/* <StarRating totalStars={5} /> */}
            </div>
          </div>
          <div className="w-[264px] h-[327px] left-0 top-[60px] bg-white border border-[#E6E6E6] hover:border-green-800 shadow hover:shadow-green-800">
            <img src={Product1} alt="" />
            <p className="ml-2 text-customGray">Táo xanh</p>
            <div className="flex">
              <p>$14.99</p>
              <p className="line-through">$20.99</p>
              <div className="ml-[100px]">
                <PiHandbagLight size={25} />
              </div>
              {/* <StarRating totalStars={5} /> */}
            </div>
          </div>
          <div className="w-[264px] h-[327px] left-0 top-[60px] bg-white border border-[#E6E6E6] hover:border-green-800 shadow hover:shadow-green-800">
            <img src={Product1} alt="" />
            <p className="ml-2 text-customGray">Táo xanh</p>
            <div className="flex">
              <p>$14.99</p>
              <p className="line-through">$20.99</p>
              <div className="ml-[100px]">
                <PiHandbagLight size={25} />
              </div>
              {/* <StarRating totalStars={5} /> */}
            </div>
          </div>
          <div className="w-[264px] h-[327px] left-0 top-[60px] bg-white border border-[#E6E6E6] hover:border-green-800 shadow hover:shadow-green-800">
            <img src={Product1} alt="" />
            <p className="ml-2 text-customGray">Táo xanh</p>
            <div className="flex">
              <p>$14.99</p>
              <p className="line-through">$20.99</p>
              <div className="ml-[100px]">
                <PiHandbagLight size={25} />
              </div>
              {/* <StarRating totalStars={5} /> */}
            </div>
          </div>
          <div className="w-[264px] h-[327px] left-0 top-[60px] bg-white border border-[#E6E6E6] hover:border-green-800 shadow hover:shadow-green-800">
            <img src={Product1} alt="" />
            <p className="ml-2 text-customGray">Táo xanh</p>
            <div className="flex">
              <p>$14.99</p>
              <p className="line-through">$20.99</p>
              <div className="ml-[100px]">
                <PiHandbagLight size={25} />
              </div>
              {/* <StarRating totalStars={5} /> */}
            </div>
          </div>
        </div>
      </nav>

      {/* Quảng cáo */}
      <div className="mt-[50px] ml-[110px]">
        <img src={QuangCaoTo} alt="" />
      </div>
      <nav className="">
        <div></div>
      </nav>
      {/* Tin Tức  */}
      <nav className="ml-[30px] mt-[40px]">
        <p className="ml-[650px] text-[32px] font-poppins font-bold">
          Tin mới nhất
        </p>
        <div className="flex mt-[20px] gap-[100px]">
          <div className="w-[424] h-[494px] relative">
            <img src={TinTuc1} alt="" />
            <div className="w-[424px] h-[170px] border border-gray-300 rounded-b-[10px]">
              {/*  */}
              <div className="flex gap-[30px] mt-[20px] ml-[20px]">
                <div className="flex items-center gap-1">
                  <PiTagLight size={20} style={{ color: '#4D4D4D' }} />
                  <a href="#" className="text-[15px]">
                    Food
                  </a>
                </div>
                <div className="flex items-center gap-1">
                  <CiUser size={20} style={{ color: '#4D4D4D' }} />
                  <a href="#" className="text-[15px]">
                    By Admin
                  </a>
                </div>
                <div className="flex items-center gap-1">
                  <TfiComment size={20} style={{ color: '#4D4D4D' }} />
                  <a href="#" className="text-[15px]">
                    65 Comments
                  </a>
                </div>
              </div>
              <p className="text-[22px] ml-[20px]">
                Curabitur porttitor orci eget neque accumsan venenatis. Nunc
                fermentum.
              </p>
              <div className="flex items-center gap-[10px] ml-[20px] mt-[20px]">
                <a href="#" className="text-15px" style={{ color: 'green' }}>
                  Đọc Thêm
                </a>
                <VscArrowRight size={20} style={{ color: 'green' }} />
              </div>
            </div>
          </div>
          {/*  */}
          <div className="w-[424] h-[494px] relative">
            <img src={TinTuc2} alt="" />
            <div className="w-[424px] h-[170px] border border-gray-300 rounded-b-[10px]">
              {/*  */}
              <div className="flex gap-[30px] mt-[20px] ml-[20px]">
                <div className="flex items-center gap-1">
                  <PiTagLight size={20} style={{ color: '#4D4D4D' }} />
                  <a href="#" className="text-[15px]">
                    Food
                  </a>
                </div>
                <div className="flex items-center gap-1">
                  <CiUser size={20} style={{ color: '#4D4D4D' }} />
                  <a href="#" className="text-[15px]">
                    By Admin
                  </a>
                </div>
                <div className="flex items-center gap-1">
                  <TfiComment size={20} style={{ color: '#4D4D4D' }} />
                  <a href="#" className="text-[15px]">
                    65 Comments
                  </a>
                </div>
              </div>
              <p className="text-[22px] ml-[20px]">
                Curabitur porttitor orci eget neque accumsan venenatis. Nunc
                fermentum.
              </p>
              <div className="flex items-center gap-[10px] ml-[20px] mt-[20px]">
                <a href="#" className="text-15px" style={{ color: 'green' }}>
                  Đọc Thêm
                </a>
                <VscArrowRight size={20} style={{ color: 'green' }} />
              </div>
            </div>
          </div>
          <div className="w-[424] h-[494px] relative">
            <img src={TinTuc3} alt="" />
            <div className="w-[424px] h-[170px] border border-gray-300 rounded-b-[10px]">
              {/*  */}
              <div className="flex gap-[30px] mt-[20px] ml-[20px]">
                <div className="flex items-center gap-1">
                  <PiTagLight size={20} style={{ color: '#4D4D4D' }} />
                  <a href="#" className="text-[15px]">
                    Food
                  </a>
                </div>
                <div className="flex items-center gap-1">
                  <CiUser size={20} style={{ color: '#4D4D4D' }} />
                  <a href="#" className="text-[15px]">
                    By Admin
                  </a>
                </div>
                <div className="flex items-center gap-1">
                  <TfiComment size={20} style={{ color: '#4D4D4D' }} />
                  <a href="#" className="text-[15px]">
                    65 Comments
                  </a>
                </div>
              </div>
              <p className="text-[22px] ml-[20px]">
                Curabitur porttitor orci eget neque accumsan venenatis. Nunc
                fermentum.
              </p>
              <div className="flex items-center gap-[10px] ml-[20px] mt-[20px]">
                <a href="#" className="text-15px" style={{ color: 'green' }}>
                  Đọc Thêm
                </a>
                <VscArrowRight size={20} style={{ color: 'green' }} />
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* comment */}
      <nav className="w-[1920px] h-[454px] mt-[50px] bg-gray-100">
        <div className="flex">
          <p className="text-[32px] font-poppins font-bold ml-[108px] mt-[40px]">
            Đánh giá của khách hàng
          </p>
          <div className="mt-[50px] ml-[850px] flex gap-4">
            <FaCircleArrowLeft size={30} />
            <FaCircleArrowRight size={30} />
          </div>
        </div>
        <div className="w-[1320px] h-[254px] ml-[108px] mt-[50px] flex justify-center gap-3">
          <div className="w-[424px] h-full border border-black rounded-[10px] border-none bg-white relative">
            <div className="relative">
              <img src={Vector} alt="" className="ml-[20px] mt-[20px]" />
              <p className="text-[15px] mt-[20px] ml-[20px]">
                Pellentesque eu nibh eget mauris congue mattis mattis nec
                tellus. Phasellus imperdiet elit eu magna dictum, bibendum
                cursus velit sodales. Donec sed neque eget
              </p>
            </div>
            <div className="w-[376px] h-[64px] mt-[20px] ml-[20px] flex items-center">
              <div className="flex items-center gap-2">
                <img src={DaiDien1} alt="" />
                <div>
                  <p className="text-[16px] text-black font-poppins font-semibold">
                    Robert Fox
                  </p>
                  <p className="text-[14px] font-poppins text-gray-500">
                    Customer
                  </p>
                </div>
              </div>
              <div className="flex ml-auto mr-[5px]">
                <FaStar size={15} style={{ color: 'yellow	' }} />
                <FaStar size={15} style={{ color: 'yellow	' }} />
                <FaStar size={15} style={{ color: 'yellow	' }} />
                <FaStar size={15} style={{ color: 'yellow	' }} />
                <FaStar size={15} style={{ color: 'yellow	' }} />
              </div>
            </div>
          </div>
          {/*  */}
          <div className="w-[424px] h-full border border-black rounded-[10px] border-none bg-white relative">
            <div className="relative">
              <img src={Vector} alt="" className="ml-[20px] mt-[20px]" />
              <p className="text-[15px] mt-[20px] ml-[20px]">
                Pellentesque eu nibh eget mauris congue mattis mattis nec
                tellus. Phasellus imperdiet elit eu magna dictum, bibendum
                cursus velit sodales. Donec sed neque eget
              </p>
            </div>
            <div className="w-[376px] h-[64px] mt-[20px] ml-[20px] flex items-center">
              <div className="flex items-center gap-2">
                <img src={DaiDien1} alt="" />
                <div>
                  <p className="text-[16px] text-black font-poppins font-semibold">
                    Robert Fox
                  </p>
                  <p className="text-[14px] font-poppins text-gray-500">
                    Customer
                  </p>
                </div>
              </div>
              <div className="flex ml-auto mr-[5px]">
                <FaStar size={15} style={{ color: 'yellow	' }} />
                <FaStar size={15} style={{ color: 'yellow	' }} />
                <FaStar size={15} style={{ color: 'yellow	' }} />
                <FaStar size={15} style={{ color: 'yellow	' }} />
                <FaStar size={15} style={{ color: 'yellow	' }} />
              </div>
            </div>
          </div>
          {/*  */}
          <div className="w-[424px] h-full border border-black rounded-[10px] border-none bg-white relative">
            <div className="relative">
              <img src={Vector} alt="" className="ml-[20px] mt-[20px]" />
              <p className="text-[15px] mt-[20px] ml-[20px]">
                Pellentesque eu nibh eget mauris congue mattis mattis nec
                tellus. Phasellus imperdiet elit eu magna dictum, bibendum
                cursus velit sodales. Donec sed neque eget
              </p>
            </div>
            <div className="w-[376px] h-[64px] mt-[20px] ml-[20px] flex items-center">
              <div className="flex items-center gap-2">
                <img src={DaiDien1} alt="" />
                <div>
                  <p className="text-[16px] text-black font-poppins font-semibold">
                    Robert Fox
                  </p>
                  <p className="text-[14px] font-poppins text-gray-500">
                    Customer
                  </p>
                </div>
              </div>
              <div className="flex ml-auto mr-[5px]">
                <FaStar size={15} style={{ color: 'yellow	' }} />
                <FaStar size={15} style={{ color: 'yellow	' }} />
                <FaStar size={15} style={{ color: 'yellow	' }} />
                <FaStar size={15} style={{ color: 'yellow	' }} />
                <FaStar size={15} style={{ color: 'yellow	' }} />
              </div>
            </div>
          </div>
        </div>
      </nav>
      {/* Theo dỏi */}
      <nav className="w-[1320px] h-[270px]">
        <p className="text-[32px] font-poppins font-bold ml-[550px]">
          Theo dõi chúng tôi trên Instagram
        </p>
        <div className="flex gap-5 ml-[230px] mt-[20px]">
          <img src={Instagram1} alt="" />
          <img src={Instagram2} alt="" />
          <img src={Instagram3} alt="" />
          <img src={Instagram4} alt="" />
          <img src={Instagram5} alt="" />
          <img src={Instagram6} alt="" />
        </div>
      </nav>

      {/* Company Logo */}
      <nav className="flex justify-center">
        <img src={CompannyLogo} alt="" />
      </nav>

      {/* footer */}
      <nav className="w-[1920px] h-[527px]">
        {/*  */}
        <div className="w-[100%] h-[162px] flex items-center bg-gray-100">
          <div className="w-[448px] h-[82px] ml-[100px]">
            <p className="text-[24px] font-poppins font-medium">
              Đăng ký nhận thêm thông tin
            </p>
            <p className="text-[14px] text-gray-500">
              Pellentesque eu nibh eget mauris congue mattis mattis nec tellus.
              Phasellus imperdiet elit eu magna.
            </p>
          </div>
          <div className="ml-[100px] flex items-center justify-center mt-0 relative">
            <input
              type="text"
              className="border border-gray-300 focus:outline-none focus:border-gray-300 rounded px-5 py-2 w-96 h-12 p-3 gap-2 w-400 h-45 rounded-3xl "
              placeholder="Địa chỉ email của bạn"
            />
            <button
              className="bg-green-600 hover:bg-green-700 text-white font-bold w-36 h-12 py-2 px-4 rounded focus:outline-none focus:shadow-outline rounded-3xl absolute right-0"
              type="button"
            >
              Đăng Ký
            </button>
          </div>
          <div className="flex items-center ml-[200px] gap-4">
            <FaFacebook size={40} style={{ color: '#00B207' }} />
            <FaTwitter size={20} style={{ color: '#4D4D4D' }} />
            <img src={ChuKy} alt="" />
            <FaInstagram size={20} style={{ color: '#4D4D4D' }} />
          </div>
        </div>
        {/*  */}
        <div className="w-[100%] h-[365px] bg-neutral-900">
          {/*  */}
          <div className="w-[1252.5px] h-[250px] ml-[150px] flex justify-center gap-10">
            <div className="w-[337px] h-[250px]">
              <img src={FPTLogo} width="100" height="20" alt="" />
              <p style={{ color: '#808080' }}>
                Morbi cursus porttitor enim lobortis molestie. Duis gravida
                turpis dui, eget bibendum magna congue nec.
              </p>
              <div className="flex gap-3 mt-[20px]">
                <div className="border-b-2 border-green-500 text-white">
                  <p>(219) 555-0114</p>
                </div>
                <p style={{ color: '#808080' }}>or</p>
                <div className="border-b-2 border-green-500 text-white">
                  <p>Proxy@gmail.com</p>
                </div>
              </div>
            </div>
            {/*  */}
            <div className="flex justify-center mt-[31px] gap-5">
              {/* Tai Khoan cua toi */}
              <div className="pl-8">
                <h2 className="mb-6 text-sm font-semibold text-white uppercase dark:text-white">
                  Tài khoản của tôi
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <a href="#" className=" hover:text-white">
                      Tài khoản của tôi
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:text-white">
                      Lịch sử đặt hàng
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:text-white">
                      Giỏ hàng
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:text-white">
                      Yêu thích
                    </a>
                  </li>
                </ul>
              </div>
              {/* Trợ Giúp */}
              <div className="pl-8">
                <h2 className="mb-6 text-sm font-semibold text-white uppercase dark:text-white">
                  Trợ giúp
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <a href="#" className=" hover:text-white">
                      Contact
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:text-white">
                      Hỏi đáp
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:text-white">
                      Điều khoản & Điều kiện
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:text-white">
                      Chính sách bảo mật
                    </a>
                  </li>
                </ul>
              </div>
              {/*  */}
              <div className="pl-8">
                <h2 className="mb-6 text-sm font-semibold text-white uppercase dark:text-white">
                  Proxy
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <a href="#" className=" hover:text-white">
                      About
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:text-white">
                      Shop
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:text-white">
                      Sản phẩm
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:text-white">
                      Đơn hàng
                    </a>
                  </li>
                </ul>
              </div>
              {/*  */}
              <div className="pl-8">
                <h2 className="mb-6 text-sm font-semibold text-white uppercase dark:text-white">
                  Danh mục
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <a href="#" className=" hover:text-white">
                      Rau củ quả
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:text-white">
                      Thịt & Cá
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:text-white">
                      Bánh mì & Bakery
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:text-white">
                      Sắc đẹp & Sức khỏe
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/*  */}
          </div>
          <div className="w-[1220px] h-[80px] ml-[230px] flex items-center border-t border-gray-500">
            <p className="text-[14px]" style={{ color: '#808080' }}>
              Ecobazar eCommerce © 2021. All Rights Reserved
            </p>
            <div className="flex justify-center gap-2 ml-auto">
              <FaCcApplePay style={{ color: 'white' }} size={50} />
              <FaCcVisa style={{ color: 'white' }} size={50} />
              <FaCcDiscover style={{ color: 'white' }} size={50} />
              <FaCcMastercard style={{ color: 'white' }} size={50} />
              <MdOutlinePayment style={{ color: 'white' }} size={50} />
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Homepages
