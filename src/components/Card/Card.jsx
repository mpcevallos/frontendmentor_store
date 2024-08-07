import React, { useState, useEffect } from "react";
import ButtonProduct from "./ButtonProduct";
import ShoppingCart from "../ShoppingCart";

function Card() {
  const [cardItem, setCardItem] = useState([]); 

  useEffect(() => {
    fetch("http://localhost:5173/src/data/data.json")
      .then((response) => response.json())
      .then((data) => setCardItem(data.products)) 
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  
  return (
    <div className="container-fluid">
      <div className="row">
        {}
        <div className="col-md-8">
          <h1 className="pb-3">Desserts</h1>
          <div className="row">
            {cardItem.map((product) => (
              <div className="col-12 col-md-4 mb-4" key={product.id}>
                <div className="card h-100 custom-card">
                  <img
                    src={product.image.desktop.replace("/public", "")}
                    alt={product.name}
                    className="card-img-top"
                  />
                    <ButtonProduct />
                  <div className="card-body d-flex flex-column dessert-line-height">
                    <p className="dessert-category">{product.category}</p>
                    <p className="dessert-name">{product.name}</p>
                    <p className="dessert-price ">${product.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {}
        <div className="col-md-4">
          <ShoppingCart />
        </div>
      </div>
    </div>
  );
}

export default Card;
