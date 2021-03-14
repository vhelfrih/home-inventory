import React, { useState, useContext } from 'react';
import { ItemContext } from './ItemContext';
import { v1 as uuidv1 } from 'uuid';

const AddItem = () => {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const { addItem } = useContext(ItemContext);

  const updateName = (e) => {
    setName(e.target.value)
  };

  const updateAmount = (e) => {
    setAmount(e.target.value)
  };

  const submitHandler = (e) => {
    e.preventDefault();
    addItem({
      name: name,
      amount: amount,
      id: uuidv1() // <-- new GUID here!!
    });
    setName('');
    setAmount('');
  };

  return ( 
      <form className="new-item" onSubmit={submitHandler}>
        <input type="text" name="name" value={name} onChange={updateName} placeholder="Add a new item"/>
        <input type="text" name="amount" value={amount} onChange={updateAmount} placeholder="Amount"/>
        <button>Submit</button>
      </form>
   );
};

export default AddItem;