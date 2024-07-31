/* eslint-disable react/jsx-key */
import { useContext, useState } from 'react'
import { PRODUCTS } from '../../../products'
import { ShopContext } from '../../context/shop-context';
import { Checkoutitem } from '../Shopping-cart/Checkout-item';

const Checkout = () => {
    const [selectedOption, setSelectedOption] = useState('option1');
    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };
    const { cartItems, getTotalCartAmount } = useContext(ShopContext);
    const totalAmount = getTotalCartAmount();
    return (
        <div>
            {/* Body */}
            <div className='w-[1060px]  m-auto relative'>
                <div className='mr-[360px]'>
                    <div className='w-[700px]  m-auto p-2'>
                        <h2 className='text-[20px] p-2'>Thông tin đơn hàng</h2>
                        <div className='w-full flex justify-between items-center   p-2'>
                            <div className=''>
                                <h4>Tên của bạn</h4>
                                <input className=' border border-solid border-gray-300 px-2 rounded-[4px] w-[220px] h-[35px]' type="text" placeholder='Tên của bạn' />
                            </div>
                            <div>
                                <h4>Họ của bạn</h4>
                                <input className=' border border-solid border-gray-300 px-2 rounded-[4px] w-[220px] h-[35px]' type="text" placeholder='Họ của bạn' />
                            </div>
                            <div>
                                <h4 className='flex'>Tên Công Ty <p className='ml-2 text-gray-500'>(Không Bắt Buộc)</p></h4>
                                <input className=' border border-solid border-gray-300 px-2 rounded-[4px] w-[220px] h-[35px]' type="text" placeholder='Tên Công Ty' />
                            </div>
                        </div>
                        <div className=' p-2'>
                            <h4>Địa chỉ</h4>
                            <input className=' border border-solid border-gray-300 px-2 rounded-[4px] w-full h-[35px]' type="text" placeholder='Địa Chỉ' />
                        </div>

                        <div className='flex justify-start items-center  p-2'>
                            <div >
                                <h4>Quốc Gia / Vùng</h4>
                                <select className=' text-gray-400 border border-solid border-gray-300 px-2 rounded-[4px] w-[220px] h-[35px]' type="text" placeholder='Lựa' id="cars" name="cars">
                                    <option className='text-black' value="choose">Lựa chọn</option>
                                    <option className='text-black' value="a">VN</option>
                                    <option className='text-black' value="b">US</option>
                                    <option className='text-black' value="c">UK</option>
                                    <option className='text-black' value="d">CN</option>
                                </select>
                            </div>
                            <div className='ml-[20px]'>
                                <h4>Bang</h4>
                                <select className=' text-gray-400 border border-solid border-gray-300 px-2 rounded-[4px] w-[120px] h-[35px]' type="text" placeholder='Lựa' id="cars" name="cars">
                                    <option className='text-black' value="choose">Lựa chọn</option>
                                    <option className='text-black' value="a">A</option>
                                    <option className='text-black' value="b">B</option>
                                    <option className='text-black' value="c">C</option>
                                    <option className='text-black' value="d">D</option>
                                </select>
                            </div>
                        </div>
                        <div className='w-full flex justify-between items-center p-2'>
                            <div className=''>
                                <h4>Email</h4>
                                <input className=' border border-solid border-gray-300 px-2 rounded-[4px] w-[320px] h-[35px]' type="text" placeholder='Email' />
                            </div>
                            <div>
                                <h4>Số Điện Thoại</h4>
                                <input className=' border border-solid border-gray-300 px-2 rounded-[4px] w-[320px] h-[35px]' type="text" placeholder='Số Điện Thoại' />
                            </div>
                        </div>
                        <div className='flex  p-2 items-center'>
                            <input className='w-6 h-5 mr-1 px-2' type="checkbox" />
                            <h4>Giao Hàng Cho Địa Chỉ Khác </h4>
                        </div>

                    </div>
                    <div className='w-[700px]   m-auto mt-8 p-2'>
                        <h2 className='text-[20px]' >Thông Tin Bổ Sung</h2>
                        <h4>Ghi Chú (Không bắt buộc)</h4>
                        <input className='w-full h-[80px]  border border-solid border-gray-300 px-2 rounded-[4px] pb-[50px]' placeholder='Ghi chú về đơn đặt hàng của bạn, ví dụ: ghi chú đặc biệt khi giao hàng' type="text" />
                    </div>
                </div>
                <div className='absolute right-[-60px] top-[0px]  w-[350px] h-[500px] p-5 border rounded-xl'>
                    <div>
                        <h2 className='text-[20px]'>Tóm Tắt Đơn Hàng</h2>
                        <div className='w-[850px]'>
                            {PRODUCTS.map((product) => {
                                if (cartItems[product.id] !== 0) {
                                    return <Checkoutitem key={product.id} data={product} />;
                                }
                            })}
                          
                        </div>
                        <div className='flex justify-between items-center my-2'>
                            <h4>Tổng phụ: </h4>
                            <h4>{totalAmount}VND</h4>
                        </div>
                        <hr />
                        <div className='flex justify-between items-center my-2'>
                            <h4>Phí Giao Hàng:</h4>
                            <h4>Miễn Phí</h4>
                        </div>
                        <hr />
                        <div className='flex justify-between items-center my-2'>
                            <h4 className='text-[14px]'>Total:</h4>
                            <h4 className='text-[15px] font-[500]'>{totalAmount}VND</h4>
                        </div>

                    </div>
                    <div>
                        <h2 className='text-[20px]'>Phương Thức Thanh Toán</h2>

                        <label className='flex items-center mt-2'>
                            <input className='w-[15px] h-[15px] bg-red-200' type="radio" name="options" value="option1" checked={selectedOption === 'option1'} onChange={handleOptionChange} />
                            <h4 className='ml-[10px]'>Thanh Toán Khi Giao Hàng</h4>
                        </label>


                        <label className='flex items-center mt-2'>
                            <input className='w-[15px] h-[15px] bg-red-200' type="radio" name="options" value="option1" checked={selectedOption === 'option1'} onChange={handleOptionChange} />
                            <h4 className='ml-[10px]'>Thẻ Ngân Hàng</h4>
                        </label>


                        <label className='flex items-center mt-2'>
                            <input className='w-[15px] h-[15px] bg-red-200' type="radio" name="options" value="option1" checked={selectedOption === 'option1'} onChange={handleOptionChange} />
                            <h4 className='ml-[10px]'>MoMo</h4>
                        </label>
                    </div>
                    <div className=' group mt-5 w-[300px] h-[40px]  flex justify-center items-center m-auto rounded-[25px] bg-[#00B207] hover:bg-[green]  text-white cursor-pointer'>
                        <button className='group-hover:text-white cursor-pointer bg-[#00B207] group-hover:bg-[green]'>Đặt Hàng</button>
                    </div>
                </div>
            </div>
            {/* Body */}

        </div>
    )
}
export default Checkout;
