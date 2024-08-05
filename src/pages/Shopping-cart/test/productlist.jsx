// ProductList.js
import  { useContext } from 'react';
import { ShopContext } from '../../../context/shop-context';

const ProductList = () => {
    const { products, addToCart } = useContext(ShopContext);

    return (
        <div>
            <h1>Products</h1>
            <ul>
                {products.map(product => (
                    <li key={product.id}>
                        <h2>{product.name}</h2>
                        <p>Price: ${product.price}</p>
                        <button onClick={() => addToCart(product.id)}>Add to Cart</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductList;
