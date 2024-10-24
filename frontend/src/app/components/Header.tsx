import React from "react";

interface HeaderProps {
  logo: string;
  navItems: string[];
}

const Header: React.FC<HeaderProps> = ({ logo, navItems }) => {
  return (
    <header className="header">
      <div className="logo-container">
        <img src={logo} alt="Company logo" className="logo" />
        <h1 className="company-name">NAME NAME</h1>
      </div>
      <nav className="main-nav">
        {navItems.map((item, index) => (
          <a href="#" key={index} className="nav-item">
            {item}
          </a>
        ))}
      </nav>
      <div className="search-container">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/c69ed815b6be9bae5bef4073f1b1e0e843a6f946e06aa6450788588d87373cd5?placeholderIfAbsent=true&apiKey=83976f5dcdaa41408687cac3bc676028"
          alt=""
          className="search-icon"
        />
      </div>
      <div className="auth-buttons">
        <button className="auth-button register">Cadastro</button>
        <button className="auth-button login">Login</button>
      </div>
    </header>
  );
};

export default Header;
