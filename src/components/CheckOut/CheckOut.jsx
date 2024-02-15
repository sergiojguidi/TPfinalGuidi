// Version sin descueto de stock

// import { useState, useContext } from "react"
// import { CarritoContext } from "../../context/CarritoContext"
// import { db } from "../../services/config"
// import { collection, addDoc } from "firebase/firestore"

// const CheckOut = () => {

//    const {carrito, vaciarCarrito, total } = useContext(CarritoContext)

//    const [nombre, setNombre ] = useState("")
//    const [apellido, setApellido ] = useState("")
//    const [telefono, setTelefono ] = useState("")
//    const [email, setEmail ] = useState("")
//    const [emailConfirmacion, setEmailConfirmacion ] = useState("")
//    const [ordenId, setOrdenId] = useState("")
//    const [error, setError ] = useState("")

//    //Funcion manehador del form
//    const manejadorSubmit = (event) => {
//      event.preventDefault()
//      //verificamos que todos los datos se completen
//      if(!nombre || !apellido || !telefono || !email || !emailConfirmacion) {
//         setError("debe completar todos lso datos!")
//         return
//      } 
//      // validamos que el emial coincida
//      if(email != emailConfirmacion) {
//         setError("los emails no coinciden!")
//         return
//      }

//      // creamos un objeto con todos los datos de la orden
//      const orden = {
//         items: carrito.map(producto => ({
//              id:producto.item.id,
//              nombre:producto.item.nombre,
//              cantidad:producto.cantidad,
//         })),
//         total, total,
//         fecha: new Date(),
//         nombre,
//         apellido,
//         telefono,
//         email
//      }

//      // guardamos la orden de compra en la base de datos
//      addDoc( collection(db,"ordenes"),orden )  
//         .then(docRef => {
//             setOrdenId(docRef.id)
//             vaciarCarrito()
//             setError("")
//         })
//         .catch(error => {
//             console.log("error en la orden compra", error)
//             setError("no se pudo crear la orden de compra")
//             } )
    
//    }

//   return (
//     <div>
//        <h2>Checkout - Finalizamos la compra</h2> 
//        <form onSubmit={manejadorSubmit}>
//           {
//             carrito.map(producto => ( 
//                    <div key={producto.item.id}>
//                       <p> {producto.item.nombre} x {producto.cantidad}</p>
//                       <p> {producto.precio} </p>
//                       <hr/>
//                    </div>
//              ))
//           }
//           <div>
//             <label htmlFor="nombre">Nombre</label>
//             <input type="text" id="nombre" onChange={(e) => setNombre (e.target.value)} ></input>
//           </div>
//           <div>
//             <label htmlFor="Apellido">Apellido</label>
//             <input type="text" id="apellido" onChange={(e) => setApellido (e.target.value)} ></input>
//           </div>
//           <div>
//             <label htmlFor="telefono">Telefono</label>
//             <input type="text" id="telefono" onChange={(e) => setTelefono (e.target.value)} ></input>
//           </div>
//           <div>
//             <label htmlFor="email">Email</label>
//             <input type="email" id="email" onChange={(e) => setEmail(e.target.value)} ></input>
//           </div>
//           <div>
//             <label htmlFor="emailcon">Email Confirmacion</label>
//             <input type="email" id="emailcon" onChange={(e) => setEmailConfirmacion(e.target.value)} ></input>
//           </div>

//           {
//             error && <p style={{color:"red"}}> {error} </p>
//           }
         
//           <button> Finalizar Orden</button>
        
//           {
//             ordenId && <strong> Gracias por su compra! tu numero de orden es el sigte : {ordenId}   </strong>
//           }


//        </form>
//     </div>
//   )
// }
// version que descuenta stock



import { useState, useContext } from "react"
import { Link } from "react-router-dom"
import { CarritoContext } from "../../context/CarritoContext"
import { db } from "../../services/config"
import { collection, addDoc,  updateDoc, getDoc, doc } from "firebase/firestore"
import "./CheckOut.css"

const CheckOut = () => {

   const {carrito, vaciarCarrito, total } = useContext(CarritoContext)

   const [nombre, setNombre ] = useState("")
   const [apellido, setApellido ] = useState("")
   const [telefono, setTelefono ] = useState("")
   const [email, setEmail ] = useState("")
   const [emailConfirmacion, setEmailConfirmacion ] = useState("")
   const [ordenId, setOrdenId] = useState("")
   const [error, setError ] = useState("")

   //Funcion manejador del form
   const manejadorSubmit = (event) => {
     event.preventDefault()
     //verificamos que todos los datos se completen
     if(!nombre || !apellido || !telefono || !email || !emailConfirmacion) {
        setError("debe completar todos los datos!")
        return
     } 
     // validamos que el emial coincida
     if(email != emailConfirmacion) {
        setError("los emails no coinciden!")
        return
     }
    
     // creamos un objeto con todos los datos de la orden
     const orden = {
        items: carrito.map(producto => ({
             id:producto.item.id,
             nombre:producto.item.nombre,
             cantidad:producto.cantidad,
        })),
        total, total,
        fecha: new Date(),
        nombre,
        apellido,
        telefono,
        email
     }
    
     //modificacion para descontar stock

     Promise.all(
        orden.items.map( async (productoOrden) => {
            // por cada producto obtengo una referencia
            const productoRef = doc(db,"Inventario", productoOrden.id)
            const productoDoc = await getDoc(productoRef)
            const stockActual = productoDoc.data().stock

            await updateDoc(productoRef, {stock: stockActual - productoOrden.cantidad })

        })
        )
        .then(() => {
            addDoc(collection(db,"ordenes"),orden)
                .then(docRef => {
                 setOrdenId(docRef.id)
                 vaciarCarrito()
                 //borrarCampos()
                 setError("")
                 // aca se deben limpiar los inputs y mostrar el alerta con nro. Orden 
                })    
                .catch(error => console.log("error al crear la orden de compra",error))
        })
        .catch(error => {
            console.log("error actualizando stock",error)
            setError("El stock no se actualizo correctamente")
        })
     
     } 
//      // guardamos la orden de compra en la base de datos
//      addDoc( collection(db,"ordenes"),orden )  
//         .then(docRef => {
//             setOrdenId(docRef.id)
//             vaciarCarrito()
//             setError("")
//         })
//         .catch(error => {
//             console.log("error en la orden compra", error)
//             setError("no se pudo crear la orden de compra")
//             } )
   

  const borrarCampos = () => {
       setNombre("")
       setApellido("")
       setTelefono("")
       setEmail("")
       setEmailConfirmacion("")
  }  

  return (
    <div className="checkout-container">
       <h2>Checkout - Finalizamos la compra</h2> 
       <form className='checkout-form' onSubmit={manejadorSubmit}>
          {
            carrito.map(producto => ( 
                   <div className="checkout-item"  key={producto.item.id}>
                      <p> {producto.item.nombre} x {producto.cantidad}</p>
                      <p> {producto.precio} </p>
                      <hr/>
                   </div>
             ))
          }
          <div className="checkout-input">
            <label htmlFor="nombre">Nombre</label>
            <input type="text" value={nombre} id="nombre" onChange={(e) => setNombre(e.target.value)} ></input>
          </div>
          <div className="checkout-input">
            <label htmlFor="Apellido">Apellido</label>
            <input type="text" value={apellido}id="apellido" onChange={(e) => setApellido(e.target.value)} ></input>
          </div>
          <div className="checkout-input">
            <label htmlFor="telefono">Telefono</label>
            <input type="text" value={telefono} id="telefono" onChange={(e) => setTelefono(e.target.value)} ></input>
          </div>
          <div className="checkout-input">
            <label htmlFor="email">Email</label>
            <input type="email" value={email} id="email" onChange={(e) => setEmail(e.target.value)} ></input>
          </div>
          <div className="checkout-input">
            <label htmlFor="emailcon">Email Confirmacion</label>
            <input type="email" value={emailConfirmacion} id="emailcon" onChange={(e) => setEmailConfirmacion(e.target.value)} ></input>
          </div>

          {
            error && <p className="error-message" style={{color:"red"}}> {error} </p>
          }
          <div className="buttons">
                <button className="checkout-buton" hidden={carrito.length === 0 ? true : false}> Finalizar Orden</button>
                <button className="checkout-buton" hidden={ carrito.length === 0 ? true : false }  onClick={ borrarCampos } type="reset"> borrar</button>
          </div> 
          {
            ordenId && 
               <div className="checkout-form">
                    <strong className="order-message"> Gracias por su compra! tu numero de orden es el sigte : {ordenId}  </strong>
                    <Link  style={{marginTop:'10px', textDecoration:'none', color:'red'}} hidden={ carrito.length === 0 ? false : true } to='/'> Salir </Link>
               </div>
          }


       </form>
    </div>
  )

}
export default CheckOut