import express from "express";
import cluster from "./routes/cluster.js";

const app = express()
const port = 8081

// indicação de rotas da aplicação
app.use(cluster)

app.listen(port, () => console.log(`Server running on http://localhost:${port}`))
