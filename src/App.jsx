import React from 'react'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'

import { BrowserRouter,Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <BrowserRouter>
          <NavBar/>
          <Routes>
              <Route path='/' element={<ItemListContainer/>}/>
              <Route path='/category/:IdCategoria' element={<ItemListContainer/>}/>
              <Route path='/item/:IdItem' element={<ItemDetailContainer/>}/>
              <Route path="/cart" element={<h2>Carrito en breve</h2>}/>
          </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
