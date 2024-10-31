import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const conceitoRecursoSeeder = async () => {
  await prisma.conceitoRecurso.createMany({
    data: [
      { idConceito: 1, idRecurso: 1 },
      { idConceito: 1, idRecurso: 3 },
      { idConceito: 1, idRecurso: 4 },
      { idConceito: 1, idRecurso: 5 },
      { idConceito: 1, idRecurso: 6 },
      { idConceito: 1, idRecurso: 7 },
      { idConceito: 1, idRecurso: 8 },
      { idConceito: 1, idRecurso: 9 },
      { idConceito: 1, idRecurso: 10 },
      { idConceito: 1, idRecurso: 11 },
      { idConceito: 1, idRecurso: 12 },
      { idConceito: 2, idRecurso: 1 },
      { idConceito: 2, idRecurso: 3 },
      { idConceito: 2, idRecurso: 6 },
      { idConceito: 2, idRecurso: 7 },
      { idConceito: 2, idRecurso: 8 },
      { idConceito: 2, idRecurso: 9 },
      { idConceito: 2, idRecurso: 10 },
      { idConceito: 2, idRecurso: 12 },
      { idConceito: 2, idRecurso: 13 },
      { idConceito: 2, idRecurso: 15 },
      { idConceito: 4, idRecurso: 1 },
      { idConceito: 4, idRecurso: 3 },
      { idConceito: 4, idRecurso: 4 },
      { idConceito: 4, idRecurso: 5 },
      { idConceito: 4, idRecurso: 6 },
      { idConceito: 4, idRecurso: 7 },
      { idConceito: 4, idRecurso: 8 },
      { idConceito: 4, idRecurso: 10 },
      { idConceito: 4, idRecurso: 11 },
      { idConceito: 4, idRecurso: 13 },
      { idConceito: 5, idRecurso: 1 },
      { idConceito: 5, idRecurso: 2 },
      { idConceito: 5, idRecurso: 3 },
      { idConceito: 5, idRecurso: 4 },
      { idConceito: 5, idRecurso: 5 },
      { idConceito: 5, idRecurso: 6 },
      { idConceito: 5, idRecurso: 8 },
      { idConceito: 5, idRecurso: 9 },
      { idConceito: 5, idRecurso: 10 },
      { idConceito: 5, idRecurso: 11 },
      { idConceito: 5, idRecurso: 12 },
      { idConceito: 5, idRecurso: 13 },
      { idConceito: 5, idRecurso: 15 },
      { idConceito: 6, idRecurso: 10 },
      { idConceito: 6, idRecurso: 11 },
      { idConceito: 7, idRecurso: 1 },
      { idConceito: 7, idRecurso: 3 },
      { idConceito: 7, idRecurso: 4 },
      { idConceito: 7, idRecurso: 5 },
      { idConceito: 7, idRecurso: 12 },
      { idConceito: 8, idRecurso: 1 },
      { idConceito: 8, idRecurso: 3 },
      { idConceito: 8, idRecurso: 12 },
      { idConceito: 8, idRecurso: 15 },
      { idConceito: 9, idRecurso: 4 },
      { idConceito: 9, idRecurso: 6 },
      { idConceito: 10, idRecurso: 1 },
      { idConceito: 10, idRecurso: 3 },
      { idConceito: 10, idRecurso: 4 },
      { idConceito: 10, idRecurso: 5 },
      { idConceito: 10, idRecurso: 9 },
      { idConceito: 14, idRecurso: 3 },
      { idConceito: 15, idRecurso: 4 },
      { idConceito: 15, idRecurso: 5 },
      { idConceito: 15, idRecurso: 13 },
      { idConceito: 16, idRecurso: 1 },
      { idConceito: 16, idRecurso: 2 },
      { idConceito: 16, idRecurso: 4 },
      { idConceito: 16, idRecurso: 5 },
      { idConceito: 16, idRecurso: 6 },
      { idConceito: 16, idRecurso: 8 },
      { idConceito: 16, idRecurso: 9 },
      { idConceito: 16, idRecurso: 10 },
      { idConceito: 16, idRecurso: 11 },
      { idConceito: 16, idRecurso: 13 },
      { idConceito: 16, idRecurso: 15 },
      { idConceito: 17, idRecurso: 1 },
      { idConceito: 17, idRecurso: 3 },
      { idConceito: 17, idRecurso: 13 },
      { idConceito: 18, idRecurso: 3 },
      { idConceito: 18, idRecurso: 4 },
      { idConceito: 18, idRecurso: 5 },
      { idConceito: 18, idRecurso: 8 },
      { idConceito: 18, idRecurso: 9 },
      { idConceito: 18, idRecurso: 10 },
      { idConceito: 18, idRecurso: 11 },
      { idConceito: 18, idRecurso: 12 },
      { idConceito: 18, idRecurso: 13 },
      { idConceito: 19, idRecurso: 13 },
      { idConceito: 19, idRecurso: 15 },
      { idConceito: 20, idRecurso: 10 },
      { idConceito: 21, idRecurso: 8 },
      { idConceito: 22, idRecurso: 3 },
      { idConceito: 22, idRecurso: 13 },
      { idConceito: 22, idRecurso: 15 },
    ],
  });
};
