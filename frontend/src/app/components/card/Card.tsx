"use client";

import * as React from "react";
import QuestionBox from "../questions/QuestionsBox";
import BackButton from "../buttons/BackButton";
import NextButton from "../buttons/NextButton";
import StartRecommendationButton from "../buttons/StartRecommendationButton";
import { useRouter } from "next/navigation";
import api from "@/app/sevices/api";
import { FavoriteToolButton } from "./FavoriteTool/FavoriteToolButton";
import { calculaRecomendacao } from "@/app/utils/CalculaRecomendacao";
import { Questao, Resposta } from "@/app/types/QuestionTypes";
import {
  QuestaoRespostaSelecionada,
  Conceito,
  ConceitoRecurso,
  Recurso,
  Ferramenta,
} from "@/app/types/recommendationTypes";
import { CardProps } from "@/app/types/cardTypes";
import { useResultRecommendationContext } from "@/app/hooks/contexts/resultRecommendationContext";
import { ListRecursos } from "./ListRecursos/ListRecursos";
import { imagensFerramentasDicionario } from "@/app/types/resultRecommenTypes";

const verificaSeConceitoJaExisteNaRespostaDoUsuario = (
  conceitoAVerificar: Conceito,
  conceitos: Conceito[]
) => {
  return conceitos.some((conceito) => conceito.id === conceitoAVerificar.id);
};

const Card: React.FC<CardProps> = ({
  isInitCard,
  isResultCard,
  title,
  description,
  buttonLabel,
  imageTitle,
  isCardWord,
}) => {
  {
  }

  /*=============================================== Variáveis de Estado ===============================================*/
  const router = useRouter();

  //uso do contexto para pegar a ferramenta que foi o resultado da recomendação e seus recursos
  const {
    ferramentaContext,
    setFerramentaContext,
    recursosContext,
    setRecursosContext,
  } = useResultRecommendationContext();

  //Para gerenciar as questões
  const [idQuestaoAtual, setidQuestaoAtual] = React.useState<number>(1);
  const [questaoAtual, setQuestaoAtual] = React.useState<Questao | null>(null);
  const [respostasQuestaoAtual, setRespostasQuestaoAtual] = React.useState<
    Resposta[] | []
  >([]);
  const [idSelectedOption, setIdSelectedOption] = React.useState<number | null>(
    null
  ); // para verificar se o usuário respondeu a questão

  //Conceitos, Recursos
  const [conceitos, setConceitos] = React.useState<Conceito[] | []>([]);

  const [conceitosRecursos, setConceitosRecursos] = React.useState<
    ConceitoRecurso[] | []
  >([]);
  const [recursos, setRecursos] = React.useState<Recurso[] | []>([]);

  //Todas as respostas do usuário
  const [respostasDoUsuario, setRespostaDoUsuario] =
    React.useState<typeof QuestaoRespostaSelecionada>();

  //Para  verificar se o usuário terminou de responder todas as questões para começar a calcular a recomendação
  const [startRecomendation, setStartRecomendation] = React.useState(false);
  const [finishedRecomendation, setFinishedRecomendation] =
    React.useState(false);

  //Para verificar o somatório da porcentagem de cada ferramenta
  const [porcentagemFinalFerramentas, setPorcentagemFinalFerramentas] =
    React.useState<number[]>([0.0, 0.0, 0.0, 0.0]); //Primeiro valor é a porcentagem do Mentimeter, segundo do Meet, terceiro do Jamboard e quarto do Google Slides

  const [listaFerramentasFinais, setListaFerramentasFinais] = React.useState<
    Ferramenta[]
  >([]);

  const [recursosDaFerramentaFinal, setRecursosDaFerramentaFinal] =
    React.useState<Recurso[][] | [][]>([]);

  const [listaDeContagemRecursos, setListaContagemRecursos] = React.useState<
    Record<number, number>
  >({});

  /*============================================= Funções das requisições ======================================= */
  const fetchData = async (id: number) => {
    try {
      //Pega a requisição da questão atual pelo axios
      const questaoAtualResponse = await api.get(`/questao/${id}`);
      const respostaQuestaoAtualResponse = await api.get(
        `/resposta/idQuestao/${id}`
      );

      //Converte o dado das requisições em tipos do sistema
      const questaoAtualData = questaoAtualResponse.data as Questao;
      const respostaQuestaoAtualData =
        respostaQuestaoAtualResponse.data as Resposta[];

      //Pega os conceitos das respostas
      for (let key in respostasDoUsuario) {
        const keyNumber = Number(key);
        const respostaQuestao = respostasDoUsuario[keyNumber];

        //Só pega o conceito se ele não for nulo
        if (respostaQuestao.idConceito !== null) {
          const conceito = await api.get(
            `/conceito/${respostaQuestao.idConceito}`
          );

          //Verifica se o conceito já foi inserido na lista de conceitos das respostas
          if (
            !verificaSeConceitoJaExisteNaRespostaDoUsuario(
              conceito.data,
              conceitos
            )
          ) {
            setConceitos((prevConceitos) => {
              //salva os conceitos na variável de estado dos conceitos.
              const newConceitos = [...prevConceitos];
              newConceitos.push(conceito.data);
              return newConceitos;
            });
          }
        }
      }

      //atribui as veriáveis de estado
      setQuestaoAtual(questaoAtualData);
      setRespostasQuestaoAtual(respostaQuestaoAtualData);
    } catch (error) {
      console.log(error);
    }
  };

  /* ============================================= UseEffects =============================================*/
  //Feito a cada interação com as questões.
  React.useEffect(() => {
    fetchData(idQuestaoAtual);
  }, [idQuestaoAtual]);

  //muda para a página de resultado quando terminar de responder todas as oito questões e inicia a recomendação
  React.useEffect(() => {
    if (idQuestaoAtual > 8) {
      setStartRecomendation(true);
      //router.push("/recommendation/result");
    }
  }, [idQuestaoAtual, router]);

  //Calcula a recomendação (ALTERAR PARA INCLUIR OS RECURSOS MAIS PROXIMOS DO RESULTADO DA RECOMENDAÇÃO DE CADA FERRAMENTA)
  React.useEffect(() => {
    const resultadoRecomendacao = calculaRecomendacao(
      porcentagemFinalFerramentas,
      conceitos
    );

    setPorcentagemFinalFerramentas(resultadoRecomendacao[0]);
    setListaContagemRecursos(resultadoRecomendacao[1]);
  }, [startRecomendation]);

  //Seta todas as ferramentas, na ordem da com maior probabilidade até a menor para o resultado da recomendação
  React.useEffect(() => {
    const fetchData = async () => {
      if (startRecomendation) {
        try {
          //Filtra a ordenação das ferramentas com maior probabilidade
          const indiceFerramentasAux = porcentagemFinalFerramentas
            .map((value, index) => ({ value, index }))
            .sort((a, b) => b.value - a.value)
            .map((item) => item.index);
          //Incrementa mais 1 para pegar as chaves para o banco de dados
          const indicesFerramentasOrdenadas = indiceFerramentasAux.map(
            (value) => value + 1
          );

          console.log(
            "///////////////////INDICES FERRAMENTAS ORDENADAS: ",
            indicesFerramentasOrdenadas
          );

          let ferramentasOrdenadas: Ferramenta[] = [];

          for (const indice of indicesFerramentasOrdenadas) {
            const ferramentaResponse = await api.get(`/ferramenta/${indice}`);
            ferramentasOrdenadas.push(ferramentaResponse.data as Ferramenta);
          }
          setListaFerramentasFinais(ferramentasOrdenadas);
        } catch (error) {
          console.error("Erro ao buscar ferramenta:", error);
        }
      }
    };

    fetchData();
  }, [porcentagemFinalFerramentas]);

  //Seta os recursos da Ferramenta final
  React.useEffect(() => {
    const fetchData = async () => {
      if (startRecomendation) {
        try {
          let recusosDeCadaFerramentaAux: Recurso[][] = [];

          for (const ferramenta of listaFerramentasFinais) {
            const recursosDaFerramentaResponse = await api.get(
              `/recurso/ferramenta/${ferramenta.id}`
            );
            recusosDeCadaFerramentaAux.push(
              recursosDaFerramentaResponse.data as Recurso[]
            ); //está inserindo cada lista de recursos de cada ferramenta na ordem da ferramenta final (resultado da recomendação)
          }

          setRecursosDaFerramentaFinal(recusosDeCadaFerramentaAux);
          setFinishedRecomendation(true);
        } catch (error) {
          console.error("Erro ao buscar ferramenta:", error);
        }
      }
    };
    fetchData();
  }, [listaFerramentasFinais]);

  //Após setar todos os dados da recomendação, atualiza o context para ir passar para a página de resultado da recomendação
  React.useEffect(() => {
    if (finishedRecomendation && !isCardWord) {
      setFerramentaContext(listaFerramentasFinais);
      setRecursosContext(recursosDaFerramentaFinal);
      router.push("/recommendation/result");
    }
  }, [finishedRecomendation]);

  /* ============================================= Funções dos botões =============================================*/
  const handleNextQuestion = () => {
    if (idSelectedOption !== null) {
      setidQuestaoAtual((prevId) => prevId + 1);
      setIdSelectedOption(null); // Reinicia a seleção ao passar para a próxima questão
    }
  };

  const handleFavoriteClick = () => {
    // Favorite functionality implementation
  };

  const handleSetRespostaDoUsuario = (
    idResposta: number,
    alternativa: string,
    idConceito: number,
    idSelectedOption: number
  ) => {
    setRespostaDoUsuario((prevState) => ({
      ...prevState,
      [idQuestaoAtual]: { idResposta, alternativa, idConceito },
    }));
    setIdSelectedOption(idSelectedOption);
  };

  const handlePreviousQuestion = () => {
    setidQuestaoAtual((prevId) => Math.max(1, prevId - 1)); // Evita voltar para ID menor que 1
  };

  /* ============================================= Debug ============================================= */
  console.log("ID da questão atual: ", idQuestaoAtual);
  //console.log("Respostas do usuário: ", respostasDoUsuario);
  //console.log("ID da resposta atual:", idSelectedOption); //tá dando como null
  //console.log("conceitos: ", conceitos);
  //console.log("matriz de recomendação:", matrizRecomendacao);
  //console.log("ConceitosRecursos", conceitosRecursos);
  //console.log("Contagem Recurso GERAL: ", contagemRecurso);
  if (startRecomendation) {
    console.log("Contagem Final das ferramentas:", porcentagemFinalFerramentas);
  }

  console.log("Ferramenta final", listaFerramentasFinais);
  console.log("Recursos da ferramenta final", recursosDaFerramentaFinal);
  //console.log("Contagem Ferramenta GERAL: ", contagemFerramenta);
  //console.log("Ferramenta Selecionada ID FINAL:", idFerramentaSelecionada);

  //============================= Tela para começar a recomendação =============================
  if (isInitCard) {
    const isNextButton = buttonLabel === "Próxima";
    return (
      <div className="card-categories-about">
        <div className="content-wrapper-categories-card">
          <div className="content-left-categories-card">
            <h1 className="title-card">{title}</h1>
            <p className="description-card">{description}</p>
          </div>

          <div className="content-right-categories-card">
            <h2 className="title-card">{imageTitle}</h2>
            <StartRecommendationButton />
          </div>
        </div>
      </div>
    );
  } else if (isResultCard) {
    /* ================== Vai exibir o resultado da recomendação ============ */

    console.log("CONTEXO DA FERRAMENTA: ", ferramentaContext);
    console.log("CONTEXTO DOS RECURSOS: ", recursosContext);

    console.log("Resultado dos recursos:  ", listaDeContagemRecursos);

    return (
      <>
        <main className="card-questions">
          {ferramentaContext?.map((ferramenta, indexFerramenta) => (
            <div className="product-info" key={indexFerramenta}>
              {ferramenta && (
                <div className="tools-section">
                  <img
                    loading="lazy"
                    src={imagensFerramentasDicionario[ferramenta.nome].logo}
                    alt="Tools illustration"
                    className="tools-image"
                  />
                </div>
              )}

              <div className="product-header">
                <h1 className="product-title">{ferramenta.nome}</h1>
                <FavoriteToolButton onClick={handleFavoriteClick} />
              </div>

              <p className="product-description">{ferramenta.descricao}</p>

              <div className="features-section">
                <h2 className="features-title">Ferramentas</h2>
                <ul className="features-list">
                  {/*recursosContext?.map((listaRecurso, listaRecursoIndex) =>
                    listaRecurso?.map((recurso, recursoIndex) => (
                      <ListRecursos
                        key={`${listaRecursoIndex}-${recursoIndex}`}
                        text={recurso.descricao}
                      />
                    ))
                  )*/}
                  {/* Procura pelos recursos da ferramenta que está sendo renderizada */}
                  {recursosContext
                    .find(
                      (_, indexListaRecurso) =>
                        indexListaRecurso === indexFerramenta
                    )
                    ?.map((recurso, indexRecurso) => (
                      <ListRecursos key={indexRecurso} text={recurso.nome} />
                    ))}
                </ul>

                {ferramenta && (
                  <img
                    loading="lazy"
                    src={imagensFerramentasDicionario[ferramenta.nome].print}
                    alt="Product screenshot"
                    className="product-image"
                  />
                )}

                <div
                  className="link-ferramenta-button"
                  role="button"
                  tabIndex={0}
                >
                  {"Acesse o site" /*+ ferramentaContext?.link*/}
                </div>
              </div>
            </div>
          ))}
        </main>
      </>
    );
  } else {
    //============================= Tela para responder as perguntas ========================================
    return (
      <>
        <div className="card-questions">
          <h1 className="quiz-title">{questaoAtual?.enunciado}</h1>
          <QuestionBox
            respostas={respostasQuestaoAtual}
            idSelectedOption={idSelectedOption}
            onRespostaSelect={handleSetRespostaDoUsuario}
          />

          <img
            style={{ marginTop: "40px" }}
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/9eedec58608ae459b4f7f13c08439da952cb567d021ccfefb2762918b9dbdfc6?placeholderIfAbsent=true&apiKey=83976f5dcdaa41408687cac3bc676028"
            alt="Quiz illustration"
            className="quiz-image"
            loading="lazy"
          />
          <nav className="navigation-questions">
            <BackButton onClick={handlePreviousQuestion} />
            <NextButton
              onClick={handleNextQuestion}
              disabled={idSelectedOption === null}
              idQuestaoAtual={idQuestaoAtual}
            />
          </nav>
        </div>
      </>
    );
  }
};

export default Card;
