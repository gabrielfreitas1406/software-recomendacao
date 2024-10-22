import React from "react";
import ToolCard from "./ToolCard";

interface ToolSectionProps {
  title: string;
  tools: { image: string; name: string }[];
}

const ToolSection: React.FC<ToolSectionProps> = ({ title, tools }) => {
  return (
    <section className="tool-section">
      <h3 className="tool-section-title">{title}</h3>
      <div className="tool-grid">
        {tools.map((tool, index) => (
          <ToolCard key={index} {...tool} />
        ))}
      </div>
    </section>
  );
};

export default ToolSection;
