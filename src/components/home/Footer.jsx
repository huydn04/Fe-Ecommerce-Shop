import { FaFacebook } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FPTLogo } from '../../assets/Home'
import { ChuKy } from '../../assets/Home'
import { FaCcApplePay } from 'react-icons/fa'
import { FaCcVisa } from 'react-icons/fa'
import { FaCcDiscover } from 'react-icons/fa'
import { FaCcMastercard } from 'react-icons/fa'
import { MdOutlinePayment } from 'react-icons/md'
const Footer = () => {
  return (
    <div>
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
export default Footer
