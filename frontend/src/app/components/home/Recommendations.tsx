import React from "react";
import ToolSection from "./ToolSection";

const toolSections = [
  {
    title: "Ferramentas de colaboração síncrona",
    tools: [
      {
        image:
          "https://cdn.builder.io/api/v1/image/assets/TEMP/ddda2701be6f4a52d94165a53541a70b6674456d",
        name: "Google Meet",
      },
      {
        image:
          "https://cdn.builder.io/api/v1/image/assets/TEMP/10023c83b3a13aed77dd6bac4b6a58b6fb09d5cf8fbda582183b618847607d0b?placeholderIfAbsent=true&apiKey=83976f5dcdaa41408687cac3bc676028",
        name: "GoToMeeting",
      },
      {
        image:
          "https://cdn.builder.io/api/v1/image/assets/TEMP/047bcd51566c4c104cb1be03f0bd3f9437ce028e8b015d6c78a21a84873e3c60?placeholderIfAbsent=true&apiKey=83976f5dcdaa41408687cac3bc676028",
        name: "BigBlueButton",
      },
      {
        image:
          "https://cdn.builder.io/api/v1/image/assets/TEMP/c73446d2db1ed6abc7fbcbf651c044a37285fb45",
        name: "Zoom",
      },
      {
        image:
          "https://images.seeklogo.com/logo-png/37/1/cisco-webex-meeting-logo-png_seeklogo-372182.png",
        name: "Webex Meeting",
      },
    ],
  },
  {
    title: "Ferramentas de colaboração síncrona",
    tools: [
      {
        image:
          "https://cdn.builder.io/api/v1/image/assets/TEMP/990bddcc103d9905db25f6262b2e46408fb2ff31843f9925a78c93b78fc5950f?placeholderIfAbsent=true&apiKey=83976f5dcdaa41408687cac3bc676028",
        name: "LiveBoard",
      },
      {
        image: "https://m.media-amazon.com/images/I/41YxRmNirKL.png",
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
          "data:image/jpeg;base64,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",
        name: "Miro",
      },
      {
        image:
          "https://play-lh.googleusercontent.com/rYz25b_qg2gm3e5A9Z_tFqqDeDr7-uQOe_0oO1KrZ2Eqm4GKmc0TpZe3sTj3ZB8ROgk",
        name: "Mind Meinster",
      },
    ],
  },
  {
    title: "Ferramentas de Produção multimídia",
    tools: [
      {
        image:
          "https://cdn.builder.io/api/v1/image/assets/TEMP/990bddcc103d9905db25f6262b2e46408fb2ff31843f9925a78c93b78fc5950f?placeholderIfAbsent=true&apiKey=83976f5dcdaa41408687cac3bc676028",
        name: "LiveBoard",
      },
      {
        image: "https://m.media-amazon.com/images/I/41YxRmNirKL.png",
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
          "data:image/jpeg;base64,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",
        name: "Miro",
      },
      {
        image:
          "https://play-lh.googleusercontent.com/rYz25b_qg2gm3e5A9Z_tFqqDeDr7-uQOe_0oO1KrZ2Eqm4GKmc0TpZe3sTj3ZB8ROgk",
        name: "Mind Meinster",
      },
    ],
  },
  {
    title: "Ferramentas baseadas em imagem",
    tools: [
      {
        image:
          "https://cdn.builder.io/api/v1/image/assets/TEMP/990bddcc103d9905db25f6262b2e46408fb2ff31843f9925a78c93b78fc5950f?placeholderIfAbsent=true&apiKey=83976f5dcdaa41408687cac3bc676028",
        name: "LiveBoard",
      },
      {
        image: "https://m.media-amazon.com/images/I/41YxRmNirKL.png",
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
          "data:image/jpeg;base64,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",
        name: "Miro",
      },
      {
        image:
          "https://play-lh.googleusercontent.com/rYz25b_qg2gm3e5A9Z_tFqqDeDr7-uQOe_0oO1KrZ2Eqm4GKmc0TpZe3sTj3ZB8ROgk",
        name: "Mind Meinster",
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
          "https://static.vecteezy.com/system/resources/previews/006/892/625/non_2x/discord-logo-icon-editorial-free-vector.jpg",
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
          "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Evernote.svg/800px-Evernote.svg.png",
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

      {/* Para cada lista de ferramentas */}
      {toolSections.map((section, index) => (
        <ToolSection key={index} {...section} />
      ))}
    </section>
  );
};

export default Recommendations;
