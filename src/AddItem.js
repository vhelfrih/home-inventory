import React, { useState, useContext, useEffect } from "react";
import { ItemContext } from "./ItemContext";
import { v1 as uuidv1 } from "uuid";
import axios from "../src/axios-items";

const AddItem = () => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [place, setPlace] = useState("");

  const [setItems] = useState(useContext(ItemContext).items);

  const { addItem } = useContext(ItemContext);

  const updateName = (e) => {
    setName(e.target.value);
  };

  const updateAmount = (e) => {
    setAmount(e.target.value);
  };

  const updatePlace = (e) => {
    setPlace(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    addItem(
      axios
        .post("/items.json", {
          name,
          amount,
          place,
          id: uuidv1(), // <-- new GUID here!!
        })
        .then((resp) => console.log(resp))
        .catch((error) => console.log(error))
    );
    setName("");
    setAmount("");
  };

    useEffect(() => {
    console.log("useEffect run");
    let mounted = true;
    axios
      .get("/items.json")
      .then((resp) => {
        if (mounted) {
          const receivedItems = Object.values(resp.data);
          setItems(receivedItems);
        }
      })
      .catch((error) => console.log(error));

    return () => {
      mounted = false;
    };
  }, [setItems, name, amount, place]);

  return (
    <form className="new-item" onSubmit={submitHandler}>
      <input
        type="text"
        name="name"
        value={name}
        onChange={updateName}
        placeholder="Name..."
        required
      />
      <input
        type="text"
        name="amount"
        value={amount}
        onChange={updateAmount}
        placeholder="Amount..."
        required
      />
      <select onChange={updatePlace} required>
        <option value="">Place...</option>
        <option value="basement">Basement</option>
        <option value="pantry">Pantry</option>
      </select>
      <button>Submit</button>
    </form>
  );
};

export default AddItem;
