import { Router } from "express";
import conceitoRouter from "../resources/conceito/conceito.router";
import ferramentaRouter from "../resources/ferramentas/ferramenta.router";
import recursoRouter from "../resources/recurso/recurso.router";

const router = Router();

router.use("/conceito", conceitoRouter);
router.use("/ferramentas", ferramentaRouter);
router.use("/recurso", recursoRouter);

export default router;
