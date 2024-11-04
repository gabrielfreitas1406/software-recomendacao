import { Router } from "express";

import conceitoRecursoController from "./conceitoRecurso.controller";

const router = Router();

router.get("/", conceitoRecursoController.obterTodos);
router.get(
  "/IDconceito/:idConceito",
  conceitoRecursoController.obterPorIdConceito
);
router.get(
  "/IDrecurso/:idRecurso",
  conceitoRecursoController.obterPorIdRecurso
);
router.get(
  "/:idConceito/:idRecurso",
  conceitoRecursoController.obterPorIdConceitoIdRecurso
);

export default router;
