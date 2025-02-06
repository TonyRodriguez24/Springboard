import React from "react";

const Item = ({id, name, qty}) => {
  
    return (
        <ul>
            <li>Name: {name}</li>
            <li>Quantity: {qty}</li>
        </ul>
    )
}

export default Item;
