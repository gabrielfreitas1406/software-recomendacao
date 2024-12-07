"use client";

import * as React from "react";
import QuestionBox from "../questions/QuestionsBox";
import BackButton from "../buttons/BackButton";
import NextButton from "../buttons/NextButton";
import StartRecommendationButton from "../buttons/StartRecommendationButton";
import { useRouter } from "next/navigation";
import api from "@/app/sevices/api";

import { Questao, Resposta } from "@/app/types/QuestionTypes";
import {
  QuestaoRespostaSelecionada,
  Conceito,
  ConceitoRecurso,
  Recurso,
  Ferramenta,
  ContagemRecurso,
  ContagemFerramenta,
} from "@/app/types/recommendationTypes";
import { CardProps } from "@/app/types/cardTypes";

const verificaSeConceitoJaExisteNaRespostaDoUsuario = (
  conceitoAVerificar: Conceito,
  conceitos: Conceito[]
) => {
  return conceitos.some((conceito) => conceito.id === conceitoAVerificar.id);
};

const Card: React.FC<CardProps> = ({
  isInitCard,
  title,
  description,
  buttonLabel,
  imageTitle,
}) => {
  {
  }

  /*=============================================== Variáveis de Estado ===============================================*/
  const router = useRouter();

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

  //Para  verificar se o usuário terminou de responder todas as questões
  const [isFinished, setIsFinished] = React.useState(false);

  //Para contar os recursos para recomendar a ferramenta.
  const [contagemRecurso, setContagemRecurso] = React.useState<
    typeof ContagemRecurso
  >({
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
    8: 0,
    9: 0,
    10: 0,
    11: 0,
    12: 0,
    13: 0,
    14: 0,
    15: 0,
  });
  const [contagemFerramenta, setContagemFerramenta] = React.useState<
    typeof ContagemFerramenta
  >({ 1: 0, 2: 0, 3: 0, 4: 0 });

  const [limiar, setLimiar] = React.useState(3);

  const [idFerramentaSelecionada, setIdFerramentaSelecionada] = React.useState<
    number | null
  >(null);
  const [ferramentaSelecionada, setFerramentaSelecionada] =
    React.useState<Ferramenta | null>(null);

  /*============================================= Funções das requisições ======================================= */
  const fetchData = async (id: number) => {
    try {
      //Pega a requisição pelo axios
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

          //Verifica se o conceigto já foi inserido na lista de conceitos das respostas
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

  //muda para a página de resultado quando terminar de responder todas as oito questões
  React.useEffect(() => {
    if (idQuestaoAtual > 8) {
      setIsFinished(true);
      router.push("/recommendation/result");
    }
  }, [idQuestaoAtual, router]);

  //================================== CALCULA A RECOMENDAÇÃO SÓ NO FINAL ==================================
  //1 encontra os recursos que estão relacionados com os conceitos
  React.useEffect(() => {
    if (isFinished) {
      const fetchConceitosRecursos = async () => {
        for (const conceitoDaVez of conceitos) {
          try {
            const conceitoRecursosResponse = await api.get(
              `/conceitoRecurso/IDconceito/${conceitoDaVez.id}`
            );
            const conceitoRecursoArray =
              conceitoRecursosResponse.data as ConceitoRecurso[];

            conceitoRecursoArray.forEach(
              (conceitoRecursoIndividual: ConceitoRecurso) => {
                setConceitosRecursos((prevConceitosRecursos) => [
                  ...prevConceitosRecursos,
                  conceitoRecursoIndividual,
                ]);
              }
            );
          } catch (error) {
            console.error(
              `Erro ao buscar recursos para o conceito ${conceitoDaVez.id}:`,
              error
            );
          }
        }
      };

      fetchConceitosRecursos();
    }
  }, [isFinished, conceitos]);

  //2 Faz a contagem dos recursos
  React.useEffect(() => {
    const fetchContagemRecurso = async () => {
      try {
        // Cópia local de contagemRecurso para manipular os dados
        const contagemRecursoProvisoria = { ...contagemRecurso };
        //const novaContagemFerramenta: Record<string, number> = {};

        conceitosRecursos.forEach((conceitoRecurso) => {
          // Incrementa o contador para o idRecurso
          contagemRecursoProvisoria[conceitoRecurso.idRecurso] =
            (contagemRecursoProvisoria[conceitoRecurso.idRecurso] || 0) + 1;
        });
        // Atualiza o estado com a nova contagem
        setContagemRecurso(contagemRecursoProvisoria);
      } catch (error) {
        console.log("Erro ao fazer a contagem dos recursos: ", error);
      }
    };
    if (isFinished && conceitosRecursos.length > 0) {
      fetchContagemRecurso();
    }
  }, [isFinished, conceitosRecursos]);

  //3 Faz a contagem das ferramentas (PROBLEMA ⚠️)
  React.useEffect(() => {
    const fetchContagemFerramenta = async () => {
      try {
        //=========== Contagem das ferramentas que possuem mais recursos que o limiar ===========
        console.log("Entrou no fetch das ferramentas!");
        const contagemFerramentaProvisoria = {
          ...contagemFerramenta,
        };
        for (const [keyIdRecurso, contagem] of Object.entries(
          contagemRecurso
        )) {
          console.log(
            "Dentro do for para comparar com o limiar: ",
            contagem > limiar
          );
          if (contagem > limiar) {
            console.log("A contagem é maior que o limiar");
            //Pega o recurso
            const recursoResponse = await api.get(`/recurso/${keyIdRecurso}/`);
            const recurso = recursoResponse.data as Recurso;

            //Pega o id da ferramenta mencionada no recurso
            const idFerramentaNoRecurso = recurso.idFerramenta;

            contagemFerramentaProvisoria[idFerramentaNoRecurso] =
              (contagemFerramentaProvisoria[idFerramentaNoRecurso] || 0) + 1;
          }
        }
        console.log(
          "Contagem da ferramenta provisória: ",
          contagemFerramentaProvisoria
        );
        setContagemFerramenta(contagemFerramentaProvisoria);
      } catch (error) {
        console.log("Erro ao fazer a contagem da ferramenta: ", error);
      }
    };
    fetchContagemFerramenta();
  }, [contagemRecurso]);

  // 4 Seleciona a ferramenta com a maior contagem
  React.useEffect(() => {
    console.log("Vai atualizar a ferramenta ou não? ", contagemFerramenta);
    //pega a ferramenta cuja contagem for maior
    const fetchFerramenta = async () => {
      try {
        // Obtém a chave com o maior valor
        const chaveMaiorValor = Object.keys(contagemFerramenta).reduce(
          (chaveMaior, chaveAtual) => {
            return contagemFerramenta[Number(chaveAtual)] >
              contagemFerramenta[Number(chaveMaior)]
              ? chaveAtual
              : chaveMaior;
          }
        );
        //id da ferramenta com maior contagem
        console.log(
          "Chave com o maior valor (Ferramenta com maior contagem):",
          chaveMaiorValor
        );
      } catch (error) {
        console.log("Erro ao buscar a ferramenta: ", error);
      }
    };
    fetchFerramenta();
  }, [contagemFerramenta]);

  /* ============================================= Funções dos botões =============================================*/
  const handleNextQuestion = () => {
    if (idSelectedOption !== null) {
      setidQuestaoAtual((prevId) => prevId + 1);
      setIdSelectedOption(null); // Reinicia a seleção ao passar para a próxima questão
    }
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
  //console.log(questoes);
  //console.log(respostas);

  //console.log(questaoAtual);
  //console.log("Respostas Questão atual", respostasQuestaoAtual);
  console.log("ID da questão atual: ", idQuestaoAtual);
  //console.log("Respostas do usuário: ", respostasDoUsuario);
  //console.log("ID da resposta atual:", idSelectedOption); //tá dando como null
  //console.log("conceitos: ", conceitos);
  //console.log("ConceitosRecursos", conceitosRecursos);
  console.log("Contagem Recurso: ", contagemRecurso);
  console.log("Contagem Ferramenta GERAL: ", contagemFerramenta);
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
