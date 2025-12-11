import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import { FaUserCircle, FaBars, FaTimes } from "react-icons/fa";
import logo from '../images/logo.png';
import './Navbar.css';

export default function Navbar({ onSignInClick }) {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <img src={logo} alt="Logo" className="logo-img" />
        </div>

        <button
          className="hamburger"
          aria-label="Toggle Menu"
          onClick={() => setOpen(o => !o)}
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>

        <nav className={`nav-links ${open ? 'nav-links--open' : ''}`}>
          <NavLink to="/" end onClick={closeMenu}>Home</NavLink>
          <NavLink to="/about" onClick={closeMenu}>About</NavLink>
          <NavLink to="/contact" onClick={closeMenu}>Contact</NavLink>
        </nav>

        <div className="profile-icon" onClick={onSignInClick}>
          <FaUserCircle />
        </div>
      </div>
    </header>
  );
}
