import * as React from "react";

interface QuestionOptionProps {
  letter: string;
  text: string;
}

export const QuestionOption: React.FC<QuestionOptionProps> = ({
  letter,
  text,
}) => {
  return (
    <article className="option-container">
      <div className="option-letter-wrapper">
        <div
          className="option-letter"
          role="text"
          aria-label={`Option ${letter}`}
        >
          {letter}
        </div>
      </div>
      <p className="option-text">{text}</p>
    </article>
  );
};
