import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const recursoSeeder = async () => {
  await prisma.recurso.createMany({
    data: [
      {
        id: 1,
        nome: "Live Polling",
        descricao:
          "O live polling no Mentimeter é uma funcionalidade que permite criar enquetes interativas em tempo real durante apresentações ou reuniões. Com o live polling, você pode fazer perguntas ao seu público e obter respostas instantâneas que são exibidas em gráficos e diagramas na tela.",
        idFerramenta: 1,
      },
      {
        id: 2,
        nome: "Word Cloud",
        descricao:
          "O Word Cloud (nuvem de palavras) no Mentimeter é uma ferramenta interativa que permite coletar palavras ou frases curtas do público em tempo real e exibi-las em uma nuvem de palavras visualmente atraente.",
        idFerramenta: 1,
      },
      {
        id: 3,
        nome: "Quiz",
        descricao:
          "O quiz no Mentimeter é uma funcionalidade interativa que permite criar questionários para testar o conhecimento do público de maneira divertida e envolvente.",
        idFerramenta: 1,
      },
      {
        id: 4,
        nome: "Q&A",
        descricao:
          "O Q&A (Perguntas e Respostas) no Mentimeter é uma funcionalidade que permite ao público enviar perguntas durante uma apresentação, reunião ou evento, e o apresentador pode responder a essas perguntas em tempo real.",
        idFerramenta: 1,
      },
      {
        id: 5,
        nome: "Survey",
        descricao:
          "A funcionalidade de Survey no Mentimeter permite criar pesquisas interativas que coletam opiniões, feedback e informações do público de maneira estruturada e organizada.",
        idFerramenta: 1,
      },
      {
        id: 6,
        nome: "Presentations",
        descricao:
          "A funcionalidade de apresentações no Mentimeter permite criar apresentações interativas e dinâmicas que engajam o público de maneira inovadora.",
        idFerramenta: 1,
      },
      {
        id: 7,
        nome: "Fundos virtuais e efeitos visuais",
        descricao:
          "Os fundos e efeitos visuais no Google Meet são recursos que permitem aos usuários personalizar o ambiente visual de suas videochamadas.",
        idFerramenta: 2,
      },
      {
        id: 8,
        nome: "Compartilhar a tela com outros participantes",
        descricao:
          "Compartilhar a tela com outros participantes no Google Meet é uma funcionalidade útil que permite mostrar o conteúdo do seu computador diretamente para todos na reunião.",
        idFerramenta: 2,
      },
      {
        id: 9,
        nome: "Ligar e desligar microfone",
        descricao:
          "Ligar e desligar o microfone no Google Meet é uma funcionalidade essencial para garantir uma comunicação eficaz e evitar ruídos indesejados.",
        idFerramenta: 2,
      },
      {
        id: 10,
        nome: "Chat",
        descricao:
          "O recurso de chat no Google Meet permite que os participantes enviem mensagens de texto em tempo real, facilitando a comunicação sem interromper quem está apresentando.",
        idFerramenta: 2,
      },
      {
        id: 11,
        nome: "Emoji e reactions via chat",
        descricao:
          "Usar emojis e reações via chat no Google Meet é uma maneira eficaz de expressar emoções e tornar a comunicação mais envolvente.",
        idFerramenta: 2,
      },
      {
        id: 12,
        nome: "Ligar e desligar vídeo",
        descricao:
          "Ligar e desligar o vídeo no Google Meet é uma funcionalidade essencial para gerenciar sua presença visual durante uma reunião.",
        idFerramenta: 2,
      },
      {
        id: 13,
        nome: "Smart display",
        descricao:
          'O recurso "Smart Display" no Google Jamboard permite que você visualize e compartilhe conteúdo de maneira interativa e colaborativa em reuniões ou sala de aula.',
        idFerramenta: 3,
      },
      {
        id: 14,
        nome: "Compartilhar display com outras pessoas",
        descricao:
          "Compartilhar o display no Google Jamboard permite colaboração em tempo real, facilitando a visualização e edição conjunta.",
        idFerramenta: 3,
      },
      {
        id: 15,
        nome: "Apresentação",
        descricao:
          "O Google Slides é uma ferramenta de apresentação que faz parte do Google Workspace, permitindo criar, editar e compartilhar apresentações colaborativas.",
        idFerramenta: 4,
      },
    ],
  });
};
