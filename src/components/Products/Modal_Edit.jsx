import { useState, useEffect } from 'react'
import { IoIosClose } from "react-icons/io";
import { Select } from 'react-daisyui'
import SelectImage from './SelectImage';
import axios from "axios"
import {  useParams,useNavigate } from "react-router-dom";
const ModalEdit = () => {
    const { id } = useParams();
    const [data, setData] = useState([])
    const navigate = useNavigate();
    useEffect(() => {
        axios.get('http://localhost:4000/products/' + id)
            .then(res => setData(res.data))
            .catch(err => console.log(err))
    }, [id])
    function handleSubmit(event) {
        event.preventDefault()
        axios.put('http://localhost:4000/products/' + id, data)
            .then(() => {
                alert("data update sucessfully !");
                navigate('/update')
            })
    }

    return (
        <div>
            <div
                className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center'>
                <div className='w-[1000px] bg-white p-2 rounded'>
                    <button
                        className='text-xl'
                        onClick={() => navigate('/update')}
                    > <IoIosClose className='' /></button>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <div className='bg-white rounded-lg'>
                                <h1 className='font-bold bx-font-family text-lg text-center'>THÊM SẢN PHẨM</h1>
                                <div className='flex flex-row justify-center items-center gap-44'>
                                    <div className=''>
                                        <div>
                                            <label className='pl-20 text-sm pt-4 font-semibold' htmlFor="name">ID:</label>
                                            <input type="text" disabled name='name' value={data.id}   className='ml-20 pl-3 mt-1 w-[350px] h-[32px] border border-solid border-gray-300 rounded-lg' />
                                        </div>
                                        <div>
                                            <p className='pl-20 text-sm pt-4 font-semibold'>Tên sản phẩm</p>

                                            <input type="text" name="name" value={data.name} onChange={e => setData({ ...data, name: e.target.value })}
                                                className='ml-20 pl-3 mt-1 w-[350px] h-[32px] border border-solid border-gray-300 rounded-lg' />
                                        </div>
                                        <div>
                                            <p className='pl-20 text-sm pt-4 font-semibold'>Mô tả</p>
                                            <textarea
                                              value={data.description} onChange={e => setData({ ...data, description: e.target.value })}   className='ml-20 pl-3 mt-1 pt-3 pr-3 w-[350px] h-[70px] border border-solid border-gray-300 rounded-lg' />
                                        </div>
                                        <div>
                                            <p className='pl-20 text-sm pt-5 font-semibold'>Giá tiền</p>
                                            <input type="text" name="price"  value={data.price} onChange={e => setData({ ...data, price: e.target.value })}
                                                className='ml-20 pl-3 mt-1 w-[150px] h-[32px] border border-solid border-gray-300 rounded-lg' />
                                        </div>
                                        <div>
                                            <p className='pl-20 text-sm pt-5 font-semibold'>Danh mục</p>
                                            <Select
                                                className='ml-20 mt-1 border border-solid border-gray-300 rounded-lg'
                                                value={data.category} onChange={e => setData({ ...data, category: e.target.value })} >
                                                <option value={'default'} disabled>
                                                    Chọn danh mục
                                                </option>
                                                <option >Danh mục 1</option>
                                                <option >Danh mục 2</option>
                                                <option >Danh mục 3</option>
                                                <option >Danh mục 4</option>
                                                <option >Danh mục 5</option>
                                            </Select>
                                        </div>
                                        <div>
                                            <p className='pl-20 text-sm pt-6 font-semibold'>Tình trạng</p>
                                            <Select
                                                className='ml-20 mt-1 mb-5 border border-solid border-gray-300 rounded-lg'
                                                value={data.status} onChange={e => setData({ ...data, status: e.target.value })} >
                                                <option value={''} disabled>
                                                    Tình trạng
                                                </option>
                                                <option >Còn hàng</option>
                                                <option >Hết hàng</option>
                                            </Select>
                                        </div>
                                    </div>
                                    <div className='mr-14'>
                                        <SelectImage />
                                    </div>
                                </div>
                                <div className='flex justify-end mt-3'>
                                    <button  className='font-semibold bg-cyan-400 mb-5 mr-3 text-white w-[180px] h-[32px] rounded-lg hover:bg-cyan-500'>Cập nhật sản phẩm</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default ModalEdit
