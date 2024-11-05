import { Router } from "express";
import conceitoRouter from "../resources/conceito/conceito.router";
import ferramentaRouter from "../resources/ferramentas/ferramenta.router";
import recursoRouter from "../resources/recurso/recurso.router";
import conceitoRecursoRouter from "../resources/conceitoRecurso/conceitoRecurso.router";
import questaoRouter from "../resources/questao/questao.router";
import respostaRouter from "../resources/resposta/resposta.router";
const router = Router();

router.use("/conceito", conceitoRouter);
router.use("/ferramentas", ferramentaRouter);
router.use("/recurso", recursoRouter);
router.use("/conceitoRecurso", conceitoRecursoRouter);
router.use("/questao", questaoRouter);
router.use("/resposta", respostaRouter);

export default router;
