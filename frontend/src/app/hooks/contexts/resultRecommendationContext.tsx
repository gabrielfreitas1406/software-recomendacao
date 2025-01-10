"use client";

import React, { createContext, useState, useContext } from "react";
import { Ferramenta, Recurso } from "../../types/recommendationTypes";

type InterfaceResultRecommendationContext = {
  ferramentaContext: Ferramenta[] | [];
  setFerramentaContext: React.Dispatch<React.SetStateAction<Ferramenta[] | []>>;
  recursosContext: Recurso[];
  setRecursosContext: React.Dispatch<React.SetStateAction<Recurso[]>>;
};

const ResultRecommendationContext =
  createContext<InterfaceResultRecommendationContext | null>(null);

export const ResultRecommendationContextProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [ferramentaContext, setFerramentaContext] = useState<Ferramenta[]>([]); // Inicialmente null
  const [recursosContext, setRecursosContext] = useState<Recurso[]>([]); // Inicialmente uma lista vazia

  return (
    <ResultRecommendationContext.Provider
      value={{
        ferramentaContext,
        setFerramentaContext,
        recursosContext,
        setRecursosContext,
      }}
    >
      {children}
    </ResultRecommendationContext.Provider>
  );
};

// Hook personalizado para consumir o contexto
export const useResultRecommendationContext = () => {
  const context = useContext(ResultRecommendationContext);
  if (!context) {
    throw new Error(
      "useResultRecommendationContext must be used within a ResultRecommendationContextProvider"
    );
  }
  return context;
};
