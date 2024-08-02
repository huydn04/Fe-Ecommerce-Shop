import { useState } from 'react';
import SidebarAdminPages from '../../components/admin/sidebar/SidebarAdmin'
import JSONDATA from '../../../MOCK_DATA1';
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
const AdminUsers = () => {
    const [searchItem, setsearchItem] = useState("");
    const [curretPage, setcurretPage] = useState(1);
    const [recordsPerPage, setrecordsPerPage] = useState(10);
    const [Check, setCheckbox] = useState([]);
    const [checkmom, setcheckmom] = useState(0);
    const lastIndex = curretPage * recordsPerPage;
    const firstIndex = lastIndex - recordsPerPage;
    const records = JSONDATA.slice(firstIndex, lastIndex);
    const npage = Math.ceil(JSONDATA.length / recordsPerPage);
    const numbers = [...Array(npage + 1).keys()].slice(1);
    const handleOptionChange = (e) => {
        let isSelect = e.target.checked;
        let value = parseInt(e.target.value);
        if (isSelect) {
            setCheckbox([...Check, value])
        }
        else {
            setCheckbox((prevCheck) => {
                return prevCheck.filter((id) => {
                    return id !== value;
                })
            })
        }
    };
    const handleCheckboxChange = () => {
        setcheckmom(checkmom === 0 ? 1 : 0);
        if (checkmom) {
            setCheckbox([])
        }
        else {
            const postIds = JSONDATA.map((users) => {
                return users.id
            })
            setCheckbox(postIds)
        }
    };
    function prePage() {
        if (curretPage !== 1) {
            setcurretPage(curretPage - 1);
        }
    }
    function changeCPage(id) {
        setcurretPage(id);
    }
    function nextPage() {
        if (curretPage !== lastIndex) {
            setcurretPage(curretPage + 1);
        }
    }
    return (
        <div className="w-[1210px] h-[auto] ml-[270px] relative ">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css" />
            <SidebarAdminPages />

            <main className=" ">
                <div className="row">
                    <div className="">
                        <div className="tile">
                            <div className="tile-body">
                                <div >
                                    <div className="col-sm-2">
                                        <a className="btn btn-add btn-sm bg-green-400 hover:bg-green-600" href="/AddAdminUsers" title="Thêm">
                                            <i className="fa-solid fa-plus"></i>  Tạo mới người dùng</a>
                                        <a className="btn btn-delete btn-sm bg-gray-400 hover:bg-gray-600 ml-2" type="button" title="Xóa" >
                                            <i className="fa-solid fa-trash-can"></i> Xóa tất cả </a>
                                    </div>
                                </div>
                                <div className='border-b-2 my-4 border-solid border-gray-400'>

                                </div>
                                <div className='flex justify-between items-center'>
                                    <div className='flex items-center '>
                                        <p>Hiện :</p>
                                        <select name="" value={recordsPerPage} onChange={(e) => setrecordsPerPage(e.target.value)} className="cursor-pointer flex-col items-center rounded border-solid border h-[30px] w-[60px] pt-[2px] pl-[7px] text-center m-2">
                                            <option value="10">10</option>
                                            <option value="25">25</option>
                                            <option value="50">50</option>
                                            <option value="100">100</option>
                                        </select>
                                        Danh mục
                                    </div>
                                    <div className='flex rounded items-center border-solid border h-[50px]'>
                                        <p className='ml-2'>Tìm Kiếm: </p>
                                        <input type="text" name="" id="" className='mx-2 border border-solid pl-[10px] rounded-md h-[30px] w-[200px]' onChange={(e) => setsearchItem(e.target.value)} />
                                    </div>
                                </div>
                                <table className="table w-[1200px] mt-[20px] border-collapse border-solid border border-gray-300"
                                    id="">
                                    <thead className='w-[1200px]'>
                                        <tr className='bg-gray-500 border border-solid'>
                                            <th className='border-solid border border-gray-300 text-cente' width="10"><input className='cursor-pointer' type="checkbox" onChange={handleCheckboxChange} /></th>
                                            <th className='border-solid border border-gray-300 text-center text-white' width="10">ID</th>
                                            <th className='border-solid border border-gray-300 text-center text-white' width="100">Họ và tên</th>
                                            <th className='border-solid border border-gray-300 text-center text-white' width="180">Địa chỉ</th>
                                            <th className='border-solid border border-gray-300 text-center text-white' width="50">Email</th>
                                            <th className='border-solid border border-gray-300 text-center text-white' width="100">Ngày sinh</th>
                                            <th className='border-solid border border-gray-300 text-center text-white' width="100">Giới tính</th>
                                            <th className='border-solid border border-gray-300 text-center text-white' width="140">SĐT</th>
                                            <th className='border-solid border border-gray-300 text-center text-white' width="100">Ngày Tạo</th>
                                            <th className='border-solid border border-gray-300 text-center text-white' width="30">online gần nhất</th>
                                            <th className='border-solid border border-gray-300 text-center text-white' width="100">Tính năng</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {records.filter((users) => {
                                            if (searchItem == "") {
                                                return users
                                            }
                                            else if (users.fullname.toLowerCase().includes(searchItem.toLowerCase())) {
                                                return users
                                            }
                                        }).map((users) => {
                                            return (
                                                <tr className='border-collapse' key={users.id}>
                                                    <td className='border-solid border border-gray-300 text-center'><input className='cursor-pointer' checked={Check.includes(users.id)} value={users.id} onChange={handleOptionChange} type="checkbox" name="check1" /></td>
                                                    <td className='border-solid border border-gray-300 text-center'>{users.id}</td>
                                                    <td className='border-solid border border-gray-300 text-center'>{users.fullname}</td>
                                                    <td className='border-solid border border-gray-300 text-center' width="50">{users.address}</td>
                                                    <td className='border-solid border border-gray-300 '>{users.email}</td>
                                                    <td className='border-solid border border-gray-300 text-center'>{users.birthday}</td>
                                                    <td className='border-solid border border-gray-300 text-center'>{users.Gender}</td>
                                                    <td className='border-solid border border-gray-300 text-center'>{users.PhoneNumber}</td>
                                                    <td className='border-solid border border-gray-300 text-center'>{users.DateRegister}</td>
                                                    <td className='border-solid border border-gray-300 text-center'  >{users.DateLastActive}</td>
                                                    <td className="table-td-center border-solid border border-gray-300 relative">
                                                        <button className="absolute top-[20px] left-[10px] group btn btn-primary btn-sm bg-[#dc3545] hover:bg-[#efa2a9]" type="button" title="Xóa"
                                                        > <i className="fa-regular fa-trash-can"></i>
                                                        </button>
                                                        <button className="absolute top-[20px] right-[10px] btn btn-primary btn-sm ml-2 bg-[#ffc107] hover:bg-[#fd7e14]" type="button" title="Sửa" id="show-emp"
                                                            data-toggle="modal" data-target="#ModalUP"><i className="fas fa-edit"></i>
                                                        </button>
                                                    </td>
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                </table>
                                <div className='flex justify-between my-6 mr-[30px]'>
                                    <p></p>
                                    <ul className='flex list-none p-0 m-0'>
                                        <li className='mx-1'>
                                            <a  href="#" onClick={prePage} className='flex items-center justify-center px-4 py-2 text-gray-600 bg-gray-200 border border-gray-300 rounded hover:bg-gray-300 transition-colors duration-300' >
                                                 <IoIosArrowBack /> </a>
                                        </li>
                                        {numbers.map((n, i) => (
                                            <li className='mx-1' key={i}>
                                                <a onClick={() => changeCPage(n)} href="#" className={`flex items-center justify-center px-4 py-2  border border-gray-300 rounded transition-colors duration-300  text-white ${curretPage === n ? 'bg-green-600 ' : 'bg-green-400 hover:bg-green-500 hover:text-green-700    '}`}
                                                >{n} </a></li>
                                        ))}
                                        <li className='mx-1'>
                                            <a onClick={nextPage} href="#" className='flex items-center justify-center px-4 py-2 text-gray-600 bg-gray-200 border border-gray-300 rounded hover:bg-gray-300 transition-colors duration-300'
                                            ><IoIosArrowForward /> </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
export default AdminUsers;
