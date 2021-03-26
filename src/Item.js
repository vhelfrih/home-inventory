import React, { useContext } from 'react';
import { ItemContext } from './ItemContext';

const Item = ({ name, amount, place, id }) => {
  const { deleteItem } = useContext(ItemContext);
  
  return (
    <div className="items-list-container">
      <div className="items-list">
      <h4>{name + " "}
      {amount + " "}
      <span>
      {place + " "}
      </span></h4>
      <div className="btn-group">
        <button onClick={() => deleteItem(id)} className="edit-btn">Edit</button>
        <button onClick={() => deleteItem(id)} className="delete-btn">Delete</button>
      </div>
    </div>
    </div>
  );
};
 
export default Item;