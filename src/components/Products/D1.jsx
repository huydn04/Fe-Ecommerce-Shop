import React from 'react'
import { HiBadgeCheck } from "react-icons/hi";


const D1 = () => {
    return (
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
                    <HiBadgeCheck className='mt-1 text-green-600' />
                    <p>Hàng xuất sứ từ Việt Nam</p>
                </div>
                <div className='flex flex-row gap-1 mt-2'>
                    <HiBadgeCheck className='mt-1 text-green-600' />
                    <p>Bảo quản ngăn mát tủ lạnh từ 10-18 độ C</p>
                </div>
                <div className='flex flex-row gap-1 mt-2'>
                    <HiBadgeCheck className='mt-1 text-green-600' />
                    <p>Rau củ mới, tươi ngon</p>
                </div>
                <div className='flex flex-row gap-1 mt-2'>
                    <HiBadgeCheck className='mt-1 text-green-600' />
                    <p>Đúng mô tả của sản phẩm</p>
                </div>
                <p className='mt-4'>Cải Thìa là một loại rau dễ ăn, có hình dáng và màu sắc đẹp, giàu dinh dưỡng và xuất hiện trong nhiều công thức nấu ăn.</p>
            </div>
        </div>
    )
}

export default D1
