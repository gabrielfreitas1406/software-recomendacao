import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const QuestaoRespostaSeeder = async () => {
  // Bloco 1 - Engajamento
  await prisma.questao.create({
    data: {
      id: 1,
      enunciado:
        "Como você gostaria que os participantes se engajassem durante a atividade?",
      respostas: {
        create: [
          {
            conteudo: "Interação social entre os participantes",
            idConceito: 2,
          },
          {
            conteudo: "Participação individual, mas sem isolamento completo",
            idConceito: 3,
          },
          {
            conteudo: "Participação interativa ativa dos participantes",
            idConceito: 4,
          },
          {
            conteudo:
              "Os participantes estão profundamente envolvidos ou absorvidos pela atividade",
            idConceito: 1,
          },
        ],
      },
    },
  });

  await prisma.questao.create({
    data: {
      id: 2,
      enunciado:
        "Que aspectos emocionais e dinâmicos você gostaria de ver durante a atividade?",
      respostas: {
        create: [
          {
            conteudo:
              "Rapidez com que o feedback ou as respostas são recebidas",
            idConceito: 5,
          },
          {
            conteudo:
              "Energia compartilhada entre os participantes engajados de forma entusiástica",
            idConceito: 6,
          },
          {
            conteudo:
              "Nível de excitação ou energia que a atividade gera nos participantes",
            idConceito: 7,
          },
          {
            conteudo:
              "A experiência emocional positiva que a atividade provoca nos participantes",
            idConceito: 8,
          },
        ],
      },
    },
  });

  // Bloco 2 - Participation
  await prisma.questao.create({
    data: {
      id: 3,
      enunciado:
        "Como você gostaria que o tempo fosse gerenciado durante a atividade?",
      respostas: {
        create: [
          {
            conteudo:
              "Foco em dar tempo suficiente para pensar e analisar antes de responder.",
            idConceito: 9,
          },
          {
            conteudo:
              "Foco em respostas rápidas e ação imediata, com pouca ou nenhuma reflexão.",
            idConceito: 10,
          },
          {
            conteudo:
              "Alternância entre momentos de reflexão e respostas rápidas, conforme necessário.",
            idConceito: 5, //Pode ser reflexivo: 9 e imediato: 5
          },
          { conteudo: "Nenhuma preferência" },
        ],
      },
    },
  });

  await prisma.questao.create({
    data: {
      id: 4,
      enunciado:
        "Como você gostaria que o espaço fosse utilizado na atividade?",
      respostas: {
        create: [
          {
            conteudo:
              "Baseado em cenários reais e simulações do mundo prático.",
            idConceito: 11,
          },
          {
            conteudo: "Foco em diferentes pontos de vista e abordagens.",
            idConceito: 12,
          },
          {
            conteudo:
              "Moderado – Uma combinação de cenários práticos e múltiplas perspectivas, dependendo da necessidade.",
            idConceito: 12,
          },
          { conteudo: "Nenhuma preferência" },
        ],
      },
    },
  });
  // Qualities
  await prisma.questao.create({
    data: {
      id: 5,
      enunciado:
        "Qual abordagem você gostaria que a atividade promovesse em relação ao conteúdo e ao conhecimento?",
      respostas: {
        create: [
          {
            conteudo:
              "  Foco em como o conteúdo se relaciona com cultura, diversidade e o contexto social dos participantes",
            idConceito: 13,
          },
          {
            conteudo:
              "Incentivo ao pensamento crítico, promovendo a análise, questionamento e desafio de ideias apresentadas",
            idConceito: 15,
          },
          {
            conteudo:
              "Epistêmica – Foco na criação, aquisição e compartilhamento de conhecimento entre os participantes.",
            idConceito: 14,
          },
          { conteudo: "Nenhuma preferência" },
        ],
      },
    },
  });

  await prisma.questao.create({
    data: {
      id: 6,
      enunciado: "Qual abordagem motivacional você prefere para a atividade?",
      respostas: {
        create: [
          {
            conteudo:
              " Foco no trabalho em equipe, onde os participantes cooperam para atingir objetivos comuns.",
            idConceito: 16,
          },
          {
            conteudo:
              " Foco em criar um ambiente de desafio, onde os participantes competem entre si para obter o melhor desempenho. ",
            idConceito: 17,
          },
          {
            conteudo: "Colaboração e competição ",
            idConceito: 16, //Pode ser 17 também
          },
          { conteudo: "Nenhuma preferência" },
        ],
      },
    },
  });

  // Bloco 3 - Liveness
  await prisma.questao.create({
    data: {
      id: 7,
      enunciado:
        "Qual tipo de conexão social você gostaria de promover durante a atividade?",
      respostas: {
        create: [
          {
            conteudo:
              "Foco em criar uma sensação de coesão, onde todos os participantes se sentem parte de um grupo unido.",
            idConceito: 20,
          },
          {
            conteudo:
              "Foco em garantir que os participantes se sintam incluídos e parte de algo maior, proporcionando uma conexão emocional com o grupo.",
            idConceito: 21,
          },
          {
            conteudo:
              "Uma combinação de Unidade e Pertencimento, equilibrando o sentimento de coesão com o reconhecimento individual dentro do grupo.",
            idConceito: 20, //pode ser 21 também
          },
          { conteudo: "Nenhuma preferência" },
        ],
      },
    },
  });

  await prisma.questao.create({
    data: {
      id: 8,
      enunciado:
        "Qual tipo de presença social você considera mais importante para a atividade?",
      respostas: {
        create: [
          {
            conteudo:
              "Foco em assegurar que os participantes sintam a presença uns dos outros, mesmo que de forma virtual ou indireta.",
            idConceito: 19,
          },
          {
            conteudo:
              "Foco em criar uma sensação de estar junto com os outros em tempo real, promovendo a ideia de simultaneidade.",
            idConceito: 18,
          },
          {
            conteudo:
              "Ambas, presença social e co-presença, onde os participantes sentem a presença dos outros e também estão engajados em tempo real.",
            idConceito: 19, //Pode ser 18 também
          },
          { conteudo: "Nenhuma preferência" },
        ],
      },
    },
  });

  console.log("Questões e respostas inseridas com sucesso!");
};