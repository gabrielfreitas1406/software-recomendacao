"use client";

import * as React from "react";
import QuestionBox from "../questions/QuestionsBox";
import BackButton from "../buttons/BackButton";
import NextButton from "../buttons/NextButton";
import StartRecommendationButton from "../buttons/StartRecommendationButton";
import api from "@/app/sevices/api";

import { Questao, Resposta } from "@/app/types/QuestionTypes";
import { QuestaoRespostaSelecionada } from "@/app/types/recommendationTypes";
interface CardProps {
  isInitCard: Boolean;
  title?: string;
  description?: string;
  buttonLabel?: string;
  imageTitle?: string;
}

const Card: React.FC<CardProps> = ({
  isInitCard,
  title,
  description,
  buttonLabel,
  imageTitle,
}) => {
  {
  }

  //const [questoes, setQuestoes] = React.useState<Questao[] | []>([]);
  //const [respostas, setRespostas] = React.useState<Resposta[] | []>([]);

  const [idQuestaoAtual, setidQuestaoAtual] = React.useState<number>(1);
  const [questaoAtual, setQuestaoAtual] = React.useState<Questao | null>(null);
  const [respostasQuestaoAtual, setRespostasQuestaoAtual] = React.useState<
    Resposta[] | []
  >([]);

  const [respostaDoUsuario, setRespostaDoUsuario] = React.useState<
    QuestaoRespostaSelecionada[] | []
  >([]);

  const fetchData = async (id: number) => {
    try {
      const questaoAtualResponse = await api.get(`/questao/${id}`);
      const respostaQuestaoAtualResponse = await api.get(
        `/resposta/idQuestao/${id}`
      );

      const questaoAtualData = questaoAtualResponse.data as Questao;
      const respostaQuestaoAtualData =
        respostaQuestaoAtualResponse.data as Resposta[];

      setQuestaoAtual(questaoAtualData);
      setRespostasQuestaoAtual(respostaQuestaoAtualData);
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    fetchData(idQuestaoAtual);
  }, [idQuestaoAtual]);

  const handleNextQuestion = () => {
    setidQuestaoAtual((prevId) => prevId + 1);
  };

  const handlePreviousQuestion = () => {
    setidQuestaoAtual((prevId) => Math.max(1, prevId - 1)); // Evita voltar para ID menor que 1
  };

  //console.log(questoes);
  //console.log(respostas);

  console.log(questaoAtual);
  console.log(respostasQuestaoAtual);
  console.log(idQuestaoAtual);

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
    return (
      <>
        <div className="card-questions">
          <h1 className="quiz-title">{questaoAtual?.enunciado}</h1>
          <QuestionBox respostas={respostasQuestaoAtual} />

          <img
            style={{ marginTop: "40px" }}
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/9eedec58608ae459b4f7f13c08439da952cb567d021ccfefb2762918b9dbdfc6?placeholderIfAbsent=true&apiKey=83976f5dcdaa41408687cac3bc676028"
            alt="Quiz illustration"
            className="quiz-image"
            loading="lazy"
          />
          <nav className="navigation-questions">
            <BackButton onClick={handlePreviousQuestion} />
            <NextButton onClick={handleNextQuestion} />
          </nav>
        </div>
      </>
    );
  }
};

export default Card;
