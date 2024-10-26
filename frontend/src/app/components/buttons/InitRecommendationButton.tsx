"use client";
import React from "react";
import { useRouter } from "next/navigation";

const InitRecommendationButton: React.FC = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push("/init/recommendation");
  };

  return (
    <>
      <button className="init-recommendation-button" onClick={handleClick}>
        iniciar recomendação
      </button>
    </>
  );
};

export default InitRecommendationButton;
