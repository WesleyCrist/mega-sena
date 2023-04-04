import express from 'express'

// importação de todas as rotas da aplicação
import home from './home.routes.js'
import notFound from './notFound.routes.js'
import sena from './sena.routes.js'

const cluster = express()

// Aglomerado de rotas
cluster.use('/sena', sena)
cluster.use('/', home)
cluster.use(notFound)

export default cluster