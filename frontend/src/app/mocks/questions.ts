type Option = {
  letter: string;
  text: string;
  description: string;
};

type Question = {
  question: string;
  options: Option[];
};

type Block = {
  title: string;
  questions: Question[];
};

const survey: Block[] = [
  {
    title: "Bloco 1 - Engajamento",
    questions: [
      {
        question:
          "Como você gostaria que os participantes se engajassem durante a atividade?",
        options: [
          {
            letter: "A",
            text: "Interação social entre os participantes",
            description: "Socialidade",
          },
          {
            letter: "B",
            text: "Participação individual, mas sem isolamento completo",
            description: "Solidão",
          },
          {
            letter: "C",
            text: "Participação interativa ativa dos participantes",
            description: "Interatividade",
          },
          {
            letter: "D",
            text: "Os participantes estão profundamente envolvidos ou absorvidos pela atividade",
            description: "Imersão",
          },
        ],
      },
      {
        question:
          "Que aspectos emocionais e dinâmicos você gostaria de ver durante a atividade?",
        options: [
          {
            letter: "A",
            text: "Rapidez com que o feedback ou as respostas são recebidas",
            description: "Imediatismo",
          },
          {
            letter: "B",
            text: "Energia compartilhada entre os participantes engajados de forma entusiástica",
            description: "Efervescência Coletiva",
          },
          {
            letter: "C",
            text: "Nível de excitação ou energia que a atividade gera nos participantes",
            description: "Excitação",
          },
          {
            letter: "D",
            text: "A experiência emocional positiva que a atividade provoca nos participantes",
            description: "Valência",
          },
        ],
      },
    ],
  },
  {
    title: "Bloco 2 - Participation",
    questions: [
      {
        question:
          "Como você gostaria que o tempo fosse gerenciado durante a atividade?",
        options: [
          {
            letter: "A",
            text: "Foco em dar tempo suficiente para pensar e analisar antes de responder.",
            description: "Reflexivo",
          },
          {
            letter: "B",
            text: "Foco em respostas rápidas e ação imediata, com pouca ou nenhuma reflexão.",
            description: "",
          },
          {
            letter: "C",
            text: "Alternância entre momentos de reflexão e respostas rápidas, conforme necessário.",
            description: "Combinação de reflexivo e imediato",
          },
          { letter: "D", text: "Nenhuma preferência", description: "" },
        ],
      },
      {
        question:
          "Como você gostaria que o espaço fosse utilizado na atividade?",
        options: [
          {
            letter: "A",
            text: "Baseado em cenários reais e simulações do mundo prático.",
            description: "",
          },
          {
            letter: "B",
            text: "Foco em diferentes pontos de vista e abordagens.",
            description: "",
          },
          {
            letter: "C",
            text: "Moderado – Uma combinação de cenários práticos e múltiplas perspectivas, dependendo da necessidade.",
            description: "",
          },
          { letter: "D", text: "Nenhuma preferência", description: "" },
        ],
      },
      {
        question:
          "Qual abordagem você gostaria que a atividade promovesse em relação ao conteúdo e ao conhecimento?",
        options: [
          {
            letter: "A",
            text: "Foco em como o conteúdo se relaciona com cultura, diversidade e o contexto social dos participantes.",
            description: "Constitutive",
          },
          {
            letter: "B",
            text: "Incentivo ao pensamento crítico, promovendo a análise, questionamento e desafio de ideias apresentadas.",
            description: "Critical",
          },
          {
            letter: "C",
            text: "Epistêmica – Foco na criação, aquisição e compartilhamento de conhecimento entre os participantes.",
            description: "Epistêmica",
          },
          { letter: "D", text: "Nenhuma preferência", description: "" },
        ],
      },
      {
        question: "Qual abordagem motivacional você prefere para a atividade?",
        options: [
          {
            letter: "A",
            text: "Foco no trabalho em equipe, onde os participantes cooperam para atingir objetivos comuns.",
            description: "Collaboration",
          },
          {
            letter: "B",
            text: "Foco em criar um ambiente de desafio, onde os participantes competem entre si para obter o melhor desempenho.",
            description: "Competition",
          },
          { letter: "C", text: "Colaboração e competição", description: "" },
          { letter: "D", text: "Nenhuma preferência", description: "" },
        ],
      },
    ],
  },
  {
    title: "Bloco 3 - Liveness",
    questions: [
      {
        question:
          "Qual tipo de conexão social você gostaria de promover durante a atividade?",
        options: [
          {
            letter: "A",
            text: "Foco em criar uma sensação de coesão, onde todos os participantes se sentem parte de um grupo unido.",
            description: "Sentido de Unidade",
          },
          {
            letter: "B",
            text: "Foco em garantir que os participantes se sintam incluídos e parte de algo maior, proporcionando uma conexão emocional com o grupo.",
            description: "Sentido de Pertencimento",
          },
          {
            letter: "C",
            text: "Uma combinação de Unidade e Pertencimento, equilibrando o sentimento de coesão com o reconhecimento individual dentro do grupo.",
            description: "",
          },
          { letter: "D", text: "Nenhuma preferência", description: "" },
        ],
      },
      {
        question:
          "Qual tipo de presença social você considera mais importante para a atividade?",
        options: [
          {
            letter: "A",
            text: "Foco em assegurar que os participantes sintam a presença uns dos outros, mesmo que de forma virtual ou indireta.",
            description: "Presença Social",
          },
          {
            letter: "B",
            text: "Foco em criar uma sensação de estar junto com os outros em tempo real, promovendo a ideia de simultaneidade.",
            description: "Co-presença",
          },
          {
            letter: "C",
            text: "Ambas, presença social e co-presença, onde os participantes sentem a presença dos outros e também estão engajados em tempo real.",
            description: "",
          },
          { letter: "D", text: "Nenhuma preferência", description: "" },
        ],
      },
    ],
  },
];

export default survey;
