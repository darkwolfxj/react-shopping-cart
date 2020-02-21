import React, { useState, createContext, useEffect } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

export const ProductContext = createContext();
export const CartContext = createContext();

function App() {
    const setLocalStorage = () => (localStorage.getItem("cart")===null) ? localStorage.setItem("cart", JSON.stringify([])) : null; 
	const [products] = useState(data);
	const [cart, setCart] = useState( JSON.parse(localStorage.getItem("cart")===null) ? [] : JSON.parse(localStorage.getItem("cart")));
    console.log(cart)
    useEffect(() => setLocalStorage(), [cart])
	const addItem = item => {
        setCart([...cart, item])
        localStorage.setItem("cart", JSON.stringify([...cart, item]))
    }
    const removeItem = (id) => {
        const newCart = [...cart.filter(i => id !== i.id)]
        localStorage.setItem("cart", JSON.stringify(newCart))
        setCart(newCart)
    }
    
	return (
		<div className="App">
            <ProductContext.Provider value={ { products, addItem } }>
			    <CartContext.Provider value= { { cart, removeItem, setCart } }>
                    <Navigation />

        			{/* Routes */}
        			<Route
        				exact
        				path="/"
        				render={ () => (
        					<Products />
        				)}
        			/>

        			<Route
        				path="/cart"
        				component={ ShoppingCart }
        			/>
                </CartContext.Provider>
            </ProductContext.Provider>                
		</div>
	);
}

export default App;
