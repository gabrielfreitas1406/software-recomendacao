"use client";

import * as React from "react";
import { useState } from "react";

interface QuestionOptionProps {
  letter: string;
  text: string;
}

export const QuestionOption: React.FC<QuestionOptionProps> = ({
  letter,
  text,
}) => {
  const [isSelectedQuestionColor, setIsSelectedQuestionColor] = useState(false);

  const handleClick = () => {
    setIsSelectedQuestionColor((prevSelected) => !prevSelected);
  };

  return (
    <article
      className={
        isSelectedQuestionColor
          ? "option-container-selected"
          : "option-container-no-selected"
      }
      onClick={handleClick}
    >
      <div className="option-letter-wrapper">
        <div
          className={
            isSelectedQuestionColor
              ? "option-letter-selected"
              : "option-letter-no-selected"
          }
          role="text"
          aria-label={`Option ${letter}`}
        >
          {letter}
        </div>
      </div>
      <p
        className={
          isSelectedQuestionColor
            ? "option-text-selected"
            : "option-text-no-selected"
        }
      >
        {text}
      </p>
    </article>
  );
};
