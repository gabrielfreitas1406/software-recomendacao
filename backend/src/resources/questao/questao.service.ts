import { PrismaClient, Questao } from "@prisma/client";
import { QuestaoDTO } from "./questao.types";

const prisma = new PrismaClient();

export const obterTodasQuestoes = async (): Promise<QuestaoDTO[]> => {
  return await prisma.questao.findMany();
};

export const obterQuestaoPorId = async (
  id: number
): Promise<QuestaoDTO | null> => {
  return await prisma.questao.findUnique({
    where: { id: id },
  });
};
