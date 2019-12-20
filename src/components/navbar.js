import React from 'react';
import { NavLink } from 'react-router-dom'
import Logo from '../assets/icon.png';


function NavBar() {
    return (
    <nav class="navbar">
        <div className="navbarLeft">
        <NavLink to='/'><img className="icon" src={Logo} alt="brandLogo" /></NavLink>
        </div>
        <div class="navbarRight">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <NavLink to='/' className='nav-link'>HOME</NavLink>
                </li>
                <li class="nav-item">
                    <NavLink to='/about' className='nav-link'>ABOUT</NavLink>
                </li>
                <li class="nav-item">
                    <NavLink to='/work' className='nav-link'>WORK</NavLink>
                </li>  
                <li class="nav-item">
                    <NavLink to='/contact' className='nav-link'>CONTACT</NavLink>
                </li>    
            </ul>
        </div>  
    </nav>
    )
}

export default NavBar;
