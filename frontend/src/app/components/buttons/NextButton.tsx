"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { NextButtonProps } from "@/app/types/buttonTypes";

const NextButton: React.FC<NextButtonProps> = ({
  onClick,
  disabled,
  idQuestaoAtual,
}) => {
  //const router = useRouter();

  return (
    <>
      <button
        className="navigation-questions-button"
        onClick={!disabled ? onClick : undefined}
        disabled={disabled}
      >
        {" "}
        {idQuestaoAtual === 8 ? "Finalizar" : "Próximo"}
      </button>
    </>
  );
};

export default NextButton;
