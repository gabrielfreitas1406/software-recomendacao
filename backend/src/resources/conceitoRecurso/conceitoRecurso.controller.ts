import { Request, Response } from "express";
import { StatusCodes, ReasonPhrases } from "http-status-codes";
import {
  obterConceitoRecursoIdRecurso,
  obterConceitoRecursoPorIdCoceitoIdRecurso,
  obterConceitoRecursoPorIdConceito,
  obterTodosConceitosRecursos,
} from "./conceitoRecurso.service";

const obterTodos = async (req: Request, res: Response) => {
  try {
    const conceitoRecursos = await obterTodosConceitosRecursos();
    res.status(StatusCodes.OK).json(conceitoRecursos);
  } catch (erro) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(erro);
  }
};

const obterPorId = async (req: Request, res: Response) => {
  try {
    const { idConceito, idRecurso } = req.params;
    const conceitoRecurso = await obterConceitoRecursoPorIdCoceitoIdRecurso(
      Number(idConceito),
      Number(idRecurso)
    );
    res.status(StatusCodes.OK).json(conceitoRecurso);
  } catch (erro) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(erro);
  }
};

const obterPorIdRecurso = async (req: Request, res: Response) => {
  try {
    const { idRecurso } = req.params;
    const conceitoRecurso = await obterConceitoRecursoIdRecurso(
      Number(idRecurso)
    );
    res.status(StatusCodes.OK).json(conceitoRecurso);
  } catch (erro) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(erro);
  }
};

const obterPorIdConceito = async (req: Request, res: Response) => {
  try {
    const { idConceito } = req.params;
    const conceitoRecurso = await obterConceitoRecursoPorIdConceito(
      Number(idConceito)
    );
    console.log("Conceito recurso:", conceitoRecurso);
    res.status(StatusCodes.OK).json(conceitoRecurso);
  } catch (erro) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(erro);
  }
};

export default {
  obterTodos,
  obterPorId,
  obterPorIdRecurso,
  obterPorIdConceito,
};
