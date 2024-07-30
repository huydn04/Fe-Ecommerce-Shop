/* eslint-disable react/jsx-key */
import { useContext } from 'react'
import { PRODUCTS } from '../../../products'
import { ShopContext } from '../../context/shop-context';
import { CartItem } from '../Shopping-cart/Cart-item';
import { useNavigate } from 'react-router-dom';

import Sidebar from '../../components/users/SideBarUsers';
const Cart = () => {
    const { cartItems, getTotalCartAmount } = useContext(ShopContext);
    const navigate = useNavigate();
    const totalAmount = getTotalCartAmount();

    return (
        <div>
            {/* <link rel="stylesheet" href="./wishlist.css" />
            <link href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.2.19/tailwind.min.css" rel="stylesheet" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" /> */}
            <Sidebar />
            <div className='w-[1200px] h-auto m-auto relative'>
                <div className='absolute top-[40px] left-0 '>
                    
                </div>

                {/* Body */}
                <div className='relative ml-[200px] w-[1000px]'>
                    <h2 className='text-center '>GIỎ HÀNG CỦA TÔI</h2>
                </div>
                <div className='relative  w-[1200px] ml-[320px] mt-4 '>
                    <div className='w-[850px] y'>
                        <div className="w-[850px] border-2 grid grid-cols-1 gap-3 m-auto justify-items-start pt-[12px] rounded-md border-[#E6E6E6]">
                            <div className='flex justify-around  w-full pt-2'>
                                <div><h3 className='text-[12px] text-gray-400 pr-2'>SẢN PHẨM</h3></div>
                                <div className='text-[12px] text-gray-400 flex w-[200px] items-center justify-between'>GIÁ TIỀN
                                    <div className='text-[12px] text-gray-400 '>SỐ LƯỢNG</div>
                                </div>

                                <div className='text-[12px] text-gray-400'>TỔNG GIÁ TIỀN</div>
                            </div>
                            {/* pro1 */}
                            <div className='w-[850px]'>
                                {PRODUCTS.map((product) => {
                                    if (cartItems[product.id] !== 0) {
                                        return <CartItem key={product.id} data={product} />;
                                    }
                                })}
                            </div>
                            <div className='flex justify-between items-center w-full h-[80px] border-t-[1px] mt-[30px] px-4'>


                                <button className='w-[100px] h-[40px] rounded-[40px] bg-[#F2F2F2]' onClick={() => navigate('/shoptest')} >Quay Về</button>
                                <button className='w-[150px] h-[40px] rounded-[40px] bg-[#F2F2F2]' onClick={() => navigate('/shoptest')}>Thêm Sản Phẩm</button>
                            </div>
                        </div>
                        <hr className='m-8' />
                        <div className=' rounded-md flex w-full items-center justify-start border border-gray-300 h-[100px] '>
                            <h2 className='text-[20px] ml-[10px]'>Mã Giảm Giá</h2>
                            <input className=' border border-gray-300 px-2 rounded-[20px] w-[680px] h-[40px] ml-[20px] pl-7 text-[17px]' type="text" placeholder='NHẬP MÃ GIẢM GIÁ' />
                            <button className='absolute right-[370px] w-[200px] h-[40px] rounded-[20px] bg-black text-white'>ÁP DỤNG MÃ GIẢM GIÁ</button>
                        </div>
                    </div>
                    <div className=' rounded-lg w-[300px] absolute right-[40px] top-[0px] p-2 border-[2px] border-[#E6E6E6] '>
                        <h2>TỔNG GIỎ HÀNG</h2>
                        <div >
                            <div className='flex justify-between items-center my-2 text-[12px]'>
                                <h4 className='text-gray-500'> TỔNG GIÁ TIỀN:</h4>
                                <h4>{totalAmount}VND</h4>
                            </div>
                            <hr />
                            <div className='flex justify-between items-center my-2 text-[12px]'>
                                <h4 className='text-gray-500'>PHÍ SHIP:</h4>
                                <h4>Miễn Phí</h4>
                            </div>
                            <hr />
                            <div className='flex justify-between items-center my-2 text-[12px]'>
                                <h4 className='text-gray-500'>  TỔNG CỘNG:</h4>
                                <h4>{totalAmount}</h4>
                            </div>
                        </div>
                        <button className='text-[13px] text-white rounded-[30px] mt-[30px] bg-[#00B207] flex mx-auto justify-center items-center w-[250px] h-[40px]' onClick={() => navigate('/checkout')}>THANH TOÁN</button>
                    </div>
                </div>
                {/* Body */}

            </div>
        </div>
    )
}
export default Cart;