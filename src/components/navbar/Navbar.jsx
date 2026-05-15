import React from 'react';
import '../navbar/Navbar.css'
import { NavLink } from 'react-router-dom';
import LOGO from '../../assets/utc-logo.png'

const Navbar = () => {
  return (
    <nav className="navbar">

      {/* Left: Logo + Title */}
      <NavLink
          to="/">
      <div className="navbar-left">
       <img src={LOGO} alt="" />
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
        >
         
      {/* Right: CTA */}
        <button className="cta-button">
          Submit Abstract
        </button>
        </NavLink>

      </div>

    </nav>
  );
}

export default Navbar