import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h2 className="hero-title">BEM VINDO AO TOOL 4 YOU</h2>
        <p className="hero-subtitle">
          DESCUBRA A FERRAMENTA IDEAL PARA SUAS ATIVIDADES
        </p>
        <button className="cta-button">iniciar recomendação</button>
      </div>
      <div className="hero-images">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/846d4996175d332b973f03ab106c8647f704f9a36ec1ed5ff6a3851586268896?placeholderIfAbsent=true&apiKey=83976f5dcdaa41408687cac3bc676028"
          alt=""
          className="hero-image"
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/d3a4a888d2d984600bc5aed8ab8103bf2858f0290409fc9e0ba442e7491a9547?placeholderIfAbsent=true&apiKey=83976f5dcdaa41408687cac3bc676028"
          alt=""
          className="hero-image-overlay"
        />
      </div>
    </section>
  );
};

export default Hero;
