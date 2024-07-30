import { FiMapPin } from 'react-icons/fi'
import { IoIosArrowDown } from 'react-icons/io'
import { BsHeart } from 'react-icons/bs'
import { PiHandbagLight } from 'react-icons/pi'
import { PiPhoneCallLight } from 'react-icons/pi'
import { Logo } from '../../assets/Home'
const Header = () => {
  return (
    <div>
      <div className="flex items-center justify-between px-4 text-gray-600 text-xs">
        <div className="flex items-center ml-32">
          <FiMapPin size={20} style={{ color: '#666666' }} />
          <p className="ml-2 cursor-pointer">
            FPT TEAM supermarket: Đồng Nai - TP. Biên Hòa
          </p>
        </div>

        {/* sigh in | sigh up */}
        <div className="ml-auto flex items-center mr-32 gap-2">
          <a href="#" className="ml-2">
            VN
          </a>
          <IoIosArrowDown size={10} style={{ color: '#666666' }} /> {/*icon*/}
          <a href="#" className="ml-2">
            VND
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
      </div>

      <div className="order-1 flex flex-grow-0 border border-solid border-gray-300">
        {/* header_2 */}
        {/* LogoFPT */}
        <div className="ml-[150px] w-[100px] bg-cover bg-center">
          <img src={Logo} width="100" height="20" alt="" />
        </div>
        <div className="ml-[255px] flex items-center justify-center mt-0">
          <input
            type="text"
            className="border border-solid border-gray-300 focus:outline-none focus:border-gray-300 rounded px-5 py-2 w-96 h-12 flex flex-row items-center p-3 gap-2 w-400 h-45"
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
        <div className="flex flex-row items-center gap-2 absolute w-160 h-34 left-[1220px] mt-[35px]">
          <div className=" left-6.76 right-6.76 top-13.35 bottom-12.28 cursor-pointer">
            <a href="#">
              <BsHeart style={{ color: '#1A1A1A' }} size={25} />
            </a>
          </div>
          <p className="ml-2 text-gray-300 text-xs items-center text-[25px] justify-center mb-[10px]">
            {' '}
            |{' '}
          </p>
          <div className="flex items-center gap-12 w-96 h-34 cursor-pointer">
            <a href="#">
              <PiHandbagLight size={25} />
            </a>
          </div>
        </div>
      </div>

      {/* menu */}
      <div className="flex items-center justify-around h-16 mt-0">
        <ul className="ml-1 flex items-center space-x-4 p-4 font-size-14">
          <li className="flex flex-row items-center p-0 gap-1 w-17 h-5 order-3 flex-none flex-grow-0">
            <a
              href="#home"
              className="text-[#00B207] hover:text-gray-400 font-size-14"
            >
              Home
            </a>
            <IoIosArrowDown size={20} style={{ color: '#666666' }} />
          </li>

          <li className="flex flex-row items-center p-0 gap-1 w-17 h-5 order-3 flex-none flex-grow-0">
            <a
              href="#"
              className="text-gray-600 hover:text-[#00B207] font-size-14"
            >
              Shop
            </a>
            <IoIosArrowDown size={20} style={{ color: '#666666' }} />
          </li>
          <li className="flex flex-row items-center p-0 gap-1 w-17 h-5 order-3 flex-none flex-grow-0">
            <a
              href="#services"
              className="text-gray-600 hover:text-[#00B207] font-size-14"
            >
              Pages
            </a>
            <IoIosArrowDown size={20} style={{ color: '#666666' }} />
          </li>
          <li className="flex flex-row items-center p-0 gap-1 w-17 h-5 order-3 flex-none flex-grow-0">
            <a
              href="#"
              className="text-gray-600 hover:text-[#00B207] font-size-14"
            >
              Tin tức
            </a>
            <IoIosArrowDown size={20} style={{ color: '#666666' }} />
          </li>
          <li className="flex flex-row items-center p-0 gap-1 w-17 h-5 order-3 flex-none flex-grow-0">
            <a
              href="#"
              className="text-gray-600 hover:text-[#00B207] font-size-14"
            >
              Giới thiệu
            </a>
          </li>
          <li className="flex flex-row items-center p-0 gap-1 w-17 h-5 order-3 flex-none flex-grow-0">
            <a
              href="#"
              className="text-gray-600 hover:text-[#00B207] font-size-14"
            >
              Liên hệ hotline
            </a>
          </li>
        </ul>
        <div className="flex items-center justify-end">
          <p className="text-[#1A1A1A] text-xs flex items-center font-size-20 ml-auto mr-2">
            <PiPhoneCallLight size={20} className="mr-1" />
            <span>(219) 555-0114</span>
          </p>
        </div>
      </div>
    </div>
  )
}
export default Header
