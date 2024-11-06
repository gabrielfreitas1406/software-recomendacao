export interface Questao {
  id: number;
  enunciado: string;
}

export interface Resposta {
  id: number;
  conteudo: string;
  idConceito: number;
  idQuestao: number;
}
