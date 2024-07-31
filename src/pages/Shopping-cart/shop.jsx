/* eslint-disable react/jsx-key */
import { PRODUCTS } from '../../../products';
import { Product } from './product';
import "./shop.css"
import { useNavigate } from 'react-router-dom';
 const Shop = () => {
    const navigate = useNavigate();
  return (
    <div className='shop'>
        <header>
            
        </header>
        <div className='shopTitle'>
            <h1>traicay shop</h1>
        </div>
        <div className="products">
        {PRODUCTS.map((product) => (
          <Product data={product} />
        ))}
      </div>
        <button className='absolute top-0 right-[200px] outline w-[200px] h-[200px] cursor-pointer' onClick={() => navigate("/cart")}>Cart</button>
        <button className='absolute top-0 right-[0px] outline w-[200px] h-[200px] cursor-pointer' onClick={() => navigate("/checkout")}>checkout</button>
    </div>
  )
}
export default Shop;
