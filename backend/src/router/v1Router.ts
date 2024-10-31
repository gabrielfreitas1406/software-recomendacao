import { Router } from "express";
import conceitoRouter from "../resources/conceito/conceito.router";
import ferramentaRouter from "../resources/ferramentas/ferramenta.router";

const router = Router();

router.use("/conceito", conceitoRouter);
router.use("/ferramentas", ferramentaRouter);

export default router;
