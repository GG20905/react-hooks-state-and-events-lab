import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
const [Category, setCategory]= useState("All")
function handleCategory(event){
  return(

setCategory(event.target.value)
  )
}  

const display = items.filter((item)=>{

    if(Category === "All")
    return true;
  return item.category === Category
  
})

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleCategory}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {display.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;