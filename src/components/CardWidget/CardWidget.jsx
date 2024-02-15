import { useContext  } from 'react'
import { CarritoContext } from '../../context/CarritoContext'
import { Link } from 'react-router-dom'
import './CardWidget.css'

const CardWidget = () => {

  const { cantidadTotal } = useContext(CarritoContext)

  return (
    <div className='card-widget'>
        <Link className='cart-icon' to="/cart">
           <div className='cart-icon'>
            <img src='./img/carrito.png' width={20} height={20} alt='' ></img>
            {
              cantidadTotal > 0 && <strong className='cart-quantity'>  {cantidadTotal} </strong>
            }
           </div> 
        </Link>   
    </div>
  )
}

export default CardWidget