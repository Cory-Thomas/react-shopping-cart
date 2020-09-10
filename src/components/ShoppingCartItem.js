import React from 'react';

const Item = ({ image, title, price, removeItem, id }) => {
	return (
		<div className="shopping-cart_item">
			<img src={ image } alt={`${title} book`} />


			<div>
				<h1>{title}</h1>
				<p>$ {price}</p>
				<button onClick={ () => removeItem( id )} >Remove from cart</button>
			</div>
		</div>
	);
};

export default Item;
