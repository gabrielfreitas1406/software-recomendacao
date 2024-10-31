import { Router } from "express";

import conceitoController from "./conceito.controller";

const router = Router();

router.get("/", conceitoController.obterTodos);
router.get("/:id", conceitoController.obterPorId);
router.get("/nome/:nome", conceitoController.obterPorNome);

export default router;
