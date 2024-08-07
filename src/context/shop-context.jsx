// ShopContext.js
import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const ShopContext = createContext(null);

export const ShopContextProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [cartItems, setCartItems] = useState({});

    useEffect(() => {
        // Fetch products from the server
        axios.get('http://localhost:4000/products')
            .then(res => {
                setProducts(res.data);
                // Initialize cart items with default values
                const initialCart = {};
                res.data.forEach(product => {
                    initialCart[product.id] = 0;
                });
                setCartItems(initialCart);
            })
            .catch(err => console.error(err));
    }, []);

    const addToCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: (prev[itemId] || 0) + 1 }));
    };

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: Math.max((prev[itemId] || 0) - 1, 0) }));
    };

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const itemId in cartItems) {
            if (cartItems[itemId] > 0) {
                const product = products.find(p => p.id === Number(itemId));
                if (product) {
                    totalAmount += cartItems[itemId] * product.price;
                }
            }
        }
        return totalAmount;
    };

    return (
        <ShopContext.Provider value={{ products, cartItems, addToCart, removeFromCart, getTotalCartAmount }}>
            {children}
        </ShopContext.Provider>
    );
};
