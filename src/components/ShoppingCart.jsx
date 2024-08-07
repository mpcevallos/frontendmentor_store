import React from "react";
import { useState } from "react";
import { IconRemoveItem, IconCarbonNeutral } from "../assets/utils/icons";


const listItem = [
  {name: "Waffle with Berries", quantity: 1, price: 2.5, subtotal: 3},
  {name: "Vanilla Bean Crème Brûlée", quantity: 1},
  {name: "Macaron Mix of Five", quantity: 13},
  {name: "Classic Tiramisu", quantity: 1},
  {name: "Pistachio Baklava", quantity: 1},
  {name: "Lemon Meringue Pie", quantity: 1},
  {name: "Red Velvet Cake", quantity: 1},
  {name: "Salted Caramel Brownie", quantity: 1},
  {name: "Vanilla Panna Cotta", quantity: 1},
]

const onLoadData = (product) => {
  
  const [listItem, setListItem] = useState([]);

  const startTime = performance.now();
  setListItem((prevList) => {
    const index = prevList.findIndex((item) => item.name === product.name);

    if (index === -1) {
      if (product.quantity > 0) {
        return [
          ...prevList,
          { name: product.name, quantity: product.quantity },
        ];
      }
      return prevList;
    } else {
      const updatedProduct = {
        ...prevList[index],
        quantity: prevList[index].quantity + product.quantity,
      };

      if (updatedProduct.quantity <= 0) {
        return prevList.filter((item) => item.name !== product.name);
      } else {
        return prevList.map((item) =>
          item.name === product.name ? updatedProduct : item
        );
      }
    }
  });
  const endTime = performance.now();
  console.log(`Execution time: ${endTime - startTime} milliseconds`);
};

function ShoppingCart() {
  return (
    <>
      <div className="">
        <div className="shopping__cart">
          <div className="card__line__height">
            <p className="cart__title">Your Cart (7)</p>
            <div className="d-flex flex-column">
              <div className="shopping__product__name d-flex justify-content-evenly align-items-center">
              <ul style={{ listStyle: "none" }}>
              {listItem.map((item) => (
          <li key={item.name}>
           <span style={{ color: "var(--red)"}}>&nbsp;&nbsp;&nbsp;{item.quantity} x </span> 
           <span>&nbsp;&nbsp;&nbsp;{item.name} </span> 
           <span>&nbsp;&nbsp;&nbsp;@ {item.price} {item.subtotal} </span> 
           <div>
        {[""].map((product) => (
          <div key={item.product}>
            <span>{product}</span>
            <span className="d-flex align-items-center justify-content-flex-end" onClick={() => onLoadData({ name: product, quantity: -1 })}><IconRemoveItem /> </span>
            <hr />
          </div>
        ))}
      </div>
          </li>
        ))}
              </ul>
              </div>
              <div className="d-flex justify-content-between">
                <span className="red-hat-text-regular">Order Total</span>
                <span className="price__tag">$46.50</span>
              </div>
              <span className="carbon__small__text d-flex align-items-center justify-content-center">
                <IconCarbonNeutral />
                This is a <strong>&nbsp; carbon-neutral &nbsp;</strong> delivery
              </span>
              <button className="btn__red__confirm">Confirm Order</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ShoppingCart;

