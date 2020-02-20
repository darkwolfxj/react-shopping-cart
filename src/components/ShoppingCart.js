import React, { useContext } from 'react';

// Components
import Item from './ShoppingCartItem';
import { CartContext } from "../App";

const ShoppingCart = props => {
    const { cart } = useContext(CartContext);
	const getCartTotal = () => {
		return cart.reduce((acc, val) => {
			return acc + val.price;
		}, 0).toFixed(2);
    };
    console.log("cart in shopping cart", cart)
	return (
		<div className="shopping-cart">
			{ cart.map(item => (
			    <Item key={ item.id } { ...item } item={item}/>
			))} 

			<div className="shopping-cart__checkout">
				<p>Total: ${getCartTotal()}</p>
				<button>Checkout</button>
			</div>
		</div>
	);
};

export default ShoppingCart;
