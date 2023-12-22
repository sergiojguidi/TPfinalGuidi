import React from 'react'
import './ItemListContainer.css'

const ItemListContainer = ({greeting}) => {
  return (
    <div>
        <h2 className='centerText'>{greeting}</h2>
    </div>
  )
}

export default ItemListContainer