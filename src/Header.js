import React from 'react';
import logo from './logo.svg';
import './Header.css';

const Header = (props) => (
  <header className="Header">
    <img src={logo} className="Header-logo" alt="logo" />
    <div className="Header-routes">
      <p  onClick={props.selectDisplayContent}>Projects</p>
      <p >About me</p>
      <p >Contact</p>
    </div>
  </header>
)

export default Header;