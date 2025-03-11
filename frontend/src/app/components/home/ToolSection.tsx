import React from "react";
import ToolCard from "./ToolCard";
import CardFerramentas from "./CardFerramentas";
import { Box } from "@mui/material";

interface ToolSectionProps {
  title: string;
  tools: { image: string; name: string }[];
}

const ToolSection: React.FC<ToolSectionProps> = ({ title, tools }) => {
  return (
    <section className="tool-section">
      <h3 className="tool-section-title">{title}</h3>
      <div className="tool-grid">
        <Box sx={{width: "100%",
                  flexShrink: "0",
                  borderRadius: "10px",
                  background: "#E0E9F5",
                  display: "flex",  
                  flexDirection: "row",
                  padding: "16px",
                  gap: "1%"
                  }}>
        {tools.map((tool, index) => (
          <CardFerramentas key={index}  {...tool} /> /* Imprime uma ferramenta da lista de ferramentas (tools)*/
        ))}
        </Box>
        

      </div>
    </section>
  );
};

export default ToolSection;
