import React from 'react'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

const App = () => {
  return (
    <div>
      <NavBar/>
      <ItemListContainer greeting='Hola Comision ! como estan ?'/>
    </div>
  )
}

export default App
