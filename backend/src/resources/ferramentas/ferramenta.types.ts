import { Ferramentas } from "@prisma/client";

type FerramentasDTO = Partial<Ferramentas>;

type FerramentasDTOsemID = Pick<Ferramentas, "nome" | "descricao" | "link">;

export { FerramentasDTO, FerramentasDTOsemID };
