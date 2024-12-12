import React from "react";
import Card from "@/app/components/card/Card";

const RecommendationPage: React.FC = () => {
  return (
    <div className="page-container">
      <Card
        isInitCard={true}
        title="Recomendação"
        description="Descubra a Melhor Plataforma de Ensino para Você! Com tantas ferramentas de estudo disponíveis, pode ser desafiador encontrar a que mais se alinha as suas necessidades específicas. Esta recomendação foi elaborada para ajudar você a identificar a ferramenta de ensino que melhor combina com o seu perfil. Pronto para descobrir a sua melhor opção de aprendizado? Vamos começar!"
        imageTitle="Imagem com design aprimorado"
        buttonLabel="Iniciar"
      />
    </div>
  );
};

export default RecommendationPage;
