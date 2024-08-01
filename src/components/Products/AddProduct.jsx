import React, { useState } from 'react'

import SidebarAdminPages from '../../components/admin/sidebar/SidebarAdmin'
import NavBarAdmin from '../../components/Products/NavBarAdmin'
import { Select } from 'react-daisyui'
import { Link } from 'react-router-dom'

const AddProduct = () => {
    const [value, setValue] = useState('default');


    return (
        <>
            <div className='h-full'>
                <div className='flex justify-center h-full'>
                    <div>
                        <SidebarAdminPages />
                    </div>
                    <div className="w-full px-5 py-3 ml-64 h-full bg-gray-100 ">
                        <NavBarAdmin />
                        <div className='bg-white rounded-lg'>
                            <div>
                                <div>
                                    <h1 className='font-bold bx-font-family text-3xl pt-5 pb-5 text-center rounded-b-3xl bg-green-500 text-white'>THÊM SẢN PHẨM</h1>
                                    <div>
                                        <p className='pl-20 text-lg pt-7 font-semibold'>Tên sản phẩm</p>
                                        <input type="text"
                                            className='ml-20 pl-3 mt-2 w-[550px] h-[40px] border border-solid border-gray-300 rounded-lg' />
                                    </div>
                                    <div>
                                        <p className='pl-20 text-lg pt-5 font-semibold'>Mô tả</p>
                                        <textarea
                                            className='ml-20 pl-3 mt-2 pt-3 pr-3 w-[550px] h-[100px] border border-solid border-gray-300 rounded-lg' />
                                    </div>
                                    <div>
                                        <p className='pl-20 text-lg pt-5 font-semibold'>Giá gốc</p>
                                        <input type="text"
                                            className='ml-20 pl-3 mt-2 w-[250px] h-[40px] border border-solid border-gray-300 rounded-lg' />
                                    </div>
                                    <div>
                                        <p className='pl-20 text-lg pt-5 font-semibold'>Giá khuyến mãi</p>
                                        <input type="text"
                                            className='ml-20 pl-3 mt-2 w-[250px] h-[40px] border border-solid border-gray-300 rounded-lg' />
                                    </div>
                                    <div>
                                        <p className='pl-20 text-lg pt-5 font-semibold'>Danh mục</p>
                                        <Select
                                            className='ml-20 mt-2  border border-solid border-gray-300 rounded-lg'
                                            value={value} onChange={event => setValue(event.target.value)}>
                                            <option value={'default'} disabled>
                                                Chọn danh mục
                                            </option>
                                            <option value={'Category1'}>Danh mục 1</option>
                                            <option value={'Category2'}>Danh mục 2</option>
                                            <option value={'Category3'}>Danh mục 3</option>
                                            <option value={'Category4'}>Danh mục 4</option>
                                            <option value={'Category5'}>Danh mục 5</option>
                                        </Select>
                                    </div>
                                    <div>
                                        <p className='pl-20 text-lg pt-6 font-semibold'>Tình trạng</p>
                                        <Select
                                            className='ml-20 mt-2 mb-5 border border-solid border-gray-300 rounded-lg'
                                            value={value} onChange={event => setValue(event.target.value)}>
                                            <option value={'default'} disabled>
                                                Tình trạng
                                            </option>
                                            <option value={'Status1'}>Còn hàng</option>
                                            <option value={'Status2'}>Hết hàng</option>
                                        </Select>
                                    </div>
                                    <div>
                                        <p className='pl-20 text-lg pt-1 font-semibold'>Hình ảnh</p>
                                        <input type="file"
                                            className='ml-20 mt-2 pt-1 w-[250px] h-[40px]' />
                                    </div>
                                </div>
                            </div>
                            <div className='flex justify-end mt-3'>
                                <button className='font-semibold bg-cyan-500 mb-5 mr-3 text-white w-[130px] h-[30px] rounded-lg'>Tạo sản phẩm</button>
                                <Link to='/update' className='font-semibold bg-rose-500 mb-5 mr-10 pt-[2px] text-white w-[120px] h-[30px] rounded-lg text-center'>Hủy</Link>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default AddProduct
