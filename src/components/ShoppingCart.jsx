import React from "react";
import { useState } from "react";
import { IconRemoveItem, IconCarbonNeutral } from "../assets/utils/icons";


const listItem = [
  {name: "Waffle with Berries", quantity: 1},
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
  const [listItem, setListItem] = useState([]);
  return (
    <>
      <div className="">
        <div className="shopping__cart">
          <div className="card__line__height">
            <p className="cart__title">Your Cart (7)</p>
            <div className="d-flex flex-column">
              <hr />
              <div className="shopping__product__name d-flex justify-content-evenly align-items-center">
              
              <ul style={{ listStyle: "none" }}>
              {listItem.map((item) => (
          <li key={item.name}>
           <span>&nbsp;&nbsp;&nbsp;{item.quantity} x </span> 
           <span>&nbsp;&nbsp;&nbsp;{item.name}</span> 
           <div>
        {["Waffle with Berries", "Vanilla Bean Crème Brûlée"].map((product) => (
          <div key={product}>
            <span>{product}</span>
            <button onClick={() => onLoadData({ name: product, quantity: -1 })}>Quitar del carrito </button>
          </div>
        ))}
      </div>
          </li>
        ))}
              </ul>
              </div>
              <hr />
              <hr />
              <div className="d-flex justify-content-between">
                <span className="red-hat-text-regular">Order Total</span>
                <span className="price__tag">$46.50</span>
              </div>
              <br />
              <br />
              <span className="carbon__small__text d-flex align-items-center justify-content-center">
                <IconCarbonNeutral />
                This is a <strong>&nbsp; carbon-neutral &nbsp;</strong> delivery
              </span>
              <br />
              <br />
              <button className="btn__red__confirm">Confirm Order</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ShoppingCart;

