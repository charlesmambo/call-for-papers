import React from 'react';
import '../footer/Footer.css';
import { SlCalender } from "react-icons/sl";
import { MdOutlineLocationOn } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";
import { LiaGraduationCapSolid } from "react-icons/lia";


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* LEFT */}
        <div className="footer-brand">
          <div className="footer-logo">
            <div className="logo-box"><LiaGraduationCapSolid />
            </div>
            <h2>AI-ETDS 2026</h2>
          </div>

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

          <a href="/">Home</a>
          <a href="/">Themes</a>
          <a href="/">About</a>
          <a href="/">Contact</a>
        </div>

        {/* RIGHT */}
        <div className="footer-links">
          <h4>HOSTS</h4>

          <a href="/">Stellenbosch University</a>
          <a href="/">University of the Western Cape</a>
          <a href="/">Faculty of Education</a>
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