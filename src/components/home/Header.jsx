import { FiMapPin } from 'react-icons/fi'
import { IoIosArrowDown } from 'react-icons/io'
import { BsHeart } from 'react-icons/bs'
import { PiHandbagLight } from 'react-icons/pi'
import { PiPhoneCallLight } from 'react-icons/pi'
import { IoSearch } from "react-icons/io5";
import { Logo } from '../../assets/Home'
import { Link } from 'react-router-dom'
// import cartPop from '../../pages/users/cartPop'


const Header = () => {
  const navigateTo = (url) => {
    window.location.href = url
  }
  return (
    <div className=" bg-white shadow-sm">
      <div className="">
        {/* First Row */}
        <div className="flex justify-between items-center py-2 border-b border-solid border-gray-300 text-gray-600 text-xs">
          <div className="flex items-center ml-[100px] gap-2">
            <FiMapPin size={20} style={{ color: '#666666' }} />
            <p
              className="cursor-pointer"
              onClick={() =>
                navigateTo('https://maps.app.goo.gl/RGdwzNAUfSxmwYGE8')
              }
            >
              FPT TEAM supermarket: Đồng Nai - TP. Biên Hòa
            </p>
          </div>
          <div className="flex items-center gap-2 mr-[50px]">
            <a href="#" className="ml-2">
              VN
            </a>
            <IoIosArrowDown size={10} style={{ color: '#666666' }} />
            <a href="#" className="ml-2">
              VND
            </a>
            <IoIosArrowDown size={10} style={{ color: '#666666' }} />
            <p className="mx-2 text-gray-300">|</p>
            <Link to='/login-user' className="ml-2">
              Đăng nhập
            </Link>
            <p className="mx-1">/</p>
            <Link to ='/create-user' className="ml-2">
              Đăng ký
            </Link>
          </div>
        </div>

        {/* Second Row */}
        <div className="flex items-center justify-center gap-32 h-24 pl-28 pr-28">
          {/* Logo */}
          <div className="">
            <img src={Logo} alt="Logo" className="w-[150px]" />
          </div>
          {/* Search */}

          <div className="relative">
            <input
              type="text"
              className="border border-solid border-gray-300 pl-10 focus:outline-none focus:border-gray-300 px-5 py-2 h-11 p-3 gap-2 w-[550px] h-45 rounded-lg "
              placeholder="Tìm kiếm sản phẩm..."
            />
            <IoSearch className='absolute left-3 top-3 text-xl text-gray-500' />
            <button
              className="bg-[#00b206df] hover:bg-green-600 text-white font-semibold w-36 h-11 py-2 px-4 rounded-r-lg focus:outline-none focus:shadow-outline absolute right-0">
              Tìm kiếm
            </button>
          </div>

          <div className="flex items-center gap-4 ">
            <a href="#" className="text-gray-600 hover:text-[#00B207]">
              <BsHeart size={25} />
            </a>
            <a href="#" className="text-gray-600 hover:text-[#00B207]">
              <PiHandbagLight size={25} />
            </a>
          </div>
        </div>

        {/* Third Row */}
        <div className="flex justify-around items-center py-2 bg-[#1A1A1A] px-4 w-full h-16">
          <ul className="flex space-x-4">
            <li className="flex items-center">
              <Link to='/home-pages' className="text-[#999999] hover:text-[#00B207]">
                Trang chủ
              </Link>

            </li>
            <li className="flex items-center">
              <Link to='/menu-pages' className="text-[#999999] hover:text-[#00B207]">
                Cửa hàng
              </Link>

            </li>
            <li className="flex items-center">
              <a href="#pages" className="text-[#999999] hover:text-[#00B207]">
                Trang khác
              </a>
              <IoIosArrowDown className='w-[16px] ml-1 mt-0.5 text-gray-500' />
            </li>
            <li className="flex items-center">
              <a href="#news" className="text-[#999999] hover:text-[#00B207]">
                Tin tức
              </a>

            </li>
            <li className="flex items-center">
              <Link to='/about-page' className="text-[#999999] hover:text-[#00B207]">
                Giới thiệu
              </Link>
            </li>
            <li className="flex items-center">
              <a
                href="#contact"
                className="text-[#999999] hover:text-[#00B207]"
              >
                Liên hệ
              </a>
            </li>
          </ul>
          <div className="flex items-center">
            <PiPhoneCallLight size={20} className="text-[#FFFFFF] mr-2" />
            <span className="text-[#FFFFFF]">(219) 555-0114</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
