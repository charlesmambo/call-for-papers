import React, { useState } from 'react';
import '../navbar/Navbar.css'
import { NavLink } from 'react-router-dom';
import LOGO from '../../assets/utc-logo.png'
import { RxHamburgerMenu } from "react-icons/rx";
import { CgCloseO } from "react-icons/cg";

const Navbar = () => {
   const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">

      {/* Left: Logo + Title */}
      <NavLink
          to="/">
      <div className="navbar-left">
       <img src={LOGO} alt="" loading="lazy"/>
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

<div className="harm-btns">
  {!isOpen ? (
    <RxHamburgerMenu
      className="harm-icons open"
      onClick={() => setIsOpen(true)}
    />
  ) : (
    <CgCloseO
      className="harm-icons close"
      onClick={closeMenu}
    />
  )}
</div>
            {/* Center: Navigation */}
      {isOpen && (
  <div className="mobile-navbar" onClick={closeMenu}>
    <NavLink
      to="/"
      end
      className={({ isActive }) =>
        isActive ? "nav-item active" : "nav-item"
      }
      onClick={closeMenu}
    >
      Home
    </NavLink>

    <NavLink
      to="/themes"
      className={({ isActive }) =>
        isActive ? "nav-item active" : "nav-item"
      }
      onClick={closeMenu}
    >
      Themes
    </NavLink>

    <NavLink
      to="/about"
      className={({ isActive }) =>
        isActive ? "nav-item active" : "nav-item"
      }
      onClick={closeMenu}
    >
      About
    </NavLink>

    <NavLink
      to="/call-for-papers"
      className={({ isActive }) =>
        isActive ? "nav-item active" : "nav-item"
      }
      onClick={closeMenu}
    >
      Call for Papers
    </NavLink>

    <NavLink to="/contact" onClick={closeMenu}>
      <button className="cta-button">
        Submit Abstract
      </button>
    </NavLink>
  </div>
)}

    </nav>
  );
}

export default Navbar