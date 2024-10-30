import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Inserir dados na tabela `conceito`
  await prisma.conceito.createMany({
    data: [
      { id: 1, nome: "imersão", descricao: "...", IdPai: 0 },
      { id: 2, nome: "socialidade", descricao: "...", IdPai: 0 },
      { id: 3, nome: "solidão", descricao: "...", IdPai: 0 },
      { id: 4, nome: "Interatividade", descricao: "...", IdPai: 0 },
      { id: 5, nome: "Imediatismo", descricao: "...", IdPai: 0 },
      { id: 6, nome: "Efervescência Coletiva", descricao: "...", IdPai: 0 },
      // Inclua todos os registros...
    ],
  });

  // Inserir dados na tabela `ferramentas`
  await prisma.ferramentas.createMany({
    data: [
      {
        id: 1,
        nome: "mentimeter",
        descricao: "Aplicativo para apresentações interativas...",
        link: "https://www.mentimeter.com/",
      },
      {
        id: 2,
        nome: "Google meet",
        descricao: "Serviço de comunicação por vídeo...",
        link: "https://meet.google.com/",
      },
      {
        id: 3,
        nome: "Jamboard",
        descricao: "Quadro interativo do Google...",
        link: "https://jamboard.google.com/",
      },
      {
        id: 4,
        nome: "Google Slides",
        descricao: "Programa de apresentação no Google Docs...",
        link: "https://docs.google.com/presentation/create?hl=pt-BR",
      },
      // Outros registros...
    ],
  });

  // Inserir dados na tabela `recurso`
  await prisma.recurso.createMany({
    data: [
      {
        id: 1,
        nome: "Live Polling",
        descricao: "Enquetes interativas em tempo real...",
        idFerramenta: 1,
      },
      {
        id: 2,
        nome: "Word Cloud",
        descricao: "Ferramenta para criar nuvem de palavras...",
        idFerramenta: 1,
      },
      {
        id: 3,
        nome: "Quiz",
        descricao: "Funcionalidade interativa para testes...",
        idFerramenta: 1,
      },
      {
        id: 4,
        nome: "Q&A",
        descricao: "Permite perguntas e respostas durante apresentações...",
        idFerramenta: 1,
      },
      // Outros registros...
    ],
  });

  // Inserir dados na tabela `conceito-recurso`
  await prisma.conceitoRecurso.createMany({
    data: [
      { idConceito: 1, idRecurso: 1 },
      { idConceito: 1, idRecurso: 3 },
      { idConceito: 1, idRecurso: 4 },
      { idConceito: 1, idRecurso: 5 },
      { idConceito: 2, idRecurso: 1 },
      { idConceito: 2, idRecurso: 3 },
      // Continue para todos os registros...
    ],
  });
}

main()
  .catch((e) => {
    console.error(e);
    //process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
