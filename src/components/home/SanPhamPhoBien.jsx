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
import { VscArrowRight } from 'react-icons/vsc'
import { FaStar } from 'react-icons/fa'
const SanPhamPhoBien = () => {
  return (
    <div className="h-[750px] mt-[40px]">
      <div className="flex items-center">
        <p className="text-[32px] font-poppins font-bold">Sản phẩm phổ biến</p>
        <div className="flex items-center gap-[10px] ml-auto mt-[20px]">
          <a href="#" className="text-15px" style={{ color: 'green' }}>
            Đọc Thêm
          </a>
          <VscArrowRight size={20} style={{ color: 'green' }} />
        </div>
      </div>
      <div className="flex mt-[20px]">
        <div className="group relative w-[264px] h-[327px] border border-solid border-solid border-[#E6E6E6] hover:border-green-800 shadow hover:shadow-green-800 mx-auto">
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
        <div className="group relative w-[264px] h-[327px] border border-solid border-solid border-[#E6E6E6] hover:border-green-800 shadow hover:shadow-green-800 mx-auto">
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
        <div className="group relative w-[264px] h-[327px] border border-solid border-solid border-[#E6E6E6] hover:border-green-800 shadow hover:shadow-green-800 mx-auto">
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
        <div className="group relative w-[264px] h-[327px] border border-solid border-solid border-[#E6E6E6] hover:border-green-800 shadow hover:shadow-green-800 mx-auto">
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
        <div className="group relative w-[264px] h-[327px] border border-solid border-solid border-[#E6E6E6] hover:border-green-800 shadow hover:shadow-green-800 mx-auto">
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
        <div className="group relative w-[264px] h-[327px] border border-solid border-solid border-[#E6E6E6] hover:border-green-800 shadow hover:shadow-green-800 mx-auto">
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
        <div className="group relative w-[264px] h-[327px] border border-solid border-solid border-[#E6E6E6] hover:border-green-800 shadow hover:shadow-green-800 mx-auto">
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
        <div className="group relative w-[264px] h-[327px] border border-solid border-solid border-[#E6E6E6] hover:border-green-800 shadow hover:shadow-green-800 mx-auto">
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
        <div className="group relative w-[264px] h-[327px] border border-solid border-[#E6E6E6] hover:border-green-800 shadow hover:shadow-green-800 mx-auto">
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
        <div className="group relative w-[264px] h-[327px] border border-solid border-[#E6E6E6] hover:border-green-800 shadow hover:shadow-green-800 mx-auto">
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
    </div>
  )
}
export default SanPhamPhoBien
