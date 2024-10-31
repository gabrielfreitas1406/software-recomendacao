import { PrismaClient, Ferramentas } from "@prisma/client";
import { FerramentasDTO, FerramentasDTOsemID } from "./ferramenta.types";
const prisma = new PrismaClient();

export const obterTodasFerramentas = async (): Promise<FerramentasDTO[]> => {
  return await prisma.ferramentas.findMany();
};

export const obterFerramentaPorId = async (
  id: number
): Promise<FerramentasDTO | null> => {
  return await prisma.ferramentas.findUnique({
    where: { id: id },
  });
};

export const obterFerramentaPorNome = async (
  nome: string
): Promise<FerramentasDTO[] | null> => {
  return await prisma.ferramentas.findMany({
    where: { nome: nome },
  });
};
