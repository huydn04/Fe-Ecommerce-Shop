import React from 'react'

import { BsBasket } from "react-icons/bs";
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { LuEye } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa6";


import { RelativeList } from './RelativeList'

const RelativeProduct = () => {
    return (
        <div className='mb-10'>
            <div>
                <h1 className='text-center text-3xl font-bold mt-8 mb-10'>Các sản phẩm liên quan</h1>
            </div>
            <div className='flex flex-row gap-3 justify-center items-center'>
                {
                    RelativeList.map((item, index) => {
                        return (
                            <div className=''>
                                <div className='group relative overflow-hidden cursor-pointer w-[270px] h-[420px] flex flex-col gap-2 justify-center border border-solid border-gray-300 rounded-lg hover:border-green-700'>
                                    <img className="w-[302]" src={item.img} />
                                    <div className='ml-8'>
                                        <p className='mt-1 text-base hover:text-green-700 cursor-pointer'>{item.name}</p>
                                        <div className='flex flex-row gap-2'>
                                            <p className=' text-base font-semibold'>{item.price_old}</p>
                                            <p className='text-base text-gray-500'><s>{item.price_new}</s></p>
                                        </div>
                                        <div className='flex flex-row text-xs mt-1'>
                                            <FaStar className='text-orange-400' />
                                            <FaStar className='text-orange-400' />
                                            <FaStar className='text-orange-400' />
                                            <FaStar className='text-orange-400' />
                                            <FaRegStar className='text-orange-400' />
                                        </div>
                                    </div>
                                    <div className='flex justify-center mt-2'>
                                        <button className='flex flex-row justify-center items-center gap-2  bg-gray-200 w-[220px] h-[35px] rounded-full hover:bg-green-500 hover:text-white'>
                                            <p className=''>Mua ngay</p>
                                            <BsBasket className='' />
                                        </button>
                                    </div>
                                    <div className='group-hover:right-3 transition-all absolute flex -right-10  top-6 flex-col gap-2'>
                                        <button className='inline-flex w-[35px] h-[35px] rounded-full border border-solid border-gray-400 bg-white pl-[8px] pt-[9px] hover:bg-green-500 hover:text-white hover:border-none' ><FaRegHeart className='text-lg' /></button>
                                        <button className='inline-flex w-[35px] h-[35px] rounded-full border border-solid border-gray-400 bg-white pl-[8.5px] pt-[8.5px] hover:bg-green-500 hover:text-white hover:border-none' ><LuEye className='text-lg' /></button>
                                    </div>
                                    <div className='absolute top-4 left-4 w-[90px] rounded-md bg-rose-500 shadow-xl'>
                                        <p className='text-center text-white text-sm'>{item.sale}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default RelativeProduct
