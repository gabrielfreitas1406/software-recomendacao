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

export interface Ferramenta {
  id: number;
  nome: String;
  descricao: String;
  link: String;
}

//onde o key é o id da questão e o T é o RespostaSelecionada
export const QuestaoRespostaSelecionada: DictionaryNumber<RespostaSelecionada> =
  {};

//Interface para contar os recursos e as ferramentas
export const ContagemRecurso: DictionaryNumber<number> = {};

export const ContagemFerramenta: DictionaryNumber<number> = {};
