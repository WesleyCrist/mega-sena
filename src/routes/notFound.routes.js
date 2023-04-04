import Express from "express";

const notFound = Express()

notFound.use((req, res) => res.status(404).send({
    message:'rota não encontrada'
}))

export default notFound