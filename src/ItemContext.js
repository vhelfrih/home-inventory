import React, { useState, createContext } from 'react';

export const ItemContext = createContext({
  items: [],
  addItem: () => {},
  deleteItem: () => {}
});

export const ItemProvider = (props) => {
  const [items, setItems] = useState([]);
  const addItem = (item) => setItems((items) => [...items, item]);
  
  const deleteItem = (id) => setItems((items) => items.filter((item) => item.id !== id));

  const value = {
    items,
    addItem,
    deleteItem
  };

  return ( 
      <ItemContext.Provider value={value} >
        {props.children}
      </ItemContext.Provider>
   );
};