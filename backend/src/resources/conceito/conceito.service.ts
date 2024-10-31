import { PrismaClient, Conceito } from "@prisma/client";
import { ConceitoDTO, ConceitoDTOSemId } from "./conceito.types";

const prisma = new PrismaClient();

export const obterTodosConceitos = async (): Promise<Conceito[]> => {
  return await prisma.conceito.findMany();
};

export const obterConceitoPorId = async (
  id: number
): Promise<Conceito | null> => {
  return await prisma.conceito.findUnique({
    where: { id: id },
  });
};

export const obterConceitoPorNome = async (
  nome: string
): Promise<Conceito[] | null> => {
  return await prisma.conceito.findMany({
    where: { nome: nome },
  });
};
