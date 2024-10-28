import * as React from "react";

interface CardProps {
  isInitCard: Boolean;
  title?: string;
  description?: string;
  buttonLabel?: string;
  imageTitle?: string;
}

const Card: React.FC<CardProps> = ({
  isInitCard,
  title,
  description,
  buttonLabel,
  imageTitle,
}) => {
  {
  }
  if (isInitCard) {
    const isNextButton = buttonLabel === "Próxima";
    return (
      <div className="card-categories-about">
        <div className="content-wrapper-categories-card">
          <div className="content-left-categories-card">
            <h1 className="title-card">{title}</h1>
            <p className="description-card">{description}</p>
          </div>

          <div className="content-right-categories-card">
            <h2 className="title-card">{imageTitle}</h2>
            <button className={isNextButton ? "next-button" : "init-button"}>
              {buttonLabel}
            </button>
          </div>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
};

export default Card;
