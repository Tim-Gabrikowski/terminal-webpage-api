const express = require("express");
require("dotenv").config();
const app = express()
const cors = require("cors")

const authRouter = require("./routes/auth")

app.use(cors());

app.use("/auth", authRouter);

app.get("/", (req, res)=>{
    res.send({message: "ok"})
})

app.listen(3009, () => {
    console.log("app live on http://localhost:3009");
})