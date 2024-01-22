import React, { useState } from "react";
import "./OrderItem.css";

const Orderitem = ({ menu, orderItem, setOrderItem }) => {
  const [deleteCount, setDeleteCount] = useState(0);

  const handleDelete = (id, index) => {
    const itemToDelete = orderItem[index];

    if (itemToDelete.count > 1) {
      const menuData = menu.find((item) => item.id === id);
      itemToDelete.count -= 1;
      itemToDelete.price -= menuData.price;

      const upDateOrder = orderItem.map((item) =>
        item.id === id ? { ...item, ...itemToDelete } : item
      );
      setDeleteCount(deleteCount + 1);
      setOrderItem(upDateOrder);
    } else {
      const updatedOrder = orderItem.filter((item) => item.id !== id);
      setOrderItem(updatedOrder);
    }
    
  };

  return (
    <div className="orders">
      {orderItem.map((item, index) => (
        <div className="item" key={index}>
          <p>{item.title}</p>
          <p>price: {item.price}</p>
          <p>count: {item.count}</p>
          <button onClick={() => handleDelete(item.id, index)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default Orderitem;
