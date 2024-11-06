"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { NextButtonProps } from "@/app/types/buttonTypes";

const NextButton: React.FC<NextButtonProps> = ({ onClick }) => {
  const router = useRouter();
  //const handleClick = () => {
  //router.push("/recommendation/init");
  //};

  return (
    <>
      <button className="navigation-questions-button" onClick={onClick}>
        Próximo
      </button>
    </>
  );
};

export default NextButton;
