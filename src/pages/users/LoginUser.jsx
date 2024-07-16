import React from 'react'
import { FaEye } from "react-icons/fa";


const LoginUser = () => {

return (
    <div className='re-page flex justify-center items-center w-auto h-[100vh]'>
        <div className="w-[600px] border border-solid border-gray-300 shadow-custom bg-white pt-5 mt-5 mb-5 rounded-md">
            <h1 className='text-center font-bold text-2xl mt-3'>Đăng nhập</h1>
            
            <form className='flex flex-col items-center mb-5'>
                <div className=''>
                    <input 
                        className='w-[350px] h-[35px] pl-4 mt-3 border border-solid border-gray-300 rounded-md hover:border-green-700 '
                        type="text"
                        id="e-mail"
                        name="email"
                        placeholder='Nhập email'
                    />
                </div>
                <div className='relative flex items-center gap-2'>
                    <input 
                        className='w-[350px] h-[35px] pl-4 mt-3 border border-solid border-gray-300 rounded-md hover:border-green-700 '
                        type="password"
                        id="password"
                        name="password"
                        placeholder='Mật khẩu'
                    />
                    <FaEye className='w-[15px] h-[15px] absolute ml-80 mt-3 cursor-pointer'/>
                </div>
                <div className='flex flex-row items-center gap-[148px] mt-2 text-gray-700 text-sm'>
                    <div className='flex items-center gap-1'>
                        <input 
                            className='pt-2'
                            type="checkbox"
                            name=""
                            id=""
                        />
                        <p>Lưu mật khẩu</p>
                    </div>
                    <p>Quên mật khẩu?</p>
                </div>
                <button type="submit" className='w-[350px] h-[30px] mt-3 font-semibold border border-solid border-gray-300 rounded-full bg-green-500 text-white hover:bg-green-600 hover:duration-300'>
                    Đăng nhập
                </button>
                <div className='flex flex-row gap-1 mt-2 text-sm text-gray-800'>
                    <p>Bạn chưa có tài khoản?</p>
                    <p className='font-semibold hover:text-green-700 hover:font-bold cursor-pointer'>Đăng ký</p>
                </div>
            </form>
        </div>
    </div>
 )
}

export default LoginUser 
