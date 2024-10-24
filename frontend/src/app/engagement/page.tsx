import * as React from "react";
import { EngagementButton } from "../components/engagement/EngagementButton";
import { NavigationLink } from "../components/engagement/NavigationLink";
import { HeaderAction } from "../components/engagement/HeaderAction";

const EngagementPage: React.FC = () => {
  const navLinks = ["aaaaa", "aaaa", "aaaaa"];

  return (
    <div className="page-container">
      <header className="main-header">
        <div className="brand">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/d0e794bf66420096e920bd50e32de1115938e28c4c8628a18e959cf647782974?placeholderIfAbsent=true&apiKey=83976f5dcdaa41408687cac3bc676028"
            alt="Company Logo"
            className="brand-logo"
          />
          <h1 className="brand-name">NAME NAME</h1>
        </div>

        <nav className="main-nav">
          {navLinks.map((text, index) => (
            <NavigationLink key={index} text={text} />
          ))}
        </nav>

        <div className="search-container">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/c69ed815b6be9bae5bef4073f1b1e0e843a6f946e06aa6450788588d87373cd5?placeholderIfAbsent=true&apiKey=83976f5dcdaa41408687cac3bc676028"
            alt="Search Icon"
            className="search-icon"
          />
        </div>

        <div className="header-actions">
          <HeaderAction text="Cadastro" variant="secondary" />
          <HeaderAction text="Login" variant="primary" />
        </div>
      </header>

      <main className="engagement-content">
        <section className="engagement-section">
          <h2 className="section-title">ENGAJAMENTO</h2>
          <p className="section-description">
            Selecione os tipos de engajamento desejado
          </p>

          <div className="engagement-grid">
            <div className="button-group">
              <EngagementButton width={126} />
              <EngagementButton />
            </div>

            <div className="button-group">
              <EngagementButton />
              <EngagementButton />
              <EngagementButton />
            </div>
          </div>

          <div className="engagement-options">
            <div className="option-group">
              <EngagementButton width={109} />
              <span className="option-label">Instantâneo</span>
            </div>

            <div className="option-group">
              <div className="sub-options">
                <span className="option-label">Interativo</span>
                <span className="option-label">Instantâneo</span>
              </div>
              <EngagementButton />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default EngagementPage;
