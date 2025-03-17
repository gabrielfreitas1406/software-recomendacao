"use client";

import React from "react";
import { HeaderActionButtons } from "./HeaderActionButtons";
import BarraDeBusca from "./barraDeBusca/BarraDeBusca";

interface HeaderProps {
  logo: string;
  navItems: string[];
}

const Header: React.FC<HeaderProps> = ({ logo, navItems }) => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo-container">
          <a href="/">
            <img src={logo} alt="Company logo" className="logo" />
          </a>
          {/*<a href="/">*/}
        </div>
        <nav className="navigation">
          {/*navItems.map((item, index) => (
            <a href="#" key={index} className="nav-item">
              {item}
            </a>
          ))*/}
          <BarraDeBusca />
          <div className="auth-buttons">
            <HeaderActionButtons text="Cadastro" variant="secondary" />
            <HeaderActionButtons text="Login" variant="primary" />
          </div>
        </nav>
        <button className="mobile-menu-button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="menu-icon"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="#0D58B1"
            fill="none"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
