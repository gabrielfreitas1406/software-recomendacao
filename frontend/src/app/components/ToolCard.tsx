import React from "react";

interface ToolCardProps {
  image: string;
  name: string;
}

const ToolCard: React.FC<ToolCardProps> = ({ image, name }) => {
  return (
    <div className="tool-card">
      <div className="tool-image-container">
        <img src={image} alt={name} className="tool-image" />
      </div>
      <h4 className="tool-name">{name}</h4>
    </div>
  );
};

export default ToolCard;
