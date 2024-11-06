import React, { useState } from 'react';
import { Link } from "react-router-dom"; 

const ShoppingCart = () => {
  const [items, setItems] = useState([]);
  const [itemName, setItemName] = useState('');
  const [itemPrice, setItemPrice] = useState('');

  const addItem = (e) => {
    e.preventDefault();
    if (itemName && itemPrice) {
      setItems([...items, { name: itemName, price: parseFloat(itemPrice) }]);
      setItemName('');
      setItemPrice('');
    }
  };

  const getTotalPrice = () => {
    return items.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-5">
      <h1 className="text-2xl font-bold mb-5 text-blue-600">Shopping Cart</h1>

      <form onSubmit={addItem} className="w-80 bg-white p-4 rounded shadow-md mb-5">
        <div className="mb-4">
          <label className="block text-gray-700 mb-1">Item Name</label>
          <input
            type="text"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            placeholder="Enter item name"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-1">Item Price</label>
          <input
            type="number"
            value={itemPrice}
            onChange={(e) => setItemPrice(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            placeholder="Enter item price"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200"
        >
          Add Item
        </button>
      </form>

      <div className="w-80 bg-white p-4 rounded shadow-md">
        <h2 className="text-xl font-semibold mb-3">Items</h2>
        <ul className="mb-4">
          {items.map((item, index) => (
            <li
              key={index}
              className="flex justify-between bg-gray-100 p-2 mb-2 rounded"
            >
              <span>{item.name}</span>
              <span>${item.price.toFixed(2)}</span>
            </li>
          ))}
        </ul>
        <div className="text-right font-bold">
          Total: Rp {getTotalPrice()}
        </div>
      </div>
        <div className="mt-10">
        <Link
              to="/complete"
              className="flex justify-center items-center text-blue-500 hover:text-blue-700 px-4 py-2 bg-transparent border border-blue-500 rounded"
            >
              Complete
            </Link>
        </div>
    </div>
  );
};

export default ShoppingCart;
