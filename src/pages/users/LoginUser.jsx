import React from 'react'

const LoginUser = () => {

return (
    <div className="re-page flex justify-center items-center w-auto h-[100vh]">
        <div className='w-[600px] border border-solid border-gray-300 shadow-custom bg-white pt-5 mt-5 mb-5'>
            <h1 className='text-center font-bold text-2xl mt-3'>Tạo tài khoản</h1>
            <form onSubmit={handleSubmit} className='flex flex-col items-center mb-5'>
                <div className=''>
                    <input 
                        className='w-[350px] h-[35px] pl-4 mt-3 border border-solid border-gray-300 rounded-md hover:border-green-700 '
                        type="text"
                        id="e-mail"
                        name="email"
                        placeholder='Nhập email'
                        value={formValue.email}
                        onChange={handleChange}
                    />
                    {formError.email && (
                        <div className='text-red-500 text-xs ml-1 mt-1'>{formError.email}</div>
                    )}
                </div>
                <div>
                    <div className='relative flex items-center gap-2'>
                        <input 
                            className='w-[350px] h-[35px] pl-4 mt-3 border border-solid border-gray-300 rounded-md hover:border-green-700 '
                            type="password"
                            name="password"
                            id="password" 
                            placeholder='Mật khẩu'
                            value={formValue.password}
                            onChange={handleChange}
                        />
                        <FaEye className='w-[15px] h-[15px] absolute ml-80 mt-3'/>
                    </div>
                    {formError.password && (
                        <div className='text-red-500 text-xs ml-1 mt-1'>{formError.password}</div>
                    )}
                </div>
                <div>
                    <div className='relative flex items-center gap-2'>
                        <input 
                            className='w-[350px] h-[35px] pl-4 mt-3 border border-solid border-gray-300 rounded-md hover:border-green-700 '
                            type="password" 
                            name="confirmPassword" 
                            id="confirm-Password" 
                            placeholder='Xác nhận mật khẩu'
                            value={formValue.confirmPassword}
                            onChange={handleChange}
                        />
                        <FaEye className='w-[15px] h-[15px] absolute ml-80 mt-3'/>
                    </div>
                    {formError.confirmPassword && (
                        <div className='text-red-500 text-xs ml-1 mt-1'>{formError.confirmPassword}</div>
                    )}
                </div>
                <input 
                        className='mt-3 mr-[338px]'
                        type="checkbox"
                        name="" 
                        id=""
                />
                <button type="submit" className='w-[350px] h-[30px] mt-3 font-semibold border border-solid border-gray-300 rounded-full bg-green-500 text-white hover:bg-green-600 hover:duration-300'>
                    Đăng ký 
                </button>
                <div className='flex flex-row gap-1 mt-2 text-sm text-gray-800'>
                    <p>Bạn đã có tài khoản?</p>
                    <p className='font-semibold hover:text-green-700 hover:font-bold cursor-pointer'>Đăng nhập</p>
                </div>
            </form>
        </div>
    </div>
 )
}

export default LoginUser 