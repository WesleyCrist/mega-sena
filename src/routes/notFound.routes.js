import Express from "express";

const notFound = Express()

notFound.use((req, res) => {
    res.status(404).json({
        message:'rota não encontrada'
    })
})

export default notFound