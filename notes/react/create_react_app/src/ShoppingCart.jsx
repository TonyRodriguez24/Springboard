import React from "react";
import CartItem from './CartItem'
import "./ShoppingCart.css";

const ShoppingCart = ({ items, username }) => {
  const total = items.reduce((acc, i) => {
    return acc + i.price * i.quantity

  }, 0 )
  return (
    <div className="ShoppingCart">
      <h1 className = 'ShoppingCart-header'>{username} Shopping Cart</h1>
      {items.map((i) => (
        <CartItem
          item={i.name}
          img={i.img}
          price={i.price}
          quantity={i.quantity}
        />
      ))}
      <b>{total}</b>
    </div>
    
  );
};

export default ShoppingCart;
