import React from 'react'
import './NavBar.css'
import CarWidget from '../CardWidget/CardWidget'

const NavBar = () => {
  return (
    <header>
       <h1> Agua y Soda Ivess</h1>
       <nav>
          <ul>
             <li>Agua En Bidones</li>
             <li>Agua Descartable</li>
             <li>Soda</li>
             <li>Agua Saborizada</li>
          </ul>
       </nav>
       <CarWidget/>
    </header>
  )
}

export default NavBar