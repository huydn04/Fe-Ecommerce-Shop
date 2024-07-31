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
const CacLoaiPhobien = () => {
  return (
    <div className="">
      <p className="flex justify-center text-[32px] font-poppins font-bold">
        Các loại phổ biến
      </p>
      <div className="mt-6 flex flex-rows gap-4 h-[220px]">
        <div className="w-[200px] h-[213px] border border-solid border-solid border-gray-200 rounded-lg hover:border-green-800 shadow hover:shadow-green-800 cursor-pointer">
          <img src={SanPham1} alt="" />
          <a
            href=""
            className=" flex items-center justify-center text-[18px] mt-[30px]"
          >
            Trái cây
          </a>
        </div>
        <div className="w-[200px] h-[213px] border border-solid border-gray-200 rounded-lg hover:border-green-800 shadow hover:shadow-green-800 cursor-pointer">
          <img src={SanPham2} alt="" />
          <a href="" className=" flex justify-center text-[18px] mt-[30px]">
            Rau củ quả
          </a>
        </div>
        <div className="w-[200px] h-[213px] border border-solid border-gray-200 rounded-lg hover:border-green-800 shadow hover:shadow-green-800 cursor-pointer">
          <img src={SanPham3} alt="" />
          <a href="" className=" flex justify-center text-[18px] mt-[30px]">
            Thịt & Cá
          </a>
        </div>
        <div className="w-[200px] h-[213px] border border-solid border-gray-200 rounded-lg hover:border-green-800 shadow hover:shadow-green-800 cursor-pointer">
          <img src={SanPham4} alt="" />
          <a href="" className=" flex justify-center text-[18px] mt-[30px]">
            Các loại bánh
          </a>
        </div>
        <div className="w-[200px] h-[213px] border border-solid border-gray-200 rounded-lg hover:border-green-800 shadow hover:shadow-green-800 cursor-pointer">
          <img src={SanPham5} alt="" />
          <a href="" className=" flex justify-center text-[18px] mt-[30px]">
            Nước uống
          </a>
        </div>
        <div className="w-[200px] h-[213px] borde border-solidr border-gray-200 rounded-lg hover:border-green-800 shadow hover:shadow-green-800 cursor-pointer">
          <img src={SanPham6} alt="" />
          <a href="" className=" flex justify-center text-[18px] mt-[30px]">
            Mỹ Phẩm
          </a>
        </div>
      </div>
      {/*  */}
      <div className="mt-4 flex flex-rows gap-4">
        <div className="w-[200px] h-[213px] border border-solid border-gray-200 rounded-lg hover:border-green-800 shadow hover:shadow-green-800 cursor-pointer">
          <img src={SanPham7} alt="" />
          <a href="" className=" flex justify-center text-[18px] mt-[30px]">
            Bánh mì & Bakery
          </a>
        </div>
        <div className="w-[200px] h-[213px] border border-solid border-gray-200 rounded-lg hover:border-green-800 shadow hover:shadow-green-800 cursor-pointer">
          <img src={SanPham8} alt="" />
          <a href="" className=" flex justify-center text-[18px] mt-[30px]">
            Bột làm bánh
          </a>
        </div>
        <div className="w-[200px] h-[213px] border border-solid border-gray-200 rounded-lg hover:border-green-800 shadow hover:shadow-green-800 cursor-pointer">
          <img src={SanPham9} alt="" />
          <a href="" className=" flex justify-center text-[18px] mt-[30px]">
            Cooking
          </a>
        </div>
        <div className="w-[200px] h-[213px] border border-solid border-gray-200 rounded-lg hover:border-green-800 shadow hover:shadow-green-800 cursor-pointer">
          <img src={SanPham10} alt="" />
          <a href="" className=" flex justify-center text-[18px] mt-[30px]">
            Thực phẩm ít đường
          </a>
        </div>
        <div className="w-[200px] h-[213px] border border-solid border-gray-200 rounded-lg hover:border-green-800 shadow hover:shadow-green-800 cursor-pointer">
          <img src={SanPham11} alt="" />
          <a href="" className=" flex justify-center text-[18px] mt-[30px]">
            Chất tẩy rửa
          </a>
        </div>
        <div className="w-[200px] h-[213px] border border-solid border-gray-200 rounded-lg hover:border-green-800 shadow hover:shadow-green-800 cursor-pointer">
          <img src={SanPham12} alt="" />
          <a href="" className=" flex justify-center text-[18px] mt-[30px]">
            Dầu ăn
          </a>
        </div>
      </div>
    </div>
  )
}
export default CacLoaiPhobien
