import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../logoHenry.png'

import './Navbar.css';

export default function NavBar() {
    return (
        <header className="navbar">
           <div>
          <NavLink exact to="/" >
                <img id="logoHenry" src={Logo} width="30" height="30" className="d-inline-block align-top" alt="" />
            </NavLink> 
            <NavLink to="/">
                <span>Home</span>
                </NavLink>
                <NavLink to="/filter/posts">
                    <span>Posts</span>
                    </NavLink>   
            </div>
            <nav>
                <ul className="list">
                    <li className="list-item">
                        
                    </li>
                    <li className="list-item">
                    
                    </li>
                </ul>
          </nav>
        </header>
    )
}