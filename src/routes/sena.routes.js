import Express from "express";
import megasena from "../functions/sena.js";

const sena = Express()
// home.use(Express.json)

sena.get('/', (req, res) => {
    try {
        res.json({
            Números: megasena()
        })
    } catch(e) {
        res.json({
            message: 'Erro na geração de número, faça uma nova requisição',
            erro: e
        })
    }
})

export default sena