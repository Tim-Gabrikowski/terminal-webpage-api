const express = require("express");
const router = express.Router();
const {validateToken} = require("../tools/middlewares")

router.get("/", validateToken, (req, res) => {
    res.send({message: "ok"});
})

module.exports = router