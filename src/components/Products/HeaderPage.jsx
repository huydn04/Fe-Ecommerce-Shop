import React from 'react'

import { LuMapPin } from "react-icons/lu";
import { Link } from 'react-router-dom';
import { MdKeyboardArrowDown } from "react-icons/md";



const HeaderPage = () => {
    return (
        <div className=''>
            <div className='flex flex-row justify-center items-center gap-[650px]'>
                <div className='flex flex-row gap-2 text-sm'>
                    <LuMapPin className='mt-1' />
                    <p>FPT TEAM Supermarket: Đồng nai - TP. Biên Hòa</p>
                </div>
                <div className='flex flex-row gap-2 text-sm'>
                    <div className='flex flex-row justify-center items-center'>
                        <p>ENG</p>
                        <MdKeyboardArrowDown className='mt-0.5' />
                    </div>
                    <div className='flex flex-row justify-center items-center'>
                        <p>VND</p>
                        <MdKeyboardArrowDown className='mt-0.5' />
                    </div>
                    <p> | </p>
                    <Link to='/login-user'>Đăng nhập</Link>
                    <p>/</p>
                    <Link to='/create-user'>Đăng ký</Link>
                </div>
            </div>
            <div className='border-b border-solid border-gray-300 mb-10'></div>
        </div>
    )
}

export default HeaderPage
