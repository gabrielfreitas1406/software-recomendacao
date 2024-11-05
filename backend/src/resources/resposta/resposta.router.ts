import { Router } from "express";

import respostaController from "./resposta.controller";

const router = Router();

router.get("/", respostaController.obterTodas);
router.get("/idConceito/:idConceito", respostaController.obterPorIdConceito);
router.get("/idQuestao/:idQuestao", respostaController.obterPorIdQuestao);

router.get("/:id", respostaController.obterPorId);

export default router;
