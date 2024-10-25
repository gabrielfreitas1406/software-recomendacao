import React from "react";
import AboutCard from "@/app/components/categories/about/AboutCard";

const EngagementAboutPage: React.FC = () => {
  return (
    <div className="page-container">
      <AboutCard
        title="ENGAJAMENTO"
        description="O engajamento representa a profundidade do envolvimento emocional, cognitivo e comportamental que o público experimenta durante uma interação. Compreender os diferentes tipos de engajamento é essencial para criar atividades que realmente motivem e envolvam seus alunos.\n\n"
        imageTitle="Imagem com design aprimorado"
        buttonLabel="Próxima"
      />
    </div>
  );
};

export default EngagementAboutPage;
