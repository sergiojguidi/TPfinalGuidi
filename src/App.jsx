import React from 'react'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Cart from './components/Cart/Cart'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
//importamos nuestro proveedor de contexto
import { CarritoProvider } from './context/CarritoContext'
import CheckOut from './components/CheckOut/CheckOut'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <CarritoProvider>
          <NavBar/>
          <Routes>
              <Route path='/' element={<ItemListContainer/>}/>
              <Route path='/category/:IdCategoria' element={<ItemListContainer/>}/>
              <Route path='/item/:IdItem' element={<ItemDetailContainer/>}/>
              <Route path="/cart" element={<Cart/>}/>
              <Route path="/checkout" element={<CheckOut/>}/>
          </Routes>
        </CarritoProvider> 
      </BrowserRouter>
    </div>
  )
}

export default App
