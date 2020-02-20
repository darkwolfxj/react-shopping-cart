import React, { useContext } from 'react';

import { ProductContext, CartContext } from "../App";
const Product = ({ product }) => {
    const { image, title, price } = product
    const { addItem } = useContext(ProductContext);
    
	return (
		<div className="product">
			<img src={image} alt={`${title} book`} />

			<h1 className="title">{title}</h1>

			<p className="price">${price}</p>

			<button onClick={ () => addItem(product) }>
				Add to cart
			</button>
		</div>
	);
};

export default Product;
