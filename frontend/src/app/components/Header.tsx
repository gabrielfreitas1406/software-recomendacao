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
      <div className="logo-container">
        <a href="/">
          <img src={logo} alt="Company logo" className="logo" />
        </a>
        {/*<a href="/">*/}
        <h1 className="company-name">NAME NAME</h1>
        {/*</a>*/}
      </div>
      <nav className="main-nav">
        {navItems.map((item, index) => (
          <a href="#" key={index} className="nav-item">
            {item}
          </a>
        ))}
      </nav>
      <BarraDeBusca />
      <div className="auth-buttons">
        {/*<button className="auth-button register">Cadastro</button>
        <button className="auth-button login">Login</button>*/}
        <HeaderActionButtons text="Cadastro" variant="secondary" />
        <HeaderActionButtons text="Login" variant="primary" />
      </div>
    </header>
  );
};

export default Header;
