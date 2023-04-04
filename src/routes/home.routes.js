import Express from "express";
import msg from "../functions/msg.js";

const home = Express()

home.get('/', (req, res) => res.status(200).send({
    status: 200,
    msg: msg()
}))

export default home