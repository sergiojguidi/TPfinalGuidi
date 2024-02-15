import CartItem from "../CartItem/CartItem"
import { Link } from "react-router-dom"
import { CarritoContext } from "../../context/CarritoContext"
import { useContext } from "react"
import "./Cart.css"

const Cart = () => {
  const {carrito, vaciarCarrito, total, cantidadTotal} = useContext(CarritoContext)
  
  if ( cantidadTotal === 0) {
    return (
        <>
          <h2>No Hay Productos en el Carrito</h2>
          <Link to="/">Ver Productos</Link>
        </>
    )
  }


  return (
    <div className="cart-container">
       <div className="cart">
        {
            carrito.map(prod => 
                  <CartItem  key={prod.id} {...prod} />
               )
        }
        </div>
        <h3>Total:${total}</h3>
        <button onClick={() => vaciarCarrito()}> Vaciar Carrito </button>
        <Link to='/checkout'> Finalizar Compra</Link>

    </div>
  )
}

export default Cart