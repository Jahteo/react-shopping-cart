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
			<img src={props.item.image} alt={`${props.item.title} book`} />

			<div>
				<h1>{props.item.title}</h1>
				<p>$ {props.item.price}</p>
				<button onClick={handleClick} >Remove from cart</button>
			</div>
		</div>
	);
};

export default Item;
