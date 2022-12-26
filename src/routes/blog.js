const express = require("express");
const router = express.Router();
const {validateToken} = require("../tools/middlewares")

const blogEntries = [
    {
        id: 1,
        title: "How to get a girlfriend as a programmer"
    },
    {
        id: 2,
        title: "How to not lose your mind when talking to strangers"
    },
    {
        id: 3,
        title: "How to start a conversation"
    },
    {
        id: 4,
        title: "How to end a conversation"
    }
]

router.get("/entries", (req, res) => {
    res.send(blogEntries);
})

module.exports = router