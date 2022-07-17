import React, {useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [shoppingItem, setShoppingItem] = useState('All')
  const setShopping = (e) =>{
    setShoppingItem(e.target.value);
  }

  console.log(items);
  const newValues = items.filter((item)=>{
    if (shoppingItem === 'All'){
      return item
    }
    else{
      return item.category === shoppingItem
    }
  })

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={setShopping}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {newValues.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
