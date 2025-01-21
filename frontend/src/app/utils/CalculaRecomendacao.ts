import {
  Conceito,
  matrizRecomendacaoFerramentas,
} from "../types/recommendationTypes";
//================================ FUNÇÃO PARA CALCULAR A RECOMENDAÇÃO ===========================

export const calculaRecomendacao = (
  porcentagemTotalFerramentas: number[],
  conceitos: Conceito[]
): number[] => {
  let porcentagemFinal = [0.0, 0.0, 0.0, 0.0];
  //console.log("Conceitos dentro do calculo:", conceitos);
  for (let i = 0; i < conceitos.length; i++) {
    const idConceito = conceitos[i].id;

    // Soma acumulativa em cada índice
    porcentagemFinal = porcentagemFinal.map(
      (value, index) =>
        value +
        porcentagemTotalFerramentas[index] +
        matrizRecomendacaoFerramentas[idConceito - 1][index]
    );
  }
  return porcentagemFinal;
};
