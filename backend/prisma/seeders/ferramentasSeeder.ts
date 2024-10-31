import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const ferramentasSeeder = async () => {
  await prisma.ferramentas.createMany({
    data: [
      {
        id: 1,
        nome: "Mentimeter",
        descricao:
          "Aplicativo homônimo usado para criar apresentações com feedback em tempo real.",
        link: "https://www.mentimeter.com/",
      },
      {
        id: 2,
        nome: "Google Meet",
        descricao:
          "Google Meet é um serviço de comunicação por vídeo desenvolvido pelo Google. É um dos dois serviços que substituem a versão anterior do Google Hangouts.",
        link: "https://meet.google.com/",
      },
      {
        id: 3,
        nome: "Jamboard",
        descricao:
          "O Jamboard é um quadro interativo desenvolvido pelo Google, como parte da família G Suite. Foi anunciado oficialmente em 25 de outubro de 2016.",
        link: "https://jamboard.google.com/",
      },
      {
        id: 4,
        nome: "Google Slides",
        descricao:
          "O Google Slides é um programa de apresentação incluído como parte do pacote gratuito do Google Docs Editors, baseado na Web e oferecido pelo Google.",
        link: "https://docs.google.com/presentation/create?hl=pt-BR",
      },
    ],
  });
};
