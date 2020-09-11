import React, { useContext, useEffect } from 'react';
import CartContext from "../contexts/CartContext";

const Item = props => {
	const {setCart, cart} = useContext(CartContext);

	// useEffect
	const handleClick = (e) => {
		// e.preventDefault();
		setCart(cart.filter((book) => book.id !== props.id))
		console.log(e)
	}
	console.log(props)

	return (
		<div className="shopping-cart_item">
			<img src={props.image} alt={`${props.title} book`} />

			<div>
				<h1>{props.title}</h1>
				<p>$ {props.price}</p>
				<button onClick={handleClick} >Remove from cart</button>
			</div>
		</div>
	);
};

export default Item;
