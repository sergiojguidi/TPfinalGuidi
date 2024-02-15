import {useState,useEffect} from 'react'
import ItemList from '../ItemList/ItemList'
//import { getProductos, getProductosPorCategoria } from '../../asyncmock'
import { useParams } from 'react-router-dom'
import { db } from '../../services/config'
import { collection, getDocs, where, query } from 'firebase/firestore'


const ItemListContainer = () => {
  const [productos, setProductos] = useState([])
  const { IdCategoria } = useParams()
  
  useEffect ( () => {
    const misProductos = IdCategoria ? query(collection(db,"Inventario"), where("idCat","==",IdCategoria)) :
                                       collection(db,"Inventario") 
    getDocs(misProductos)
       .then(res => {
           const nuevosProductos = res.docs.map( doc => {
              const data = doc.data()
              return {id: doc.id, ...data}
           })
           setProductos(nuevosProductos)
       })
       .catch(error => console.log(error))                                       
  },[IdCategoria])
  
  // useEffect( ()=> {
    
  //     const funcionProductos = IdCategoria ? getProductosPorCategoria : getProductos

  //     funcionProductos(IdCategoria)
  //        .then(respuesta => setProductos(respuesta))
  //        .catch( error => console.log(error))
  // },[IdCategoria]) 
  return (
    <div>
        <ItemList productos={productos}/>
    </div>
  )
}

export default ItemListContainer