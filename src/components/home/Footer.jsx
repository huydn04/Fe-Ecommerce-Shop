import { FaFacebook } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { Logo } from '../../assets/Home'
import { ChuKy } from '../../assets/Home'
import { FaCcApplePay } from 'react-icons/fa'
import { FaCcVisa } from 'react-icons/fa'
import { FaCcDiscover } from 'react-icons/fa'
import { FaCcMastercard } from 'react-icons/fa'
import { MdOutlinePayment } from 'react-icons/md'
const Footer = () => {
  return (
    <div className="w-full">
      {/* footer */}
      <nav className=" h-[527px]">
        {/*  */}
        <div className=" h-[162px] flex justify-center items-center gap-20 bg-gray-100">
          <div className="w-[320px] h-[82px]">
            <p className="text-[24px] font-poppins">
              Đăng ký nhận thêm thông tin
            </p>
            <p className="text-[14px] text-gray-500">
              Pellentesque eu nibh eget mauris congue mattis mattis nec tellus.
              Phasellus imperdiet elit eu magna.
            </p>
          </div>
          <div className="flex  relative">
            <input
              type="text"
              className=" relative border border-gray-300 focus:outline-none focus:border-gray-300 px-5 py-2 h-11 p-3 gap-2 w-[420px] rounded-3xl "
              placeholder="Địa chỉ email của bạn"
            />
            <button
              className="bg-green-600 hover:bg-green-700 text-white font-bold w-[130px] h-11 focus:outline-none focus:shadow-outline rounded-full absolute right-0"
              type="button"
            >
              Đăng Ký
            </button>
          </div>
          <div className="flex items-center gap-4">
            <FaFacebook size={40} style={{ color: '#00B207' }} />
            <FaTwitter size={20} style={{ color: '#4D4D4D' }} />
            <img src={ChuKy} alt="" />
            <FaInstagram size={20} style={{ color: '#4D4D4D' }} />
          </div>
        </div>
        {/*  */}
        <div className="h-[365px] bg-neutral-900">
          {/*  */}
          <div className=" h-[250px] flex justify-center items-center gap-20">
            <div className="w-[310px] h-[250px]">
              <img src={Logo} className="w-[200px] top-8 relative" alt="" />
              <p className="absolute w-[350px]" style={{ color: '#808080' }}>
                Morbi cursus porttitor enim lobortis molestie. Duis gravida
                turpis dui, eget bibendum magna congue nec.
              </p>
              <div className="flex gap-3 mt-20">
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
            <div className="flex justify-center items-center mt-[85px] gap-16">
              {/* Tai Khoan cua toi */}
              <div className="flex flex-col gap-4">
                <h2 className=" text-sm font-semibold text-white uppercase dark:text-white">
                  Tài khoản của tôi
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 flex flex-col gap-4">
                  <li className="">
                    <a href="#" className=" hover:text-white">
                      Tài khoản của tôi
                    </a>
                  </li>
                  <li className="">
                    <a href="#" className="hover:text-white">
                      Lịch sử đặt hàng
                    </a>
                  </li>
                  <li className="">
                    <a href="#" className="hover:text-white">
                      Giỏ hàng
                    </a>
                  </li>
                  <li className="">
                    <a href="#" className="hover:text-white">
                      Yêu thích
                    </a>
                  </li>
                </ul>
              </div>
              {/* Trợ Giúp */}
              <div className="flex flex-col gap-4">
                <h2 className=" text-sm font-semibold text-white uppercase dark:text-white">
                  Trợ giúp
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 flex flex-col gap-4">
                  <li className="">
                    <a href="#" className=" hover:text-white">
                      Liên hệ
                    </a>
                  </li>
                  <li className="">
                    <a href="#" className="hover:text-white">
                      Hỏi đáp
                    </a>
                  </li>
                  <li className="">
                    <a href="#" className="hover:text-white">
                      Điều khoản & Điều kiện
                    </a>
                  </li>
                  <li className="">
                    <a href="#" className="hover:text-white">
                      Chính sách bảo mật
                    </a>
                  </li>
                </ul>
              </div>
              {/*  */}
              <div className="flex flex-col gap-4">
                <h2 className=" text-sm font-semibold text-white uppercase dark:text-white">
                  Proxy
                </h2>
                <ul className="text-gray-500 dark:text-gray-400  flex flex-col gap-4">
                  <li className="">
                    <a href="#" className=" hover:text-white">
                      About
                    </a>
                  </li>
                  <li className="">
                    <a href="#" className="hover:text-white">
                      Shop
                    </a>
                  </li>
                  <li className="">
                    <a href="#" className="hover:text-white">
                      Sản phẩm
                    </a>
                  </li>
                  <li className="">
                    <a href="#" className="hover:text-white">
                      Đơn hàng
                    </a>
                  </li>
                </ul>
              </div>
              {/*  */}
              <div className="flex flex-col gap-4">
                <h2 className=" text-sm font-semibold text-white uppercase dark:text-white">
                  Loại
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 flex flex-col gap-4">
                  <li className="">
                    <a href="#" className=" hover:text-white">
                      Trái cây & Rau quả
                    </a>
                  </li>
                  <li className="">
                    <a href="#" className="hover:text-white">
                      Thịt & Cá
                    </a>
                  </li>
                  <li className="">
                    <a href="#" className="hover:text-white">
                      Bánh mì & Bakery
                    </a>
                  </li>
                  <li className="">
                    <a href="#" className="hover:text-white">
                      Sắc đẹp & Sức khỏe
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/*  */}
          </div>
          <div className=" h-[60px] mt-9 pt-5 pl-24 pr-24 flex items-center justify-center gap-[450px] border-t border-solid border-gray-700">
            <p className="text-[14px]" style={{ color: '#808080' }}>
              Ecobazar eCommerce © 2021. All Rights Reserved
            </p>
            <div className="flex justify-center gap-3">
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
