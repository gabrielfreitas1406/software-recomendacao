"use client";
import * as React from "react";
import { Engagementkeywords } from "../../../types/engagementTypes";
import EngagementButton from "../../engagement/EngagementButton";
import { Conceito } from "@/app/types/recommendationTypes";
import api from "@/app/sevices/api";

export const CardWords: React.FC = () => {
  const [conceitos, setConceitos] = React.useState<Conceito[] | []>([]);

  React.useEffect(() => {
    const fetchConceitos = async () => {
      const responseConceitos = await api.get("/conceito/");
      const conceitosRetornados = responseConceitos.data as Conceito[];
      setConceitos(conceitosRetornados);
    };
    fetchConceitos();
  }, []);

  return (
    <main className="categories-recommendations-content">
      <section className="categories-recommendations-section">
        <h2 className="section-title">ENGAJAMENTO</h2>
        <p className="section-description">
          Selecione os tipos de engajamento desejado
        </p>

        <div className="categories-recommendations-grid">
          {conceitos.map((conceito) => (
            <EngagementButton key={conceito.id} text={conceito.nome} />
          ))}
        </div>
      </section>
    </main>
  );
};
