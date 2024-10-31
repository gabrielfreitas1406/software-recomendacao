import { Request, Response } from "express";
import { StatusCodes, ReasonPhrases } from "http-status-codes";
import {
  obterFerramentaPorId,
  obterFerramentaPorNome,
  obterTodasFerramentas,
} from "./ferramentas.service";

const obterTodas = async (req: Request, res: Response) => {
  try {
    const ferramentas = await obterTodasFerramentas();
    res.status(StatusCodes.OK).json(ferramentas);
  } catch (erro) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(erro);
  }
};

const obterPorId = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const ferramenta = await obterFerramentaPorId(Number(id));
    res.status(StatusCodes.OK).json(ferramenta);
  } catch (erro) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(erro);
  }
};

const obterPorNome = async (req: Request, res: Response) => {
  try {
    const { nome } = req.params;
    const ferramenta = await obterFerramentaPorNome(nome);
    res.status(StatusCodes.OK).json(ferramenta);
  } catch (erro) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(erro);
  }
};

export default { obterTodas, obterPorId, obterPorNome };
