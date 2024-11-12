interface DictionaryNumber<T> {
  [key: number]: T;
}

export interface RespostaSelecionada {
  idResposta: number;
  alternativa: string;
  idConceito: number;
}

//onde o key é o id da questão e o T é o RespostaSelecionada
export const QuestaoRespostaSelecionada: DictionaryNumber<RespostaSelecionada> =
  {};
