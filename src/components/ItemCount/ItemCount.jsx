import { useState } from 'react'
import './ItemCount.css'

const ItemCount = ({ inicial, stock, funcionAgregar }) => {

    const [contador, setContador] = useState(1)

    const incrementar = () => {
        if (contador < stock) {
            setContador(contador + 1)
        }
    }

    const decrementar = () => {
        if (contador > inicial) {
            setContador(contador - 1)
        }
    }

    return (
        <div className='item-count'>
            <div className='counter-buttons'>
                <button className='button' onClick={decrementar}> - </button>
                <p className='counter'>{contador}</p>
                <button className='button' onClick={incrementar}> + </button>
            </div>
            <button className='add-to-cart' onClick={() => funcionAgregar(contador)}>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount