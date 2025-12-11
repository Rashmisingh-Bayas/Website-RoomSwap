import React from 'react';
import './Footer.css'; // We'll create this CSS file next

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-column">
          <h4>Help and Support</h4>
          <ul>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/faqs">FAQs</a></li>
            <li><a href="/feedback">Feedback</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Legal</h4>
          <ul>
            <li><a href="/copyright">Copyright</a></li>
            <li><a href="/trademarks">Trademarks</a></li>
            <li><a href="/terms">Terms of Use/ Service</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Company</h4>
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/license">Our License</a></li>
            <li><a href="/news">What's New</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Get in Touch</h4>
          <ul>
            <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}