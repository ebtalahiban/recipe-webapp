import React from 'react';
import './navbar.css'; // Import your custom CSS for styling

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="navbar-logo">RecipeRendezvous</h1>
        <ul className="navbar-links">
          <li className="navbar-link">Home</li>
          <li className="navbar-link">Categories</li>
          <li className="navbar-link">Login</li>
          <li className="navbar-link">Signup</li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
