import React from 'react'
import logo from '../imgs/logo.png'
import '../assets/navbar.css'

const Navbar = () => {
  return (
    <div>
      <nav className='navbar px-5 pt-4'>
        <div className="container-fluid">
            <div className="logos">
            <a href="" className="navbar-brand">
                <img src={logo} alt="" className='logo' />
            </a>
            <a href="" className="logo-text">
                    Abu Nidhal Jewellery
            </a>
            </div>
            <div className="brand-text ">
                <a href="" className="logo-text-arbi">
                    مجوهرات أبو نضال العلوي 
                </a>
            </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
