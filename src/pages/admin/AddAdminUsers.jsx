import SidebarAdminPages from '../../components/admin/sidebar/SidebarAdmin';
import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom";
const AddAdminUsers = () => {
    const today = new Date().toISOString().split('T')[0];
    const [inputData, setinputData] = useState({
        email: '',
        fullname: '',
        password: '',
        address: '',
        birthday: '',
        PhoneNumber: '',
        Gender: '',
        DateRegister: today
    })
    const navigate = useNavigate();
    function handleSubmit(event) {
        event.preventDefault()

        axios.post('http://localhost:3000/users', inputData)
            .then(() => {
                alert("Data Added Sucessfully!");
                navigate('/AdminUsers')
            }).catch(err => console.log(err));
    }
    return (
        <div className="w-[1220px] h-[auto] ml-[270px] relative mt-[50px]">
            <SidebarAdminPages />
            <h2>Tạo người dùng</h2>
            <div className='border-b-2 my-4 border-solid border-gray-400'>
            </div>
            <form onSubmit={handleSubmit}>
                <div className='grid grid-cols-3 my-8'>
                    <div>
                        <p>Họ Và Tên</p>
                        <input onChange={e => setinputData({ ...inputData, fullname: e.target.value })} type="text" name="fullname" className=" border border-solid border-gray-300 px-2 rounded-[4px] w-[320px] h-[35px]" />
                    </div>
                    <div>
                        <p>Email</p>
                        <input onChange={e => setinputData({ ...inputData, email: e.target.value })} type="email" name="email" className=" border border-solid border-gray-300 px-2 rounded-[4px] w-[320px] h-[35px]" />
                    </div>
                    <div>
                        <p>Mật Khẩu</p>
                        <input onChange={e => setinputData({ ...inputData, password: e.target.value })} type="number" name="password" className=" border border-solid border-gray-300 px-2 rounded-[4px] w-[320px] h-[35px]" />
                    </div>

                    <div>
                        <p>Ngày Sinh</p>
                        <input onChange={e => setinputData({ ...inputData, birthday: e.target.value })} type="date" name="birthday" className="border border-solid border-gray-300 px-2 rounded-[4px] w-[320px] h-[35px]" />
                    </div>
                   
                    <div>
                        <p>Giới tính</p>
                        <select value={inputData.Gender} onChange={e => setinputData({ ...inputData, Gender: e.target.value })} className="border border-solid border-gray-300 px-2 rounded-[4px] w-[340px] h-[35px]" id="" required>
                            <option className='text-center'>-- Chọn giới tính --</option>
                            <option>Nam</option>
                            <option>Nữ</option>
                        </select>
                    </div>
                    <div>
                        <p>SĐT</p>
                        <input onChange={e => setinputData({ ...inputData, PhoneNumber: e.target.value })} type="number" name="PhoneNumber" className=" border border-solid border-gray-300 px-2 rounded-[4px] w-[320px] h-[35px]" />
                    </div>
                    <div>
                        <p>Địa chỉ</p>
                        <input onChange={e => setinputData({ ...inputData, address: e.target.value })} type="text" name="address" className=" border border-solid border-gray-300 px-2 rounded-[4px] w-[320px] h-[35px]" />
                    </div>

                    <div>
                        <p>Ngày Đăng Ký</p>
                        <input
                            onChange={e => setinputData({ ...inputData, DateRegister: e.target.value })} disabled
                            type="date"
                            name="registrationDate"
                            value={{...inputData.DateRegister}}
                            className=" border border-solid border-gray-300 px-2 rounded-[4px] w-[320px] h-[35px]"
                        />
                    </div>
                </div>
                <div className='flex justify-between'>
                    <div className=''>
                        <button className='btn bg-green-400 text-green-800 hover:bg-green-300'>Lưu Lại</button>
                    </div>
                    <div><a className='btn bg-gray-400 hover:bg-gray-300 text-gray-800 mr-[65px]' href="/AdminUsers">Quay lại</a></div>
                </div>
            </form>
        </div>
    )
}
export default AddAdminUsers;
