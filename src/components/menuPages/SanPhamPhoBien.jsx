import { Product1 } from '../../assets/Home'
import { FaStar } from 'react-icons/fa'
// Ảnh sản phẩm
import { DauAn } from '../../assets/MenuPage'
import { Duong } from '../../assets/MenuPage'
import { Muoi } from '../../assets/MenuPage'
import { Tieu } from '../../assets/MenuPage'
import { Gao } from '../../assets/MenuPage'
import { NuocTuong } from '../../assets/MenuPage'
const SanPhamPhoBien = () => {
  return (
    <div>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
      />
      <div></div>
      <div>
        <div className="gap-3 flex ml-[10px]">
          <div className="group relative w-[264px] h-[327px] border border-solid rounded-lg border-[#E6E6E6] hover:border-[#2C742F] shadow hover:shadow-green-800 mx-auto cursor-pointer">
            <div className="relative overflow-hidden">
              <img className="w-[90%] object-cover" src={DauAn} alt="" />
              <div className="absolute -bottom-10 flex h-full w-full items-center justify-center  opacity-0 transition-all duration-300 group-hover:bottom-0 group-hover:opacity-100">
                <div className="absolute top-[10px] right-[10px] flex h-[30px] w-[30px] items-center justify-center rounded-full border bg-white  ">
                  <i className="fa-regular fa-heart"></i>
                </div>
                <div className="absolute top-[50px] right-[10px] flex h-[30px] w-[30px] items-center justify-center rounded-full border bg-white  ">
                  <i className="fa-regular fa-eye"></i>
                </div>
              </div>
            </div>
            <div className="absolute bottom-[40px] right-[10px] flex h-[30px] w-[30px] items-center justify-center rounded-full bg-gray-400 object-cover transition-all duration-300 group-hover:bg-[#00B207]">
              <i className="fa-solid fa-cart-shopping group-hover:text-white"></i>
            </div>
            <div className="ml-[10px] gap-1">
              <h2 className="mt-3 text-[14px] capitalize transition-all duration-300 group-hover:text-[#2C742F]">
                Dầu ăn Tường An 1 Lít
              </h2>
              <p className="text-lg">140.000VNĐ</p>
              <div className="flex">
                <FaStar size={15} style={{ color: 'yellow	' }} />
                <FaStar size={15} style={{ color: 'yellow	' }} />
                <FaStar size={15} style={{ color: 'yellow	' }} />
                <FaStar size={15} style={{ color: 'yellow	' }} />
                <FaStar size={15} />
              </div>
            </div>
          </div>
          <div className="group relative w-[264px] h-[327px] border border-solid rounded-lg border-[#E6E6E6] hover:border-[#2C742F] shadow hover:shadow-green-800 mx-auto cursor-pointer">
            <div className="relative overflow-hidden">
              <img className="w-[65%] object-cover" src={Duong} alt="" />
              <div className="absolute -bottom-10 flex h-full w-full items-center justify-center  opacity-0 transition-all duration-300 group-hover:bottom-0 group-hover:opacity-100">
                <div className="absolute top-[10px] right-[10px] flex h-[30px] w-[30px] items-center justify-center rounded-full border bg-white  ">
                  <i className="fa-regular fa-heart"></i>
                </div>
                <div className="absolute top-[50px] right-[10px] flex h-[30px] w-[30px] items-center justify-center rounded-full border bg-white  ">
                  <i className="fa-regular fa-eye"></i>
                </div>
              </div>
            </div>
            <div className="absolute bottom-[40px] right-[10px] flex h-[30px] w-[30px] items-center justify-center rounded-full bg-gray-400 object-cover transition-all duration-300 group-hover:bg-[#00B207]">
              <i className="fa-solid fa-cart-shopping group-hover:text-white"></i>
            </div>
            <div className="ml-[10px] gap-1">
              <h2 className="mt-3 text-[14px] capitalize transition-all duration-300 group-hover:text-[#2C742F]">
                Đường Tinh Luyện Biên Hoà 500g
              </h2>
              <p className="text-lg">140.000VNĐ</p>
              <div className="flex">
                <FaStar size={15} style={{ color: 'yellow	' }} />
                <FaStar size={15} style={{ color: 'yellow	' }} />
                <FaStar size={15} style={{ color: 'yellow	' }} />
                <FaStar size={15} style={{ color: 'yellow	' }} />
                <FaStar size={15} />
              </div>
            </div>
          </div>
          <div className="group relative w-[264px] h-[327px] border border-solid rounded-lg border-[#E6E6E6] hover:border-[#2C742F] shadow hover:shadow-green-800 mx-auto cursor-pointer">
            <div className="relative overflow-hidden">
              <img className="w-[86%] object-cover" src={Muoi} alt="" />
              <div className="absolute -bottom-10 flex h-full w-full items-center justify-center  opacity-0 transition-all duration-300 group-hover:bottom-0 group-hover:opacity-100">
                <div className="absolute top-[10px] right-[10px] flex h-[30px] w-[30px] items-center justify-center rounded-full border bg-white  ">
                  <i className="fa-regular fa-heart"></i>
                </div>
                <div className="absolute top-[50px] right-[10px] flex h-[30px] w-[30px] items-center justify-center rounded-full border bg-white  ">
                  <i className="fa-regular fa-eye"></i>
                </div>
              </div>
            </div>
            <div className="absolute bottom-[40px] right-[10px] flex h-[30px] w-[30px] items-center justify-center rounded-full bg-gray-400 object-cover transition-all duration-300 group-hover:bg-[#00B207]">
              <i className="fa-solid fa-cart-shopping group-hover:text-white"></i>
            </div>
            <div className="ml-[10px] gap-1">
              <h2 className="mt-3 text-[14px] capitalize transition-all duration-300 group-hover:text-[#2C742F]">
                Muối IOT 400g
              </h2>
              <p className="text-lg">140.000VNĐ</p>
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
      <div>
        <div className="gap-3 flex ml-[10px] mt-[10px]">
          <div className="group relative w-[264px] h-[327px] border border-solid rounded-lg border-[#E6E6E6] hover:border-[#2C742F] shadow hover:shadow-green-800 mx-auto cursor-pointer">
            <div className=" relative overflow-hidden">
              <img
                className="w-[90%] object-cover ml-[15px]"
                src={Tieu}
                alt=""
              />
              <div className="absolute -bottom-10 flex h-full w-full items-center justify-center  opacity-0 transition-all duration-300 group-hover:bottom-0 group-hover:opacity-100">
                <div className="absolute top-[10px] right-[10px] flex h-[30px] w-[30px] items-center justify-center rounded-full border bg-white  ">
                  <i className="fa-regular fa-heart"></i>
                </div>
                <div className="absolute top-[50px] right-[10px] flex h-[30px] w-[30px] items-center justify-center rounded-full border bg-white  ">
                  <i className="fa-regular fa-eye"></i>
                </div>
              </div>
            </div>
            <div className="absolute bottom-[40px] right-[10px] flex h-[30px] w-[30px] items-center justify-center rounded-full bg-gray-400 object-cover transition-all duration-300 group-hover:bg-[#00B207]">
              <i className="fa-solid fa-cart-shopping group-hover:text-white"></i>
            </div>
            <div className="ml-[10px] gap-1">
              <h2 className="mt-3 text-[14px] capitalize transition-all duration-300 group-hover:text-[#2C742F]">
                Hũ Bột Tiêu Đen
              </h2>
              <p className="text-lg">140.000VNĐ</p>
              <div className="flex">
                <FaStar size={15} style={{ color: 'yellow	' }} />
                <FaStar size={15} style={{ color: 'yellow	' }} />
                <FaStar size={15} style={{ color: 'yellow	' }} />
                <FaStar size={15} style={{ color: 'yellow	' }} />
                <FaStar size={15} />
              </div>
            </div>
          </div>
          <div className="group relative w-[264px] h-[327px] border border-solid rounded-lg border-[#E6E6E6] hover:border-[#2C742F] shadow hover:shadow-green-800 mx-auto cursor-pointer">
            <div className="relative overflow-hidden">
              <img
                className="w-[92%] object-cover ml-[20px]"
                src={Gao}
                alt=""
              />
              <div className="absolute -bottom-10 flex h-full w-full items-center justify-center  opacity-0 transition-all duration-300 group-hover:bottom-0 group-hover:opacity-100">
                <div className="absolute top-[10px] right-[10px] flex h-[30px] w-[30px] items-center justify-center rounded-full border bg-white  ">
                  <i className="fa-regular fa-heart"></i>
                </div>
                <div className="absolute top-[50px] right-[10px] flex h-[30px] w-[30px] items-center justify-center rounded-full border bg-white  ">
                  <i className="fa-regular fa-eye"></i>
                </div>
              </div>
            </div>
            <div className="absolute bottom-[40px] right-[10px] flex h-[30px] w-[30px] items-center justify-center rounded-full bg-gray-400 object-cover transition-all duration-300 group-hover:bg-[#00B207]">
              <i className="fa-solid fa-cart-shopping group-hover:text-white"></i>
            </div>
            <div className="ml-[10px] gap-1">
              <h2 className="mt-3 text-[14px] capitalize transition-all duration-300 group-hover:text-[#2C742F]">
                Gạo ST25 túi 5kg hút chân không
              </h2>
              <p className="text-lg">140.000VNĐ</p>
              <div className="flex">
                <FaStar size={15} style={{ color: 'yellow	' }} />
                <FaStar size={15} style={{ color: 'yellow	' }} />
                <FaStar size={15} style={{ color: 'yellow	' }} />
                <FaStar size={15} style={{ color: 'yellow	' }} />
                <FaStar size={15} />
              </div>
            </div>
          </div>
          <div className="group relative w-[264px] h-[327px] border border-solid rounded-lg border-[#E6E6E6] hover:border-[#2C742F] shadow hover:shadow-green-800 mx-auto cursor-pointer">
            <div className="relative overflow-hidden">
              <img
                className="w-[82.9%] object-cover ml-[18px]"
                src={NuocTuong}
                alt=""
              />
              <div className="absolute -bottom-10 flex h-full w-full items-center justify-center  opacity-0 transition-all duration-300 group-hover:bottom-0 group-hover:opacity-100">
                <div className="absolute top-[10px] right-[10px] flex h-[30px] w-[30px] items-center justify-center rounded-full border bg-white  ">
                  <i className="fa-regular fa-heart"></i>
                </div>
                <div className="absolute top-[50px] right-[10px] flex h-[30px] w-[30px] items-center justify-center rounded-full border bg-white  ">
                  <i className="fa-regular fa-eye"></i>
                </div>
              </div>
            </div>
            <div className="absolute bottom-[40px] right-[10px] flex h-[30px] w-[30px] items-center justify-center rounded-full bg-gray-400 object-cover transition-all duration-300 group-hover:bg-[#00B207]">
              <i className="fa-solid fa-cart-shopping group-hover:text-white"></i>
            </div>
            <div className="ml-[10px] gap-1">
              <h2 className="mt-3 text-[14px] capitalize transition-all duration-300 group-hover:text-[#2C742F]">
                Nước tương Maggi chai lớn 700nl
              </h2>
              <p className="text-lg">140.000VNĐ</p>
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
      <div>
        <div className="gap-3 flex ml-[10px] mt-[10px]">
          <div className="group relative w-[264px] h-[327px] border border-solid rounded-lg border-[#E6E6E6] hover:border-[#2C742F] shadow hover:shadow-green-800 mx-auto cursor-pointer">
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
            <div className="absolute bottom-[40px] right-[10px] flex h-[30px] w-[30px] items-center justify-center rounded-full bg-gray-400 object-cover transition-all duration-300 group-hover:bg-[#00B207]">
              <i className="fa-solid fa-cart-shopping group-hover:text-white"></i>
            </div>
            <div className="ml-[10px] gap-1">
              <h2 className="mt-3 text-[14px] capitalize transition-all duration-300 group-hover:text-[#2C742F]">
                Dầu ăn Tường An 1 Lít
              </h2>
              <p className="text-lg">140.000VNĐ</p>
              <div className="flex">
                <FaStar size={15} style={{ color: 'yellow	' }} />
                <FaStar size={15} style={{ color: 'yellow	' }} />
                <FaStar size={15} style={{ color: 'yellow	' }} />
                <FaStar size={15} style={{ color: 'yellow	' }} />
                <FaStar size={15} />
              </div>
            </div>
          </div>
          <div className="group relative w-[264px] h-[327px] border border-solid rounded-lg border-[#E6E6E6] hover:border-[#2C742F] shadow hover:shadow-green-800 mx-auto cursor-pointer">
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
            <div className="absolute bottom-[40px] right-[10px] flex h-[30px] w-[30px] items-center justify-center rounded-full bg-gray-400 object-cover transition-all duration-300 group-hover:bg-[#00B207]">
              <i className="fa-solid fa-cart-shopping group-hover:text-white"></i>
            </div>
            <div className="ml-[10px] gap-1">
              <h2 className="mt-3 text-[14px] capitalize transition-all duration-300 group-hover:text-[#2C742F]">
                Dầu ăn Tường An 1 Lít
              </h2>
              <p className="text-lg">140.000VNĐ</p>
              <div className="flex">
                <FaStar size={15} style={{ color: 'yellow	' }} />
                <FaStar size={15} style={{ color: 'yellow	' }} />
                <FaStar size={15} style={{ color: 'yellow	' }} />
                <FaStar size={15} style={{ color: 'yellow	' }} />
                <FaStar size={15} />
              </div>
            </div>
          </div>
          <div className="group relative w-[264px] h-[327px] border border-solid rounded-lg border-[#E6E6E6] hover:border-[#2C742F] shadow hover:shadow-green-800 mx-auto cursor-pointer">
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
            <div className="absolute bottom-[40px] right-[10px] flex h-[30px] w-[30px] items-center justify-center rounded-full bg-gray-400 object-cover transition-all duration-300 group-hover:bg-[#00B207]">
              <i className="fa-solid fa-cart-shopping group-hover:text-white"></i>
            </div>
            <div className="ml-[10px] gap-1">
              <h2 className="mt-3 text-[14px] capitalize transition-all duration-300 group-hover:text-[#2C742F]">
                Dầu ăn Tường An 1 Lít
              </h2>
              <p className="text-lg">140.000VNĐ</p>
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
      <div>
        <div className="gap-3 flex ml-[10px]  mt-[10px]">
          <div className="group relative w-[264px] h-[327px] border border-solid rounded-lg border-[#E6E6E6] hover:border-[#2C742F] shadow hover:shadow-green-800 mx-auto cursor-pointer">
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
            <div className="absolute bottom-[40px] right-[10px] flex h-[30px] w-[30px] items-center justify-center rounded-full bg-gray-400 object-cover transition-all duration-300 group-hover:bg-[#00B207]">
              <i className="fa-solid fa-cart-shopping group-hover:text-white"></i>
            </div>
            <div className="ml-[10px] gap-1">
              <h2 className="mt-3 text-[14px] capitalize transition-all duration-300 group-hover:text-[#2C742F]">
                Dầu ăn Tường An 1 Lít
              </h2>
              <p className="text-lg">140.000VNĐ</p>
              <div className="flex">
                <FaStar size={15} style={{ color: 'yellow	' }} />
                <FaStar size={15} style={{ color: 'yellow	' }} />
                <FaStar size={15} style={{ color: 'yellow	' }} />
                <FaStar size={15} style={{ color: 'yellow	' }} />
                <FaStar size={15} />
              </div>
            </div>
          </div>
          <div className="group relative w-[264px] h-[327px] border border-solid rounded-lg border-[#E6E6E6] hover:border-[#2C742F] shadow hover:shadow-green-800 mx-auto cursor-pointer">
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
            <div className="absolute bottom-[40px] right-[10px] flex h-[30px] w-[30px] items-center justify-center rounded-full bg-gray-400 object-cover transition-all duration-300 group-hover:bg-[#00B207]">
              <i className="fa-solid fa-cart-shopping group-hover:text-white"></i>
            </div>
            <div className="ml-[10px] gap-1">
              <h2 className="mt-3 text-14px capitalize transition-all duration-300 group-hover:text-[#2C742F]">
                Dầu ăn Tường An 1 Lít
              </h2>
              <p className="text-lg">140.000VNĐ</p>
              <div className="flex">
                <FaStar size={15} style={{ color: 'yellow	' }} />
                <FaStar size={15} style={{ color: 'yellow	' }} />
                <FaStar size={15} style={{ color: 'yellow	' }} />
                <FaStar size={15} style={{ color: 'yellow	' }} />
                <FaStar size={15} />
              </div>
            </div>
          </div>
          <div className="group relative w-[264px] h-[327px] border border-solid rounded-lg border-[#E6E6E6] hover:border-[#2C742F] shadow hover:shadow-green-800 mx-auto cursor-pointer">
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
            <div className="absolute bottom-[40px] right-[10px] flex h-[30px] w-[30px] items-center justify-center rounded-full bg-gray-400 object-cover transition-all duration-300 group-hover:bg-[#00B207]">
              <i className="fa-solid fa-cart-shopping group-hover:text-white"></i>
            </div>
            <div className="ml-[10px] gap-1">
              <h2 className="mt-3 text-[14px] capitalize transition-all duration-300 group-hover:text-[#2C742F]">
                Dầu ăn Tường An 1 Lít
              </h2>
              <p className="text-lg">140.000VNĐ</p>
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
      <div>
        <div className="gap-3 flex ml-[10px]  mt-[10px]	">
          <div className="group relative w-[264px] h-[327px] border border-solid rounded-lg border-[#E6E6E6] hover:border-[#2C742F] shadow hover:shadow-green-800 mx-auto cursor-pointer">
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
            <div className="absolute bottom-[40px] right-[10px] flex h-[30px] w-[30px] items-center justify-center rounded-full bg-gray-400 object-cover transition-all duration-300 group-hover:bg-[#00B207]">
              <i className="fa-solid fa-cart-shopping group-hover:text-white"></i>
            </div>
            <div className="ml-[10px] gap-1">
              <h2 className="mt-3 text-[14px] capitalize transition-all duration-300 group-hover:text-[#2C742F]">
                Dầu ăn Tường An 1 Lít
              </h2>
              <p className="text-lg">140.000VNĐ</p>
              <div className="flex">
                <FaStar size={15} style={{ color: 'yellow	' }} />
                <FaStar size={15} style={{ color: 'yellow	' }} />
                <FaStar size={15} style={{ color: 'yellow	' }} />
                <FaStar size={15} style={{ color: 'yellow	' }} />
                <FaStar size={15} />
              </div>
            </div>
          </div>
          <div className="group relative w-[264px] h-[327px] border border-solid rounded-lg border-[#E6E6E6] hover:border-[#2C742F] shadow hover:shadow-green-800 mx-auto cursor-pointer">
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
            <div className="absolute bottom-[40px] right-[10px] flex h-[30px] w-[30px] items-center justify-center rounded-full bg-gray-400 object-cover transition-all duration-300 group-hover:bg-[#00B207]">
              <i className="fa-solid fa-cart-shopping group-hover:text-white"></i>
            </div>
            <div className="ml-[10px] gap-1">
              <h2 className="mt-3 text-[14px] capitalize transition-all duration-300 group-hover:text-[#2C742F]">
                Dầu ăn Tường An 1 Lít
              </h2>
              <p className="text-lg">140.000VNĐ</p>
              <div className="flex">
                <FaStar size={15} style={{ color: 'yellow	' }} />
                <FaStar size={15} style={{ color: 'yellow	' }} />
                <FaStar size={15} style={{ color: 'yellow	' }} />
                <FaStar size={15} style={{ color: 'yellow	' }} />
                <FaStar size={15} />
              </div>
            </div>
          </div>
          <div className="group relative w-[264px] h-[327px] border border-solid rounded-lg border-[#E6E6E6] hover:border-[#2C742F] shadow hover:shadow-green-800 mx-auto cursor-pointer">
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
            <div className="absolute bottom-[40px] right-[10px] flex h-[30px] w-[30px] items-center justify-center rounded-full bg-gray-400 object-cover transition-all duration-300 group-hover:bg-[#00B207]">
              <i className="fa-solid fa-cart-shopping group-hover:text-white"></i>
            </div>
            <div className="ml-[10px] gap-1">
              <h2 className="mt-3 text-[14px] capitalize transition-all duration-300 group-hover:text-[#2C742F]">
                Dầu ăn Tường An 1 Lít
              </h2>
              <p className="text-lg">140.000VNĐ</p>
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
    </div>
  )
}
export default SanPhamPhoBien
