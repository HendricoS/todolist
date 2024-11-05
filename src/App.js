import React, { useState, useEffect } from "react";
import "./App.css"; // Ensure you have this CSS file for styles

const App = () => {
  const [items, setItems] = useState([
    "Apples",
    "Bananas",
    "Carrots",
    "Dairy Milk",
    "Eggs",
    "Flour",
    "Grapes",
    "Honey",
    "Ice Cream",
    "Juice",
  ]);
  const [input, setInput] = useState("");

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem("groceryList"));
    if (storedItems) {
      setItems(storedItems);
    }
  }, []);

  const addItem = () => {
    if (input.trim() !== "") {
      const newItems = [...items, input];
      setItems(newItems);
      setInput("");
      localStorage.setItem("groceryList", JSON.stringify(newItems));
    }
  };

  const removeItem = (index) => {
    const newItems = items.filter((_, i) => i !== index);
    setItems(newItems);
    localStorage.setItem("groceryList", JSON.stringify(newItems));
  };

  return (
    <div className="app">
      <h1>Grocery List</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a new item"
      />
      <button onClick={addItem}>Add Item</button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <span>{item}</span>
            <button onClick={() => removeItem(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
