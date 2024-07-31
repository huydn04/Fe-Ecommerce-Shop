import { FaStar } from 'react-icons/fa'
//icon bằng ảnh
import { Vector } from '../../assets/Home'
// <-/->
import { FaCircleArrowRight } from 'react-icons/fa6'
import { FaCircleArrowLeft } from 'react-icons/fa6'
import { DaiDien1 } from '../../assets/Home'
const BinhLuan = () => {
  return (
    <div className="container mx-auto px-0 h-[454px] mt-[50px] bg-gray-100">
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
              Pellentesque eu nibh eget mauris congue mattis mattis nec tellus.
              Phasellus imperdiet elit eu magna dictum, bibendum cursus velit
              sodales. Donec sed neque eget
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
              Pellentesque eu nibh eget mauris congue mattis mattis nec tellus.
              Phasellus imperdiet elit eu magna dictum, bibendum cursus velit
              sodales. Donec sed neque eget
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
              Pellentesque eu nibh eget mauris congue mattis mattis nec tellus.
              Phasellus imperdiet elit eu magna dictum, bibendum cursus velit
              sodales. Donec sed neque eget
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
    </div>
  )
}
export default BinhLuan
