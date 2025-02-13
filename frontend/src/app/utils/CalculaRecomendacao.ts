import {
  DictionaryNumber,
  Conceito,
  matrizRecomendacaoFerramentas,
  relacionamentoConceitoRecurso,
  contagemRecomendacaoRecursos,
} from "../types/recommendationTypes";
//================================ FUNÇÃO PARA CALCULAR A RECOMENDAÇÃO ===========================

export const calculaRecomendacao = (
  porcentagemTotalFerramentasVindaDoCard: number[],
  conceitos: Conceito[]
): [number[], DictionaryNumber<number>] => {
  let porcentagemFinalFerramentas = [0.0, 0.0, 0.0, 0.0];
  let contagemFinalRecomendacaoRecursos = contagemRecomendacaoRecursos;

  //Para cada conceito na lista de coneitos
  for (const conceito of conceitos) {
    const idConceito = conceito.id;

    // Soma acumulativa em cada índice
    porcentagemFinalFerramentas = porcentagemFinalFerramentas.map(
      (value, index) =>
        value +
        porcentagemTotalFerramentasVindaDoCard[index] +
        matrizRecomendacaoFerramentas[idConceito - 1][index]
    );
    //Posição no relacionamento de conceito recurso
    const posicaoNoConceitoRecurso = relacionamentoConceitoRecurso[idConceito]; //Retorna um vetor para percorrer e adicionar na contagem de recursos

    for (const valor of posicaoNoConceitoRecurso) {
      contagemFinalRecomendacaoRecursos[valor] += 1;
    }
  }

  return [porcentagemFinalFerramentas, contagemFinalRecomendacaoRecursos];
};
