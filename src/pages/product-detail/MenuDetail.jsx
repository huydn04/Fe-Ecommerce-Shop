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
import { Banner } from '../../assets/img-product'


import { SlArrowUp } from "react-icons/sl";
import { SlArrowDown } from "react-icons/sl";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { LuPlus } from "react-icons/lu";
import { LuMinus } from "react-icons/lu";
import { BsBasket } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa6";
import { HiMiniChevronRight } from "react-icons/hi2";
import { LuHome } from "react-icons/lu";
import { HiChevronUp } from "react-icons/hi";
import { HiChevronDown } from "react-icons/hi";
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { BsDot } from "react-icons/bs";
import { HiBadgeCheck } from "react-icons/hi";
import { LuEye } from "react-icons/lu";



const MenuDetail = () => {

	return (
		<div className="flex flex-col items-center w-screen">

			{ /*Banner*/}
			<div className='w-screen h-[100px] relative'>
				<img className='w-full' src={Banner} alt="" />
				<div className='absolute bottom-10 left-40 flex flex-row justify-center items-center gap-2 text-gray-300 text-md'>
					<ul><li><a className='' href=""><LuHome className='mt-[1px] w-[22px] h-[22px] hover:text-green-500' /></a></li></ul>
					<HiMiniChevronRight className='mt-[5px]' />
					<ul><li><a className='hover:text-green-500' href="">Danh mục</a></li></ul>
					<HiMiniChevronRight className='mt-[5px]' />
					<ul><li><a className='hover:text-green-500' href="">Rau củ quả</a></li></ul>
					<HiMiniChevronRight className='mt-[5px]' />
					<ul><li><a className='hover:text-green-500' href="">Cải thìa</a></li></ul>
				</div>
			</div>

			<div>
				{ /*Ảnh + thông tin sp*/}
				<div className=' flex flex-row gap-8 pt-8'>
					<div className=' basis-1/2 flex flex-row'>
						<div className='basis-1/4 flex flex-col justify-center items-center gap-3'>
							<button className='mb-3 bg-gray-50 w-[60px] h-[20px] rounded-sm'> <HiChevronUp className='ml-5' /> </button>
							<img className='w-[60px] h-[60px] border border-solid cursor-pointer border-gray-300 rounded-md hover:border-green-700' src={CaiThiaC} />
							<img className='w-[60px] h-[60px] border border-solid cursor-pointer border-gray-300 rounded-md hover:border-green-700' src={CaiThia1} />
							<img className='w-[60px] h-[60px] border border-solid cursor-pointer border-gray-300 rounded-md hover:border-green-700' src={CaiThia2} />
							<img className='w-[60px] h-[60px] border border-solid cursor-pointer border-gray-300 rounded-md hover:border-green-700' src={CaiThia3} />
							<button className='mt-3 bg-gray-50 w-[60px] h-[20px] rounded-sm'> <HiChevronDown className='ml-5' /> </button>
						</div>
						<div className='basis-3/4'>
							<img src={CaiThiaC} />
						</div>
					</div>
					<div className='basis-1/2 flex flex-col gap-3'>
						<div className='flex flex-row gap-3'>
							<p className='text-3xl font-bold'>Cải thìa</p>
							<p className='mt-1.5 bg-green-200 text-green-800 w-[90px] h-[25px] text-center rounded-md'>Còn hàng</p>
						</div>
						<div className='flex flex-row gap-2'>
							<div className='flex flex-row gap-1 text-xs mt-1.5 '>
								<FaStar className='text-orange-500' />
								<FaStar className='text-orange-500' />
								<FaStar className='text-orange-500' />
								<FaStar className='text-orange-500' />
								<FaStar className='text-orange-500' />
							</div>
							<p className='hover:underline cursor-pointer'>4 Đánh giá</p>
							<BsDot className='mt-0.5 text-xl text-gray-500' />
							<p><b>SKU: </b> 2,51,594</p>
						</div>
						<div className='flex flex-row gap-2'>
							<p className='text-gray-500 mt-0.5'><s>25.000₫</s></p>
							<p className='text-xl text-green-800 font-semibold'>20.000₫</p>
							<p className='bg-rose-100 text-rose-600 w-[50px] h-[21px] mt-1 text-center rounded-full text-sm font-semibold'>-20%</p>
						</div>
						<div className='mb-1 border-b border-solid border-gray-300 w-[650px]'></div>
						<div className='flex flex-row gap-[250px]'>
							<div className='flex flex-row gap-2'>
								<p className='font-semibold mt-2'>Thương hiệu:</p>
								<img className='cursor-pointer w-[45px] h-[45px] border border-solid border-gray-200 rounded-md hover:border hover:border-solid hover:border-green-700' src={FPT} />
							</div>
							<div className='flex flex-row gap-4'>
								<p className='font-semibold mt-2'>Chia sẻ:</p>
								<span className='cursor-pointer mt-1.5 hover:w-[30px] hover:h-[30px] hover:text-white hover:rounded-full hover:bg-green-500'><FaFacebookF className='mt-1.5 ml-1.5' /></span>
								<span className='cursor-pointer mt-1.5 hover:w-[30px] hover:h-[30px] hover:text-white hover:rounded-full hover:bg-green-500'><FaTwitter className='mt-2 ml-2' /></span>
								<span className='cursor-pointer mt-1.5 hover:w-[30px] hover:h-[30px] hover:text-white hover:rounded-full hover:bg-green-500'><FaPinterestP className='mt-[7px] ml-[7px]' /></span>
								<span className='cursor-pointer mt-1.5 hover:w-[30px] hover:h-[30px] hover:text-white hover:rounded-full hover:bg-green-500'><FaInstagram className='mt-[7px] ml-[7px]' /></span>
							</div>
						</div>
						<div className='text-base text-gray-900'>
							<p>Đây là loại rau được cho là thực phẩm dưỡng sinh, ăn vào có thể lợi trường vị, thanh nhiệt, <br />
								lợi tiểu tiện và ngừa bệnh ngoài da. Cải thìa có tác dụng chống scorbut, tạng khớp và làm <br />
								tan sưng.</p>
							<p className='mt-2'>Sản phẩm đạt tiêu chuẩn, không chứa các hóa chất, chất kích thích tăng trưởng gây hại, <br />
								đảm bảo an toàn cho sức khỏe người tiêu dùng. </p>
						</div>
						<div className='mt-2 border-b border-solid border-gray-300 w-[650px]'></div>
						<div className='flex flex-row justify-items-center gap-10 mt-2'>
							<div className='flex flex-row justify-center gap-1 border border-solid border-gray-300 w-[110px] h-[37px] rounded-full'>
								<button className='w-[28px] h-[28px] ml-[1px] mt-[3.5px] bg-gray-200 rounded-full hover:bg-gray-300'><p className='mb-[4px]'>-</p></button>
								<input className='w-[35px] h-[25px] mt-[3.5px] pl-[1.5px] text-center' type="text" />
								<button className='w-[28px] h-[28px] mr-[1px] mt-[3.5px] bg-gray-200 rounded-full hover:bg-gray-300'><p className='mb-[4px]'>+</p></button>
							</div>
							<div className='flex flex-row gap-2 text-white font-semibold bg-green-500 w-[400px] h-[37px] rounded-full justify-center hover:bg-green-600 cursor-pointer'>
								<button>Thêm vào giỏ hàng</button>
								<BsBasket className='mt-[9px]' />
							</div>
							<div>
								<button className='w-[37px] h-[37px] rounded-full bg-green-100 hover:bg-green-200'><FaRegHeart className='mt-[2px] ml-[11px] text-green-800 ' /></button>
							</div>
						</div>
						<div className='mt-1 border-b border-solid border-gray-300 w-[650px]'></div>
						<div>
							<p className='font-semibold'>Danh mục:</p>
							<p className='font-semibold mt-2'>Thẻ:</p>
						</div>
					</div>
				</div>

				{ /*Chi tiết sp*/}
				<div>
					<div className=' flex flex-row gap-5 text-lg mt-10 mb-3 border-b border-solid border-gray-300 justify-center items-center text-gray-600 '>
						<p className='w-[100px] h-[35px] text-center cursor-pointer hover:border-b-2 hover:border-solid hover:border-green-700 hover:font-semibold hover:text-black'>Mô tả</p>
						<p className='w-[170px] h-[35px] text-center cursor-pointer hover:border-b-2 hover:border-solid hover:border-green-700 hover:font-semibold hover:text-black'>Thêm thông tin</p>
						<p className='w-[250px] h-[35px] text-center cursor-pointer hover:border-b-2 hover:border-solid hover:border-green-700 hover:font-semibold hover:text-black'>Đánh giá từ khách hàng</p>
					</div>
					<div className='ml-[250px] mr-[250px] text-gray-700'>
						<p>Nếu bạn đang tìm một loại rau dễ ăn, hình dáng đẹp, giá trị dinh dưỡng cao thì hẳn Cải thìa là loại rau đáp ứng đủ các tiêu chí ấy.</p>
						<p className='mt-2'>Cải thìa được gọi với cái tên khác là cải chíp, cải muỗng. Bởi lẽ từng bẹ lá uốn cong trông như cái muỗng. Cải có màu xanh đẹp mắt ở phần lá, thân mập, hơi lùn nhưng bẹ to, phần gốc bẹ có màu trắng.</p>
						<div className='flex flex-row gap-1 mt-4'>
							<HiBadgeCheck className='mt-1 text-green-600'/>
							<p>Hàng xuất sứ từ Việt Nam</p>
						</div>
						<div className='flex flex-row gap-1 mt-2'>
							<HiBadgeCheck className='mt-1 text-green-600'/>
							<p>Bảo quản ngăn mát tủ lạnh từ 10-18 độ C</p>
						</div>
						<div className='flex flex-row gap-1 mt-2'>
							<HiBadgeCheck className='mt-1 text-green-600'/>
							<p>Rau củ mới, tươi ngon</p>
						</div>
						<div className='flex flex-row gap-1 mt-2'>
							<HiBadgeCheck className='mt-1 text-green-600'/>
							<p>Đúng mô tả của sản phẩm</p>
						</div>
						<p className='mt-4'>Cải Thìa là một loại rau dễ ăn, có hình dáng và màu sắc đẹp, giàu dinh dưỡng và xuất hiện trong nhiều công thức nấu ăn.</p>
					</div>

					<div className='hidden flex flex-row gap-12 ml-[250px] text-gray-700'>
						<div>
							<p className='font-semibold'>Cân nặng: </p>
							<p className='font-semibold'>Màu sắc: </p>
							<p className='font-semibold'>Loại: </p>
							<p className='font-semibold'>Danh mục: </p>
							<p className='font-semibold'>Trạng thái: </p>
							<p className='font-semibold'>Thẻ: </p>
						</div>
						<div>
							<p>1kg </p>
							<p>Xanh </p>
							<p>Hữu cơ </p>
							<p>Rau củ </p>
							<p>Còn hàng (5,413) </p>
							<p>Rau củ quả, Lành mạnh, Bắp cải </p>
						</div>
					</div>
				</div>
			</div>
			{ /*Các sản phẩm liên quan*/}
			<div className='mt-28'>
				<h1 className='font-bold text-3xl text-center mb-5'>Các sản phẩm liên quan</h1>
				<div className='flex flex-row gap-3 mb-5'>
					<div className='group relative cursor-pointer w-[250px] flex flex-col gap-1 justify-center border border-solid border-gray-300 rounded-lg hover:border-green-700'>
						<img className="w-[302]" src={TaoXanhC} />
						<div className='flex flex-row gap-14 justify-center items-center'>
							<div>
								<p className='mt-1 ml-3 text-base hover:text-green-700 cursor-pointer'>Táo xanh</p>
								<div className='flex flex-row gap-2'>
									<p className='ml-3 text-base font-semibold'>25.000₫</p>
									<p className='text-base text-gray-500'><s>50.000₫</s></p>
								</div>
								<div className='flex flex-row text-xs mt-1 ml-3 mb-5'>
									<FaStar className='text-orange-400' />
									<FaStar className='text-orange-400' />
									<FaStar className='text-orange-400' />
									<FaStar className='text-orange-400' />
									<FaRegStar className='text-orange-400' />
								</div>
							</div>
							<div className=''>
								<button className='bg-gray-200 w-[40px] h-[40px] rounded-full hover:bg-green-500 hover:text-white'><BsBasket className='ml-[12px] mb-[1px]' /></button>
							</div>
						</div>
						<div className='group-hover:right-3 transition-all absolute flex -right-10 top-6 flex-col gap-2'>
							<button className='inline-flex w-[35px] h-[35px] rounded-full border border-solid border-gray-400 bg-white pl-[8px] pt-[9px] hover:bg-green-500 hover:text-white hover:border-none' ><FaRegHeart className='text-lg'/></button>
							<button className='inline-flex w-[35px] h-[35px] rounded-full border border-solid border-gray-400 bg-white pl-[8.5px] pt-[8.5px] hover:bg-green-500 hover:text-white hover:border-none' ><LuEye className='text-lg'/></button>
						</div>
						<div className='absolute top-4 left-4 w-[90px] rounded-md bg-rose-500 shadow-xl'>
							<p className='text-center text-white text-sm'>Giảm 50%</p>
						</div>
					</div>
					<div className='group relative w-[250px] cursor-pointer     flex flex-col gap-1 justify-center border border-solid border-gray-300 rounded-lg hover:border-green-700'>
						<img className="w-[302]" src={BongCaiTrangC} />
						<div className='flex flex-row gap-14 justify-center items-center'>
							<div>
								<p className='mt-1  text-base hover:text-green-700 cursor-pointer'>Bông cải trắng</p>
								<div className='flex flex-row gap-2'>
									<p className=' text-base font-semibold'>22.500₫</p>
								</div>
								<div className='flex flex-row text-xs mt-1 mb-5'>
									<FaStar className='text-orange-400' />
									<FaStar className='text-orange-400' />
									<FaStar className='text-orange-400' />
									<FaStar className='text-orange-400' />
									<FaRegStar className='text-orange-400' />
								</div>
							</div>
							<div className=''>
								<button className='bg-gray-200 w-[40px] h-[40px] ml-3 rounded-full hover:bg-green-500 hover:text-white'><BsBasket className='ml-[12px] mb-[1px]' /></button>
							</div>
						</div>
						<div className='group-hover:right-3 transition-all absolute flex -right-10 top-6 flex-col gap-2'>
							<button className='inline-flex w-[35px] h-[35px] rounded-full border border-solid border-gray-400 bg-white pl-[8px] pt-[9px] hover:bg-green-500 hover:text-white hover:border-none' ><FaRegHeart className='text-lg'/></button>
							<button className='inline-flex w-[35px] h-[35px] rounded-full border border-solid border-gray-400 bg-white pl-[8.5px] pt-[8.5px] hover:bg-green-500 hover:text-white hover:border-none' ><LuEye className='text-lg'/></button>
						</div>
					</div>
					<div className='group relative w-[250px] cursor-pointer flex flex-col gap-1 justify-center border border-solid border-gray-300 rounded-lg hover:border-green-700'>
						<img className="w-[302]" src={OtChuongXanhC} />
						<div className='flex flex-row gap-14 justify-center items-center'>
							<div>
								<p className='mt-1 text-base hover:text-green-700 cursor-pointer'>Ớt chuông xanh</p>
								<div className='flex flex-row gap-2'>
									<p className='text-base font-semibold'>11.000₫</p>
								</div>
								<div className='flex flex-row text-xs mt-1 mb-5'>
									<FaStar className='text-orange-400' />
									<FaStar className='text-orange-400' />
									<FaStar className='text-orange-400' />
									<FaStar className='text-orange-400' />
									<FaRegStar className='text-orange-400' />
								</div>
							</div>
							<div className=''>
								<button className='bg-gray-200 w-[40px] h-[40px] rounded-full hover:bg-green-500 hover:text-white'><BsBasket className='ml-[12px] mb-[1px]' /></button>
							</div>
						</div>
						<div className='group-hover:right-3 transition-all absolute flex -right-10 top-6 flex-col gap-2'>
							<button className='inline-flex w-[35px] h-[35px] rounded-full border border-solid border-gray-400 bg-white pl-[8px] pt-[9px] hover:bg-green-500 hover:text-white hover:border-none' ><FaRegHeart className='text-lg'/></button>
							<button className='inline-flex w-[35px] h-[35px] rounded-full border border-solid border-gray-400 bg-white pl-[8.5px] pt-[8.5px] hover:bg-green-500 hover:text-white hover:border-none' ><LuEye className='text-lg'/></button>
						</div>
					</div>
					<div className='group relative w-[250px] cursor-pointer flex flex-col gap-1 justify-center border border-solid border-gray-300 rounded-lg hover:border-green-700'>
						<img className="w-[302]" src={DauBapC} />
						<div className='flex flex-row gap-16 justify-center items-center'>
							<div>
								<p className='mt-1 text-base hover:text-green-700 cursor-pointer'>Đậu bắp</p>
								<div className='flex flex-row gap-2'>
									<p className='text-base font-semibold'>11.300₫</p>
								</div>
								<div className='flex flex-row text-xs mt-1 mr-10 mb-5'>
									<FaStar className='text-orange-400' />
									<FaStar className='text-orange-400' />
									<FaStar className='text-orange-400' />
									<FaStar className='text-orange-400' />
									<FaRegStar className='text-orange-400' />
								</div>
							</div>
							<div className=''>
								<button className='bg-gray-200 w-[40px] h-[40px] ml-2 rounded-full hover:bg-green-500 hover:text-white'><BsBasket className='ml-[12px] mb-[1px]' /></button>
							</div>
						</div>
						<div className='group-hover:right-3 transition-all absolute flex -right-10 top-6 flex-col gap-2'>
							<button className='inline-flex w-[35px] h-[35px] rounded-full border border-solid border-gray-400 bg-white pl-[8px] pt-[9px] hover:bg-green-500 hover:text-white hover:border-none' ><FaRegHeart className='text-lg'/></button>
							<button className='inline-flex w-[35px] h-[35px] rounded-full border border-solid border-gray-400 bg-white pl-[8.5px] pt-[8.5px] hover:bg-green-500 hover:text-white hover:border-none' ><LuEye className='text-lg'/></button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default MenuDetail