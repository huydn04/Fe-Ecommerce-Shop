import  { useContext } from 'react'
import { ShopContext } from '../../context/shop-context';

export const Product = (props) => {
    const { id, name, price, img } = props.data;
    const { addToCart, cartItems } = useContext(ShopContext);
  
    const cartItemCount = cartItems[id];
  
    return (
      <div className="product">
        <p>{id}</p>
    
        <img src={img} />
        <div className="description">
          <p>
            <b>{name}</b>
          </p>
          <p> {price}VND</p>
        </div>
        <button className="addToCartBttn" onClick={() => addToCart(id)}>
          Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
        </button>
      </div>
    );
  };
  