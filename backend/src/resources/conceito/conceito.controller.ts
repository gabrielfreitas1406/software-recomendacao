import { Request, Response } from "express";
import { StatusCodes, ReasonPhrases } from "http-status-codes";
import {
  obterConceitoPorId,
  obterConceitoPorNome,
  obterTodosConceitos,
} from "./conceito.service";

const obterTodos = async (req: Request, res: Response) => {
  try {
    const conceitos = await obterTodosConceitos();
    res.status(StatusCodes.OK).json(conceitos);
  } catch (erro) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(erro);
  }
};

const obterPorId = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const conceito = await obterConceitoPorId(Number(id));
    res.status(StatusCodes.OK).json(conceito);
  } catch (erro) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(erro);
  }
};

const obterPorNome = async (req: Request, res: Response) => {
  try {
    const { nome } = req.params;
    const conceito = await obterConceitoPorNome(nome);
    res.status(StatusCodes.OK).json(conceito);
  } catch (erro) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(erro);
  }
};

export default { obterTodos, obterPorId, obterPorNome };
