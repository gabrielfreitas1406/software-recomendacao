"use client";

import * as React from "react";
import { useState } from "react";
import { Resposta } from "@/app/types/QuestionTypes";
import { QuestionOption } from "./QuestionOption";

interface QuestionBoxProps {
  respostas: Resposta[];
}

const QuestionBox: React.FC<QuestionBoxProps> = ({ respostas }) => {
  //Verifica qual opção foi selecionada
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  return (
    <section className="question-options">
      {respostas.map((resposta, index) => (
        <QuestionOption
          key={resposta.id}
          letter={String.fromCharCode(65 + index)} // A, B, C, etc.
          text={resposta.conteudo}
          isSelected={selectedOption === String.fromCharCode(65 + index)}
          onSelect={() => setSelectedOption(String.fromCharCode(65 + index))}
        />
      ))}
    </section>
  );
};

export default QuestionBox;
