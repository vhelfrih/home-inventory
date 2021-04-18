import React, { useContext } from 'react';
import { ItemContext } from './ItemContext';
import { GrEdit } from 'react-icons/gr';
import { BsTrashFill } from 'react-icons/bs';

const Item = ({ name, amount, place, id }) => {
  const { deleteItem } = useContext(ItemContext);
  
  // const [items, setItems] = useState(useContext(ItemContext));

  // deleteItem = (id) => {setItems(items.filter((item) => item.id !== id))};

  return (
    <div className="items-list">
      <h4>{name + " "}</h4>
      <h4>{amount + " "}</h4>
      <span>{place + " "}</span>
      <div className="btn-group">
        <button onClick={() => console.log("hey")} className="edit-btn"><GrEdit /></button>
        <button onClick={() => deleteItem(id)} className="delete-btn"><BsTrashFill /></button>
      </div>
    </div>
  );
};
 
export default Item;