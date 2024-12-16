import { Conceito, matrizRecomendacao } from "../types/recommendationTypes";
//================================ FUNÇÃO PARA CALCULAR A RECOMENDAÇÃO ===========================

export const calculaRecomendacao = (
  porcentagemTotalFerramentas: number[],
  conceitos: Conceito[]
): number[] => {
  let porcentagemFinal = [0.0, 0.0, 0.0, 0.0];
  for (let i = 0; i < conceitos.length; i++) {
    const idConceito = conceitos[i].id;

    // Soma acumulativa em cada índice
    porcentagemFinal = porcentagemFinal.map(
      (value, index) =>
        value +
        porcentagemTotalFerramentas[index] +
        matrizRecomendacao[idConceito - 1][index]
    );
  }
  return porcentagemFinal;
};
