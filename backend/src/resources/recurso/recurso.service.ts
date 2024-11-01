import { PrismaClient, Recurso } from "@prisma/client";
import { RecursoDTO, RecursoDTOsemID } from "./recurso.types";
const prisma = new PrismaClient();

export const obterTodosRecursos = async (): Promise<RecursoDTO[]> => {
  return await prisma.recurso.findMany();
};

export const obterRecursoPorId = async (
  id: number
): Promise<RecursoDTO | null> => {
  return await prisma.recurso.findUnique({
    where: { id: id },
  });
};

export const obterRecursoPorNome = async (
  nome: string
): Promise<RecursoDTO[] | null> => {
  return await prisma.recurso.findMany({
    where: { nome: nome },
  });
};
