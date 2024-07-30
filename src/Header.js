import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/About">About</Link></li>
          <li><Link to="/Contact">Contact</Link></li>
          <li><Link to="/Login">Login</Link></li>
          <li><Link to="/Service">Service</Link></li>
          <li><Link to="/SignUp">Signup</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
