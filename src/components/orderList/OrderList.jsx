import React, { useState } from "react";
import "./OrderList.css";
import Orderitem from "../orderItem/Orderitem";

const OrderList = ({ menu }) => {
  const [orderItem, setOrderItem] = useState([]);

  const addDivOrder = (id) => {
    const findOrder = orderItem.find((item) => item.id === id);
    const menuFind = menu.find((item) => item.id === id);

    if (findOrder) {
      const updatedOrder = orderItem.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            count: item.count + 1,
            price: item.price + menuFind.price,
          };
        }
        return item;
      });
      setOrderItem(updatedOrder);
    } else {
      const menuItem = menu.find((item) => item.id === id);
      setOrderItem([...orderItem, { ...menuItem, count: 1 }]);
    }
  };

  const calculateTotal = () => {
    return orderItem.reduce((total, item) => total + item.price, 0);
  };

  return (
    <div>
      <div className="header">
        {menu.map(({ id, title, price, img }) => {
          return (
            <div onClick={() => addDivOrder(id)} className="main" key={id}>
              <img className="img" src={img} alt="" />
              <h2>{title}</h2>
              <p>{price}</p>
            </div>
          );
        })}
        <div>
          <h2> Общая сумма: {calculateTotal()}</h2>
        </div>
      </div>
      <Orderitem
        menu={menu}
        orderItem={orderItem}
        setOrderItem={setOrderItem}
      />
    </div>
  );
};

export default OrderList;
