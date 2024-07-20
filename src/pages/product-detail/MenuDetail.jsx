// import React from 'react'
import { CaiThiaC } from '../../assets/img-product'
import { CaiThia1 } from '../../assets/img-product'
import { CaiThia2 } from '../../assets/img-product'
import { CaiThia3 } from '../../assets/img-product'
import { TaoXanhC } from '../../assets/img-product'
import { OtChuongXanhC } from '../../assets/img-product'
import { BongCaiTrangC } from '../../assets/img-product'
import { DauBapC } from '../../assets/img-product'
import { FPT } from '../../assets/img-product'

import { SlArrowUp } from "react-icons/sl";
import { SlArrowDown } from "react-icons/sl";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { LuPlus } from "react-icons/lu";
import { LuMinus } from "react-icons/lu";



const MenuDetail = () => {

	return (
		<div className="flex flex-col items-center w-screen">
			<div className='w-[1220px] flex flex-row justify-center basis-1/2 pt-3 pl-5 pr-5 gap-8'>
				<div className='flex flex-row'>
					<div className='flex flex-col basis-1/4 justify-items-center gap-5'>
						<button className='pl-8'>
							< SlArrowUp />
						</button>
						<img className='w-[80px] h-[80px] bg-cover bg-no-repeat bg-center' src={CaiThiaC} alt="" />
						<img className='w-[80px] h-[80px] bg-cover bg-no-repeat bg-center' src={CaiThia1} alt="" />
						<img className='w-[80px] h-[80px] bg-cover bg-no-repeat bg-center' src={CaiThia2} alt="" />
						<img className='w-[80px] h-[80px] bg-cover bg-no-repeat bg-center' src={CaiThia3} alt="" />
						<button className='pl-8'>
							< SlArrowDown />
						</button>
					</div>
					<div className='basis-3/4 w-[556px] h-[556px] bg-cover bg-no-repeat bg-center'>
						<img src={CaiThiaC} alt="" />
					</div>
				</div>
				<div>
					<div className='flex flex-row gap-2'>
						<h1 className='text-3xl font-bold'>Cải thìa</h1>
						<p className='bg-green-200 rounded-md w-[75px] h-[25px] text-sm text-center mt-1.5'>Còn hàng</p>
					</div>
					<div className='flex flex-row gap-2 mt-2 w-[600px] h-[40px] border-b border-solid border-gray-300'>
						<p className='line-through text-gray-500 mt-0.5'>25.000₫</p>
						<p className='text-xl font-semibold text-green-800'>20.000₫</p>
						<p className='bg-rose-200 text-rose-600 text-sm w-[50px] text-center h-[22px] font-semibold mt-1 rounded-full'>-20%</p>
					</div>
					<div className='flex flex-row gap-52 mt-3'>
						<div className='flex flex-row gap-2'>
							<p className='mt-3'>Thương hiệu: </p>
							<img className='w-[50px] h-[50px] border border-solid border-gray-300 rounded-md' src={FPT} alt="" />
						</div>
						<div className='flex flex-row gap-3 mt-3'>
							<p>Chia sẻ: </p>
							< FaFacebookF className='w-[20px] h-[20px]' />
							< FaTwitter className='w-[20px] h-[20px]' />
							< FaPinterestP className='w-[20px] h-[20px]' />
							< FaInstagram className='w-[20px] h-[20px]' />
						</div>
					</div>
					<div className='mt-2 h-[165px] border-b border-solid border-gray-300'>
						<p className='w-[600px] mt-2'>
							Đây là loại rau được cho là thực phẩm dưỡng sinh, ăn vào có thể lợi trường vị, <br />thanh nhiệt, lợi tiểu tiện và ngừa bệnh ngoài da. Cải thìa có tác dụng chống <br />scorbut, tạng khớp và làm tan sưng.
						</p>
						<p className='w-[600px] mt-2'>
							Sản phẩm đạt tiêu chuẩn, không chứa các hóa chất, chất kích thích tăng trưởng <br />gây hại, đảm bảo an toàn cho sức khỏe người tiêu dùng.
						</p>
					</div>
					<div className='flex flex-row gap-4 mt-3'>
						<div className='flex flex-row justify-items-center gap-1 w-[110px] h-[36px] border border-solid border-gray-300 rounded-full'>
							<button className='w-[26px] h-[21px] rounded-full ml-1.5 mt-1.5 text-center font-semibold bg-gray-200'>
								< LuMinus className='text-sm ml-1 text-gray-600'  />
							</button>
							<input
								className='w-[50px]'
								type="text" />
							<button className='w-[26px] h-[21px] rounded-full mr-1.5 mt-1.5 text-center font-semibold bg-gray-200'>
								< LuPlus className='text-sm ml-1 text-gray-600' />
							</button>
						</div>
						<div>
							<div> test</div>
						</div>
						<div>

						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default MenuDetail