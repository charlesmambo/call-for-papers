import React from 'react';
import '../navbar/Navbar.css'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar">

      {/* Left: Logo + Title */}
      <NavLink
          to="/">
      <div className="navbar-left">
        <div className="logo-box"> 
          <span className="logo-icon">🎓</span>
        </div>
        <div className="logo-text">
          <div className="logo">AI-ETDS 2026</div>
          <div className="subtitle">STELLENBOSCH · UWC</div>
        </div>
      </div>
      </NavLink>

      {/* Center: Navigation */}
      <div className="navbar-center">

        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive ? "nav-item active" : "nav-item"
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/themes"
          className={({ isActive }) =>
            isActive ? "nav-item active" : "nav-item"
          }
        >
          Themes
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "nav-item active" : "nav-item"
          }
        >
          About
        </NavLink>

        <NavLink
          to="/call-for-papers"
          className={({ isActive }) =>
            isActive ? "nav-item active" : "nav-item"
          }
        >
          Call for Papers
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "nav-item active" : "nav-item"
          }
        >
          Contact
        </NavLink>

      </div>

      {/* Right: CTA */}
      <div className="navbar-right">
        <button className="cta-button">
          Submit Abstract
        </button>
      </div>

    </nav>
  );
}

export default Navbar