import { Request, Response } from "express";
import { StatusCodes, ReasonPhrases } from "http-status-codes";
import {
  obterRecursoPorId,
  obterRecursoPorIdFerramenta,
  obterRecursoPorNome,
  obterTodosRecursos,
} from "./recurso.service";

const obterTodos = async (req: Request, res: Response) => {
  try {
    const recursos = await obterTodosRecursos();
    res.status(StatusCodes.OK).json(recursos);
  } catch (erro) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(erro);
  }
};

const obterPorId = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const recurso = await obterRecursoPorId(Number(id));
    res.status(StatusCodes.OK).json(recurso);
  } catch (erro) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(erro);
  }
};

const obterPorNome = async (req: Request, res: Response) => {
  try {
    const { nome } = req.params;
    const recurso = await obterRecursoPorNome(nome);
    res.status(StatusCodes.OK).json(recurso);
  } catch (erro) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(erro);
  }
};

const obterPorIdFerramenta = async (req: Request, res: Response) => {
  try {
    const { idFerramenta } = req.params;
    const recursos = await obterRecursoPorIdFerramenta(Number(idFerramenta));
    res.status(StatusCodes.OK).json(recursos);
  } catch (erro) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(erro);
  }
};

export default { obterTodos, obterPorId, obterPorNome, obterPorIdFerramenta };
