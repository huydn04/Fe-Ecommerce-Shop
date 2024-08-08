import { useEffect, useState } from 'react';
import { useParams,useNavigate } from 'react-router-dom'
import SidebarAdminPages from '../../components/admin/sidebar/SidebarAdmin';
import axios from "axios"
const EditAdminUsers = () => {
    const { id } = useParams();
    const [data, setData] = useState([])
    const navigate = useNavigate();
    useEffect(() => {
        axios.get('http://localhost:3000/users/' + id)
            .then(res => setData(res.data))
            .catch(err => console.log(err))
    }, [id])
    function handleSubmit(event) {
        event.preventDefault()
        axios.put('http://localhost:3000/users/' + id, data)
            .then(() => {
                alert("data update sucessfully !");
                navigate('/AdminUsers')
            })
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
                        <label htmlFor="name">ID:</label>
                        <input type="text" disabled name='name' value={data.id} className='form-control' />
                    </div>
                    <div>
                        <p>Họ Và Tên</p>
                        <input value={data.fullname} onChange={e => setData({ ...data, fullname: e.target.value })} type="text" name="fullname" className=" border border-solid border-gray-300 px-2 rounded-[4px] w-[320px] h-[35px]" />
                    </div>
                    <div>
                        <p>Mật Khẩu</p>
                        <input value={data.password} onChange={e => setData({ ...data, password: e.target.value })} type="number" name="password" className=" border border-solid border-gray-300 px-2 rounded-[4px] w-[320px] h-[35px]" />
                    </div>
                    <div>
                        <p>Địa chỉ</p>
                        <input value={data.address} onChange={e => setData({ ...data, address: e.target.value })} type="text" name="address" className=" border border-solid border-gray-300 px-2 rounded-[4px] w-[320px] h-[35px]" />
                    </div>
                    <div>
                        <p>Email</p>
                        <input value={data.email} onChange={e => setData({ ...data, email: e.target.value })} type="email" name="email" className=" border border-solid border-gray-300 px-2 rounded-[4px] w-[320px] h-[35px]" />
                    </div>
                    <div>
                        <p>Ngày Sinh</p>
                        <input value={data.birthday} onChange={e => setData({ ...data, birthday: e.target.value })} type="date" name="birthday" className="border border-solid border-gray-300 px-2 rounded-[4px] w-[320px] h-[35px]" />
                    </div>
                    <div>
                        <p>SĐT</p>
                        <input value={data.PhoneNumber} onChange={e => setData({ ...data, PhoneNumber: e.target.value })} type="number" name="PhoneNumber" className=" border border-solid border-gray-300 px-2 rounded-[4px] w-[320px] h-[35px]" />                    </div>
                    <div>
                        <p>Giới tính</p>
                        <select value={data.Gender} onChange={e => setData({ ...data, Gender: e.target.value })}  className="border border-solid border-gray-300 px-2 rounded-[4px] w-[340px] h-[35px]" id="" required>
                            <option className='text-center'>-- Chọn giới tính --</option>
                            <option>Nam</option>
                            <option>Nữ</option>
                        </select>
                    </div>
                    <div>
                        <p>Ngày Đăng Ký</p>
                        <input
                            onChange={e => setData({ ...data, DateRegister: e.target.value })} disabled
                            type="date"
                            name="registrationDate"
                            value={data.DateRegister}
                            className=" border border-solid border-gray-300 px-2 rounded-[4px] w-[320px] h-[35px]"
                        />
                    </div>
                </div>
                <div className='flex justify-between'>
                    <div className=''>
                        <button className='btn bg-green-400 text-green-800 hover:bg-green-300'>Lưu Lại</button>
                        <a className='btn bg-red-400 text-red-800 ml-3 hover:bg-red-300' href="/AddAdminUsers">Hủy bỏ</a>
                    </div>
                    <div><a className='btn bg-gray-400 hover:bg-gray-300 text-gray-800 mr-[65px]' href="/AdminUsers">Quay lại</a></div>
                </div>
            </form>
        </div>
    )
}
export default EditAdminUsers;
