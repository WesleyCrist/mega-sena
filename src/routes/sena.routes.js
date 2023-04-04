import Express from "express";
import { mega } from "../functions/sena.js";

const sena = Express()

sena.get('/', (req, res) => res.status(200).send({
    Números: mega()
}))

export default sena
