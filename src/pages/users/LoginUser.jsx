import React from 'react'

const LoginUser = () => {

return (
    <div className=''>
        <div className="flex justify-center">
            <div className='w-[600px] h-[300px] rounded-md border border-solid border-gray-300 mt-9 '>
                <p className='text-center mt-3 text-2xl font-bold'>Đăng Nhập</p>
                <div className='mt-3 pl-36'>
                    <input className='w-[300px] h-[35px] pl-5 rounded-md border border-solid border-gray-300' type="email" placeholder='Nhập email' /> <br />
                    <input className='w-[300px] h-[35px] pl-5 rounded-md border border-solid border-gray-300 mt-3' type="password" placeholder='Mật khẩu' /> <br />
                    <div className='flex flex-row gap-16 mt-2 mb-2'>
                        <div className='flex flex-row gap-1'>
                            <input className='w-[15px] h-[15px] mt-3' type="checkbox" name="" id="" /> <br />
                            <p className='mt-1.5 text-gray-700'>Lưu mật khẩu</p>
                        </div>
                        <p className='mt-1.5 text-gray-700'>Quên mật khẩu?</p>
                    </div>
                    <button className='w-[300px] h-[35px] pl-5 mt-2 rounded-full bg-green-500 text-white' type="submit">Đăng nhập</button>
                </div>
                <div className='flex flex-row gap-1 justify-center mt-3 mb-2 text-gray-700'>
                    <p>Bạn chưa có tài khoản?</p>
                    <p className='font-semibold hover:font-bold cursor-pointer'>Đăng ký</p>
                </div>
            </div>
        </div>
    </div>
 )
}

export default LoginUser 