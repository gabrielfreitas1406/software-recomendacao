import { Recurso } from "@prisma/client";

type RecursoDTO = Partial<Recurso>;

type RecursoDTOsemID = Pick<Recurso, "nome" | "descricao" | "idFerramenta">;

export { RecursoDTO, RecursoDTOsemID };
