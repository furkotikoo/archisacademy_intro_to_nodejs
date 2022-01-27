const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ "extended": true }))

app.get("/", (req, res) => {
    res.send("Api is working fine")
    const { firstname, lastname } = req.query;
    console.log(firstname, lastname)
});

app.post("/", (req, res) => {
    const { firstname, lastname } = req.body;
    console.log(firstname, lastname)
    res.send(`The user is ${firstname} ${lastname}`)
});

const PORT = 5000;
app.listen(PORT);