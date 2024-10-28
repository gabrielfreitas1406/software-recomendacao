"use client";

import * as React from "react";
import { QuestionOption } from "./QuestionOption";

interface Option {
  letter: string;
  text: string;
}

const options: Option[] = [
  { letter: "A", text: "Edite" },
  { letter: "B", text: "Edite" },
  { letter: "C", text: "Edite" },
  { letter: "D", text: "Edite" },
];

const QuestionBox: React.FC = () => {
  return (
    <section className="question-options">
      {options.map((option) => (
        <QuestionOption
          key={option.letter}
          letter={option.letter}
          text={option.text}
        />
      ))}
    </section>
  );
};

export default QuestionBox;
