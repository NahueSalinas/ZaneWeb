import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3 className="footer-heading">Zane</h3>
          <p className="footer-text">Innovative solutions for drone technology</p>
        </div>

        <div className="footer-section">
          <h4 className="footer-heading">Links</h4>
          <ul className="footer-list">
            <li><a href="/about" className="footer-link">About Us</a></li>
            <li><a href="/products" className="footer-link">Products</a></li>
            <li><a href="/contact" className="footer-link">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4 className="footer-heading">Follow Us</h4>
          <ul className="footer-social-list">
            <li><a href="https://facebook.com" className="footer-link">Facebook</a></li>
            <li><a href="https://twitter.com" className="footer-link">Twitter</a></li>
            <li><a href="https://instagram.com" className="footer-link">Instagram</a></li>
            <li><a href="https://github.com/L0R3NZ0-L30Z/ZaneWeb" classname="footer-link">Github</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-copyright">
        <p>&copy; 2024 Zane</p>
      </div>
    </footer>
  );
};

export default Footer;
