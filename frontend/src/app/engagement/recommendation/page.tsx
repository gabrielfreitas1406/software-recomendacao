import * as React from "react";
import { EngagementButton } from "../../components/engagement/EngagementButton";
import { Engagementkeywords } from "../../types/engagementTypes";

const EngagementRecommendationPage: React.FC = () => {
  return (
    <div className="page-container">
      <main className="categories-recommendations-content">
        <section className="categories-recommendations-section">
          <h2 className="section-title">ENGAJAMENTO</h2>
          <p className="section-description">
            Selecione os tipos de engajamento desejado
          </p>

          <div className="categories-recommendations-grid">
            {Engagementkeywords.map((keyWords) => (
              <EngagementButton key={keyWords} text={keyWords} />
            ))}
            {/* */}

            {/* <div className="button-group">
              <EngagementButton />
              <EngagementButton />
              <EngagementButton />
            </div>*/}
          </div>
          {/*
          
                    <div className="engagement-options">
            <div className="option-group">
              <EngagementButton width={109} />
              <span className="option-label">Instantâneo</span>
            </div>

            <div className="option-group">
              <div className="sub-options">
                <span className="option-label">Interativo</span>
                <span className="option-label">Instantâneo</span>
              </div>
              <EngagementButton />
            </div>
          </div>
          */}
        </section>
      </main>
    </div>
  );
};

export default EngagementRecommendationPage;
