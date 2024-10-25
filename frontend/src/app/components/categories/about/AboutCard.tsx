import * as React from "react";

interface AboutCardProps {
  title: string;
  description: string;
  buttonLabel: string;
  imageTitle: string;
}

const AboutCard: React.FC<AboutCardProps> = ({
  title,
  description,
  buttonLabel,
  imageTitle,
}) => {
  {
  }
  return (
    <div className="card-categories-about">
      <div className="content-wrapper-categories-card">
        <div className="content-left-categories-card">
          <h1 className="title-card">{title}</h1>
          <p className="description-card">{description}</p>
        </div>

        <div className="content-right-categories-card">
          <h2 className="title-card">{imageTitle}</h2>
          <button className="categories-card-button">{buttonLabel}</button>
        </div>
      </div>
    </div>
  );
};

export default AboutCard;
