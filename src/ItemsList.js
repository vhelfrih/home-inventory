import React, { useContext, useState, useEffect } from 'react';
import Item from './Item';
import { ItemContext } from './ItemContext';
import axios from '../src/axios-items';

const ItemsList = () => {
  const [items, setItems] = useState(useContext(ItemContext).items);
  
  useEffect(() => {
    let mounted = true;
      axios.get('/items.json')
          .then(resp => {
            if(mounted) {
              const receivedItems = Object.values(resp.data);
              setItems(receivedItems)}})
          .catch(error => console.log(error));

    return () => {mounted = false};
  }, [items.name]);
 
  return (
    <div>
          {items.map(item => (
          <Item
            key={item.id} // <-- Static React key to item
            id={item.id} // <-- Pass id as prop for delete handler to use
            name={item.name}
            amount={item.amount}
            place={item.place}
          />
        ))}
    </div>
  );
};
 
export default ItemsList;