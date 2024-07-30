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
//icon
import { PiTagLight } from 'react-icons/pi'
import { CiUser } from 'react-icons/ci'
import { TfiComment } from 'react-icons/tfi'
import { VscArrowRight } from 'react-icons/vsc'
//import thành phần của trang
import Header from '../../components/home/Header'
import Footer from '../../components/home/Footer'
import BanerBig from '../../components/home/Banner'
import DichVu from '../../components/home/DichVu'
import CacLoaiPhobien from '../../components/home/CacLoaiPhoBien'
import SanPhamPhoBien from '../../components/home/SanPhamPhoBien'
import UuDaiHapDan from '../../components/home/UuDaiHapDan'
import BinhLuan from '../../components/home/Comment'
const Homepages = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="w-full">
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
        />
        <div className="flex justify-center">
          <Header />
        </div>
        {/* img */}
        <div className="flex justify-center mt-[20px]">
          <BanerBig />
        </div>
        <div className="flex justify-center">
          <DichVu />
        </div>
        {/*  */}

        {/* các loại phổ biến */}
        <div className="flex justify-center  mt-[230px]">
          <CacLoaiPhobien />
        </div>
        {/* Sản phẩm phổ biến */}
        <div className="flex justify-center">
          <SanPhamPhoBien />
        </div>
        {/* Quản cáo */}
        <div className="ml-[140px] w-[1265px] h-[540px] mt-[50px] flex gap-6">
          <img src={QuangCao1} alt="" />
          <img src={QuangCao2} alt="" />
          <img src={QuangCao3} alt="" />
        </div>

        {/* Ưu đãi hấp dẫn */}
        <div className="flex justify-center">
          <UuDaiHapDan />
        </div>
        {/* Quảng cáo */}
        <div className="mt-[50px] ml-[110px]">
          <img src={QuangCaoTo} alt="" />
        </div>
        <div className="">
          <div></div>
        </div>
        {/* Tin Tức  */}
        <div className="ml-[30px] mt-[40px]">
          <p className="ml-[650px] text-[32px] font-poppins font-bold">
            Tin mới nhất
          </p>
          <div className="flex mt-[20px] gap-[100px]">
            <div className="w-[424] h-[494px] relative">
              <img src={TinTuc1} alt="" />
              <div className="w-[424px] h-[170px] border border-solid border-gray-300 rounded-b-[10px]">
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
              <div className="w-[424px] h-[170px] border border-solid border-gray-300 rounded-b-[10px]">
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
              <div className="w-[424px] h-[170px] border border-solid border-gray-300 rounded-b-[10px]">
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
        </div>

        {/* comment */}
        <div>
          <BinhLuan />
        </div>
        {/* Theo dỏi */}
        <div className="w-[1320px] h-[270px]">
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
        </div>

        {/* Company Logo */}
        <div className="flex justify-center">
          <img src={CompannyLogo} alt="" />
        </div>

        {/* footer */}
        <div className="flex justify-center">
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default Homepages
