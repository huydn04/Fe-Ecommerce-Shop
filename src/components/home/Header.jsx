import { FiMapPin } from 'react-icons/fi'
import { IoIosArrowDown } from 'react-icons/io'
import { BsHeart } from 'react-icons/bs'
import { PiHandbagLight } from 'react-icons/pi'
import { PiPhoneCallLight } from 'react-icons/pi'
import { Logo } from '../../assets/Home'
import cartPop from '../../pages/users/cartPop'


const Header = () => {
  const navigateTo = (url) => {
    window.location.href = url
  }
  return (
    <div className="w-full bg-white shadow-sm">
      <div className="container mx-auto px-0">
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
            <a href="#" className="ml-2">
              Đăng nhập
            </a>
            <p className="mx-1">/</p>
            <a href="#" className="ml-2">
              Đăng ký
            </a>
          </div>
        </div>

        {/* Second Row */}
        <div className="flex items-center justify-between py-2">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="w-[100px] ml-[140px]">
              <img src={Logo} alt="Logo" className="w-full h-auto" />
            </div>
            {/* Search */}

            <div className="ml-[290px] flex items-center justify-center mt-0 relative">
              <input
                type="text"
                className="border border-solid border-gray-300 focus:outline-none focus:border-gray-300 rounded px-5 py-2 w-96 h-12 p-3 gap-2 w-[500px] h-45 rounded-l "
                placeholder="Search"
              />
              <button
                className="bg-[#00B207] hover:bg-green-700 text-white font-bold w-36 h-12 py-2 px-4 rounded focus:outline-none focus:shadow-outline rounded-l absolute right-0"
                type="button"
              >
                Tìm kiếm
              </button>
            </div>
          </div>
          <div className="flex items-center gap-4 mr-[120px]">
            <a href="#" className="text-gray-600 hover:text-[#00B207]">
              <BsHeart size={25} />
            </a>
            <a href="#" className="text-gray-600 hover:text-[#00B207]">
              <PiHandbagLight size={25} />
            </a>
          </div>
        </div>

        {/* Third Row */}
        <div className="flex justify-between justify-around items-center py-2 bg-[#1A1A1A] px-4 w-full h-16 border-t border-solid border-gray-300 ">
          <ul className="flex space-x-4">
            <li className="flex items-center">
              <a href="#home" className="text-[#999999] hover:text-[#00B207]">

                Trang chủ

              </a>
    
            </li>
            <li className="flex items-center">
              <a href="#shop" className="text-[#999999] hover:text-[#00B207]">
                Cửa hàng
              </a>
 
            </li>
            <li className="flex items-center">
              <a href="#pages" className="text-[#999999] hover:text-[#00B207]">
                Trang khác
              </a>
              <IoIosArrowDown size={20} style={{ color: '#666666' }} />
            </li>
            <li className="flex items-center">
              <a href="#news" className="text-[#999999] hover:text-[#00B207]">
                Tin tức
              </a>
           
            </li>
            <li className="flex items-center">
              <a href="#about" className="text-[#999999] hover:text-[#00B207]">
                Giới thiệu
              </a>
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
