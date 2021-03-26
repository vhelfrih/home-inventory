import { useState, useContext, useEffect } from "react";
import { ItemContext } from './ItemContext'; 
import axios from './axios-items'

const LowStock = () => {
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
  }, []);

  return (
    <div className="lowstock" >
      <div>
      <h1>Items Low on Stock</h1>
      {items.map(item => {
        return (
          <div key={item.name} >
            <h2 style={{margin: '20px', textAlign: 'center', color: 'red'}}>{item.amount < 5 ? `${item.name + " " + item.amount} ` : null}</h2>
          </div>
        )
      })}
      </div>
    </div>
   );
}

export default LowStock;