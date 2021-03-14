import React, { useState, useContext } from 'react';
import { ItemContext } from './ItemContext';

const Item = ({name, amount, id }) => {
  const { deleteItem } = useContext(ItemContext);

  return (
    <div>
      <h3>{name}</h3>
      <p>{amount}</p>
      <button onClick={() => deleteItem(id)} className="delete-btn">Delete</button>
    </div>
  );
};
 
export default Item;