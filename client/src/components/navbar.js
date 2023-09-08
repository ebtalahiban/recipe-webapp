import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'; 

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="navbar-logo">RecipeRendezvous</h1>
        <ul className="navbar-links">
          <li className="navbar-link"><Link to="/" className='custom-link'>Home</Link></li>
          <li className="navbar-link"><Link to="/categories" className='custom-link'>Categories</Link></li>
          <li className="navbar-link">MyRecipes</li>
          <li className="navbar-link">Login</li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
