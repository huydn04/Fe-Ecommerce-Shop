/* eslint-disable react/jsx-key */
import axios from 'axios';
import { Product } from './product';
import "./shop.css"
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Shop = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:4000/products')
        .then(res => {
        
          setProducts(res.data)
        })
}, [])
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      setUser(storedUser);
    } else {
      window.location.href = '/login';
    }
  }, []);

  return (
    <div className='shop'>
      <header>

      </header>
      <div className='shopTitle'>
        <h1>traicay shop</h1>
      </div>
      <div className="products">
        {products.map((u,i) => (
          <Product key= {i} data={u} />
         
        ))}
      
      </div>
      <h1 className='absolute top-0 left-[100px] outline w-[200px] h-[200px]  '>Chào {user ? user.fullname : 'Người dùng'}</h1>
      <button className='absolute top-0 right-[200px] outline w-[200px] h-[200px] cursor-pointer' onClick={() => navigate("/cart")}>Cart</button>
      <button className='absolute top-0 right-[0px] outline w-[200px] h-[200px] cursor-pointer' onClick={() => navigate("/checkout")}>checkout</button>
    </div> 
  )
}
export default Shop;
