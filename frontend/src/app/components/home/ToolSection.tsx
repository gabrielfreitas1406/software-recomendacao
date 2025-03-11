import React from "react";
import ToolCard from "./ToolCard";
import CardFerramentas from "./CardFerramentas";

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
          <CardFerramentas key={index}  {...tool} /> /* Imprime uma ferramenta da lista de ferramentas (tools)*/
        ))}
      </div>
    </section>
  );
};

export default ToolSection;
