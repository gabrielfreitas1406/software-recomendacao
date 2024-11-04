import { Router } from "express";

import questaoController from "./questao.controller";

const router = Router();

router.get("/", questaoController.obterTodos);
router.get("/:id", questaoController.obterPorId);

export default router;
