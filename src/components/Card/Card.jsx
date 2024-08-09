import React, { useEffect, useState } from 'react'
import './card.css'

function Card() {
  const [listItem , setListItem] = useState([])
  const [cardItem, setCardItem] = useState([])
  const [totalPrice , setTotalPrice] = useState(0)
  const [countProduct , setCountProduct] = useState(0)
  useEffect(
    () => {
      fetch('http://localhost:5173/src/data.json')
        .then((response) => response.json())
        .then((data) => setCardItem(data))

    }, []
  ) 
  useEffect(()=> {
  const countTotalProductos = listItem.reduce((actual ,  item) => actual + item.quantity , 0)
  setCountProduct(countTotalProductos)
  const totalPriceProductos =  listItem.reduce((actual, item) => actual + item.totalAmount , 0  )
  setTotalPrice(totalPriceProductos)
   }, [listItem]) 



  function onLoadData(productos){

    if(listItem.find(item => item.name === productos.name)){ 
      let producto = listItem.map( item => item.name === productos.name ?
        {...item , quantity: item.quantity + 1 , totalAmount: (item.quantity + 1) * item.price } // volvi ahora si como es que me decias
        : item)
        return setListItem([...producto]) // aqui retorna el producto repetido
      }
      // aqui esta condicion es para saber si se repite el mismo objeto
     return setListItem([...listItem , productos]) // aqui lo obtengo al producto repetido
    }
    
   // la borre jajaja la creo aqui ?
  
    
    return (
      <main className='main__cake'>
      <div className='container__cakes'>
        <h1>Dessert</h1>
        <section className="section__cake">

{/* aqui hago el map  */}
          {cardItem.map((item) =>
            <article key={item.name} className='card__body'>
              <div className='card__img'>
                <img src={item.image.desktop} alt="imagen" />
                <button onClick={() => onLoadData({...item , quantity: 1 , totalAmount: item.price })} >click</button>
              </div>  
              <div className='card__title'>
                <p className='cake__category'>{item.category}</p>
                <h3 className='cake__name'>{item.name}</h3>
                <span className='cake__price'>${item.price}</span>
              </div>
            </article>
          )}


        </section>
      </div>
       {/*  carrito  */}
       <section className='main__carrito'>
         <h2  className='you__cart__product'> you cart({countProduct}) </h2>
       {listItem.map( cake => (
        <div key={cake.name}>
        <div className='cart__container' >
            <span className='name__cake'> {cake.name} </span>
            <div className='container__price'>
              <div>

                <span className='amount'>{cake.quantity}x </span> 
                <span className='price__product'> <span className='arroba'>@</span> ${cake.price} </span>
                <span className='amount__product'>${cake.totalAmount} </span>
              </div>
           <span className='delete__cart' >X</span>
            </div> 
        </div>
        </div>
       ))}
       <div className='confirm__button'>
       <h1 className='total__price'>total ${totalPrice} </h1>
     <button>confirmed order</button>
       </div>
    </section>
    </main>
  )

}

export default Card;
