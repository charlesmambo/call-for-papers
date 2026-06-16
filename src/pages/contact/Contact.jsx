import React from 'react';
import '../contact/Contact.css';
import { FiUsers } from "react-icons/fi";
import { SlLocationPin } from "react-icons/sl";
import { CiCalendar } from "react-icons/ci";
import { IoIosArrowRoundForward } from "react-icons/io";

const Contact = () => {
  return (
    <div>
     <section className="ctc-hero">
      <div className="overlay"></div>

      <div className="ctc-content">
        <span className="conference-badge">CONTACT</span>

        <h2>
          Get in touch with the organising committee.
        </h2>

        <p>
          For submissions, partnerships or general enquiries, we'd love to hear from you.
        </p>
      </div>
    </section>

     <section className="contact-section">
      <div className="contact-wrapper">
        
        {/* LEFT */}
        <div className="contact-left">
          <span className="contact-label">CONFERENCE CHAIRS</span>
          <h2>Reach out directly.</h2>
        
        <div className="ctc-two">
          <div className="contact-card">
            <div className="icon-box"><FiUsers /></div>
            <div>
              <h3>Prof. Anass Bayaga</h3>
              <p>Conference Chair · Stellenbosch University</p>
              <span className="email">abayaga@sun.ac.za</span>
            </div>
          </div>

          <div className="contact-card">
            <div className="icon-box"><FiUsers /></div>
            <div>
              <h3>Dr Ibrahim Harun</h3>
              <p>Co-Chair · University of the Western Cape</p>
              <span className="email">iharun@uwc.ac.za</span>
            </div>
          </div>
          

          <div className="contact-info">
            <div className="info-item">
              <span className="info-icon"><SlLocationPin /></span>
              <div>
                <strong>Venue</strong>
                <p>Stellenbosch University, Western Cape, South Africa</p>
              </div>
            </div>

            <div className="info-item">
              <span className="info-icon"><CiCalendar /></span>
              <div>
                <strong>Conference Dates</strong>
                <p>15–18 February 2027</p>
              </div>
            </div>
          </div>
          </div>
        </div>

        <div className="submission-right">
        <div className="sidebar-card">
          <h3>Submit your manuscript</h3>

          <p>
            Submissions are managed through our secure online form. You'll
            receive a tracking ID by email immediately.
          </p>

          <div className="sub-actions">
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSe0P0O4X9ykPt1DfrVAwyePaST4dhhTUwkqAwrTBBHxwsVTpQ/viewform?usp=publish-editor" className="primary-btn">
            Open submission form
            <IoIosArrowRoundForward className='primary-btn-icon'/>
          </a>
          </div>

          <div className="divider"></div>

          <div className="sub-stats">
            <div className="sub-stat-row">
              <span>Article processing fee</span>
              <strong>None</strong>
            </div>

            <div className="sub-stat-row">
              <span>Average decision time</span>
              <strong>6-8 weeks</strong>
            </div>

            <div className="sub-stat-row">
              <span>Acceptance rate</span>
              <strong>~28%</strong>
            </div>
          </div>
        </div>
      </div>

      </div>
    </section>
    </div>
  )
}

export default Contact