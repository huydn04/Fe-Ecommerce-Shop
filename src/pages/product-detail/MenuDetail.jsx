// import React from 'react'
import { CaiThiaC} from '../../assets/img-product'
import { CaiThia1 } from '../../assets/img-product'
import { CaiThia2 } from '../../assets/img-product'
import { CaiThia3 } from '../../assets/img-product'
import { TaoXanhC } from '../../assets/img-product'
import { OtChuongXanhC } from '../../assets/img-product'
import { BongCaiTrangC } from '../../assets/img-product'
import { DauBapC } from '../../assets/img-product'
import { Cart } from '../../assets/img-product'
import { Heart } from '../../assets/img-product'
import { Fb } from '../../assets/img-product'
import { Tw } from '../../assets/img-product'
import { Pin } from '../../assets/img-product'
import { Ins } from '../../assets/img-product'
import { FPT } from '../../assets/img-product'
import { Tick } from '../../assets/img-product'
import { GioHang } from '../../assets/img-product'
import { Star1 } from '../../assets/img-product'
import { Star2 } from '../../assets/img-product'


const MenuDetail = () => {
	const mota = document.querySelector(".mota")
	const themthongtin = document.querySelector(".themthongtin")
	if(mota){
    mota.addEventListener("click", function(){
        document.querySelector(".mota1").style.display = "block"
        document.querySelector(".themthongtin1").style.display = "none"
    })
	}
	if(themthongtin){
    themthongtin.addEventListener("click", function(){
        document.querySelector(".mota1").style.display = "none"
        document.querySelector(".themthongtin1").style.display = "block"
    })
	}

	
	return (
		<div className='products w-[1320px] '> 
			<div className='ml-40 mr-40 w-[1220px] h-[558px] flex flex-row justify-center items-center gap-7'>
				<div className='product-imgs basis-1/2 flex flex-row'>
					<div className='product-imgs-small basis-1/4 flex flex-col gap-1 justify-center'>
						<div className='product-img-small-c w-[80px] h-[90px] bg-cover bg-no-repeat bg-center'>
							<img className='hover:border-green-700 hover:border hover:border-solid hover:rounded-lg cursor-pointer' src={CaiThiaC} alt="" />
						</div>
						<div className='product-img-small-1 w-[80px] h-[90px] bg-cover bg-no-repeat bg-center'>
							<img className='hover:border-green-700 hover:border hover:border-solid hover:rounded-lg cursor-pointer' src={CaiThia1} alt="" />
						</div>
						<div className='product-img-small-2 w-[80px] h-[90px] bg-cover bg-no-repeat bg-center'>
							<img className='hover:border-green-700 hover:border hover:border-solid hover:rounded-lg cursor-pointer' src={CaiThia2} alt="" />
						</div>
						<div className='product-img-small-3 w-[80px] h-[90px] bg-cover bg-no-repeat bg-center'>
							<img className='hover:border-green-700 hover:border hover:border-solid hover:rounded-lg cursor-pointer' src={CaiThia3} alt="" />
						</div>
					</div>
					<div className='product-img-big w-[556px] h-[556px] bg-cover bg-no-repeat bg-center bottom-3/4'>
						<img src={CaiThiaC} alt="" />
					</div>
				</div>
				<div className='product-content basis-1/2 '>
					<div className='Tittle flex flex-row'>
						<div className="ten mr-2 font-bold text-3xl">Cải thìa</div>
						<div className="conhang w-[90px] h-[27px] mt-1.5 text-center rounded-md bg-green-100 text-green-800">Còn hàng</div>
					</div>
					<div className="price flex flex-row mt-2">
						<div className="sales mr-2 mt-2.5 line-through text-gray-400">25.000₫</div>
						<div className="normal mr-2 mt-2 text-xl text-green-800 font-semibold">20.000₫</div>
						<div className="sale w-[50px] h-[27px] rounded-xl text-center font-semibold mt-2 text-rose-600 bg-rose-200 border-b border-b-gray-400 border-b-solid">-20%</div>
					</div>
					<div className='border-b border-gray-300 border-solid mt-4'></div>
					<div className='flex flex-row mt-2 mb-2'>
						<div className="flex flex-row">
							<div className='mt-7 font-semibold'>Thương hiệu:</div>
							<img className='w-[56px] h-[56px] ml-3 border border-gray-300 border-solid mt-3 rounded-lg hover:border-green-700 hover:border hover:border-solid hover:rounded-lg cursor-pointer' src={FPT} alt="" />
						</div>
						<div className="flex flex-row">
							<div className='ml-36 mt-7 font-semibold'>Chia sẻ:</div>
							<button>
								<img className='w-[20px] h-[20px] mt-3 ml-4 hover:bg-green-500 hover:rounded-full hover:w-[30px] hover:h-[30px] transition-opacity duration-300' src={Fb} alt="" />
							</button>
							<button>
								<img className='w-[20px] h-[20px] mt-3 ml-4 hover:bg-green-500 hover:rounded-full hover:w-[30px] hover:h-[30px] transition-opacity duration-300' src={Tw} alt="" />
							</button>
							<button>
								<img className='w-[25px] h-[25px] mt-3 ml-4 hover:bg-green-500 hover:rounded-full hover:w-[30px] hover:h-[30px] transition-opacity duration-300' src={Pin} alt="" />
							</button>
							<button>
								<img className='w-[25px] h-[25px] mt-3 ml-4 hover:bg-green-500 hover:rounded-full hover:w-[30px] hover:h-[30px] transition-opacity duration-300' src={Ins} alt="" />
							</button>
						</div>
					</div>
					<div className="content mt-2">
						Đây là loại rau được cho là thực phẩm dưỡng sinh, ăn vào có thể lợi trường vị, thanh nhiệt, lợi tiểu tiện và ngừa bệnh ngoài da. Cải thìa có tác dụng chống scorbut, tạng khớp và làm tan sưng. <br />
						Sản phẩm đạt tiêu chuẩn, không chứa các hóa chất, chất kích thích tăng trưởng gây hại, đảm bảo an toàn cho sức khỏe người tiêu dùng. 
					</div>
					<div className='border-b border-gray-300 border-solid mt-6'></div>
					<div className="add flex flex-row mt-5">
						<div className="quantity w-[115px] h-[35px] flex flex-row mr-2 border-solid border-gray-300 border rounded-full">
							<button className='w-[25px] h-[25px] mt-1 ml-1 flex flex-row justify-center bg-gray-100 rounded-full '>-</button>
							<input className='w-[40px] h-[25px] mt-1 ml-2 border-2 rounded-2xl text-center' type="number" name="" id="" min={1} />
							<button className='w-[25px] h-[25px] mt-1 ml-2 flex flex-row justify-center bg-gray-100 rounded-full'>+</button>
						</div>
						<div className="add-to-cart w-[370px] h-[35px] flex flex-row justify-center mr-2 bg-green-500 rounded-full hover:bg-green-600 transition-opacity duration-300 cursor-pointer">
							<div className="text mt-1.5 text-white font-semibold text-center mr-1.5 text-sm">Thêm vào giỏ hàng</div>
							<div className="icon-cart w-[18px] h-[18px] mt-2.5 ">
								<img src={Cart} alt="" />
							</div>
						</div>
						<div className='w-[35px] h-[35px] flex flex-row justify-center bg-green-100 rounded-full hover:bg-green-200 transition-opacity duration-300 cursor-pointer'>
								<img className='w-[20px] h-[20px] mt-2' src={Heart} alt="" />
						</div>
					</div>
					<div className="cagetory font-semibold mt-4">Danh mục:</div>
					<div className="tag font-semibold mt-3">Thẻ:</div>
				</div>
			</div>
			<div className='ml-40 mr-40 w-[1220px] text-lg'>
				<div className=' flex flex-row justify-center items-center gap-4 font-semibold text-lg text-gray-500'>
					<div className='mota h-[40px] w-[90px] text-center hover:border-b-2 border-solid border-green-500 cursor-pointer'>Mô tả</div>
					<div className='themthongtin h-[40px] w-[190px] text-center hover:border-b-2 border-solid border-green-500 cursor-pointer'>Thêm thông tin</div>
					<div className='danhgia h-[40px] w-[250px] text-center hover:border-b-2 border-solid border-green-500 cursor-pointer'>Đánh giá từ khách hàng</div>
				</div>
				<div className='border-b border-gray-300 border-solid mb-6'></div>
				<div className='mota1'>
					<div className="text-gray-500">
					Nếu bạn đang tìm một loại rau dễ ăn, hình dáng đẹp, giá trị dinh dưỡng cao thì hẳn Cải thìa là loại rau đáp ứng đủ các tiêu chí ấy. <br />
					Cải thìa được gọi với cái tên khác là cải chíp, cải muỗng. Bởi lẽ từng bẹ lá uốn cong trông như cái muỗng. Cải có màu xanh đẹp mắt ở phần lá, thân mập, hơi lùn nhưng bẹ to, phần gốc bẹ có màu trắng.
					<div className='flex flex-row'>
						<img className='w-[30px] h-[20px] mt-2.5 mr-1' src={Tick} alt="" />
						<div className='mt-1.5 text-gray-500'>Hàng xuất sứ từ Việt Nam</div>
					</div>
					<div className='flex flex-row'>
						<img className='w-[30px] h-[20px] mt-2.5 mr-1' src={Tick} alt="" />
						<div className='mt-1.5 text-gray-500'>Bảo quản ngăn mát tủ lạnh từ 10-18 độ C</div>
					</div>
					<div className='flex flex-row'>
						<img className='w-[30px] h-[20px] mt-2.5 mr-1' src={Tick} alt="" />
						<div className='mt-1.5 text-gray-500'>Rau củ mới, tươi ngon</div>
					</div>
					<div className='flex flex-row mb-1'>
						<img className='w-[30px] h-[20px] mt-2.5 mr-1' src={Tick} alt="" />
						<div className='mt-1.5 text-gray-500'>Đúng mô tả của sản phẩm</div><br />
					</div>
					<div className='mb-48'>Cải Thìa là một loại rau dễ ăn, có hình dáng và màu sắc đẹp, giàu dinh dưỡng và xuất hiện trong nhiều công thức nấu ăn.</div>
					</div>
				</div>
				<div className='themthongtin1 hidden'>
					<div className='flex flex-row mb-48'>
						<div className='mr-16 font-semibold'>
							<p>Cân nặng:</p>
							<p>Màu sắc:</p>
							<p>Loại:</p>
							<p>Danh mục:</p>
							<p>Trạng thái:</p>
							<p>Thẻ:</p>
						</div>
						<div className='text-gray-500 '>
							<div>1kg</div>
							<p>Xanh</p>
							<p>Hữu cơ</p>
							<p>Rau củ</p>
							<p>Còn hàng (5,413)</p>
							<p>Rau củ quả, Lành mạnh, Bắp cải, Cải xanh</p>
						</div>
					</div>
				</div>
			</div>
			<div className='ml-40 mr-40 w-[1220px] text-lg mb-10'>
				<div className='font-bold text-3xl text-center'>Các sản phẩm liên quan</div>
				<div className='flex flex-row gap-3 mt-10'>
					<div className="w-[300px] h-[385px] border-2 border-solid border-gray-300 rounded-xl hover:border-green-700 cursor-pointer">
						<img className='w-[270px] h-[270px] ml-3 mt-3' src={TaoXanhC} alt="" />
						<div className="font-normal text-gray-500 ml-5 mt-2 hover:text-green-700 cursor-pointer">Táo xanh</div>
						<div className="flex flex-row ml-5">
							<div className='font-semibold mr-2 '>25.000₫</div>
							<div className='line-through text-gray-500'>50.000₫</div>
							<div className='w-[35px] h-[35px] ml-20 flex flex-row justify-center bg-gray-200 rounded-full hover:bg-green-500 cursor-pointer'>
								<img className='w-[20px] h-[20px] mt-2' src={GioHang} alt="" />
							</div>
						</div>
						<div className='flex flex-row ml-5'>
							<img className='w-[13px] h-[13px] mr-1' src={Star1} alt="" />
							<img className='w-[13px] h-[13px] mr-1' src={Star1} alt="" />
							<img className='w-[13px] h-[13px] mr-1' src={Star1} alt="" />
							<img className='w-[13px] h-[13px] mr-1' src={Star1} alt="" />
							<img className='w-[13px] h-[13px] mr-1' src={Star2} alt="" />
						</div>
					</div>
					<div className="w-[300px] h-[385px] border-2 border-solid border-gray-300 rounded-xl hover:border-green-700 cursor-pointer">
						<img className='w-[270px] h-[270px] ml-3 mt-3' src={BongCaiTrangC} alt="" />
						<div className="font-normal text-gray-500 ml-5 mt-2 hover:text-green-700 cursor-pointer">Bông cải trắng</div>
						<div className="flex flex-row ml-5 gap-40">
							<div className='font-semibold'>22.500₫</div>
							<div className='w-[35px] h-[35px] flex flex-row justify-center bg-gray-200 rounded-full hover:bg-green-500 cursor-pointer'>
								<img className='w-[20px] h-[20px] mt-2' src={GioHang} alt="" />
							</div>
						</div>
						<div className='flex flex-row ml-5'>
							<img className='w-[13px] h-[13px] mr-1' src={Star1} alt="" />
							<img className='w-[13px] h-[13px] mr-1' src={Star1} alt="" />
							<img className='w-[13px] h-[13px] mr-1' src={Star1} alt="" />
							<img className='w-[13px] h-[13px] mr-1' src={Star1} alt="" />
							<img className='w-[13px] h-[13px] mr-1' src={Star2} alt="" />
						</div>
					</div>
					<div className="w-[300px] h-[385px] border-2 border-solid border-gray-300 rounded-xl hover:border-green-700 cursor-pointer">
						<img className='w-[270px] h-[270px] ml-3 mt-3' src={OtChuongXanhC} alt="" />
						<div className="font-normal text-gray-500 ml-5 mt-2 hover:text-green-700 cursor-pointer">Ớt chuông xanh</div>
						<div className="flex flex-row ml-5 gap-40">
							<div className='font-semibold'>11.000₫</div>
							<div className='w-[35px] h-[35px] flex flex-row justify-center bg-gray-200 rounded-full hover:bg-green-500 cursor-pointer'>
								<img className='w-[20px] h-[20px] mt-2' src={GioHang} alt="" />
							</div>
						</div>
						<div className='flex flex-row ml-5'>
							<img className='w-[13px] h-[13px] mr-1' src={Star1} alt="" />
							<img className='w-[13px] h-[13px] mr-1' src={Star1} alt="" />
							<img className='w-[13px] h-[13px] mr-1' src={Star1} alt="" />
							<img className='w-[13px] h-[13px] mr-1' src={Star1} alt="" />
							<img className='w-[13px] h-[13px] mr-1' src={Star2} alt="" />
						</div>
					</div>
					<div className="w-[300px] h-[385px] border-2 border-solid border-gray-300 rounded-xl hover:border-green-700 cursor-pointer">
						<img className='w-[270px] h-[270px] ml-3 mt-3' src={DauBapC} alt="" />
						<div className="font-normal text-gray-500 ml-5 mt-1 hover:text-green-700 cursor-pointer">Đậu bắp</div>
						<div className="flex flex-row ml-5 gap-40">
							<div className='font-semibold '>11.300₫</div>
							<div className='w-[35px] h-[35px] flex flex-row justify-center bg-gray-200 rounded-full hover:bg-green-500 cursor-pointer'>
								<img className='w-[20px] h-[20px] mt-2' src={GioHang} alt="" />
							</div>
						</div>
						<div className='flex flex-row ml-5'>
							<img className='w-[13px] h-[13px] mr-1' src={Star1} alt="" />
							<img className='w-[13px] h-[13px] mr-1' src={Star1} alt="" />
							<img className='w-[13px] h-[13px] mr-1' src={Star1} alt="" />
							<img className='w-[13px] h-[13px] mr-1' src={Star1} alt="" />
							<img className='w-[13px] h-[13px] mr-1' src={Star2} alt="" />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default MenuDetail