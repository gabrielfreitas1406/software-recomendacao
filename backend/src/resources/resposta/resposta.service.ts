import { PrismaClient, Questao } from "@prisma/client";
import { RespostaDTO } from "./resposta.types";

const prisma = new PrismaClient();

export const obterTodasRespostas = async (): Promise<RespostaDTO[]> => {
  return await prisma.resposta.findMany();
};

export const obterRespostaPorId = async (
  id: number
): Promise<RespostaDTO | null> => {
  return await prisma.resposta.findUnique({
    where: { id: id },
  });
};

export const obterRespostaPorIdConceito = async (
  idConceito: number
): Promise<RespostaDTO[] | null> => {
  return await prisma.resposta.findMany({
    where: { idConceito: idConceito },
  });
};

export const obterRespostaPorIdQuestao = async (
  idQuestao: number
): Promise<RespostaDTO[] | null> => {
  return await prisma.resposta.findMany({
    where: { idQuestao: idQuestao },
  });
};
