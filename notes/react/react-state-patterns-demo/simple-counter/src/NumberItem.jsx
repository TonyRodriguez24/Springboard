import React from "react";

const NumberItem = ({number, remove}) => {
    const handleRemove = () => {
    remove(number)
  
}
    return (
       <li>
          <button onClick = {remove}>{number}</button>
        </li>
  )
}

export default NumberItem;