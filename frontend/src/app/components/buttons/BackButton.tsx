"use client";
import React from "react";
import { useRouter } from "next/navigation";

const BackButton: React.FC = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push("/recommendation/init");
  };

  return (
    <>
      <button className="navigation-questions-button" onClick={handleClick}>
        Voltar
      </button>
    </>
  );
};

export default BackButton;
