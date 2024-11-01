import { Router } from "express";

import conceitoRecursoController from "./conceitoRecurso.controller";

const router = Router();

router.get("/", conceitoRecursoController.obterTodos);
router.get("/:idConceito/:idRecurso", conceitoRecursoController.obterPorId);
router.get(
  "/idRecurso/:idRecurso",
  conceitoRecursoController.obterPorIdRecurso
);
router.get(
  "/idConceito/:idConceito",
  conceitoRecursoController.obterPorIdConceito
);

export default router;
