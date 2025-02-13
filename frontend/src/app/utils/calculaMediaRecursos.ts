import { DictionaryNumber } from "../types/recommendationTypes";

export const calcularMediaRecomendacaoRecursos = (
  dicionario: DictionaryNumber<Number>
) => {
  const valores = Object.values(dicionario); // Obtém os valores do dicionário
  if (valores.length === 0) {
    throw new Error("O dicionário está vazio.");
  }

  const soma = valores.reduce((acc, valor) => acc + valor, 0); // Soma os valores
  return soma / valores.length; // Calcula a média
};
