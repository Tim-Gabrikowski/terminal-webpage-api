const express = require("express");
require("dotenv").config();
const app = express()
const cors = require("cors")

const authRouter = require("./routes/auth")
const blogRouter = require("./routes/blog")

app.use(cors());
app.use(express.json())

app.use("/auth", authRouter);
app.use("/blog", blogRouter);

app.get("/", (req, res) => {
    res.send({message: "ok"})
})

app.listen(process.env.SERVER_PORT, () => {
    console.log("app live on http://localhost:" + process.env.SERVER_PORT);
})