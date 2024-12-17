"use client";
import * as React from "react";
import { Engagementkeywords } from "../../../types/engagementTypes";
import EngagementButton from "../../engagement/EngagementButton";
import { Conceito } from "@/app/types/recommendationTypes";
import api from "@/app/sevices/api";

export const CardWords: React.FC = () => {
  const [conceitos, setConceitos] = React.useState<Conceito[] | []>([]);
  const [selectedConceitos, setSelectedConceitos] = React.useState<string[]>(
    []
  );

  React.useEffect(() => {
    const fetchConceitos = async () => {
      const responseConceitos = await api.get("/conceito/");
      const conceitosRetornados = responseConceitos.data as Conceito[];
      setConceitos(conceitosRetornados);
    };
    fetchConceitos();
  }, []);

  const handleEngagementClick = (nome: string) => {
    setSelectedConceitos((prev) =>
      prev.includes(nome)
        ? prev.filter((item) => item !== nome)
        : [...prev, nome]
    );
  };

  console.log(selectedConceitos);

  return (
    <main className="word-recommendations-content">
      <section className="word-recommendations-section">
        <h2 className="section-title">ENGAJAMENTO</h2>
        <p className="section-description">
          Selecione os tipos de engajamento desejado
        </p>

        <div className="word-recommendations-grid">
          {conceitos.map((conceito) => (
            <EngagementButton
              key={conceito.id}
              text={conceito.nome}
              isSelected={selectedConceitos.includes(conceito.nome)}
              onClick={() => handleEngagementClick(conceito.nome)}
            />
          ))}
        </div>
      </section>
    </main>
  );
};
