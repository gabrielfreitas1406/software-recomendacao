import { Request, Response } from "express";
import { StatusCodes, ReasonPhrases } from "http-status-codes";
import { obterTodasQuestoes, obterQuestaoPorId } from "./questao.service";

const obterTodos = async (req: Request, res: Response) => {
  try {
    const questoes = await obterTodasQuestoes();
    res.status(StatusCodes.OK).json(questoes);
  } catch (erro) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(erro);
  }
};

const obterPorId = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const questao = await obterQuestaoPorId(Number(id));
    res.status(StatusCodes.OK).json(questao);
  } catch (erro) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(erro);
  }
};

export default { obterTodos, obterPorId };
