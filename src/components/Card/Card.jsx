import React, { useEffect, useState } from 'react'
import CakeItem from '../Cake/Cake'
import Carrito from '../Carrito/Carrito'
import './card.css'

function Card() {

const [cardItem ,  setCardItem] = useState([])

useEffect(
  ()=> {
  fetch('http://localhost:5173/src/data.json')
  .then((response) => response.json())
  .then( (data) => setCardItem(data))
  
  }, []
 )


  return (
  <main className='main__cake'>
   <div className='container__cakes'>
     <h1>Dessert</h1>
    <section className="section__cake">

     {cardItem.map( (item) => <CakeItem name={item.name} category={item.category} image={item.image.desktop} price={item.price} /> )}
      </section>
    </div>
      <Carrito></Carrito>
      </main>
  )
  
}

export default Card;
