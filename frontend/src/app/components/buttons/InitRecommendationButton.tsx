"use client";
import React from "react";
import { useRouter } from "next/navigation";

const InitRecommendationButton: React.FC = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push("/recommendation/init");
  };

  return (
    <>
      <button className="init-recommendation-button" onClick={handleClick}>
        iniciar
      </button>
    </>
  );
};

export default InitRecommendationButton;
