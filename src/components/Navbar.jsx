import React from 'react'
import { Link } from 'react-router-dom'
import '../css/Navbar.css';

const Navbar = () => {
  return (
    <div id='nav' className='navbar'>
      <div className="navbar-brand">
        <Link to='/home'><h1>THE MOVIEZZOoo</h1></Link>
      </div>
      <div className="navbar-links">
        <Link to='/home' className='nav-link'><h1>Home</h1></Link>
        {/* <Link to='/about' className='nav-link'><h1>About</h1></Link> */}
        <Link to='/fav' className='nav-link'><h1>Favourite</h1></Link>
        {/* <Link to='/contact' className='nav-link'><h1>Contact</h1></Link>   */}
      </div>
    </div>
  )
}

export default Navbar
