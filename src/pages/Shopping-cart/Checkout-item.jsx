import { useContext } from 'react'
import { ShopContext } from '../../context/shop-context';
export const Checkoutitem = (props) => {
    const { id, productName, price, productImage } = props.data;
    const { cartItems, updaterCartItemsCount } = useContext(ShopContext);

    return (
        <div className='flex flex-row items-center justify-between w-[350px]'>
            <div className='flex flex-row items-center'>
                <img src={productImage} alt="" width='50px' height='50px' />
                <h4 className='text-[14px] m-4' >{productName}</h4>
                <h6 className=''>x</h6>
                <input value={cartItems[id]} onChange={(e) => updaterCartItemsCount(Number(e.target.value))} className='w-6 h-6  rounded-full pl-[2px]' />
            </div>
            <div className='flex items-start justify-start'>
            </div>
            {price}VND
        </div>
    );
}
