"use client";

import * as React from "react";

interface QuestionOptionProps {
  letter: string;
  text: string;
  isSelected: boolean;
  onSelect: () => void;
}

export const QuestionOption: React.FC<QuestionOptionProps> = ({
  letter,
  text,
  isSelected,
  onSelect,
}) => {
  return (
    <article
      className={
        isSelected
          ? "option-container-selected"
          : "option-container-no-selected"
      }
      onClick={onSelect} // Chama onSelect para atualizar a seleção no pai
    >
      <div className="option-letter-wrapper">
        <div
          className={
            isSelected ? "option-letter-selected" : "option-letter-no-selected"
          }
          role="text"
          aria-label={`Option ${letter}`}
        >
          {letter}
        </div>
      </div>
      <p
        className={
          isSelected ? "option-text-selected" : "option-text-no-selected"
        }
      >
        {text}
      </p>
    </article>
  );
};
