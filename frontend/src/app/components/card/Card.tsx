"use client";

import * as React from "react";
import QuestionBox from "../questions/QuestionsBox";
import BackButton from "../buttons/BackButton";
import NextButton from "../buttons/NextButton";
import StartRecommendationButton from "../buttons/StartRecommendationButton";

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
            <StartRecommendationButton />
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <>
        <div className="card-questions">
          <h1 className="quiz-title">
            Como você gostaria que os participantes se engajassem durante a
            atividade?
          </h1>
          <QuestionBox />

          <img
            style={{ marginTop: "40px" }}
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/9eedec58608ae459b4f7f13c08439da952cb567d021ccfefb2762918b9dbdfc6?placeholderIfAbsent=true&apiKey=83976f5dcdaa41408687cac3bc676028"
            alt="Quiz illustration"
            className="quiz-image"
            loading="lazy"
          />
          <nav className="navigation-questions">
            <BackButton />
            <NextButton />
          </nav>
        </div>
      </>
    );
  }
};

export default Card;
