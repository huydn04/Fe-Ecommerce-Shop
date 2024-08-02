import SidebarAdminPages from '../../components/admin/sidebar/SidebarAdmin';
const AddAdminUsers = () => {
    return (
        <div className="w-[1220px] h-[auto] ml-[270px] relative mt-[50px]">
            <SidebarAdminPages />
            <h2>Tạo người dùng</h2>
            <div className='border-b-2 my-4 border-solid border-gray-400'>
            </div>
            <div className='grid grid-cols-3 my-8'>
                <div>
                    <p>Họ Và Tên</p>
                    <input className=' border border-solid border-gray-300 px-2 rounded-[4px] w-[320px] h-[35px]' type="text" />
                </div>
                <div>
                    <p>Địa chỉ</p>
                    <input className=' border border-solid border-gray-300 px-2 rounded-[4px] w-[320px] h-[35px]' type="text"  />
                </div>
                <div>
                    <p>Email</p>
                    <input className=' border border-solid border-gray-300 px-2 rounded-[4px] w-[320px] h-[35px]' type="text"  />
                </div>
                <div>
                    <p>Ngày Sinh</p>
                    <input className=' border border-solid border-gray-300 px-2 rounded-[4px] w-[320px] h-[35px]' type="date"  />
                </div>   
                <div>
                    <p>SĐT</p>
                    <input className=' border border-solid border-gray-300 px-2 rounded-[4px] w-[320px] h-[35px]' type="number"  />
                </div>
                <div>
                    <p>Giới tính</p>
                    <select className="border border-solid border-gray-300 px-2 rounded-[4px] w-[340px] h-[35px]" id="" required>
                  <option className='text-center'>-- Chọn giới tính --</option>
                  <option>Nam</option>
                  <option>Nữ</option>
                </select>
                </div>
            </div>
          <div className='flex justify-between'>
          <div className=''>
                <button className='btn bg-green-400 text-green-800 hover:bg-green-300'>Lưu Lại</button>
                <a className='btn bg-red-400 text-red-800 ml-3 hover:bg-red-300' href="/AddAdminUsers">Hủy bỏ</a>
            </div>
            <div><a className='btn bg-gray-400 hover:bg-gray-300 text-gray-800 mr-[65px]' href="/AdminUsers">Quay lại</a></div>
          </div>
        </div>
    )
}
export default AddAdminUsers;
