import React from 'react';
import '../contact/Contact.css';
import { FiUsers } from "react-icons/fi";
import { SlLocationPin } from "react-icons/sl";
import { CiCalendar } from "react-icons/ci";

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

        {/* RIGHT */}
        {/* <div className="contact-form">
          <h3>Send a message</h3>
          <p className="form-sub">
            We typically respond within two business days.
          </p>

          <div className="form-row">
            <div>
              <label>Full name</label>
              <input type="text" />
            </div>
            <div>
              <label>Email</label>
              <input type="email" />
            </div>
          </div>

          <div className="form-group">
            <label>Subject</label>
            <input type="text" />
          </div>

          <div className="form-group">
            <label>Message</label>
            <textarea rows="5"></textarea>
          </div>

          <button className="submit-btn">
            Send message ✈
          </button>
        </div> */}

      </div>
    </section>
    </div>
  )
}

export default Contact