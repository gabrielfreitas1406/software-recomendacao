"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { BackButtonProps } from "@/app/types/buttonTypes";

const BackButton: React.FC<BackButtonProps> = ({ onClick }) => {
  const router = useRouter();
  /*const handleClick = () => {
    router.push("/recommendation/init");
  };*/

  return (
    <>
      <button className="navigation-questions-button" onClick={onClick}>
        Voltar
      </button>
    </>
  );
};

export default BackButton;
