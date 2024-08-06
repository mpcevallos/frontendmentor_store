import React, { useEffect, useState } from 'react'



function Card() {

const [cardItem ,  setCardItem] = useState()

useEffect(
  ()=> {
  fetch('http://localhost:5174/src/data/data.json')
  .then((response) => response.json())
  .then( (data) => setCardItem(data))
  }, []
 )

 console.log(cardItem);
 



  return (
    <article className='card__body'>
       <div className='card__img'>
        <img src="" alt="" />
        {/* aqui tiene que ir el componente boton */}
       </div>
       <div className='card__title'>
        <span className=''></span>
       </div>
    </article>
  )
}

export default Card;
