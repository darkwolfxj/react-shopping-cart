import React, { useContext } from 'react';

import { CartContext } from "../App";

const Item = ({ item }) => {
    const { removeItem } = useContext(CartContext);
    const { image, title, price, id } = item
    return (
		<div className="shopping-cart_item">
			<img src={ image } alt={ `${title } book` } />
			<div>
				<h1>{ title }</h1>
				<p>$ { price }</p>
				<button onClick={ () => removeItem(id) }>Remove from cart</button>
			</div>
		</div>
	);
};

export default Item;
