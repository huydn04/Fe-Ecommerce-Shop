import React from 'react'

import { CaiThiaC } from '../../assets/img-product'
import { FPT } from '../../assets/img-product'

import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { BsBasket } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { BsDot } from "react-icons/bs";
import Counter from './Counter';

const ProductDetail = () => {
    
    return (
        <div>
            <div >
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
                        <Counter/>
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
        </div>
    )
}

export default ProductDetail
