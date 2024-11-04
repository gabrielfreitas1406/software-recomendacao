import { Router } from "express";

import recursoController from "./recurso.controller";

const router = Router();

router.get("/", recursoController.obterTodos);
router.get("/:id", recursoController.obterPorId);
router.get("/nome/:nome", recursoController.obterPorNome);
router.get("/ferramenta/:idFerramenta", recursoController.obterPorIdFerramenta);

export default router;
