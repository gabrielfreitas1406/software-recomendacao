import { Request, Response } from "express";
import { StatusCodes, ReasonPhrases } from "http-status-codes";
import {
  obterTodasRespostas,
  obterRespostaPorId,
  obterRespostaPorIdConceito,
  obterRespostaPorIdQuestao,
} from "./resposta.service";

const obterTodas = async (req: Request, res: Response) => {
  try {
    const respostas = await obterTodasRespostas();
    res.status(StatusCodes.OK).json(respostas);
  } catch (erro) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(erro);
  }
};

const obterPorId = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const resposta = await obterRespostaPorId(Number(id));
    res.status(StatusCodes.OK).json(resposta);
  } catch (erro) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(erro);
  }
};

const obterPorIdConceito = async (req: Request, res: Response) => {
  try {
    const { idConceito } = req.params;
    const respostas = await obterRespostaPorIdConceito(Number(idConceito));
    res.status(StatusCodes.OK).json(respostas);
  } catch (erro) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(erro);
  }
};

const obterPorIdQuestao = async (req: Request, res: Response) => {
  try {
    const { idQuestao } = req.params;
    const respostas = await obterRespostaPorIdQuestao(Number(idQuestao));
    res.status(StatusCodes.OK).json(respostas);
  } catch (erro) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(erro);
  }
};

export default {
  obterTodas,
  obterPorId,
  obterPorIdConceito,
  obterPorIdQuestao,
};
