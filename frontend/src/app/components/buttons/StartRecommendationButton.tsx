"use client";
import React from "react";
import { useRouter } from "next/navigation";

const StartRecommendationButton: React.FC = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push("/recommendation/questions");
  };

  return (
    <>
      <button className="init-button" onClick={handleClick}>
        Iniciar
      </button>
    </>
  );
};

export default StartRecommendationButton;
