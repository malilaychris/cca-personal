import React from 'react';
import { NavLink } from 'react-router-dom';

import './Header.css';

import Logo from '../../assets/images/ccalogonav.svg';

const Header = () => (
  <header className="header">
    <div className="header-container">
      <div className="logo-container">
        <NavLink to="/"><img className="logo" src={Logo} /></NavLink>
      </div>
      <nav className="nav">
        <ul className="nav-list">
          <li><NavLink className="nav-item" to="/">Home</NavLink></li>
          <li><NavLink className="nav-item" to="/about">About</NavLink></li>
          <li><NavLink className="nav-item" to="/chapters">Chapters</NavLink></li>
          <li><NavLink className="nav-item" to="/news">News</NavLink></li>
          <li><NavLink className="nav-item" to="/rules">Rules</NavLink></li>
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