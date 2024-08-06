import React from 'react'
import './carrito.css'
function Carrito() {
  return (
    <section className='main__carrito'>
       <h2 className='you__cart'> you cart(2) </h2>
        <div className='cart__container'>
            <span className='name__cake'> brucele </span>
            <div className='container__price'>
                <span className='amount'>x3</span> 
                <span className='price'>$6</span>
                <span className='price__amount'>$18.00</span>
            </div>
        </div>

    </section>
  )
}

export default Carrito
