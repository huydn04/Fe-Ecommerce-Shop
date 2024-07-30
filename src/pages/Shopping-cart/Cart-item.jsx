import { useContext } from 'react'
import { ShopContext } from '../../context/shop-context';
export const CartItem = (props) => {
    const { id, productName, price, productImage } = props.data;
    const { cartItems, addToCart, removeFromCart, updaterCartItemsCount } = useContext(ShopContext);

    return (
        <div className='grid grid-cols-3 justify-items-center w-full border-t-2 border-[#E6E6E6]'>
            <div className='flex items-center  mr-[100px]'>
                <img src={productImage} alt="" width='100px' height='100px' />
                <h4 className='text-[14px] m-4' >{productName}</h4>
                
            </div>
            <div className='flex items-center text-[14px]' >
                {price}VND
                <div className='ml-[50px] w-[90px] h-[40px] rounded-[20px]  border border-[#E6E6E6] flex items-center justify-around'>
                    <button onClick={() => removeFromCart(id)} className='w-6 h-6 bg-[#E6E6E6] rounded-full'>-</button>
                    <input value={cartItems[id]} onChange={(e) => updaterCartItemsCount(Number(e.target.value))} className='w-6 h-6  rounded-full pl-2' />
                    <button onClick={() => addToCart(id)} className='w-6 h-6 bg-[#E6E6E6] rounded-full'>+</button>
                 
                </div>
             
            </div>
            <div className='flex items-center'>
                <span className='mx-6 text-[14px]'></span> {price*cartItems[id]}VND
            </div> 
           
        </div>
    )
}
