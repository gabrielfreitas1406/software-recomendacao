import React from "react";
import ToolSection from "./ToolSection";

const toolSections = [
  {
    title: "Ferramentas baseadas em imagem",
    tools: [
      {
        image:
          "https://cdn.builder.io/api/v1/image/assets/TEMP/990bddcc103d9905db25f6262b2e46408fb2ff31843f9925a78c93b78fc5950f?placeholderIfAbsent=true&apiKey=83976f5dcdaa41408687cac3bc676028",
        name: "LiveBoard",
      },
      {
        image:
          "https://cdn.builder.io/api/v1/image/assets/TEMP/06b6737683325a7d22d817c8709591a18dff58b5d025289c237b1681c5a9cd5d?placeholderIfAbsent=true&apiKey=83976f5dcdaa41408687cac3bc676028",
        name: "Padlet",
      },
      {
        image:
          "https://cdn.builder.io/api/v1/image/assets/TEMP/a499dc66412c08c407a9be0cc6ea726919c7acc2285dbb2f125d2eec6b126501?placeholderIfAbsent=true&apiKey=83976f5dcdaa41408687cac3bc676028",
        name: "Epic Pen",
      },
      {
        image:
          "https://cdn.builder.io/api/v1/image/assets/TEMP/358ff19548044a2c094fa44cfb61a2a9d5b47216cffc29f2fd06092269347478?placeholderIfAbsent=true&apiKey=83976f5dcdaa41408687cac3bc676028",
        name: "Numpty Physics",
      },
      {
        image:
          "https://cdn.builder.io/api/v1/image/assets/TEMP/eb08d2b1f411ee082d24c3a6bcbe0f6a5182c4ca8e2e84bd2d1fefd060971602?placeholderIfAbsent=true&apiKey=83976f5dcdaa41408687cac3bc676028",
        name: "Miro",
      },
    ],
  },
  {
    title: "Ferramentas baseadas em texto",
    tools: [
      {
        image:
          "https://cdn.builder.io/api/v1/image/assets/TEMP/195636b03d7d85b6bb7635f821e3d79223a80543a6b1610cbeff75b53b893fa7?placeholderIfAbsent=true&apiKey=83976f5dcdaa41408687cac3bc676028",
        name: "ClassDojo",
      },
      {
        image:
          "https://cdn.builder.io/api/v1/image/assets/TEMP/e8dfe45d30800034a590c73138f0ab4848572163bb71a4e86a4d2da2ee8579e2?placeholderIfAbsent=true&apiKey=83976f5dcdaa41408687cac3bc676028",
        name: "Discord",
      },
      {
        image:
          "https://cdn.builder.io/api/v1/image/assets/TEMP/235f7c1dda6235ce5c95f9f3045b7a13fbdbf5894d9a3284eabc4bbd18832163?placeholderIfAbsent=true&apiKey=83976f5dcdaa41408687cac3bc676028",
        name: "Slack",
      },
    ],
  },
  {
    title: "Ferramentas baseadas em imagem e texto",
    tools: [
      {
        image:
          "https://cdn.builder.io/api/v1/image/assets/TEMP/cabce561af3d7f8dce9598d046a330eb79e73838808851086acdb358275e37b9?placeholderIfAbsent=true&apiKey=83976f5dcdaa41408687cac3bc676028",
        name: "Jamboard",
      },
      {
        image:
          "https://cdn.builder.io/api/v1/image/assets/TEMP/92a1f703fab5a191e4dfb029dba70e50f1092ee845c961148ae06bff5a7f7ba8?placeholderIfAbsent=true&apiKey=83976f5dcdaa41408687cac3bc676028",
        name: "Evernote",
      },
    ],
  },
  {
    title: "FERRAMENTAS DE ORGANIZAÇÃO E COMPARTILHAMENTO DE CONHECIMENTO",
    tools: [
      {
        image:
          "https://cdn.builder.io/api/v1/image/assets/TEMP/d0fb32fa7916e43f4cc467dc45201d5281dec82db1526f55b28c446cf72a2ebf?placeholderIfAbsent=true&apiKey=83976f5dcdaa41408687cac3bc676028",
        name: "Trello",
      },
      {
        image:
          "https://cdn.builder.io/api/v1/image/assets/TEMP/b2be54879cc27cad7e79b8a03789da6282c3036c7944bf13fed92fa3020dd289?placeholderIfAbsent=true&apiKey=83976f5dcdaa41408687cac3bc676028",
        name: "Google Drive",
      },
    ],
  },
  {
    title: "Ferramentas de Storytelling Digital",
    tools: [
      {
        image:
          "https://cdn.builder.io/api/v1/image/assets/TEMP/c8215c8c1c4954eef2e3014fc14d92c6e65411d082d1282e549a33a08c40c079?placeholderIfAbsent=true&apiKey=83976f5dcdaa41408687cac3bc676028",
        name: "Powtoon",
      },
    ],
  },
  {
    title: "Sistema de Rede Social",
    tools: [
      {
        image:
          "https://cdn.builder.io/api/v1/image/assets/TEMP/9cd3eb5e88152bd74f712d0e24bde3ac4acece3bcd448e6820069ed66e0ad8fe?placeholderIfAbsent=true&apiKey=83976f5dcdaa41408687cac3bc676028",
        name: "Edmondo",
      },
    ],
  },
];

const Recommendations: React.FC = () => {
  return (
    <section className="recommendations">
      <h2 className="recommendations-title">Recomendações</h2>
      <h3 className="recommendations-subtitle">
        Ferramentas de Colaboração Síncrona
      </h3>
      {/* Para cada lista de ferramentas */}
      {toolSections.map((section, index) => (
        <ToolSection key={index} {...section} />
      ))}
    </section>
  );
};

export default Recommendations;
