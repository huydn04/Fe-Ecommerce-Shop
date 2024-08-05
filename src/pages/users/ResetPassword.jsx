
import {Link} from 'react-router-dom'

const ResetPassword = () => {
    return (
        <div className='re-page flex justify-center items-center w-auto h-[100vh]'>
            <div className="w-[600px] rounded-xl border border-solid border-gray-300 shadow-custom bg-white pt-5 mt-5 mb-5">
                <h1 className='text-center font-bold text-2xl mt-3'>Quên mật khẩu</h1>
                <form className='flex flex-col items-center mt-3 ml-12 mb-9'>
                    <input
                        type="email"
                        placeholder='Nhập địa chỉ email'
                        className='border border-solid border-gray-200 w-[450px] h-[40px] rounded-lg pl-5'
                    />
                    <button className='mt-4 bg-green-500 w-[300px] h-[30px] rounded-lg text-white hover:bg-green-600 duration-100'>Gửi mã xác nhận</button>
                    <Link to="/login-user" className='text-sm mt-2 text-gray-500 hover:text-green-700  duration-100'>Trở về trang đăng nhập</Link>
                </form>
            </div>
        </div>
    )
}

export default ResetPassword
