import { PrismaClient, ConceitoRecurso } from "@prisma/client";
import { ConceitoRecursoDTO } from "./conceitoRecurso.types";

const prisma = new PrismaClient();

export const obterTodosConceitosRecursos = async (): Promise<
  ConceitoRecursoDTO[]
> => {
  return await prisma.conceitoRecurso.findMany();
};

export const obterConceitoRecursoPorIdCoceitoIdRecurso = async (
  idConceito: number,
  idRecurso: number
): Promise<ConceitoRecursoDTO | null> => {
  return await prisma.conceitoRecurso.findUnique({
    where: {
      idConceito_idRecurso: { idConceito: idConceito, idRecurso: idRecurso },
    },
  });
};

export const obterConceitoRecursoPorIdConceito = async (
  idConceito: number
): Promise<ConceitoRecursoDTO[] | null> => {
  return await prisma.conceitoRecurso.findMany({
    where: { idConceito: idConceito },
  });
};

export const obterConceitoRecursoIdRecurso = async (
  idRecurso: number
): Promise<ConceitoRecursoDTO[] | null> => {
  return await prisma.conceitoRecurso.findMany({
    where: { idRecurso: idRecurso },
  });
};
