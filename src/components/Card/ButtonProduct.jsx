import React, { useState } from 'react';
import { Increment, Decrement } from '../../assets/utils/icons';

function ButtonProduct({ onLoadData }) {
  const [increment, setIncrement] = useState(0);
  const [decrement, setDecrement] = useState(0);

  function handleTotalValue() {
    let subTotal = increment - decrement;
    return subTotal < 0 ? 0 : subTotal; 
  }

  function handleClickAdd() {
    setIncrement(increment + 1);
    // Llamada a la función pasada como prop
    if (typeof onLoadData === 'function') {
      onLoadData({ name: 'Waffle with Berries', quantity: handleTotalValue() }); // Ajusta el nombre del producto según sea necesario
    }
  }

  
  function handleClickMinus() {
    setDecrement(decrement + 1);
    // Llamada a la función pasada como prop
    if (typeof onLoadData === 'function') {
      onLoadData({ name: 'Waffle with Berries', quantity: -1 }); // Ajusta el nombre del producto según sea necesario
    }
  }
  

  return (
    <>
      <div>
        <div className='button__triple'>
          <span onClick={handleClickAdd}> + </span>
          <span onClick={() => console.log(handleTotalValue())}> {handleTotalValue()} </span>
          <span onClick={handleClickMinus}> - </span>
        </div>
      </div>
    </>
  );
}

export default ButtonProduct;
