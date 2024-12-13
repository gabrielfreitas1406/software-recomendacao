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
  nome: string;
  descricao: string;
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

// 1: Mentimeter, 2: Meet, 3: Jamboard, 4: Google Slides, no qual a soma de cada linha deve ser = 1.0
export const matrizRecomendacao: number[][] = [
  [0.5, 0.5, 0.0, 0.0], //1 Mentimeter: 50%, Meet: 50%, Jamboard: 0%, Google Slides: 0%
  [0.4, 0.4, 0.1, 0.1], //2 Mentimeter: 40%, Meet: 40%, Jamboard: 10%, Google Slides: 10%
  [0.0, 0.0, 0.0, 0.0], //3 Mentimeter: 0%, Meet: 0%, Jamboard: 0%, Google Slides: 0%
  [0.6, 0.3, 0.1, 0.0], //4 Mentimeter: 60%, Meet: 30%, Jamboard: 10%, Google Slides: 0%
  [0.461, 0.385, 0.077, 0.077], //5 Mentimeter: 46.1%, Meet: 38.5%, Jamboard: 7.7%, Google Slides: 7.7%
  [0.0, 1.0, 0.0, 0.0], //6 Mentimeter: 0%, Meet: 100%, Jamboard: 0%, Google Slides: 0%
  [0.8, 0.2, 0.0, 0.0], //7 Mentimeter: 80% Meet: 20%, Jamboard: 0%, Google Slides: 0%
  [0.5, 0.25, 0.0, 0.25], //8 Mentimeter: 50%, Meet: 25%, Jamboard: 0%, Google Slides: 25%
  [1.0, 0.0, 0.0, 0.0], //9 Mentimeter: 100%, Meet: 0%, Jamboard: 0%, Google Slides: 0%
  [0.8, 0.2, 0.0, 0.0], //10 Mentimeter: 80%, Meet: 20%, Jamboard: 0%, Google Slides: 0%
  [0.0, 0.0, 0.0, 0.0], //11 Mentimeter: 0%, Meet: 0%, Jamboard: 0%, Google Slides: 0%
  [0.0, 0.0, 0.0, 0.0], //12 Mentimeter: 0%, Meet: 0%, Jamboard: 0%, Google Slides: 0%
  [0.0, 0.0, 0.0, 0.0], //13 Mentimeter: 0%, Meet: 0%, Jamboard: 0%, Google Slides: 0%
  [1.0, 0.0, 0.0, 0.0], //14 Mentimeter: 100%, Meet: 0%, Jamboard: 0%, Google Slides: 0%
  [0.666, 0.333, 0.0, 0.0], //15 Mentimeter: 66.6%, Meet: 33.3%, Jamboard: 0%, Google Slides: 0%
  [0.4545, 0.3636, 0.0909, 0.0909], //16 Mentimeter: 66.6%, Meet: 36.36%, Jamboard: 9.09%, Google Slides: 9.09%

  [0.666, 0.0, 0.333, 0.0], //17 Mentimeter: 66.6%, Meet: 0%, Jamboard: 33.3%, Google Slides: 0%
  [0.333, 0.555, 0.111, 0.0], //18 Mentimeter: 33.3%, Meet: 55.5%, Jamboard: 11.1%, Google Slides: 0%
  [0.0, 0.0, 0.5, 0.5], //19 Mentimeter: 0%, Meet: 0%, Jamboard: 50%, Google Slides: 50%
  [0.0, 1.0, 0.0, 0.0], //20 Mentimeter: 0%, Meet: 100%, Jamboard: 0%, Google Slides: 0%
  [0.0, 1.0, 0.0, 0.0], //21 Mentimeter: 0%, Meet: 100%, Jamboard: 0%, Google Slides: 0%
  [0.333, 0.333, 0.0, 0.333], //22 Mentimeter: 33.3%, Meet: 33.3%, Jamboard: 0%, Google Slides: 33.3%
]; //no qual cada linha será um id de conceito e cada coluna um id de recurso
