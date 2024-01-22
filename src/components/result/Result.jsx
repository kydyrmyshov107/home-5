import OrderList from "../orderList/OrderList";
import imgOne from "../../img/hamburger.png";
import imgTwo from "../../img/coffee.png";
import imgTree from "../../img/cola.svg";
import imgFour from "../../img/tea.svg";
import imgFive from "../../img/cheeseburger.svg";
import imgSix from "../../img/fries.svg";

import { useState } from "react";

const menuData = [
  {
    id: 1,
    title: "Hamburger",
    price: 80,
    img: imgOne,
  },
  {
    id: 2,
    title: "Coffee",
    price: 100,
    img: imgTwo,
  },
  {
    id: 3,
    title: "Cola",
    price: 60,
    img: imgTree,
  },
  {
    id: 4,
    title: "Tea",
    price: 50,
    img: imgFour,
  },
  {
    id: 5,
    title: "Cheeseburger",
    price: 100,
    img: imgFive,
  },
  {
    id: 6,
    title: "Fries",
    price: 40,
    img: imgSix,
  },
];
const Result = () => {
  const [menu, setMenu] = useState([...menuData]);
  

  return (
    <div>
      <OrderList menu={menu} setMenu={setMenu} />
    </div>
  );
};

export default Result;
