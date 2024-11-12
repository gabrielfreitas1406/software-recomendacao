"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { NextButtonProps } from "@/app/types/buttonTypes";

const NextButton: React.FC<NextButtonProps> = ({ onClick, disabled }) => {
  const router = useRouter();
  //const handleClick = () => {
  //router.push("/recommendation/init");
  //};

  console.log("disabled: ", disabled);
  return (
    <>
      <button
        className="navigation-questions-button"
        onClick={!disabled ? onClick : undefined}
        disabled={disabled}
      >
        Próximo
      </button>
    </>
  );
};

export default NextButton;
