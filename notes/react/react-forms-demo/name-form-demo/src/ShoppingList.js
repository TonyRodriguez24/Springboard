import React, { useState } from "react";
import Item from "./Item";
import NewItemForm from "./NewItemForm";
import { v4 as uuidv4 } from "uuid";

const ShoppingList = () => {
    const INITIAL_STATE = [
        { id: uuidv4(), name: 'peanut butter', qty: 2 },
        { id: uuidv4(), name: 'jelly', qty: 3 },
        { id: uuidv4(), name: 'milk', qty: 1 }
    ]
    const [items, setItems] = useState(INITIAL_STATE);

    const addItem = (newItem) => {
        setItems(items => [...items, { ...newItem, id: uuidv4()}])
    }
    return (
        <div>
            <h3>ShoppingList</h3>
            <NewItemForm addItem={addItem} />
            <div>
                {items.map(({name, qty, id}) => <Item name={name} qty={qty} key={id} />)}
            </div>
        </div>
    )
}

export default ShoppingList;
