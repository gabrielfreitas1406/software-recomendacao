import React from "react";
import Card from "@/app/components/card/Card";

const RecommendationResultPage: React.FC = () => {
  return (
    <>
      <div className="page-container">
        <Card isInitCard={false} isResultCard={true} />
      </div>
    </>
  );
};

export default RecommendationResultPage;
