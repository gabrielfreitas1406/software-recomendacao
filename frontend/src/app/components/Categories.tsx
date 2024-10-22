import React from "react";
import CategoryCard from "./CategoryCard";

const categoriesData = [
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/a3d778d90bdbb9ee6b2d30e69e0dab19b8b3fb8cdd7abb091eb08432e153936d?placeholderIfAbsent=true&apiKey=83976f5dcdaa41408687cac3bc676028",
    title: "Engajamento",
    description:
      "Representa a profundidade do envolvimento emocional, cognitivo e comportamental que o público experimenta durante uma interação.",
  },
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/41ca355a9cdbc5aa7b5e8917cefc12af4c514ad45fd94b6b15eb1363a4d52604?placeholderIfAbsent=true&apiKey=83976f5dcdaa41408687cac3bc676028",
    title: "Participation",
    description:
      "Refere-se às formas como o público se envolve ativamente ou passivamente em um evento, influenciado por seus comportamentos, motivações e o contexto da interação.",
  },
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/0d1f8c73fc5bdad9927a52fa49c5ff80334a5743bbd41ef46856a5bdcb3912b4?placeholderIfAbsent=true&apiKey=83976f5dcdaa41408687cac3bc676028",
    title: "liveness",
    description:
      "Liveness representa a conexão de pessoas acompanhando e assistindo ao evento em tempo real, e vivenciando a naturalidade da experiência",
  },
];

const Categories: React.FC = () => {
  return (
    <section className="categories-section">
      <h2 className="categories-title">Categorias</h2>
      <div className="categories-container">
        {categoriesData.map((category, index) => (
          <CategoryCard key={index} {...category} />
        ))}
      </div>
      <div className="categories-images">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/1f36b9ea9248cf75629b4cb96b31178f16aadaee101027f8015120caaaeb4932?placeholderIfAbsent=true&apiKey=83976f5dcdaa41408687cac3bc676028"
          alt=""
          className="category-image-left"
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/907dc511f7db9137e4bc9b0e0a8795b56a4aaf844c9b065d5140a55bd8ad5ed5?placeholderIfAbsent=true&apiKey=83976f5dcdaa41408687cac3bc676028"
          alt=""
          className="category-image-right"
        />
      </div>
    </section>
  );
};

export default Categories;
