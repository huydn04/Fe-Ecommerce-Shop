
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import './Cart'

const Cart = () => {
    const [counter, setCounter] = useState(0)
    const [settien, gettien] = useState(0)


    const increase = () => {
        setCounter(prevState => prevState + 1)
        gettien(prevState => prevState + 230000)
    }
    const decrease = () => {
        if (counter > 0) {
            setCounter(prevState => prevState - 1);
            gettien(prevState => prevState - 230000)
        }
    }
    const [countera, setCountera] = useState(0)
    const [settiena, gettiena] = useState(0)

    const increasea = () => {
        setCountera(prevState => prevState + 1)
        gettiena(prevState => prevState + 230000)
    }
    const decreaseb = () => {
        if (countera > 0) {
            setCountera(prevState => prevState - 1);
            gettiena(prevState => prevState - 230000)
        }

    }

    return (
        <div>
            <link rel="stylesheet" href="./wishlist.css" />
            <link href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.2.19/tailwind.min.css" rel="stylesheet" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" />
           

            {/* Body */}
            <h2 className='text-center '>GIỎ HÀNG CỦA TÔI</h2>
            <div className='relative  w-[1200px] ml-[180px] mt-4'>
                <div className='w-[850px] '>
                    <div className="w-[850px] border-2 grid grid-cols-1 gap-3 m-auto justify-items-start pt-[12px] rounded-md border-[#E6E6E6]">
                        <div className='flex justify-around  w-full pt-2'>
                            <div><h3 className='text-[12px] text-gray-400 pr-2'>SẢN PHẨM</h3></div>
                            <div className='text-[12px] text-gray-400 flex w-[200px] items-center justify-between'>GIÁ TIỀN
                                <div className='text-[12px] text-gray-400 '>SỐ LƯỢNG</div>
                            </div>

                            <div className='text-[12px] text-gray-400'>TỔNG GIÁ TIỀN</div>
                        </div>
                        {/* pro1 */}
                        <div className='grid grid-cols-3 justify-items-center w-full border-t-2 border-[#E6E6E6]'>
                            <div className='flex items-center'>
                                <img src="https://product.hstatic.net/1000282430/product/ot-chuong-xanh.jpg" alt="" width='100px' height='100px' />
                                <h4 className='text-[14px] m-4' >Ớt Chuông Xanh</h4>
                            </div>
                            <div className='flex items-center text-[14px] '>
                                230.000 VND
                                <div className='ml-[50px] w-[90px] h-[40px] rounded-[20px]  border border-[#E6E6E6] flex items-center justify-around'>
                                    <button className='w-6 h-6 bg-[#E6E6E6] rounded-full' onClick={decrease}>-</button>
                                    <span>{counter}</span>
                                    <button className='w-6 h-6 bg-[#E6E6E6] rounded-full' onClick={increase}>+</button>
                                </div>
                            </div>
                            <div className='flex items-center'>
                                <span className='mx-6 text-[14px]'></span> {settien}<button><i className="fa-regular fa-circle-xmark mr-2 absolute right-[350px] top-[95px]"></i></button></div>
                        </div>
                        {/* pro2 */}
                        <div className='grid grid-cols-3 justify-items-center w-full border-t-2 border-[#E6E6E6]'>
                            <div className='flex items-center'>
                                <img src="https://cdn.abphotos.link/photos/resized/1024x/2023/11/01/1698853875_FT6O1n8hZMzVKliX_1698857183-php4n6nyk.png" width='100px' height='100px' alt="" />
                                <h4 className='text-[14px] m-4' >Xoài Tươi</h4>
                            </div>
                            <div className='flex items-center text-[14px] '>
                                230.000 VND
                                <div className='ml-[50px] w-[90px] h-[40px] rounded-[20px] border border-[#E6E6E6] flex items-center justify-around'>
                                    <button className='w-6 h-6 bg-[#E6E6E6] rounded-full' onClick={decreaseb}>-</button>
                                    <span>{countera}</span>
                                    <button className='w-6 h-6 bg-[#E6E6E6] rounded-full' onClick={increasea}>+</button>
                                </div>
                            </div>
                            <div className='flex items-center'>
                                <span className='mx-6 text-[14px]'></span> {settiena}<button><i className="fa-regular fa-circle-xmark mr-2 absolute right-[350px] top-[210px]"></i></button></div>
                        </div>
                        <div className='flex justify-between items-center w-full h-[80px] border-t-[1px] mt-[30px] px-4'>
                            <button className='w-[100px] h-[40px] rounded-[40px] bg-[#F2F2F2]'>Quay Về</button>
                            <button className='w-[150px] h-[40px] rounded-[40px] bg-[#F2F2F2]'>Thêm Sản Phẩm</button>
                        </div>
                    </div>
                    <hr className='m-8' />
                    <div className=' rounded-md flex w-full items-center justify-start border border-gray-300 h-[100px] '>
                        <h2 className='text-[20px] ml-[10px]'>Mã Giảm Giá</h2>
                        <input className=' border border-gray-300 px-2 rounded-[20px] w-[680px] h-[40px] ml-[20px] pl-7 text-[17px]' type="text" placeholder='NHẬP MÃ GIẢM GIÁ' />
                        <button className='absolute right-[370px] w-[200px] h-[40px] rounded-[20px] bg-black text-white'>ÁP DỤNG MÃ GIẢM GIÁ</button>
                    </div>
                </div>
                <div className=' rounded-lg w-[300px] absolute right-[25px] top-[0px] p-2 border-[2px] border-[#E6E6E6] '>
                    <h2>TỔNG GIỎ HÀNG</h2>
                    <div >
                        <div className='flex justify-between items-center my-2 text-[12px]'>
                            <h4 className='text-gray-500'> TỔNG GIÁ TIỀN:</h4>
                            <h4>1.380.000 VND</h4>
                        </div>
                        <hr />
                        <div className='flex justify-between items-center my-2 text-[12px]'>
                            <h4 className='text-gray-500'>PHÍ SHIP:</h4>
                            <h4>Miễn Phí</h4>
                        </div>
                        <hr />
                        <div className='flex justify-between items-center my-2 text-[12px]'>
                            <h4 className='text-gray-500'>  TỔNG CỘNG:</h4>
                            <h4>1.380.000 VND</h4>
                        </div>
                    </div>
                    <button className='text-[13px] text-white rounded-[30px] mt-[30px] bg-[#00B207] flex mx-auto justify-center items-center w-[250px] h-[40px]'>THANH TOÁN</button>
                </div>
            </div>
            {/* Body */}


        </div>
    )
}
export default Cart;