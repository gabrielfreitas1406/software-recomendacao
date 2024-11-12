"use client";

import * as React from "react";
import { useState } from "react";
import { Resposta } from "@/app/types/QuestionTypes";
import { QuestionOption } from "./QuestionOption";
import { RespostaSelecionada } from "../../types/recommendationTypes";

interface QuestionBoxProps {
  respostas: Resposta[];
}

interface QuestionBoxProps {
  respostas: Resposta[];
  idSelectedOption: number | null;
  onRespostaSelect: (
    idResposta: number,
    alternativa: string,
    idConceito: number,
    idSelectedOption: number
  ) => void;
}

const QuestionBox: React.FC<QuestionBoxProps> = ({
  respostas,
  idSelectedOption,
  onRespostaSelect,
}) => {
  //Verifica qual opção foi selecionada
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  //const [idSelectedOption, setIdSelectedOption] = useState<number | null>(null);
  //const [conceitoRespostaSeleciona, setConceitoRespostaSelecionada] =
  //  useState<RespostaSelecionada | null>(null);

  console.log("Opção selecionada QuestionBox: ", selectedOption);
  //console.log("id da resposta selecionada pelo user", idSelectedOption);
  return (
    <section className="question-options">
      {respostas.map((resposta, index) => (
        <QuestionOption
          key={resposta.id}
          letter={String.fromCharCode(65 + index)} // A, B, C, etc.
          text={resposta.conteudo}
          isSelected={selectedOption === String.fromCharCode(65 + index)}
          onSelect={() => {
            setSelectedOption(String.fromCharCode(65 + index));
            onRespostaSelect(
              resposta.id,
              String.fromCharCode(65 + index),
              resposta.idConceito,
              resposta.id
            );
          }}
        />
      ))}
    </section>
  );
};

export default QuestionBox;
