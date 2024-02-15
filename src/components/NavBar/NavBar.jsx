import React from 'react'
import './NavBar.css'
import CarWidget from '../CardWidget/CardWidget'
import { Link, NavLink } from 'react-router-dom'
const NavBar = () => {
  return (
    <header className='header'>
       <Link to="/" className='logo'>
           <h1> Agua y Soda Ivess</h1>
       </Link>
       
       <nav className='nav'>
          <ul>
             <li>
             <NavLink className='nav-link' activeclassname='active' to="/category/1">
                 Agua En Bidones
             </NavLink>
             </li>
             <li>
               <NavLink className='nav-link' activeclassname='active' to="/category/4">
                  Agua Descartable
               </NavLink>
             </li>
             <li>
               <NavLink className='nav-link' activeclassname='active' to="/category/2">
                  Soda
               </NavLink>
             </li>
             <li>
               <NavLink className='nav-link' activeclassname='active' to="/category/3">
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