"use client";
import * as React from "react";
import EngagementButton from "../../engagement/EngagementButton";
import { Conceito } from "@/app/types/recommendationTypes";
import api from "@/app/sevices/api";
import { calculaRecomendacao } from "@/app/utils/CalculaRecomendacao";
import NextButton from "../../buttons/NextButton";
import { useRouter } from "next/navigation";
import { Ferramenta, Recurso } from "@/app/types/recommendationTypes";
import { useResultRecommendationContext } from "@/app/hooks/contexts/resultRecommendationContext";

export const CardWords: React.FC = () => {
  /*=============================================== Variáveis de Estado ===============================================*/
  const router = useRouter();

  //uso do contexto para pegar a ferramenta que foi o resultado da recomendação e seus recursos
  const {
    ferramentaContext,
    setFerramentaContext,
    recursosContext,
    setRecursosContext,
  } = useResultRecommendationContext();

  const [conceitos, setConceitos] = React.useState<Conceito[] | []>([]);
  const [selectedConceitos, setSelectedConceitos] = React.useState<Conceito[]>(
    []
  );

  //Para verificar o somatório da porcentagem de cada ferramenta
  const [porcentagemFinalFerramentas, setPorcentagemFinalFerramentas] =
    React.useState<number[]>([0.0, 0.0, 0.0, 0.0]); //Primeiro valor é a porcentagem do Mentimeter, segundo do Meet, terceiro do Jamboard e quarto do Google Slides

  const [ferramentaFinal, setFerramentaFinal] =
    React.useState<Ferramenta | null>(null);

  const [recursosDaFerramentaFinal, setRecursosDaFerramentaFinal] =
    React.useState<Recurso[] | []>([]);

  const [finishedRecomendation, setFinishedRecomendation] =
    React.useState<boolean>(false);

  /*============================================= Funções das requisições ======================================= */
  //Fetcch inicial para carregar os conceitos na tela
  React.useEffect(() => {
    const fetchConceitos = async () => {
      const responseConceitos = await api.get("/conceito/");
      const conceitosRetornados = responseConceitos.data as Conceito[];
      setConceitos(conceitosRetornados);
    };
    fetchConceitos();
  }, []);

  //Fetch para setar a ferramenta com a maior porcentagem
  React.useEffect(() => {
    const fetchFerramentaFinal = async () => {
      try {
        // Encontrar o maior valor
        const maxValue = Math.max(...porcentagemFinalFerramentas);
        // Encontrar o índice do maior valor
        const maxIndex = porcentagemFinalFerramentas.indexOf(maxValue) + 1;
        console.log(`Maior valor: ${maxValue}, Posição: ${maxIndex}`);
        const ferramentaResponse = await api.get(`/ferramenta/${maxIndex}`);
        const ferramentaData = ferramentaResponse.data as Ferramenta;
        setFerramentaFinal(ferramentaData);
      } catch (error) {
        console.log("Erro ao buscar ferramenta:", error);
      }
    };
    fetchFerramentaFinal();
  }, [porcentagemFinalFerramentas]);

  //Fetch final para redirecionar para a tela de resultados
  /*React.useEffect(() => {
    if (finishedRecomendation) {
      setFerramentaContext(ferramentaFinal);
      setRecursosContext(recursosDaFerramentaFinal);
      router.push("/recommendation/result");
    }
  }, [finishedRecomendation]);*/

  const handleEngagementClick = (conceitoSelecionado: Conceito) => {
    setSelectedConceitos((prev) =>
      prev.includes(conceitoSelecionado)
        ? prev.filter((item) => item !== conceitoSelecionado)
        : [...prev, conceitoSelecionado]
    );
  };

  const handleFinalize = () => {
    console.log("======== APERTOU =======");
    console.log("conceitos selecionados:", selectedConceitos);
    setPorcentagemFinalFerramentas(
      calculaRecomendacao(porcentagemFinalFerramentas, selectedConceitos)
    );
    console.log(
      "Porcentagem final das ferramentas: DENTRO",
      porcentagemFinalFerramentas
    );
    setFinishedRecomendation(true);
    // Aqui você pode adicionar lógica para enviar os dados selecionados para um endpoint ou realizar outra ação.
  };

  console.log(
    "Porcentagem final das ferramentas FORA: ",
    porcentagemFinalFerramentas
  );
  if (finishedRecomendation) {
    console.log("Ferramenta final: ", ferramentaFinal);
  }

  return (
    <main className="word-recommendations-content">
      <section className="word-recommendations-section">
        <h2 className="section-title">ENGAJAMENTO</h2>
        <p className="section-description">
          Selecione os tipos de engajamento desejado
        </p>

        <div className="word-recommendations-grid">
          {conceitos.map((conceito) => (
            <EngagementButton
              key={conceito.id}
              text={conceito.nome}
              isSelected={selectedConceitos.includes(conceito)}
              onClick={() => handleEngagementClick(conceito)}
            />
          ))}
        </div>
      </section>
      <div className="finalize-button-container">
        <NextButton
          onClick={handleFinalize}
          disabled={selectedConceitos.length === 0}
        />
      </div>
    </main>
  );
};
