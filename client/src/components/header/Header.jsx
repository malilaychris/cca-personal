import React from 'react';

import './Header.css';

import Logo from '../../assets/images/ccalogonav.svg';

const Header = () => (
  <header className="header">
    <div className="container">
      <div className="logo-container">
        <a href="/"><img className="logo" src={Logo} /></a>
      </div>
      <nav className="nav">
        <ul className="nav-list">
          <li><a className="nav-item" href="/">Home</a></li>
          <li><a className="nav-item" href="/">About</a></li>
          <li><a className="nav-item" href="/">Chapters</a></li>
          <li><a className="nav-item" href="/">News</a></li>
          <li><a className="nav-item" href="/">Rules</a></li>
        </ul>
        <div className="nav-fill" />
        <ul className="nav-list nav-list-secondary">
          <li><a className="nav-item nav-item-secondary" href="/">Store</a></li>
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;