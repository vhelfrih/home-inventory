import React, { useState, useContext } from 'react';
import Item from './Item';
import { ItemContext } from './ItemContext';

const ItemsList = () => {
  const { items } = useContext(ItemContext);
  
  return (
    <div className="items-list">
      {items.map(item => (
        <Item
          key={item.id} // <-- Static React key to item
          id={item.id} // <-- Pass id as prop for delete handler to use
          name={item.name}
          amount={item.amount}
        />
      ))}
    </div> 
   );
};
 
export default ItemsList;