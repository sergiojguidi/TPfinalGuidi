import React from 'react'
import './NavBar.css'
import CarWidget from '../CardWidget/CardWidget'
import { Link, NavLink } from 'react-router-dom'
const NavBar = () => {
  return (
    <header>
       <Link to="/">
           <h1> Agua y Soda Ivess</h1>
       </Link>
       
       <nav>
          <ul>
             <li>
             <NavLink className='sinSubrayar' to="/category/1">
                 Agua En Bidones
             </NavLink>
             </li>
             <li>
               <NavLink className='sinSubrayar' to="/category/4">
                  Agua Descartable
               </NavLink>
             </li>
             <li>
               <NavLink className='sinSubrayar' to="/category/2">
                  Soda
               </NavLink>
             </li>
             <li>
               <NavLink className='sinSubrayar' to="/category/3">
                  Agua Saborizada
               </NavLink>
             </li>
          </ul>
       </nav>
       <CarWidget/>
    </header>
  )
}

export default NavBar