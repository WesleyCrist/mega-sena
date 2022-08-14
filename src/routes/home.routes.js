import Express from "express";
import msg from "../functions/msg.js";

const home = Express()

home.get('/', (req, res) => {
    res.json({
        mensagem: msg()
    })
})

export default home