import React from 'react'
import { CarritoContext } from "../../context/CarritoContext"
import { useContext } from "react"

import './CartItem.css'

const CartItem = ({item,cantidad}) => {
  const { eliminarProducto } = useContext(CarritoContext)
  return (
      <div className='cart-item'>
        <div className='cart-item-details'>
          <h3>{item.nombre}</h3>
          <p>Cantidad: {cantidad}</p>
          <p>Precio:{item.precio}</p>
          </div>   
          <img className='cart-item-img' src={item.img} alt={item.nombre} ></img> 
          <button onClick={() => eliminarProducto(item.id)}> Eliminar Producto</button>
      </div>
  )
}

export default CartItem