import React, { useEffect, useState } from 'react'



function Card() {

const [dataJson ,  setDataJson] = useState()

useEffect( () => {
    setDataJson( fetch('../data.json')
    .then( response => response.json())
    .then( data => console.log(data)
     )
)
})


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
