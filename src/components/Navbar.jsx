import React from 'react'
import logo from '/public/imgs/logo.png'
import '../assets/navbar.css'
import '../assets/navmobile.css'

const Navbar = () => {
  return (
    <div>
      <nav className='navbar px-md-5 pt-md-4 fixed-top'>
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
