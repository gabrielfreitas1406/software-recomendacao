import React from "react";

interface CategoryCardProps {
  image: string;
  title: string;
  description: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({
  image,
  title,
  description,
}) => {
  return (
    <div className="category-card">
      <div className="category-image-container">
        <img src={image} alt={title} className="category-image" />
      </div>
      <h3 className="category-title">{title}</h3>
      <p className="category-description">{description}</p>
    </div>
  );
};

export default CategoryCard;
