import React from 'react'

const CreateAccount = () => {

return (
    <div className='flex justify-center pt-3'>
        <div className='w-[400px] border border-solid border-gray-500 pt-3 pb-3'>
            <h2 className='text-center font-bold text-2xl'>Tạo tài khoản</h2>
            <input className='w-[300px] ml-12 mt-3 pl-3 border border-solid border-gray-500' type="email" placeholder='Email' />
            <input className='w-[300px] ml-12 mt-3 pl-3 border border-solid border-gray-500' type="password" name="" id="" placeholder='Mật khẩu' />
            <input className='w-[300px] ml-12 mt-3 pl-3 border border-solid border-gray-500' type="password" name="" id="" placeholder='Xác nhận mật khẩu' />
        </div>
    </div>
    )
}

export default CreateAccount