// Cart.js
import { useContext } from 'react';
import { ShopContext } from '../../../context/shop-context';
const Cart = () => {
    const { cartItems, products, getTotalCartAmount, removeFromCart } = useContext(ShopContext);

    const totalAmount = getTotalCartAmount();

    return (
        <div>
            <h1>Shopping Cart</h1>
            <ul>
                {Object.keys(cartItems).map(itemId => {
                    const product = products.find(p => p.id === Number(itemId));
                    if (product && cartItems[itemId] > 0) {
                        return (
                            <li key={itemId}>
                                <h2>{product.name}</h2>
                                <p>Price: ${product.price}</p>
                                <p>Quantity: {cartItems[itemId]}</p>
                                <button onClick={() => removeFromCart(itemId)}>Remove from Cart</button>
                            </li>
                        );
                    }
                    return null;
                })}
            </ul>
            <h2>Total Amount: ${totalAmount}</h2>
        </div>
    );
};

export default Cart;
