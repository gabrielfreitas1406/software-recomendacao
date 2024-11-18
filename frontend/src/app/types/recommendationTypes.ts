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
