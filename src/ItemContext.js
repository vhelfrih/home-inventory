import React, { useState, createContext } from 'react';
import { v1 as uuidv1 } from 'uuid';
// export const ItemContext = createContext();

export const ItemContext = createContext({
  items: [],
  addItem: () => {},
  deleteItem: () => {}
});

const initialState = [
  {
    name: "Red Beans",
    amount: 23,
    id: uuidv1()
  },
  {
    name: "Nuts for Bunnies",
    amount: 33,
    id: uuidv1()
  },
  {
    name: "Chopped Tomatoes",
    amount: 2,
    id: uuidv1() 
  }
];

export const ItemProvider = (props) => {
  const [items, setItems] = useState(initialState);
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