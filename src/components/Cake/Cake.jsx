import React from 'react'
import './cake.css'
function CakeItem({name , category , image , price}) {
  return (
    <article className='card__body'>
       <div className='card__img'>
        <img src={image} alt="imagen" />
        
        {/* aqui tiene que ir el componente boton */}
       </div>
       <div className='card__title'>
        <p className='cake__category'>{category}</p>
        <h3 className='cake__name'>{name}</h3>
        <span className='cake__price'>${price}</span>
       </div>
    </article>
  )
}

export default CakeItem;
