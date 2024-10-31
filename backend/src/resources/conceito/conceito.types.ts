import { Conceito } from "@prisma/client";

type ConceitoDTO = Partial<Conceito>;
type ConceitoDTOSemId = Pick<Conceito, "nome" | "descricao" | "IdPai">;

export { ConceitoDTO, ConceitoDTOSemId };
