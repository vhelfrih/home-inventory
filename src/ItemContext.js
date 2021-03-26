import React, { useState, createContext } from 'react';

// import axios from '../src/axios-items';

export const ItemContext = createContext({
  items: [],
  addItem: () => {},
  deleteItem: () => {}
});

export const ItemProvider = (props) => {
  const [items, setItems] = useState([]);
  
  const addItem = (item) => setItems((items) => [...items, item]);
  
  const deleteItem = (id) => {
    const newItems = items.filter((item) => item.id !== id);
    setItems(newItems)};

//const deleteItem = setItems((items) => items.filter((item) => item.id !== id))};
  
//   const deleteItem = (id) => {
//     axios.delete('/items.json').then(res => {
//         const del = items.filter(item => id !== item.id)
//         setItems([del])
//     })
//     .then(resp => console.log(resp))
//     .catch(error => console.log(error));
// };
 
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