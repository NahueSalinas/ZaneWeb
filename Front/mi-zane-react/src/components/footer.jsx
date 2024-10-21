import axios from 'axios';
import React, { useEffect, useState } from 'react';




const Footer = () => {
  return (
    <footer classname="footer">
      <div classname="footer-container">
        <div classname="footer-section">
          <h3 classname="footer-heading">Zane</h3>
          <p classname="footer-text">Innovative solutions for drone technology</p>
        </div>

        <div classname="footer-section">
          <h4 classname="footer-heading">Links</h4>
          <ul classname="footer-list">
            <li><a href="/about" classname="footer-link">About Us</a></li>
            <li><a href="/products" classname="footer-link">Products</a></li>
            <li><a href="/contact" classname="footer-link">Contact</a></li>
          </ul>
        </div>

        <div classname="footer-section">
          <h4 classname="footer-heading">Follow Us</h4>
          <ul classname="footer-social-list">
            <li><a href="https://facebook.com" classname="footer-link">Facebook</a></li>
            <li><a href="https://twitter.com" classname="footer-link">Twitter</a></li>
            <li><a href="https://instagram.com" classname="footer-link">Instagram</a></li>
            <li><a href="https://github.com/L0R3NZ0-L30Z/ZaneWeb" classname="footer-link">Github</a></li>
          </ul>
        </div>
      </div>
      <div classname="footer-copyright">
        <p>&copy; 2024 Zane</p>
      </div>
    </footer>
  );
};

export default Footer;
