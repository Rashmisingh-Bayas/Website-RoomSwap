import React from 'react';
import './Contact.css';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

export default function Contact() {
  return (
    <div className="contact-page">
      <div className="contact-content">
        <h1>Contact</h1>
        <p className="contact-intro">
          We'd love to hear from you. Feel free to reach out through any of the following!
        </p>

        <div className="contact-card">
          <FaEnvelope className="contact-icon" />
          <p><strong>Email</strong><br />karkikrisha@gmail.com</p>
        </div>

        <div className="contact-card">
          <FaPhoneAlt className="contact-icon" />
          <p><strong>Phone</strong><br />+358 403629769</p>
        </div>

        <div className="contact-card">
          <FaMapMarkerAlt className="contact-icon" />
          <p><strong>Address</strong><br />Ida Aalbergintie 1A C69, Helsinki, Finland</p>
        </div>
      </div>
    </div>
  );
}
