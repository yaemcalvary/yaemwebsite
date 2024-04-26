import React from 'react';
import './Footer.css'; // Make sure to create a corresponding CSS file

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="logo">Calvary YAEM</div>
        <div className="contact">
          <p>Sundays 1pm @Daniel Chapel!</p>
          <p>572 Ryders Lane, East Brunswick, NJ, 08816</p>
          <p>yaemcalvary@gmail.com</p>
        </div>
        <div className="social-links">
          {/* Insert icons or text for social media links */}
          <a href="https://facebook.com">Facebook</a>
          <a href="https://instagram.com">Instagram</a>
          {/* ... other social links */}
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 Calvary YAEM. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;