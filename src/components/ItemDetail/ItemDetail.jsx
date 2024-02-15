import { useState , useContext } from 'react'
import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'

// importamos el carritoContext y useContext (arriba)
import { CarritoContext } from '../../context/CarritoContext'


const ItemDetail = ({id, nombre, stock, precio, img, descripcion}) => {
  // creamos un estado local con la cantidad de productos agregados

  const [agregarCantidad,setAgregarCantidad] = useState(0)

  // modificaciones clase 11 context

  const {agregarAlCarrito} = useContext(CarritoContext)

  //craemos una funcion manejadora de cantidad
 const manejadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad)

    // console.log( 'cantidad agregada', cantidad )

    const item = {id, nombre, precio,img, descripcion}
    agregarAlCarrito(item,cantidad)
 }


  return (
    <div className='item-card'> 
        <h2>Nombre: {nombre}</h2>
        <h3>Precio:{precio}</h3>
        <p>ID: {id}</p>
        <p>Stock:{stock}</p>
        <p>{descripcion}</p>
        <img src={img} alt={nombre} width={90} height={90}></img>   
        {
          /// aca usamos la logica de montaje y desmontaje del contador
        }
        {
           agregarCantidad > 0 ? (<Link to="/cart" className='button'>Terminar Compra</Link>) : 
                                 (<ItemCount inicial= {1} stock={stock} funcionAgregar={manejadorCantidad}  />)
        } 

    </div>
  )
}

export default ItemDetail