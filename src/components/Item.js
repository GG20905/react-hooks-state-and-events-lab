import React, { useState } from "react";

function Item({ name, category }) {
  const [Cart, SetCart]= useState(false)
  function handleCart(){
    SetCart((Cart) => !Cart)
  }
  return (
    <li className={Cart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={Cart ? "remove" : "add"} onClick={handleCart}>{Cart ? "Remove From" : "Add To"} Cart</button>
    </li>
  );
}

export default Item;
