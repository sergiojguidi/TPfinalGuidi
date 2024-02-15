import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'
const Item = ({id,stock,nombre,precio,img}) => {
  return (
    <div className='item'> 
       <img src={img} alt={nombre} width={80} height={80}/>
       <h3>{nombre} </h3> 
       <p>Item: {id} </p>
       <p>Stock {stock} </p>
       <p>Precio: {precio}</p>
       <Link className='item-link' to={`/item/${id}`}>Ver Detalles</Link>
       <hr/>
    </div>
  )
}

export default Item