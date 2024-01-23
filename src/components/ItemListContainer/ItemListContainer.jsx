import {useState,useEffect} from 'react'
import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList'
import { getProductos, getProductosPorCategoria } from '../../asyncmock'
import { useParams } from 'react-router-dom'
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer'

const ItemListContainer = () => {
  const [productos, setProductos] = useState([])
  const { IdCategoria } = useParams()
  
  
  useEffect( ()=> {
    
      const funcionProductos = IdCategoria ? getProductosPorCategoria : getProductos

      funcionProductos(IdCategoria)
         .then(respuesta => setProductos(respuesta))
         .catch( error => console.log(error))
  },[IdCategoria]) 
  return (
    <div>
        <h2 className='centerText'>Mis Productos</h2>
        <ItemList productos={productos}/>
    </div>
  )
}

export default ItemListContainer