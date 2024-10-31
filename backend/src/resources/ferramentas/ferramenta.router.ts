import { Router } from "express";

import ferramentasController from "./ferramentas.controller";

const router = Router();

router.get("/", ferramentasController.obterTodas);
router.get("/:id", ferramentasController.obterPorId);
router.get("/nome/:nome", ferramentasController.obterPorNome);

export default router;
