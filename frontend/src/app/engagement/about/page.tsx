import React from "react";
import AboutCard from "@/app/components/categories/about/AboutCard";
import Card from "@/app/components/card/Card";

const EngagementAboutPage: React.FC = () => {
  return (
    <div className="page-container">
      <Card
        isInitCard={true}
        title="ENGAJAMENTO"
        description="O engajamento representa a profundidade do envolvimento emocional, cognitivo e comportamental que o público experimenta durante uma interação. Compreender os diferentes tipos de engajamento é essencial para criar atividades que realmente motivem e envolvam seus alunos. Nesta seção, iremos descobrir qual o tipo de engajamento que você deseja proporcionar à sua turma."
        imageTitle="Imagem com design aprimorado"
        buttonLabel="Próxima"
      />
    </div>
  );
};

export default EngagementAboutPage;
