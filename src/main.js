import express from "express";

// importação das rotas
import sena from "./routes/sena.routes.js";
import home from "./routes/home.routes.js";
import notFound from "./routes/notFound.routes.js";

const app = express()
const port = 8081

// Uso das rotas
app.use('/sena', sena)
app.use('/', home)
app.use(notFound)

app.listen(port, () => {
    console.log(`Servidor rodando na porta: ${port}`)
})
