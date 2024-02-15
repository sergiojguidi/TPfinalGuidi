//1) importar hook useState y hago createContext

import { useState , createContext} from "react" 

//2) creamos el nuevo contexto
// valor inicial 1 objeto con estas propiedades
export const CarritoContext = createContext({ 
      carrito: [],
      total: 0,
      cantidadTotal: 0
     })

//3) creamos un componente "CarritoProvider"     ( Proveedor de contexto )

export const CarritoProvider = ({children}) => {
    // usamos useState para generar algunos estados
    const [carrito, setCarrito ] = useState([])
    const [total, setTotal] = useState(0)
    const [cantidadTotal, setCantidadTotal] = useState(0)

    //metemos unos console.log para chequear que estemos actualizando

    console.log(carrito)
    console.log("Monto total de la compra",total)
    console.log("Cantidad de Items",cantidadTotal)

    //4) agregamos unos metodos al proveedor de contexto

    const agregarAlCarrito  = (item,cantidad) => {
       const productoExistente = carrito.find(prod => prod.item.id === item.id)
       if (!productoExistente) {
           setCarrito(prev => [...prev,{item,cantidad}])  //crea un nuevo array a partir del estado anterior del carrito y agrega un nuevo producto,cantidad
           setCantidadTotal(prev => prev + cantidad)
           setTotal(prev => prev + (item.precio * cantidad))
       } else {
          const carritoActualizado = carrito.map( prod => {
                        if (prod.item.id === item.id) {
                            return {...prod, cantidad: prod.cantidad + cantidad}
                        } else {
                            return prod
                        }}
                        )
                        setCarrito(carritoActualizado)  
                        setCantidadTotal(prev => prev + cantidad)
                        setTotal(prev => prev + (item.precio * cantidad))
             

                    }
    }

   const eliminarProducto = (id) => {
         // me guardo una referencia del producto a borrar
         const productoEliminado = carrito.find( prod => prod.item.id === id)    
         //elimino el prod del carrito
         const carritoActualizado = carrito.filter(prod => prod.item.id !== id)

         setCarrito(carritoActualizado)
         setCantidadTotal(prev => prev - productoEliminado.cantidad)
         setTotal(prev => prev - (productoEliminado.item.precio * productoEliminado.cantidad))



     }

     const vaciarCarrito = () => {
        setCarrito([])
        setTotal(0)
        setCantidadTotal(0)
     }


     return (
        <CarritoContext.Provider value={
            {carrito, total, cantidadTotal,agregarAlCarrito,eliminarProducto,vaciarCarrito}
        }>{children}</CarritoContext.Provider>
     )

 }


 




