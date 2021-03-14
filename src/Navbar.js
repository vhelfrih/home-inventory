import React, { useContext } from 'react';
import { ItemContext } from './ItemContext';

const Navbar = () => {
  const { items, setItems } = useContext(ItemContext);
  return (
    <div className="navbar" >
      <h1>Basement Inventory</h1>
      <div className="links">
        <a href="/">Home</a>
        <a href="/out" style={{color: 'red', fontWeight: 'bold'}} >Out of Stock</a>
      </div>
    </div> 
   );
};
 
export default Navbar;