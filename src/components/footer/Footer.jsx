import React from 'react';
import '../footer/Footer.css';
import { SlCalender } from "react-icons/sl";
import { MdOutlineLocationOn } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";
import { LiaGraduationCapSolid } from "react-icons/lia";
import { NavLink } from 'react-router-dom';
import LOGO from '../../assets/st.png'

const Footer = () => {
    const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* LEFT */}
        <div className="footer-brand">
          <NavLink
                    to="/" onClick={scrollToTop}>
          <div className="footer-logo">
            <img src={LOGO} alt="" loading="lazy"/>
          </div>
          </NavLink>

          <p className="footer-description">
            International Conference on AI-Powered Emerging Technology and
            Data Science. Hosted by Stellenbosch University & University of
            the Western Cape.
          </p>

          <div className="footer-contact">
            <div className="footer-item">
              <span><SlCalender /></span>
              <p>15–18 February 2027</p>
            </div>

            <div className="footer-item">
              <span><MdOutlineLocationOn /></span>
              <p>Stellenbosch, South Africa</p>
            </div>

            <div className="footer-item">
              <span><MdOutlineEmail /></span>
              <p>info@ai-etds2026.ac.za</p>
            </div>
          </div>
        </div>

        {/* CENTER */}
        <div className="footer-links">
          <h4>CONFERENCE</h4>

                 <NavLink
                    to="/"
                  onClick={scrollToTop}>
                    Home
                  </NavLink>
          
                  <NavLink
                    to="/themes"
                  onClick={scrollToTop}>
                    Themes
                  </NavLink>
          
                  <NavLink
                    to="/about"
                  onClick={scrollToTop}>
                    About
                  </NavLink>
          
                  <NavLink
                    to="/contact"
                  onClick={scrollToTop}>
                    Contact
                  </NavLink>
        </div>

        {/* RIGHT */}
        <div className="footer-links">
          <h4>HOSTS</h4>

          <a >Stellenbosch University</a>
          <a >University of the Western Cape</a>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">
        <p>
          © 2026 AI-ETDS · Stellenbosch University & UWC. All rights reserved.
        </p>

        <p>From hope to action through knowledge.</p>
      </div>
    </footer>
  )
}

export default Footer