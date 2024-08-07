import  { useState } from 'react'
import { IoIosClose } from "react-icons/io";
import { Select } from 'react-daisyui'
import SelectImage from './SelectImage';
import axios from "axios"
import { useNavigate } from "react-router-dom";
const Modal = ({ isVisible, onClose }) => {
    const navigate = useNavigate();
    const [inputData, setinputData] = useState({
        name: '',
        img: '',
        price: '',
        status: '',
        category: ''
      })
    function handleSubmit(event) {
        event.preventDefault()

        axios.post('http://localhost:4000/products', inputData)
            .then(() => {
                alert("Data Added Sucessfully!");
                navigate('/update#')
            }).catch(err => console.log(err));
    }
    if( !isVisible ) return null;   
    return (
        <div>
            <div
            className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center'>
                <div className='w-[1000px] bg-white p-2 rounded'>
                    <button 
                    className='text-xl'
                    onClick={() => onClose()}
                    > <IoIosClose className='' /></button>
                  <form onSubmit={handleSubmit}>
                  <div>
                        <div className='bg-white rounded-lg'>
                        <h1 className='font-bold bx-font-family text-lg text-center'>THÊM SẢN PHẨM</h1>
                            <div className='flex flex-row justify-center items-center gap-44'>
                                <div className=''>
                                    <div>
                                        <p className='pl-20 text-sm pt-4 font-semibold'>Tên sản phẩm</p>
                                     
                                      <input type="text"  name="name" onChange={e => setinputData({ ...inputData, name: e.target.value })}
                                            className='ml-20 pl-3 mt-1 w-[350px] h-[32px] border border-solid border-gray-300 rounded-lg' />
                                    </div>
                                    <div>
                                        <p className='pl-20 text-sm pt-4 font-semibold'>Mô tả</p>
                                        <textarea
                                            className='ml-20 pl-3 mt-1 pt-3 pr-3 w-[350px] h-[70px] border border-solid border-gray-300 rounded-lg' />
                                    </div>
                                    <div>
                                        <p className='pl-20 text-sm pt-5 font-semibold'>Giá tiền</p>
                                        <input type="text"  name="price" onChange={e => setinputData({ ...inputData, price: e.target.value })}
                                            className='ml-20 pl-3 mt-1 w-[150px] h-[32px] border border-solid border-gray-300 rounded-lg' />
                                    </div>
                                      <div>
                                        <p className='pl-20 text-sm pt-5 font-semibold'>Danh mục</p>
                                        <Select
                                            className='ml-20 mt-1 border border-solid border-gray-300 rounded-lg'
                                            value={inputData.category }onChange={e => setinputData({ ...inputData, category: e.target.value })} >
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
                                            value={inputData.status} onChange={e => setinputData({ ...inputData, status: e.target.value })} >
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
                                <button className='font-semibold bg-cyan-400 mb-5 mr-3 text-white w-[180px] h-[32px] rounded-lg hover:bg-cyan-500'>Thêm sản phẩm</button>
                            </div>
                        </div>
                    </div>
                  </form>
                </div>
            </div>

        </div>
    )
}

export default Modal
