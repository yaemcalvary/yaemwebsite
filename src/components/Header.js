import React from 'react';
import './Header.css'; // Make sure to create a corresponding CSS file

function Header() {
  return (
    <header className="site-header">
      <div className="logo">Calvary YAEM</div>
      <nav>
        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/community">Community</a></li>
          <li><a href="/resources">Resources</a></li>
          <li><a href="/give">Give</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
