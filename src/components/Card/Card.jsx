import React, { useEffect, useState } from 'react'
import CakeItem from '../Cake/Cake'
import './card.css'

function Card() {

const [cardItem ,  setCardItem] = useState([])

useEffect(
  ()=> {
  fetch('http://localhost:5174/src/data.json')
  .then((response) => response.json())
  .then( (data) => setCardItem(data))
  }, []
 )


  return (

    <main className='main__cake'>
     <h1>Dessert</h1>
    <section className="section__cake">

     {cardItem.map( (item) => {
       return (
         <CakeItem key={item.name} name={item.name} category={item.category} image={item.image.mobile} price={item.price} />
        )
      })}
      </section>
      </main>
  )
  
}

export default Card;
