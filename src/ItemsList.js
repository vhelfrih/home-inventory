import React, { useContext, useState, useEffect } from "react";
import Item from "./Item";
import { ItemContext } from "./ItemContext";
import axios from "../src/axios-items";

const ItemsList = () => {
  const [items, setItems] = useState(useContext(ItemContext).items);
  // const { deleteItem } = useContext(ItemContext);//new try
  // const [value, setValue] = useState('');
  // const { name: newItems  } = useState(useContext(ItemContext).items);
  // const { name } = useContext(ItemContext);
  const ctx = useContext(ItemContext);

  // useEffect(() => {
  //   console.log("useEffect run");
  //   let mounted = true;
  //   axios
  //     .get("/items.json")
  //     .then((resp) => {
  //       if (mounted) {
  //         const receivedItems = Object.values(resp.data);
  //         setItems(receivedItems);
  //       }
  //     })
  //     .catch((error) => console.log(error));

  //   return () => {
  //     mounted = false;
  //   };
  // }, [ctx]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("/items.json");
      const receivedItems = Object.values(result.data);
      setItems(receivedItems);
    };
    fetchData();
  }, [ctx]);

  return (
    <div className="items-container">
      {items.map((item) => (
        <Item
          key={item.id} // <-- Static React key to item
          id={item.id} // <-- Pass id as prop for delete handler to use
          name={item.name}
          amount={item.amount}
          place={item.place}
          // value={value}
          // onAddExpense={deleteItem}//new try
        />
      ))}
    </div>
  );
};

export default ItemsList;
