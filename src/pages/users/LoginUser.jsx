import React from 'react'
//import { FaEye } from "react-icons/fa";


const LoginUser = () => {

return (
    <div className='re-page flex justify-center items-center w-auto h-[100vh]'>
        <div className="w-[600px] border border-solid border-gray-300 shadow-custom bg-white pt-5 mt-5 mb-5">
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
                <div className=''>
                    <input 
                        className='w-[350px] h-[35px] pl-4 mt-3 border border-solid border-gray-300 rounded-md hover:border-green-700 '
                        type="password"
                        id="password"
                        name="password"
                        placeholder='Mật khẩu'
                    />
                    
                </div>
            </form>
        </div>
    </div>
 )
}

export default LoginUser 
