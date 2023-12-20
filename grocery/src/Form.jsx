import React, { useState } from "react";

const Form = ({ addItem }) => {
  const [newItemName, setNewItemName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItemName) return;

    addItem(newItemName);
    setNewItemName("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h4>Grocery Bud</h4>
      <div className="form-control">
        <input
          className="form-input"
          type="text"
          value={newItemName}
          onChange={(e) => setNewItemName(e.target.value)}
        />

        <button type="submit" className="btn">
          Add Item
        </button>
      </div>
    </form>
  );
};

export default Form;
