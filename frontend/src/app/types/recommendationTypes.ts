interface DictionaryNumber<T> {
  [key: number]: T;
}

export interface RespostaSelecionada {
  idResposta: number;
  alternativa: string;
  idConceito: number;
}

export interface Conceito {
  id: number;
  nome: string;
  descricao: string;
  idPai: number | null;
}

export interface ConceitoRecurso {
  idConceito: number;
  idRecurso: number;
}

export interface Recurso {
  id: number;
  nome: String;
  descricao: String;
  idFerramenta: number;
}

//onde o key é o id da questão e o T é o RespostaSelecionada
export const QuestaoRespostaSelecionada: DictionaryNumber<RespostaSelecionada> =
  {};

//Interface para contar os recursos e as ferramentas
export const ContagemRecurso: DictionaryNumber<number> = {
  1: 0,
  2: 0,
  3: 0,
  4: 0,
  5: 0,
  6: 0,
  7: 0,
  8: 0,
  9: 0,
  10: 0,
  11: 0,
  12: 0,
  13: 0,
  14: 0,
  15: 0,
};

export const ContagemFerramenta: DictionaryNumber<number> = {};
